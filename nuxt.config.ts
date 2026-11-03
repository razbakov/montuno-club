export default defineNuxtConfig({
  // Homepage sections, events and sign-ups from the MontunoClub profile on WeDance (RAZ-412).
  extends: ['wedance-site-kit'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxtjs/seo'],
  site: {
    url: 'https://montuno.club',
    name: 'Montuno Club',
    description:
      'Salsa Cubana classes and events in Munich. Free beginner sessions, casino courses, and Cuban parties at Buena Vista Bar. English-friendly, no partner needed.',
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
    langDir: 'locales',
    // strategy, defaultLocale 'en' and browser detection (cookie i18n_locale,
    // homepage only) come from wedance-site-kit.
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
    public: {
      // Trim to defend against env values pasted with a trailing newline, which
      // silently breaks PostHog (the SDK rejects the malformed token and drops
      // every event). See razbakov/montuno-club#9.
      posthogKey: (process.env.NUXT_PUBLIC_POSTHOG_KEY || '').trim(),
      // wedance-site-kit: the WeDance profile this site renders (wedanceUrl defaults to 2026.wedance.vip).
      wedanceProfile: 'montunoclub',
      wedanceUtmSource: 'montuno.club',
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
