<script setup lang="ts">
import type { Component } from 'vue'
import SiteHero from '~/components/site/SiteHero.vue'
import SiteText from '~/components/site/SiteText.vue'
import SiteCards from '~/components/site/SiteCards.vue'
import SiteEvents from '~/components/site/SiteEvents.vue'
import SiteFaq from '~/components/site/SiteFaq.vue'
import SiteVideo from '~/components/site/SiteVideo.vue'
import SitePerson from '~/components/site/SitePerson.vue'
import SiteLocation from '~/components/site/SiteLocation.vue'
import SiteSignup from '~/components/site/SiteSignup.vue'
import SiteCta from '~/components/site/SiteCta.vue'

// Everything on this page is managed on WeDance (RAZ-412): the sections and
// their copy, the events (MontunoClub's profile) and the sign-ups (its contacts).
const { site, sections, events, profileUrl, contactsUrl } = useWeDanceSite()

const kinds: Record<string, Component> = {
  hero: SiteHero,
  text: SiteText,
  cards: SiteCards,
  events: SiteEvents,
  faq: SiteFaq,
  video: SiteVideo,
  person: SitePerson,
  location: SiteLocation,
  signup: SiteSignup,
  cta: SiteCta,
}
// Kinds this site doesn't know yet are skipped; backgrounds alternate below the hero.
const blocks = computed(() => sections.value
  .filter(s => kinds[s.kind])
  .map((s, i) => ({ section: s, component: kinds[s.kind]!, tinted: s.kind !== 'hero' && i % 2 === 0 })))

useSeoMeta({
  title: () => site.value?.seo.title || 'Montuno Club',
  ogTitle: () => site.value?.seo.title || 'Montuno Club',
  description: () => site.value?.seo.description,
  ogDescription: () => site.value?.seo.description,
  ogImage: () => site.value?.seo.image || 'https://montuno.club/og.jpg',
  twitterCard: 'summary_large_image',
})

useSchemaOrg(computed(() => events.value.map(e => defineEvent({
  '@id': `https://montuno.club/#event-${e.id}`,
  name: e.name,
  description: [e.name, e.venueName, e.artists.map(a => a.name).join(', ')].filter(Boolean).join(' · '),
  startDate: e.startDate,
  ...(e.endDate ? { endDate: e.endDate } : {}),
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: e.venueName || 'Munich',
    address: { '@type': 'PostalAddress', streetAddress: e.venueAddress || undefined, addressLocality: 'Munich', addressCountry: 'DE' },
  },
  organizer: { type: 'Organization', name: 'Montuno Club', url: 'https://montuno.club' },
  ...(e.cover ? { image: e.cover } : {}),
  url: e.url,
}))))
</script>

<template>
  <div class="min-h-screen bg-wine-950 text-white">
    <SiteHeader />

    <template v-if="blocks.length">
      <component
        :is="b.component"
        v-for="b in blocks"
        :key="b.section.id"
        :section="b.section"
        :tinted="b.tinted"
        v-bind="b.section.kind === 'events'
          ? { events, profileUrl }
          : b.section.kind === 'signup' ? { contactsUrl } : {}"
      />
    </template>

    <!-- WeDance unreachable: still a page, pointing to where everything lives. -->
    <section v-else class="min-h-[70vh] flex items-center justify-center pt-16">
      <div class="mx-auto max-w-xl px-4 sm:px-6 text-center">
        <img src="/logo-white.png" alt="Montuno Club" class="h-12 mx-auto mb-8" />
        <p class="text-lg text-wine-200 leading-relaxed">{{ $t('site.unavailable') }}</p>
        <a
          :href="withUtm(profileUrl, 'site-unavailable')"
          target="_blank"
          rel="noopener"
          class="mt-8 inline-block rounded-full bg-gold-500 px-8 py-4 text-lg font-semibold text-wine-950 hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20"
        >
          {{ $t('schedule.followOnWeDance') }}
        </a>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>
