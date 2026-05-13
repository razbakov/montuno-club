<script setup lang="ts">
const { t } = useI18n()

const ticketUrl = 'https://www.tickettailor.com/checkout/view-event/id/8158745/chk/f2b9/?modal_widget=true&widget=true'

const waUrl = computed(
  () => `https://wa.me/4915782039401?text=${encodeURIComponent(t('lasReinas.privatesWaMessage'))}`,
)
</script>

<template>
  <section
    id="las-reinas"
    class="relative bg-[#0a0a0a] text-white overflow-hidden border-b border-wine-900/40"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold-950/30 via-transparent to-wine-950/40"
    />

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <!-- Image -->
        <div class="order-1">
          <div
            class="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl shadow-black/50 aspect-[3/4]"
          >
            <img
              src="/images/las-reinas.jpg"
              :alt="$t('lasReinas.imageAlt')"
              class="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Text -->
        <div class="order-2">
          <p class="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-gold-400">
            {{ $t('lasReinas.eyebrow') }}
          </p>
          <h2
            class="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight"
          >
            {{ $t('lasReinas.titleLeading') }}<span class="text-gold-400">{{ $t('lasReinas.titleHighlight') }}</span>
          </h2>
          <p class="mt-5 text-lg sm:text-xl text-wine-100 font-medium">
            {{ $t('lasReinas.subtitle') }}
          </p>
          <p class="mt-5 text-base sm:text-lg text-wine-200 leading-relaxed max-w-xl">
            {{ $t('lasReinas.body') }}
          </p>

          <!-- Schedule -->
          <div class="mt-8 grid sm:grid-cols-2 gap-4">
            <div class="rounded-xl border border-gold-500/20 bg-gold-500/5 p-4">
              <p class="text-xs font-bold uppercase tracking-wider text-gold-400 mb-3">
                {{ $t('lasReinas.satTitle') }}
              </p>
              <div class="space-y-3">
                <div>
                  <p class="text-[11px] uppercase tracking-[0.18em] text-gold-300/70 mb-1.5 flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-gold-400" /> Eneris
                  </p>
                  <ul class="text-sm text-wine-200 space-y-1.5">
                    <li><span class="text-gold-300">10:00</span> EneriStyle</li>
                    <li><span class="text-gold-300">11:15</span> Salsa con Rumba</li>
                  </ul>
                </div>
                <div>
                  <p class="text-[11px] uppercase tracking-[0.18em] text-white/70 mb-1.5 flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-white/80" /> Milaila
                  </p>
                  <ul class="text-sm text-wine-200 space-y-1.5">
                    <li><span class="text-gold-300">14:00</span> Timba en Pareja</li>
                    <li><span class="text-gold-300">15:15</span> Lady Styling tacones</li>
                  </ul>
                </div>
                <ul class="text-sm text-wine-200 pt-2 border-t border-wine-800/40">
                  <li><span class="text-gold-300">19:00</span> {{ $t('lasReinas.concert') }}</li>
                </ul>
              </div>
            </div>
            <div class="rounded-xl border border-gold-500/20 bg-gold-500/5 p-4">
              <p class="text-xs font-bold uppercase tracking-wider text-gold-400 mb-3">
                {{ $t('lasReinas.sunTitle') }}
              </p>
              <div class="space-y-3">
                <div>
                  <p class="text-[11px] uppercase tracking-[0.18em] text-gold-300/70 mb-1.5 flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-gold-400" /> Eneris
                  </p>
                  <ul class="text-sm text-wine-200 space-y-1.5">
                    <li><span class="text-gold-300">10:00</span> Timba con Eneris</li>
                    <li><span class="text-gold-300">11:15</span> Salsa con Reparto</li>
                  </ul>
                </div>
                <div>
                  <p class="text-[11px] uppercase tracking-[0.18em] text-white/70 mb-1.5 flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-white/80" /> Milaila
                  </p>
                  <ul class="text-sm text-wine-200 space-y-1.5">
                    <li><span class="text-gold-300">14:00</span> Rueda de Casino</li>
                    <li><span class="text-gold-300">15:15</span> Conga y Comparsa</li>
                  </ul>
                </div>
                <ul class="text-sm text-wine-200 pt-2 border-t border-wine-800/40">
                  <li class="flex items-baseline gap-1.5">
                    <span class="text-gold-300">16:30</span>
                    <span>👑 Las Reinas</span>
                    <span class="text-[11px] text-wine-400">· Eneris + Milaila</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Pricing -->
          <div class="mt-8 flex flex-wrap items-center gap-3">
            <div class="rounded-full bg-gold-500/10 border border-gold-500/40 px-4 py-2">
              <span class="text-wine-300 text-sm">{{ $t('lasReinas.fullPass') }}</span>
              <span class="ml-2 font-bold text-gold-400">€79</span>
            </div>
            <div class="rounded-full bg-gold-500/10 border border-gold-500/40 px-4 py-2">
              <span class="text-wine-300 text-sm">{{ $t('lasReinas.withConcert') }}</span>
              <span class="ml-2 font-bold text-gold-400">€99</span>
            </div>
            <div class="rounded-full bg-wine-900/50 border border-wine-800/40 px-4 py-2">
              <span class="text-wine-300 text-sm">{{ $t('lasReinas.dropIn') }}</span>
              <span class="ml-2 font-semibold text-white">€25</span>
            </div>
          </div>

          <!-- Private lessons -->
          <div class="mt-4 rounded-xl border border-wine-800/40 bg-wine-950/40 p-4">
            <p class="text-[11px] uppercase tracking-[0.18em] text-gold-300/70 mb-2">
              {{ $t('lasReinas.privatesLabel') }}
            </p>
            <p class="text-sm text-wine-200">
              60min {{ $t('lasReinas.solo') }} <span class="text-white font-semibold">€100</span>
              <span class="mx-1.5 text-wine-600">·</span>
              60min {{ $t('lasReinas.couple') }} <span class="text-white font-semibold">€130</span>
            </p>
            <p class="text-xs text-wine-400 mt-1.5">
              {{ $t('lasReinas.privatesNote') }} ·
              <a
                :href="waUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gold-400 hover:text-gold-300 underline underline-offset-2"
              >
                {{ $t('lasReinas.privatesBookCta') }} →
              </a>
            </p>
          </div>

          <div class="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              :href="ticketUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-4 text-base sm:text-lg font-semibold text-wine-950 hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            >
              {{ $t('lasReinas.cta') }}
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
            {{ $t('lasReinas.credits') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
