<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('seo.title'),
  ogTitle: () => t('seo.title'),
  description: () => t('seo.description'),
  ogDescription: () => t('seo.ogDescription'),
  ogImage: 'https://montuno.club/og.jpg',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineEvent({
    name: 'Salsa From Zero — Free Beginner Class',
    startDate: '2026-04-06T19:00:00+02:00',
    endDate: '2026-04-06T20:00:00+02:00',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      type: 'Place',
      name: 'Buena Vista Bar',
      address: {
        type: 'PostalAddress',
        addressLocality: 'Munich',
        addressCountry: 'DE',
      },
    },
    organizer: {
      type: 'Organization',
      name: 'Montuno Club',
      url: 'https://montuno.club',
    },
    offers: {
      type: 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: 'https://montuno.club',
    },
    image: 'https://montuno.club/og.jpg',
    description:
      'Free, donation-based Salsa Cubana class for absolute beginners. No partner needed. English-friendly.',
  }),
])

const faqKeys = [1, 2, 3, 4, 5, 6]
const openFaq = ref<number | null>(null)

function toggleFaq(index: number) {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<template>
  <div class="min-h-screen bg-wine-950 text-white">
    <SiteHeader />

    <!-- Hero -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/images/group.jpg"
        alt="Salsa Cubana class at Buena Vista Bar Munich"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-wine-950/80 via-wine-950/70 to-wine-950" />

      <div class="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <p class="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-gold-400">
          {{ $t('hero.subtitle') }}
        </p>
        <h1 class="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
          {{ $t('hero.title1') }}<br />
          <span class="text-gold-400">{{ $t('hero.title2') }}</span>
        </h1>
        <p class="mt-6 text-lg sm:text-xl text-wine-200 max-w-2xl mx-auto leading-relaxed">
          {{ $t('hero.description') }}
        </p>
        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#join"
            class="rounded-full bg-gold-500 px-8 py-4 text-lg font-semibold text-wine-950 hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20"
          >
            {{ $t('form.submit') }}
          </a>
          <a
            href="#about"
            class="text-sm text-wine-300 hover:text-white transition-colors underline underline-offset-4"
          >
            {{ $t('hero.learnMore') }}
          </a>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-wine-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="py-24 sm:py-32">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p class="text-sm font-medium uppercase tracking-[0.2em] text-gold-500 mb-4">{{ $t('about.label') }}</p>
            <h2 class="font-display text-3xl sm:text-4xl leading-tight">
              {{ $t('about.title1') }}<br />
              <span class="text-gold-400">{{ $t('about.title2') }}</span>
            </h2>
            <p class="mt-6 text-wine-200 leading-relaxed">
              {{ $t('about.p1') }}
            </p>
            <p class="mt-4 text-wine-200 leading-relaxed">
              {{ $t('about.p2') }}
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="rounded-2xl bg-wine-900/50 border border-wine-800/50 p-6 text-center">
              <p class="text-3xl font-bold text-gold-400">{{ $t('about.free') }}</p>
              <p class="mt-1 text-sm text-wine-300">{{ $t('about.freeDesc') }}</p>
            </div>
            <div class="rounded-2xl bg-wine-900/50 border border-wine-800/50 p-6 text-center">
              <p class="text-3xl font-bold text-gold-400">{{ $t('about.lang') }}</p>
              <p class="mt-1 text-sm text-wine-300">{{ $t('about.langDesc') }}</p>
            </div>
            <div class="rounded-2xl bg-wine-900/50 border border-wine-800/50 p-6 text-center">
              <p class="text-3xl font-bold text-gold-400">{{ $t('about.solo') }}</p>
              <p class="mt-1 text-sm text-wine-300">{{ $t('about.soloDesc') }}</p>
            </div>
            <div class="rounded-2xl bg-wine-900/50 border border-wine-800/50 p-6 text-center">
              <p class="text-3xl font-bold text-gold-400">{{ $t('about.exp') }}</p>
              <p class="mt-1 text-sm text-wine-300">{{ $t('about.expDesc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What to Expect -->
    <section id="expect" class="py-24 sm:py-32 bg-wine-900/30">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="text-center mb-16">
          <p class="text-sm font-medium uppercase tracking-[0.2em] text-gold-500 mb-4">{{ $t('expect.label') }}</p>
          <h2 class="font-display text-3xl sm:text-4xl">
            {{ $t('expect.title1') }} <span class="text-gold-400">{{ $t('expect.title2') }}</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="relative rounded-2xl bg-wine-950/60 border border-wine-800/40 p-8">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 text-gold-400 font-display text-xl">
              1
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ $t('expect.step1Title') }}</h3>
            <p class="text-wine-300 text-sm leading-relaxed">{{ $t('expect.step1Text') }}</p>
          </div>

          <div class="relative rounded-2xl bg-wine-950/60 border border-wine-800/40 p-8">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 text-gold-400 font-display text-xl">
              2
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ $t('expect.step2Title') }}</h3>
            <p class="text-wine-300 text-sm leading-relaxed">{{ $t('expect.step2Text') }}</p>
          </div>

          <div class="relative rounded-2xl bg-wine-950/60 border border-wine-800/40 p-8">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 text-gold-400 font-display text-xl">
              3
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ $t('expect.step3Title') }}</h3>
            <p class="text-wine-300 text-sm leading-relaxed">{{ $t('expect.step3Text') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Instructor -->
    <section class="py-24 sm:py-32">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="order-2 md:order-1">
            <p class="text-sm font-medium uppercase tracking-[0.2em] text-gold-500 mb-4">{{ $t('instructor.label') }}</p>
            <h2 class="font-display text-3xl sm:text-4xl leading-tight">
              {{ $t('instructor.title') }} <span class="text-gold-400">{{ $t('instructor.name') }}</span>
            </h2>
            <p class="mt-6 text-wine-200 leading-relaxed">
              {{ $t('instructor.p1') }}
            </p>
            <p class="mt-4 text-wine-200 leading-relaxed">
              {{ $t('instructor.p2') }}
            </p>
          </div>
          <div class="order-1 md:order-2 flex justify-center">
            <div class="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-wine-700/50">
              <img
                src="/images/alex-dancing.jpg"
                alt="Alex teaching Salsa Cubana at Montuno Club"
                class="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video -->
    <section class="py-24 sm:py-32">
      <div class="mx-auto max-w-4xl px-4 sm:px-6">
        <div class="text-center mb-12">
          <p class="text-sm font-medium uppercase tracking-[0.2em] text-gold-500 mb-4">{{ $t('video.label') }}</p>
          <h2 class="font-display text-3xl sm:text-4xl">
            {{ $t('video.title1') }} <span class="text-gold-400">{{ $t('video.title2') }}</span>
          </h2>
        </div>
        <div class="rounded-2xl overflow-hidden border border-wine-800/40 aspect-video">
          <iframe
            src="https://www.youtube.com/embed/SO9xKjwqMX0"
            width="100%"
            height="100%"
            class="w-full h-full"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy"
            title="Montuno Club — Salsa Cubana in Munich"
          />
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="py-24 sm:py-32 bg-wine-900/30">
      <div class="mx-auto max-w-3xl px-4 sm:px-6">
        <div class="text-center mb-16">
          <p class="text-sm font-medium uppercase tracking-[0.2em] text-gold-500 mb-4">{{ $t('faq.label') }}</p>
          <h2 class="font-display text-3xl sm:text-4xl">
            {{ $t('faq.title1') }} <span class="text-gold-400">{{ $t('faq.title2') }}</span>
          </h2>
        </div>

        <div class="space-y-3">
          <div
            v-for="i in faqKeys"
            :key="i"
            class="rounded-xl border border-wine-800/40 bg-wine-950/60 overflow-hidden"
          >
            <button
              class="flex w-full items-center justify-between px-6 py-5 text-left"
              :aria-expanded="openFaq === i"
              @click="toggleFaq(i)"
            >
              <span class="font-medium pr-4">{{ $t(`faq.q${i}`) }}</span>
              <svg
                class="w-5 h-5 shrink-0 text-wine-400 transition-transform duration-200"
                :class="{ 'rotate-180': openFaq === i }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <Transition
              enter-from-class="grid-rows-[0fr]"
              enter-active-class="grid transition-[grid-template-rows] duration-200"
              enter-to-class="grid-rows-[1fr]"
              leave-from-class="grid-rows-[1fr]"
              leave-active-class="grid transition-[grid-template-rows] duration-200"
              leave-to-class="grid-rows-[0fr]"
            >
              <div v-if="openFaq === i" class="px-6 pb-5">
                <p class="text-wine-300 leading-relaxed">{{ $t(`faq.a${i}`) }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Location -->
    <section id="location" class="py-24 sm:py-32">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p class="text-sm font-medium uppercase tracking-[0.2em] text-gold-500 mb-4">{{ $t('location.label') }}</p>
            <h2 class="font-display text-3xl sm:text-4xl leading-tight">
              {{ $t('location.title1') }} <span class="text-gold-400">{{ $t('location.title2') }}</span>
            </h2>
            <p class="mt-6 text-wine-200 leading-relaxed">
              {{ $t('location.description') }}
            </p>
            <div class="mt-6 space-y-3 text-wine-300">
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 mt-0.5 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{{ $t('location.time') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 mt-0.5 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a href="https://maps.google.com/?q=Buena+Vista+Bar,+Am+Einla%C3%9F+2A,+80469+M%C3%BCnchen" target="_blank" rel="noopener" class="underline hover:text-white transition-colors">{{ $t('location.address') }}</a>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 mt-0.5 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span>{{ $t('location.price') }}</span>
              </div>
            </div>
          </div>

          <div class="rounded-2xl overflow-hidden border border-wine-800/40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.0!2d11.5762!3d48.1295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f24c34b3ed%3A0x4f5a5b5e5f5a5b5e!2sAm+Einla%C3%9F+2A%2C+80469+M%C3%BCnchen!5e0!3m2!1sen!2sde!4v1"
              width="100%"
              height="350"
              style="border: 0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Buena Vista Bar location on Google Maps"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="join" class="py-24 sm:py-32 bg-wine-900/30">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h2 class="font-display text-4xl sm:text-5xl leading-tight">
          {{ $t('cta.title1') }} <span class="text-gold-400">{{ $t('cta.title2') }}</span>?
        </h2>
        <p class="mt-6 text-lg text-wine-200">
          {{ $t('cta.description') }}<br />
          {{ $t('cta.descLine2') }}
        </p>
        <div class="mt-10">
          <EmailCaptureForm />
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>
