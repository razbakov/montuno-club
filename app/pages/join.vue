<script setup lang="ts">
const { t, locale } = useI18n()
const route = useRoute()
const { $posthog } = useNuxtApp()

definePageMeta({
  layout: false,
})

useSeoMeta({
  title: () => t('join.seo.title'),
  robots: 'noindex',
})

const name = ref('')
const email = ref('')
const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')

let resetTimer: ReturnType<typeof setTimeout> | null = null

async function submit() {
  if (!email.value || !name.value) return
  status.value = 'submitting'

  const query = route.query
  try {
    await $fetch('/api/subscribe', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        phone: '',
        language: locale.value,
        utm_source: query.utm_source || 'kiosk',
        utm_medium: query.utm_medium || 'ipad',
        utm_campaign: query.utm_campaign || '',
        utm_term: query.utm_term || '',
        utm_content: query.utm_content || '',
        referrer: 'kiosk',
      },
    })
    status.value = 'success'
    $posthog()?.capture('kiosk_form_submitted', {
      language: locale.value,
    })

    // Auto-reset after 5 seconds
    resetTimer = setTimeout(() => {
      resetForm()
    }, 5000)
  } catch {
    status.value = 'error'
    $posthog()?.capture('kiosk_form_error')

    // Auto-reset error after 3 seconds
    resetTimer = setTimeout(() => {
      resetForm()
    }, 3000)
  }
}

function resetForm() {
  if (resetTimer) {
    clearTimeout(resetTimer)
    resetTimer = null
  }
  name.value = ''
  email.value = ''
  status.value = 'idle'
}

onUnmounted(() => {
  if (resetTimer) clearTimeout(resetTimer)
})
</script>

<template>
  <div class="kiosk-page min-h-screen bg-wine-950 text-white flex flex-col items-center justify-center p-6 sm:p-10">
    <!-- Brand -->
    <div class="mb-8 sm:mb-12 text-center">
      <img
        src="/favicon-icon.png"
        alt="Montuno Club"
        class="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4"
      />
      <h1 class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
        {{ $t('join.title1') }}
        <span class="text-gold-400">{{ $t('join.title2') }}</span>
      </h1>
      <p class="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl text-wine-200">
        {{ $t('join.subtitle') }}
      </p>
    </div>

    <div class="w-full max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
      <!-- Form -->
      <div class="w-full max-w-md flex-shrink-0">
        <Transition
          enter-from-class="opacity-0 scale-95"
          enter-active-class="transition duration-300"
          enter-to-class="opacity-100 scale-100"
          leave-from-class="opacity-100 scale-100"
          leave-active-class="transition duration-300"
          leave-to-class="opacity-0 scale-95"
          mode="out-in"
        >
          <!-- Success state -->
          <div
            v-if="status === 'success'"
            key="success"
            class="text-center py-8"
          >
            <div class="mb-6">
              <svg class="w-20 h-20 sm:w-24 sm:h-24 mx-auto text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p class="text-3xl sm:text-4xl font-display text-gold-400 mb-3">
              {{ $t('join.success') }}
            </p>
            <p class="text-lg sm:text-xl text-wine-200">
              {{ $t('join.successSub') }}
            </p>
          </div>

          <!-- Error state -->
          <div
            v-else-if="status === 'error'"
            key="error"
            class="text-center py-8"
          >
            <div class="mb-6">
              <svg class="w-20 h-20 sm:w-24 sm:h-24 mx-auto text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p class="text-2xl sm:text-3xl font-display text-red-400 mb-3">
              {{ $t('join.error') }}
            </p>
            <p class="text-lg text-wine-300">
              {{ $t('join.errorSub') }}
            </p>
          </div>

          <!-- Form state -->
          <form
            v-else
            key="form"
            class="flex flex-col gap-4 sm:gap-5"
            @submit.prevent="submit"
          >
            <input
              v-model="name"
              name="name"
              type="text"
              required
              autocomplete="name"
              :placeholder="$t('join.namePlaceholder')"
              class="kiosk-input rounded-2xl px-6 sm:px-8 py-5 sm:py-6 text-xl sm:text-2xl bg-wine-900/60 border-2 border-wine-700/50 text-white placeholder:text-wine-400 focus:outline-none focus:border-gold-500/50 transition-colors"
            />
            <input
              v-model="email"
              name="email"
              type="email"
              required
              autocomplete="email"
              :placeholder="$t('join.emailPlaceholder')"
              class="kiosk-input rounded-2xl px-6 sm:px-8 py-5 sm:py-6 text-xl sm:text-2xl bg-wine-900/60 border-2 border-wine-700/50 text-white placeholder:text-wine-400 focus:outline-none focus:border-gold-500/50 transition-colors"
            />
            <button
              type="submit"
              :disabled="status === 'submitting'"
              class="rounded-2xl bg-gold-500 px-8 py-5 sm:py-6 text-xl sm:text-2xl font-bold text-wine-950 hover:bg-gold-400 active:bg-gold-600 transition-colors shadow-lg shadow-gold-500/20 disabled:opacity-60"
            >
              {{ status === 'submitting' ? $t('join.submitting') : $t('join.submit') }}
            </button>
            <p class="text-sm text-wine-500 text-center mt-1">
              {{ $t('join.privacy') }}
            </p>
          </form>
        </Transition>
      </div>

      <!-- QR Code + divider -->
      <div class="hidden lg:flex flex-col items-center gap-4">
        <div class="w-px h-16 bg-wine-700/50" />
        <p class="text-sm font-medium uppercase tracking-widest text-wine-400 -rotate-90 whitespace-nowrap">
          {{ $t('join.or') }}
        </p>
        <div class="w-px h-16 bg-wine-700/50" />
      </div>

      <div class="lg:hidden flex items-center gap-4 w-full max-w-md">
        <div class="flex-1 h-px bg-wine-700/50" />
        <p class="text-sm font-medium uppercase tracking-widest text-wine-400">
          {{ $t('join.or') }}
        </p>
        <div class="flex-1 h-px bg-wine-700/50" />
      </div>

      <!-- QR section -->
      <div class="text-center flex-shrink-0">
        <div class="bg-white rounded-3xl p-5 sm:p-6 inline-block shadow-xl">
          <KioskQrCode url="https://montuno.club/join" :size="200" />
        </div>
        <p class="mt-4 text-lg sm:text-xl text-wine-300">
          {{ $t('join.scanQr') }}
        </p>
      </div>
    </div>

    <!-- Bottom info -->
    <p class="mt-8 sm:mt-12 text-sm text-wine-500 text-center">
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

.kiosk-input {
  -webkit-user-select: text;
  user-select: text;
}
</style>
