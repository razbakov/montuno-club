<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('past.seoTitle'),
  description: () => t('past.seoDescription'),
  robots: 'noindex',
})
</script>

<template>
  <div class="min-h-screen bg-wine-950 text-white">
    <SiteHeader />

    <main class="pt-32 pb-12">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <p class="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-gold-400">
          {{ $t('past.eyebrow') }}
        </p>
        <h1 class="font-display text-4xl sm:text-6xl leading-[0.95] tracking-tight">
          {{ $t('past.title') }}
        </h1>
        <p class="mt-4 text-wine-200 max-w-2xl mx-auto">
          {{ $t('past.intro') }}
        </p>
      </div>
    </main>

    <!-- La Frida Cubana — Mondays at Frida (ended July 2026) -->
    <LaFridaCubana />

    <!-- Charanga Habanera Concert (May 23, 2026) -->
    <CharangaHero />

    <!-- Las Reinas Workshops (May 23–24, 2026) -->
    <LasReinasWorkshops />

    <SiteFooter />
  </div>
</template>
