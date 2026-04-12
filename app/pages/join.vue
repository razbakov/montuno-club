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
    time: '17:00',
    wedanceUrl:
      'https://wedance.vip/events/yZBzg4uX4aAgEW0ltrjI?utm_source=kiosk&utm_medium=ipad',
  },
  {
    key: 'beginner',
    time: '18:00',
    wedanceUrl:
      'https://wedance.vip/events/PLGFjfZG0Lra4ccM7LdE?utm_source=kiosk&utm_medium=ipad',
  },
  {
    key: 'intermediate',
    time: '19:00',
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

const currentClassIndex = computed(() => {
  const h = now.value.getHours()
  const m = now.value.getMinutes()
  const minutes = h * 60 + m

  // 16:30–17:44 → taster (5 PM)
  // 17:45–18:44 → beginner (6 PM)
  // 18:45+       → intermediate (7 PM)
  // before 16:30 → taster (default for early setup)
  if (minutes < 17 * 60 + 45) return 0
  if (minutes < 18 * 60 + 45) return 1
  return 2
})

const currentClass = computed<ClassInfo>(() => classes[currentClassIndex.value])
const upcomingClasses = computed(() => classes.slice(currentClassIndex.value))
const checkInUrl = computed(() => currentClass.value.wedanceUrl)
const discoverUrl = 'https://montuno.club'
</script>

<template>
  <div
    class="kiosk-page relative min-h-screen overflow-hidden bg-wine-950 text-white"
  >
    <img
      src="/images/group.jpg"
      alt="Salsa Cubana class at Buena Vista Bar Munich"
      class="absolute inset-0 h-full w-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-wine-950/85 via-wine-950/72 to-wine-950" />
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" />

    <div
      class="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-5 py-5 sm:px-8 sm:py-6"
    >
      <div class="relative md:pr-64">
        <div class="flex items-center justify-between gap-4">
          <div
            class="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-wine-100/80 backdrop-blur sm:text-sm"
          >
            <img
              src="/favicon-icon.png"
              alt="Montuno Club"
              class="h-8 w-8 rounded-full ring-1 ring-gold-400/30 sm:h-9 sm:w-9"
            />
            <span class="font-medium tracking-[0.2em] uppercase">Montuno Club</span>
          </div>
          <LangSwitcher variant="buttons" />
        </div>

        <div class="mt-4 max-w-2xl">
          <p class="text-xs font-semibold uppercase tracking-[0.38em] text-gold-300/85">
            {{ $t('join.eyebrow') }}
          </p>
          <h1 class="mt-3 font-display text-5xl leading-[0.88] sm:text-6xl md:text-7xl">
            {{ $t('hero.title1') }}
            <span class="block text-gold-400">{{ $t('hero.title2') }}</span>
          </h1>
          <p class="mt-3 max-w-lg text-sm text-wine-100/80 sm:text-base">
            {{ $t('join.subtitle') }}
          </p>
        </div>

        <div
          data-kiosk-role="schedule"
          class="mt-4 rounded-[1.75rem] border border-white/10 bg-black/20 p-4 backdrop-blur md:absolute md:right-0 md:top-0 md:mt-0 md:w-56"
        >
          <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-300/80">
            {{ $t('join.tonight') }}
          </p>
          <div class="mt-3 space-y-2">
            <div
              v-for="(session, index) in upcomingClasses"
              :key="session.key"
              class="rounded-2xl border px-3 py-2.5 transition-colors"
              :class="index === 0
                ? 'border-gold-300/40 bg-gold-400/12 text-white'
                : 'border-white/10 bg-white/5 text-wine-100/78'"
            >
              <div class="flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
                <span
                  class="h-2 w-2 rounded-full"
                  :class="index === 0 ? 'bg-gold-300' : 'bg-white/35'"
                />
                <span>{{ session.time }}</span>
              </div>
              <p class="mt-1 text-sm font-medium">
                {{ $t(`join.classes.${session.key}`) }}
              </p>
            </div>
          </div>
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
