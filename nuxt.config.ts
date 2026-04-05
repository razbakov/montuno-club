export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxtjs/seo'],
  site: {
    url: 'https://montuno.club',
    name: 'Montuno Club',
    description:
      'Free, donation-based Salsa Cubana classes for beginners in Munich. Every Sunday at 7 PM at Buena Vista Bar. English-friendly, no partner needed.',
    defaultLocale: 'en',
  },
  i18n: {
    locales: [
      { code: 'en', language: 'en', name: 'English', file: 'en.json' },
      { code: 'de', language: 'de', name: 'Deutsch', file: 'de.json' },
      { code: 'es', language: 'es', name: 'Español', file: 'es.json' },
      { code: 'ru', language: 'ru', name: 'Русский', file: 'ru.json' },
      { code: 'uk', language: 'uk', name: 'Українська', file: 'uk.json' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      fallbackLocale: 'en',
    },
  },
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-icon.png',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;800&display=swap',
        },
      ],
    },
  },
  runtimeConfig: {
    hubspotAccessToken: process.env.HUBSPOT_ACCESS_TOKEN || '',
    public: {
      posthogKey: process.env.NUXT_PUBLIC_POSTHOG_KEY || '',
    },
  },
  ogImage: { enabled: false },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Montuno Club',
      url: 'https://montuno.club',
      logo: '/logo.png',
      sameAs: [
        'https://www.instagram.com/montunoclub/',
        'https://www.facebook.com/montunoclub/',
      ],
    },
  },
})
