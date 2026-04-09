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
    class="kiosk-page min-h-screen bg-wine-950 text-white flex flex-col items-center justify-center p-8 sm:p-12"
  >
    <!-- Brand -->
    <div class="mb-10 sm:mb-14 text-center">
      <img
        src="/favicon-icon.png"
        alt="Montuno Club"
        class="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4"
      />
      <h1
        class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
      >
        {{ $t('join.title1') }}
        <span class="text-gold-400">{{ $t('join.title2') }}</span>
      </h1>
      <p class="mt-3 text-lg sm:text-xl text-wine-300">
        {{ $t(`join.classes.${currentClass.key}`) }} &middot;
        {{ currentClass.time }}
      </p>
    </div>

    <!-- Two CTAs side by side -->
    <div
      class="w-full max-w-5xl flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12"
    >
      <!-- CTA 1: Check In (returning student) -->
      <a
        :href="checkInUrl"
        target="_blank"
        class="kiosk-card group flex-1 flex flex-col items-center justify-center gap-6 p-8 sm:p-10 rounded-3xl bg-gold-500/10 border-2 border-gold-500/30 hover:border-gold-400 hover:bg-gold-500/15 transition-all"
      >
        <div
          class="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold-500/20 flex items-center justify-center"
        >
          <svg
            class="w-10 h-10 sm:w-12 sm:h-12 text-gold-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div class="text-center">
          <h2
            class="font-display text-3xl sm:text-4xl text-gold-400 group-hover:text-gold-300 transition-colors"
          >
            {{ $t('join.checkIn') }}
          </h2>
          <p class="mt-2 text-lg sm:text-xl text-wine-300">
            {{ $t('join.checkInSub') }}
          </p>
        </div>
        <div class="mt-2 bg-white rounded-2xl p-4">
          <KioskQrCode :url="checkInUrl" :size="160" />
        </div>
      </a>

      <!-- Divider -->
      <div class="hidden lg:flex flex-col items-center justify-center gap-3">
        <div class="w-px flex-1 bg-wine-700/50" />
        <p
          class="text-sm font-medium uppercase tracking-widest text-wine-500 -rotate-90 whitespace-nowrap"
        >
          {{ $t('join.or') }}
        </p>
        <div class="w-px flex-1 bg-wine-700/50" />
      </div>
      <div class="lg:hidden flex items-center gap-4 w-full max-w-md mx-auto">
        <div class="flex-1 h-px bg-wine-700/50" />
        <p class="text-sm font-medium uppercase tracking-widest text-wine-500">
          {{ $t('join.or') }}
        </p>
        <div class="flex-1 h-px bg-wine-700/50" />
      </div>

      <!-- CTA 2: Discover (newcomer) -->
      <a
        :href="discoverUrl"
        target="_blank"
        class="kiosk-card group flex-1 flex flex-col items-center justify-center gap-6 p-8 sm:p-10 rounded-3xl bg-wine-800/40 border-2 border-wine-700/50 hover:border-wine-600 hover:bg-wine-800/60 transition-all"
      >
        <div
          class="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-wine-700/30 flex items-center justify-center"
        >
          <svg
            class="w-10 h-10 sm:w-12 sm:h-12 text-wine-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div class="text-center">
          <h2
            class="font-display text-3xl sm:text-4xl text-white group-hover:text-wine-100 transition-colors"
          >
            {{ $t('join.discover') }}
          </h2>
          <p class="mt-2 text-lg sm:text-xl text-wine-300">
            {{ $t('join.discoverSub') }}
          </p>
        </div>
        <div class="mt-2 bg-white rounded-2xl p-4">
          <KioskQrCode :url="discoverUrl" :size="160" />
        </div>
      </a>
    </div>

    <!-- Bottom info -->
    <p class="mt-10 sm:mt-14 text-sm text-wine-500 text-center">
      {{ $t('join.bottomInfo') }}
    </p>
  </div>
</template>

<style scoped>
.kiosk-page {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
}
</style>
