<script setup lang="ts">
const { t } = useI18n()

function openUrl(url: string) {
  window.open(url, '_blank', 'noopener')
}

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
    name: 'La Frida Cubana · Bachata Dominicana Edition',
    startDate: '2026-05-11T19:00:00+02:00',
    endDate: '2026-05-11T23:00:00+02:00',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      type: 'Place',
      name: 'Frida Restaurant & Bar',
      address: {
        type: 'PostalAddress',
        streetAddress: 'Leopoldstr. 13',
        addressLocality: 'Munich',
        postalCode: '80802',
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
      price: '3',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: 'https://buytickets.at/montunoclub/2189767',
    },
    image: 'https://montuno.club/og.jpg',
    description:
      'Cuban Mondays at Frida Munich. 19:00 free Bachata Dominicana workshop. 20:00 Cuban party with DJ Alösha — timba, reparto, son, Cuban rumba, every third song = bachata. Free entry until 20:00, then 3€ online / 5€ at the door. Domino table, free Havana Club welcome shot.',
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

    <!-- Charanga Habanera Concert Banner (above fold) -->
    <CharangaHero />

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
            href="#schedule"
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

    <!-- Schedule -->
    <section id="schedule" class="py-24 sm:py-32 bg-wine-900/30">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="text-center mb-16">
          <p class="text-sm font-medium uppercase tracking-[0.2em] text-gold-500 mb-4">{{ $t('schedule.label') }}</p>
          <h2 class="font-display text-3xl sm:text-4xl">
            {{ $t('schedule.title1') }} <span class="text-gold-400">{{ $t('schedule.title2') }}</span>
          </h2>
          <p class="mt-4 text-wine-200 max-w-2xl mx-auto">{{ $t('schedule.description') }}</p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead>
              <tr class="border-b border-wine-800/50">
                <th class="pb-4 pr-6 text-sm font-semibold uppercase tracking-wider text-gold-500">{{ $t('schedule.day') }}</th>
                <th class="pb-4 pr-6 text-sm font-semibold uppercase tracking-wider text-gold-500">{{ $t('schedule.time') }}</th>
                <th class="pb-4 pr-6 text-sm font-semibold uppercase tracking-wider text-gold-500">{{ $t('schedule.class') }}</th>
                <th class="pb-4 text-sm font-semibold uppercase tracking-wider text-gold-500">{{ $t('schedule.instructor') }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-wine-800/30">
              <tr class="group cursor-pointer hover:bg-wine-800/20 transition-colors" @click="openUrl('https://wedance.vip/MontunoClub?view=events#tabs')">
                <td class="py-5 pr-6 text-wine-200 font-medium">{{ $t('schedule.sunday') }}</td>
                <td class="py-5 pr-6 text-wine-300">18:00</td>
                <td class="py-5 pr-6">
                  <span class="font-medium text-white group-hover:text-gold-400 transition-colors">{{ $t('schedule.salsaFromZero') }}</span>
                  <span class="ml-2 inline-block rounded-full bg-gold-500/20 px-2.5 py-0.5 text-xs font-semibold text-gold-400">{{ $t('schedule.salsaFromZeroFree') }}</span>
                </td>
                <td class="py-5 text-wine-300">Alösha, Celeste</td>
              </tr>
              <tr class="group cursor-pointer hover:bg-wine-800/20 transition-colors" @click="openUrl('https://wedance.vip/MontunoClub?view=events#tabs')">
                <td class="py-5 pr-6 text-wine-200 font-medium">{{ $t('schedule.sunday') }}</td>
                <td class="py-5 pr-6 text-wine-300">19:00</td>
                <td class="py-5 pr-6">
                  <span class="font-medium text-white group-hover:text-gold-400 transition-colors">{{ $t('schedule.casinoBeginner') }}</span>
                  <span class="ml-2 text-xs text-wine-400">({{ $t('schedule.casinoBeginnerNote') }})</span>
                </td>
                <td class="py-5 text-wine-300">Alösha, Celeste</td>
              </tr>
              <tr class="group cursor-pointer hover:bg-wine-800/20 transition-colors" @click="openUrl('https://wedance.vip/MontunoClub?view=events#tabs')">
                <td class="py-5 pr-6 text-wine-200 font-medium">{{ $t('schedule.sunday') }}</td>
                <td class="py-5 pr-6 text-wine-300">20:00</td>
                <td class="py-5 pr-6">
                  <span class="font-medium text-white group-hover:text-gold-400 transition-colors">{{ $t('schedule.casinoIntermediate') }}</span>
                </td>
                <td class="py-5 text-wine-300">Alösha, Celeste &amp; Sasha</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-8 flex items-center gap-2 text-sm text-wine-400">
          <svg class="w-4 h-4 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{{ $t('schedule.venue') }}</span>
        </div>

        <!-- DJ Alösha WhatsApp — party announcements -->
        <div class="mt-8 rounded-2xl border border-gold-500/30 bg-gold-500/5 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="flex items-start gap-3">
            <svg class="w-7 h-7 text-gold-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <div>
              <p class="font-semibold text-white">{{ $t('schedule.djWhatsappTitle') }}</p>
              <p class="text-sm text-wine-300 mt-0.5">{{ $t('schedule.djWhatsappDesc') }}</p>
            </div>
          </div>
          <a
            href="https://chat.whatsapp.com/JlJrGUi89yj57GocNzRTCt"
            target="_blank"
            rel="noopener"
            class="rounded-full bg-gold-500 px-6 py-2.5 text-sm font-semibold text-wine-950 hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20 whitespace-nowrap"
          >
            {{ $t('schedule.djWhatsappCta') }}
          </a>
        </div>
      </div>
    </section>

    <!-- Rueda Mission -->
    <section id="rueda" class="py-24 sm:py-32 bg-gradient-to-b from-wine-950 via-wine-900/40 to-wine-950">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="text-center mb-12">
          <p class="text-sm font-medium uppercase tracking-[0.2em] text-gold-500 mb-4">{{ $t('rueda.label') }}</p>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto">
            {{ $t('rueda.headline1') }} <span class="text-gold-400">{{ $t('rueda.headline2') }}</span>
          </h2>
          <p class="mt-5 text-wine-200 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">{{ $t('rueda.sub') }}</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <!-- The Big One -->
          <div class="rounded-2xl border-2 border-gold-500/40 bg-gold-500/10 p-6 sm:p-8">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/20 text-gold-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6" />
              </svg>
            </div>
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-gold-400 mb-2">{{ $t('rueda.bigOneTag') }}</p>
            <h3 class="font-display text-2xl text-white mb-3">{{ $t('rueda.bigOneTitle') }}</h3>
            <p class="text-sm text-wine-200 leading-relaxed">{{ $t('rueda.bigOneDesc') }}</p>
          </div>

          <!-- Every Saturday -->
          <div class="rounded-2xl border border-wine-800/50 bg-wine-950/50 p-6 sm:p-8">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 text-gold-400">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-gold-400 mb-2">{{ $t('rueda.weeklyTag') }}</p>
            <h3 class="font-display text-2xl text-white mb-3">{{ $t('rueda.weeklyTitle') }}</h3>
            <p class="text-sm text-wine-200 leading-relaxed">{{ $t('rueda.weeklyDesc') }}</p>
          </div>

          <!-- Flash mobs -->
          <div class="rounded-2xl border border-wine-800/50 bg-wine-950/50 p-6 sm:p-8">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 text-gold-400">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p class="text-xs font-bold uppercase tracking-[0.18em] text-gold-400 mb-2">{{ $t('rueda.flashTag') }}</p>
            <h3 class="font-display text-2xl text-white mb-3">{{ $t('rueda.flashTitle') }}</h3>
            <p class="text-sm text-wine-200 leading-relaxed">{{ $t('rueda.flashDesc') }}</p>
          </div>
        </div>

        <!-- Video -->
        <div class="mx-auto max-w-3xl rounded-2xl overflow-hidden border border-wine-800/40 aspect-video mb-10">
          <iframe
            src="https://www.youtube.com/embed/0QnN2mTix9g"
            width="100%"
            height="100%"
            class="w-full h-full"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy"
            title="Rueda de Casino — Montuno Club Munich"
          />
        </div>

        <!-- CTA -->
        <div class="rounded-2xl border border-gold-500/30 bg-gold-500/5 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="flex items-start gap-3">
            <svg class="w-7 h-7 text-gold-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <div>
              <p class="font-semibold text-white">{{ $t('rueda.ctaTitle') }}</p>
              <p class="text-sm text-wine-300 mt-0.5">{{ $t('rueda.ctaDesc') }}</p>
            </div>
          </div>
          <a
            href="https://chat.whatsapp.com/JlJrGUi89yj57GocNzRTCt"
            target="_blank"
            rel="noopener"
            class="rounded-full bg-gold-500 px-6 py-2.5 text-sm font-semibold text-wine-950 hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20 whitespace-nowrap"
          >
            {{ $t('rueda.ctaButton') }}
          </a>
        </div>
      </div>
    </section>

    <!-- La Frida Cubana Event -->
    <section id="events" class="py-24 sm:py-32">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="text-center mb-16">
          <p class="text-sm font-medium uppercase tracking-[0.2em] text-gold-500 mb-4">{{ $t('event.label') }}</p>
          <h2 class="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
            {{ $t('event.title1') }} <span class="text-gold-400">{{ $t('event.title2') }}</span>
          </h2>
        </div>

        <div class="mx-auto max-w-4xl rounded-2xl bg-wine-900/50 border border-wine-800/40 overflow-hidden">
          <div class="p-8 sm:p-12">
            <!-- This Week's Special Edition -->
            <div class="mb-8 rounded-2xl border-2 border-gold-500/40 bg-gold-500/10 p-5 sm:p-6">
              <p class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-400 mb-2">
                <span class="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
                {{ $t('event.weeklyLabel') }}
              </p>
              <h3 class="font-display text-2xl sm:text-3xl text-white">{{ $t('event.weeklyTitle') }}</h3>
              <p class="mt-2 text-wine-200 text-sm sm:text-base">{{ $t('event.weeklyDesc') }}</p>
            </div>

            <p class="text-wine-200 leading-relaxed text-lg mb-8">
              {{ $t('event.description') }}
            </p>

            <div class="grid sm:grid-cols-2 gap-6 mb-8">
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 mt-0.5 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span class="text-wine-200">{{ $t('event.date') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 mt-0.5 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-wine-200">{{ $t('event.time') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 mt-0.5 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a href="https://maps.google.com/?q=Frida+Restaurant+%26+Bar%2C+Leopoldstr.+13%2C+80802+M%C3%BCnchen" target="_blank" rel="noopener" class="text-wine-200 underline underline-offset-4 decoration-wine-700 hover:text-gold-400 hover:decoration-gold-400 transition-colors">{{ $t('event.venue') }}</a>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 mt-0.5 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span class="text-wine-200">{{ $t('event.entry') }}</span>
              </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div class="rounded-xl bg-wine-950/60 border border-wine-800/30 p-4 text-center">
                <svg class="w-6 h-6 mx-auto mb-2 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <p class="text-sm text-wine-200">{{ $t('event.highlights.shot') }}</p>
              </div>
              <div class="rounded-xl bg-wine-950/60 border border-wine-800/30 p-4 text-center">
                <svg class="w-6 h-6 mx-auto mb-2 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                <p class="text-sm text-wine-200">{{ $t('event.highlights.domino') }}</p>
              </div>
              <div class="rounded-xl bg-wine-950/60 border border-wine-800/30 p-4 text-center">
                <svg class="w-6 h-6 mx-auto mb-2 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                <p class="text-sm text-wine-200">{{ $t('event.highlights.music') }}</p>
              </div>
              <div class="rounded-xl bg-wine-950/60 border border-wine-800/30 p-4 text-center">
                <svg class="w-6 h-6 mx-auto mb-2 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                <p class="text-sm text-wine-200">{{ $t('event.highlights.dj') }}</p>
              </div>
            </div>

            <!-- Schedule slots -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div class="rounded-xl bg-gold-500/10 border border-gold-500/30 p-4 text-center">
                <p class="text-sm font-semibold text-gold-300">{{ $t('event.slotWorkshop') }}</p>
              </div>
              <div class="rounded-xl bg-wine-950/60 border border-gold-500/20 p-4 text-center">
                <p class="text-sm font-semibold text-white">{{ $t('event.slotParty') }}</p>
              </div>
            </div>

            <!-- Photo & video notice (DSGVO) -->
            <div class="mt-6 rounded-xl bg-wine-950/40 border border-wine-800/40 p-4 flex items-start gap-3">
              <svg class="w-5 h-5 mt-0.5 text-gold-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p class="text-sm text-wine-200 leading-relaxed">{{ $t('event.photoNotice') }}</p>
            </div>

            <div class="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p class="text-sm text-wine-400">{{ $t('event.organizer') }}</p>
              <a
                :href="$t('event.ctaUrl')"
                target="_blank"
                rel="noopener"
                class="rounded-full bg-gold-500 px-8 py-3 font-semibold text-wine-950 hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20"
              >
                {{ $t('event.cta') }}
              </a>
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
