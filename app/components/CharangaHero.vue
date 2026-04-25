<script setup lang="ts">
const ticketUrl = 'https://www.tickettailor.com/events/montunoclub/2183096'
</script>

<template>
  <section
    id="charanga"
    class="relative bg-[#0a0a0a] text-white overflow-hidden border-b border-wine-900/40"
  >
    <!-- Background glow -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-gradient-to-br from-wine-950/40 via-transparent to-gold-950/20"
    />

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <!-- Text -->
        <div class="order-2 lg:order-1">
          <p class="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-gold-400">
            {{ $t('charanga.eyebrow') }}
          </p>
          <h2
            class="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight"
          >
            {{ $t('charanga.titleLeading') }}<span class="text-gold-400">{{ $t('charanga.titleHighlight') }}</span>
          </h2>
          <p class="mt-5 text-lg sm:text-xl text-wine-100 font-medium">
            {{ $t('charanga.subtitle') }}
          </p>
          <p class="mt-5 text-base sm:text-lg text-wine-200 leading-relaxed max-w-xl">
            {{ $t('charanga.body') }}
          </p>

          <div class="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              :href="ticketUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-4 text-base sm:text-lg font-semibold text-wine-950 hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            >
              {{ $t('charanga.cta') }}
              <svg
                class="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          <p class="mt-5 text-xs sm:text-sm text-wine-400 tracking-wide">
            {{ $t('charanga.credits') }}
          </p>
        </div>

        <!-- Image -->
        <div class="order-1 lg:order-2">
          <div
            class="relative rounded-2xl overflow-hidden border border-wine-800/40 shadow-2xl shadow-black/50 aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3]"
          >
            <img
              src="/images/charanga-habanera.jpg"
              :alt="$t('charanga.imageAlt')"
              class="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              fetchpriority="high"
            />
            <!-- Subtle dark vignette so eyebrow text stays readable on small screens -->
            <div
              aria-hidden="true"
              class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
