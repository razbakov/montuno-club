<script setup lang="ts">
// Everything on this page is managed on WeDance (RAZ-412): the sections and
// their copy, the events (MontunoClub's profile) and the sign-ups (its contacts).
// wedance-site-kit draws the sections; this page adds the SEO and the frame.
const { site, events } = useWeDanceSite()

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

    <SiteSections>
      <!-- WeDance unreachable: still a page, pointing to where everything lives. -->
      <template #fallback="{ profileUrl }">
        <section class="min-h-[70vh] flex items-center justify-center pt-16">
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
      </template>
    </SiteSections>

    <SiteFooter />
  </div>
</template>
