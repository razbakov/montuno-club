<script setup lang="ts">
const { t, locale } = useI18n()
const route = useRoute()
const { $posthog } = useNuxtApp()

const name = ref('')
const email = ref('')
const phone = ref('')
const promoCode = ref('')
const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')

async function submit() {
  if (!email.value || !name.value || !phone.value) return
  status.value = 'submitting'

  const query = route.query
  try {
    await $fetch('/api/subscribe', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        phone: phone.value,
        promo_code: promoCode.value,
        language: locale.value,
        utm_source: query.utm_source || '',
        utm_medium: query.utm_medium || '',
        utm_campaign: query.utm_campaign || '',
        utm_term: query.utm_term || '',
        utm_content: query.utm_content || '',
        referrer: document.referrer || '',
      },
    })
    status.value = 'success'
    $posthog()?.capture('form_submitted', {
      language: locale.value,
      utm_source: query.utm_source || '',
      utm_medium: query.utm_medium || '',
      utm_campaign: query.utm_campaign || '',
    })
  } catch {
    status.value = 'error'
    $posthog()?.capture('form_error')
  }
}
</script>

<template>
  <div>
    <form
      v-if="status !== 'success'"
      class="flex flex-col gap-3 max-w-md mx-auto"
      @submit.prevent="submit"
    >
      <input
        v-model="name"
        name="name"
        type="text"
        required
        autocomplete="name"
        :placeholder="$t('form.namePlaceholder')"
        class="rounded-full px-6 py-4 bg-wine-900/60 border border-wine-700/50 text-white placeholder:text-wine-400 focus:outline-none focus:border-gold-500/50 transition-colors"
      />
      <input
        v-model="email"
        name="email"
        type="email"
        required
        autocomplete="email"
        :placeholder="$t('form.emailPlaceholder')"
        class="rounded-full px-6 py-4 bg-wine-900/60 border border-wine-700/50 text-white placeholder:text-wine-400 focus:outline-none focus:border-gold-500/50 transition-colors"
      />
      <input
        v-model="phone"
        name="phone"
        type="tel"
        required
        autocomplete="tel"
        :placeholder="$t('form.phonePlaceholder')"
        class="rounded-full px-6 py-4 bg-wine-900/60 border border-wine-700/50 text-white placeholder:text-wine-400 focus:outline-none focus:border-gold-500/50 transition-colors"
      />
      <input
        v-model="promoCode"
        name="promo_code"
        type="text"
        :placeholder="$t('form.promoCodePlaceholder')"
        class="rounded-full px-6 py-4 bg-wine-900/60 border border-wine-700/50 text-white placeholder:text-wine-400 focus:outline-none focus:border-gold-500/50 transition-colors"
      />
      <button
        type="submit"
        :disabled="status === 'submitting'"
        class="rounded-full bg-gold-500 px-8 py-4 text-lg font-semibold text-wine-950 hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20 disabled:opacity-60"
      >
        {{ status === 'submitting' ? $t('form.submitting') : $t('form.submit') }}
      </button>
    </form>

    <div v-if="status === 'success'" class="text-center">
      <p class="text-xl font-semibold text-gold-400">{{ $t('form.success') }}</p>
      <a
        href="https://chat.whatsapp.com/K5Iy5CkTonv5ady2v91b8t"
        target="_blank"
        rel="noopener"
        class="mt-4 inline-flex items-center gap-2 rounded-full border border-wine-600 px-6 py-3 text-wine-200 hover:border-gold-500/50 hover:text-white transition-colors"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {{ $t('form.successWhatsApp') }}
      </a>
    </div>

    <p v-if="status === 'error'" class="mt-3 text-sm text-red-400 text-center">
      {{ $t('form.error') }}
    </p>
    <p v-if="status !== 'success'" class="mt-3 text-xs text-wine-500 text-center">
      {{ $t('form.privacy') }}
    </p>
  </div>
</template>
