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
    <div class="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/15 px-3 py-2 backdrop-blur sm:right-6 sm:top-6">
      <LangSwitcher />
    </div>

    <div
      class="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-5 py-5 sm:px-8 sm:py-6"
    >
      <div
        class="mx-auto inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-wine-100/80 backdrop-blur sm:text-sm"
      >
        <img
          src="/favicon-icon.png"
          alt="Montuno Club"
          class="h-8 w-8 rounded-full ring-1 ring-gold-400/30 sm:h-9 sm:w-9"
        />
        <span class="font-medium tracking-[0.2em] uppercase">Montuno Club</span>
      </div>

      <div class="mt-4 text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.38em] text-gold-300/85">
          {{ $t('join.eyebrow') }}
        </p>
        <h1 class="mt-3 font-display text-3xl leading-[0.95] sm:text-4xl lg:text-5xl">
          {{ $t('join.title1') }}
          <span class="block text-gold-400">{{ $t('join.title2') }}</span>
        </h1>
        <p class="mx-auto mt-3 max-w-xl text-sm text-wine-100/80 sm:text-base">
          {{ $t('join.subtitle') }}
        </p>
      </div>

      <div class="mt-4 flex justify-center text-sm text-wine-100/90">
        <div class="rounded-full border border-gold-400/25 bg-gold-400/10 px-4 py-2 text-center">
          {{ $t('join.tonight') }}: {{ $t(`join.classes.${currentClass.key}`) }}
          &middot; {{ currentClass.time }} &middot; {{ $t('join.noPartner') }}
        </div>
      </div>

      <div class="mt-5 grid gap-3 md:grid-cols-[minmax(0,1.35fr)_minmax(0,0.82fr)]">
        <a
          data-kiosk-role="discover"
          :href="discoverUrl"
          target="_blank"
          class="group rounded-[2rem] border border-gold-400/25 bg-white/[0.08] p-5 shadow-[0_24px_80px_rgba(12,7,9,0.45)] backdrop-blur transition-all hover:border-gold-300/60 hover:bg-white/[0.12] sm:p-6"
        >
          <div class="flex h-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div class="max-w-md text-left">
              <p class="text-xs font-semibold uppercase tracking-[0.35em] text-gold-300">
                {{ $t('join.primaryEyebrow') }}
              </p>
              <h2 class="mt-2 font-display text-2xl leading-tight text-white sm:text-3xl">
                {{ $t('join.primaryTitle') }}
              </h2>
              <p class="mt-3 text-sm leading-relaxed text-wine-100/82 sm:text-base">
                {{ $t('join.primarySub') }}
              </p>
              <div
                class="mt-4 inline-flex items-center rounded-full border border-gold-300/25 bg-gold-400/10 px-4 py-2 text-sm font-medium text-gold-100"
              >
                {{ $t('join.primaryHint') }}
              </div>
            </div>

            <div class="mx-auto rounded-[1.75rem] bg-white p-3 shadow-[0_14px_50px_rgba(0,0,0,0.28)] md:mx-0">
              <KioskQrCode :url="discoverUrl" :size="132" />
            </div>
          </div>
        </a>

        <a
          data-kiosk-role="check-in"
          :href="checkInUrl"
          target="_blank"
          class="group rounded-[2rem] border border-white/10 bg-wine-900/75 p-4 backdrop-blur transition-all hover:border-white/20 hover:bg-wine-900 sm:p-5"
        >
          <div class="flex items-start justify-between gap-3">
            <div class="text-left">
              <p class="text-xs font-semibold uppercase tracking-[0.32em] text-wine-300">
                {{ $t('join.checkInEyebrow') }}
              </p>
              <h2 class="mt-2 font-display text-xl leading-tight text-gold-300 sm:text-2xl">
                {{ $t('join.checkIn') }}
              </h2>
              <p class="mt-2 text-sm leading-relaxed text-wine-200/80">
                {{ $t('join.checkInSub') }}
              </p>
            </div>

            <div class="shrink-0 rounded-2xl bg-white p-2.5 shadow-[0_12px_36px_rgba(0,0,0,0.25)]">
              <KioskQrCode :url="checkInUrl" :size="82" />
            </div>
          </div>

          <div class="mt-4 inline-flex rounded-full border border-gold-400/20 bg-gold-400/10 px-3 py-1.5 text-sm text-gold-100/90">
            {{ $t(`join.classes.${currentClass.key}`) }} &middot; {{ currentClass.time }}
          </div>
          <p class="mt-3 text-[11px] uppercase tracking-[0.22em] text-wine-400">
            {{ $t('join.checkInHint') }}
          </p>
        </a>
      </div>

      <p class="mt-4 text-center text-xs text-wine-300/65 sm:text-sm">
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
