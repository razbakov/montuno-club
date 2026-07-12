<script setup lang="ts">
</script>

<template>
  <section
    id="paloma"
    class="py-24 sm:py-32"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="text-center mb-16">
        <p class="text-sm font-medium uppercase tracking-[0.2em] text-gold-500 mb-4">{{ $t('paloma.label') }}</p>
        <h2 class="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
          {{ $t('paloma.title1') }} <span class="text-gold-400">{{ $t('paloma.title2') }}</span>
        </h2>
      </div>

      <div class="mx-auto max-w-4xl rounded-2xl bg-wine-900/50 border border-wine-800/40 overflow-hidden">
        <div class="grid md:grid-cols-2 gap-0">
          <!-- Flyer image -->
          <div class="overflow-hidden">
            <img
              src="/images/paloma-2026-07-06.png"
              :alt="$t('paloma.imageAlt')"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Event details -->
          <div class="p-8 sm:p-10">
            <p class="text-wine-200 leading-relaxed text-lg mb-8">
              {{ $t('paloma.description') }}
            </p>

            <div class="grid sm:grid-cols-2 gap-6 mb-8">
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 mt-0.5 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span class="text-wine-200">{{ $t('paloma.date') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 mt-0.5 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-wine-200">{{ $t('paloma.time') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 mt-0.5 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="text-wine-200">{{ $t('paloma.venue') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 mt-0.5 text-gold-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span class="text-wine-200">{{ $t('paloma.entry') }}</span>
              </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div class="rounded-xl bg-wine-950/60 border border-wine-800/30 p-4 text-center">
                <svg class="w-6 h-6 mx-auto mb-2 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <p class="text-sm text-wine-200">{{ $t('paloma.highlights.workshop') }}</p>
              </div>
              <div class="rounded-xl bg-wine-950/60 border border-wine-800/30 p-4 text-center">
                <svg class="w-6 h-6 mx-auto mb-2 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                <p class="text-sm text-wine-200">{{ $t('paloma.highlights.percussion') }}</p>
              </div>
              <div class="rounded-xl bg-wine-950/60 border border-wine-800/30 p-4 text-center">
                <svg class="w-6 h-6 mx-auto mb-2 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                <p class="text-sm text-wine-200">{{ $t('paloma.highlights.animation') }}</p>
              </div>
              <div class="rounded-xl bg-wine-950/60 border border-wine-800/30 p-4 text-center">
                <svg class="w-6 h-6 mx-auto mb-2 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p class="text-sm text-wine-200">{{ $t('paloma.highlights.venue') }}</p>
              </div>
            </div>

            <!-- Schedule slots -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div class="rounded-xl bg-gold-500/10 border border-gold-500/30 p-4 text-center">
                <p class="text-sm font-semibold text-gold-300">{{ $t('paloma.slotWorkshop') }}</p>
              </div>
              <div class="rounded-xl bg-wine-950/60 border border-gold-500/20 p-4 text-center">
                <p class="text-sm font-semibold text-white">{{ $t('paloma.slotParty') }}</p>
              </div>
            </div>

            <!-- Photo & video notice (DSGVO) -->
            <div class="mt-6 rounded-xl bg-wine-950/40 border border-wine-800/40 p-4 flex items-start gap-3">
              <svg class="w-5 h-5 mt-0.5 text-gold-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p class="text-sm text-wine-200 leading-relaxed">{{ $t('paloma.photoNotice') }}</p>
            </div>

            <div class="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p class="text-sm text-wine-400">{{ $t('paloma.organizer') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
