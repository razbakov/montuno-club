<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
  layout: false,
})

useSeoMeta({
  title: () => t('join.seo.title'),
  robots: 'noindex',
})

interface ClassInfo {
  key: string
  time: string
  wedanceUrl: string
}

const classes: ClassInfo[] = [
  {
    key: 'taster',
    time: '18:00',
    wedanceUrl:
      'https://wedance.vip/events/yZBzg4uX4aAgEW0ltrjI?utm_source=kiosk&utm_medium=ipad',
  },
  {
    key: 'beginner',
    time: '19:00',
    wedanceUrl:
      'https://wedance.vip/events/PLGFjfZG0Lra4ccM7LdE?utm_source=kiosk&utm_medium=ipad',
  },
  {
    key: 'intermediate',
    time: '20:00',
    wedanceUrl:
      'https://wedance.vip/events/3SCGluX6xdhegMUGo7jc?utm_source=kiosk&utm_medium=ipad',
  },
]

const now = ref(new Date())
let interval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  interval = setInterval(() => {
    now.value = new Date()
  }, 60_000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})

const currentClass = computed<ClassInfo>(() => {
  const h = now.value.getHours()
  const m = now.value.getMinutes()
  const minutes = h * 60 + m

  // 17:30–18:44 → taster (6 PM)
  // 18:45–19:44 → beginner (7 PM)
  // 19:45+       → intermediate (8 PM)
  // before 17:30 → taster (default for early setup)
  if (minutes < 18 * 60 + 45) return classes[0]
  if (minutes < 19 * 60 + 45) return classes[1]
  return classes[2]
})

const checkInUrl = computed(() => currentClass.value.wedanceUrl)
const discoverUrl = 'https://montuno.club'
</script>

<template>
  <div
    class="kiosk-page relative min-h-screen overflow-hidden bg-wine-950 text-white"
  >
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,195,79,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(111,24,46,0.45),_transparent_40%)]" />
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" />

    <div
      class="relative mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center px-6 py-8 sm:px-10 sm:py-10"
    >
      <div
        class="mx-auto inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-wine-100/80 backdrop-blur"
      >
        <img
          src="/favicon-icon.png"
          alt="Montuno Club"
          class="h-9 w-9 rounded-full ring-1 ring-gold-400/30"
        />
        <span class="font-medium tracking-[0.2em] uppercase">Montuno Club</span>
      </div>

      <div class="mt-6 text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.38em] text-gold-300/85">
          {{ $t('join.eyebrow') }}
        </p>
        <h1 class="mt-4 font-display text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
          {{ $t('join.title1') }}
          <span class="block text-gold-400">{{ $t('join.title2') }}</span>
        </h1>
        <p class="mx-auto mt-4 max-w-2xl text-base text-wine-100/80 sm:text-lg">
          {{ $t('join.subtitle') }}
        </p>
      </div>

      <div class="mt-6 flex flex-wrap justify-center gap-3 text-sm text-wine-100/90">
        <div class="rounded-full border border-gold-400/25 bg-gold-400/10 px-4 py-2">
          {{ $t('join.tonight') }}: {{ $t(`join.classes.${currentClass.key}`) }}
          &middot; {{ currentClass.time }}
        </div>
        <div class="rounded-full border border-white/10 bg-white/5 px-4 py-2">
          {{ $t('join.everySunday') }}
        </div>
        <div class="rounded-full border border-white/10 bg-white/5 px-4 py-2">
          {{ $t('join.englishFriendly') }}
        </div>
        <div class="rounded-full border border-white/10 bg-white/5 px-4 py-2">
          {{ $t('join.noPartner') }}
        </div>
      </div>

      <div class="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.85fr)]">
        <a
          data-kiosk-role="discover"
          :href="discoverUrl"
          target="_blank"
          class="group rounded-[2rem] border border-gold-400/25 bg-white/[0.08] p-6 shadow-[0_24px_80px_rgba(12,7,9,0.45)] backdrop-blur transition-all hover:border-gold-300/60 hover:bg-white/[0.12] sm:p-8"
        >
          <div class="flex h-full flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div class="max-w-lg text-left">
              <p class="text-xs font-semibold uppercase tracking-[0.35em] text-gold-300">
                {{ $t('join.primaryEyebrow') }}
              </p>
              <h2 class="mt-3 font-display text-3xl leading-tight text-white sm:text-4xl">
                {{ $t('join.primaryTitle') }}
              </h2>
              <p class="mt-4 text-base leading-relaxed text-wine-100/82 sm:text-lg">
                {{ $t('join.primarySub') }}
              </p>
              <div
                class="mt-5 inline-flex items-center rounded-full border border-gold-300/25 bg-gold-400/10 px-4 py-2 text-sm font-medium text-gold-100"
              >
                {{ $t('join.primaryHint') }}
              </div>
            </div>

            <div class="mx-auto rounded-[2rem] bg-white p-4 shadow-[0_14px_50px_rgba(0,0,0,0.28)] lg:mx-0">
              <KioskQrCode :url="discoverUrl" :size="156" />
            </div>
          </div>
        </a>

        <a
          data-kiosk-role="check-in"
          :href="checkInUrl"
          target="_blank"
          class="group rounded-[2rem] border border-white/10 bg-wine-900/75 p-5 backdrop-blur transition-all hover:border-white/20 hover:bg-wine-900 sm:p-6"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="text-left">
              <p class="text-xs font-semibold uppercase tracking-[0.32em] text-wine-300">
                {{ $t('join.checkInEyebrow') }}
              </p>
              <h2 class="mt-3 font-display text-2xl leading-tight text-gold-300 sm:text-3xl">
                {{ $t('join.checkIn') }}
              </h2>
              <p class="mt-3 text-sm leading-relaxed text-wine-200/80 sm:text-base">
                {{ $t('join.checkInSub') }}
              </p>
            </div>

            <div class="shrink-0 rounded-2xl bg-white p-3 shadow-[0_12px_36px_rgba(0,0,0,0.25)]">
              <KioskQrCode :url="checkInUrl" :size="96" />
            </div>
          </div>

          <div class="mt-5 inline-flex rounded-full border border-gold-400/20 bg-gold-400/10 px-4 py-2 text-sm text-gold-100/90">
            {{ $t(`join.classes.${currentClass.key}`) }} &middot; {{ currentClass.time }}
          </div>
          <p class="mt-4 text-xs uppercase tracking-[0.24em] text-wine-400">
            {{ $t('join.checkInHint') }}
          </p>
        </a>
      </div>

      <p class="mt-6 text-center text-sm text-wine-300/70">
        {{ $t('join.bottomInfo') }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.kiosk-page {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
}
</style>
