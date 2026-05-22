<script setup lang="ts">
const { t } = useI18n()

const ticketUrl =
  'https://www.tickettailor.com/checkout/view-event/id/8158745/chk/f2b9/?modal_widget=true&widget=true'

interface Member {
  name: string
  photo: string | null
  roleKey: string
  isAnonymous?: boolean
}

const team: Member[] = [
  { name: 'Alösha', photo: '/images/team/alosha.jpg', roleKey: 'organizer' },
  { name: 'Jenny', photo: '/images/team/jenny.jpg', roleKey: 'sponsorsPress' },
  { name: 'K', photo: null, roleKey: 'boxOfficeLegal', isAnonymous: true },
  { name: 'Michael', photo: '/images/team/michael.jpg', roleKey: 'boxOffice' },
  { name: 'Nancy', photo: '/images/team/nancy.jpg', roleKey: 'facilities' },
  { name: 'S', photo: null, roleKey: 'hospitality', isAnonymous: true },
  { name: 'Gabriela', photo: '/images/team/gabriela.jpg', roleKey: 'hospitality' },
  { name: 'Breakel', photo: '/images/team/breakel.jpg', roleKey: 'video' },
]

useSeoMeta({
  title: () => t('charangaTeam.seoTitle'),
  description: () => t('charangaTeam.seoDescription'),
  robots: 'noindex',
})
</script>

<template>
  <div class="min-h-screen bg-wine-950 text-white">
    <SiteHeader />

    <main class="pt-32 pb-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header class="max-w-2xl">
          <p class="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-gold-400">
            {{ $t('charangaTeam.eyebrow') }}
          </p>
          <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
            {{ $t('charangaTeam.title') }}
          </h1>
          <p class="mt-5 text-lg sm:text-xl text-wine-200 leading-relaxed">
            {{ $t('charangaTeam.subtitle') }}
          </p>
        </header>

        <ul class="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
          <li
            v-for="member in team"
            :key="member.name"
            class="group"
          >
            <div
              class="relative aspect-[4/5] overflow-hidden rounded-2xl border border-wine-800/40 shadow-xl shadow-black/40"
              :class="{ 'bg-wine-900 flex items-center justify-center': member.isAnonymous }"
            >
              <img
                v-if="member.photo"
                :src="member.photo"
                :alt="member.name"
                class="absolute inset-0 w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div
                v-if="member.photo"
                aria-hidden="true"
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              />
              <div
                v-if="member.isAnonymous"
                class="text-6xl sm:text-7xl font-display font-bold text-gold-400"
              >
                {{ member.name }}
              </div>
            </div>
            <h2 class="mt-4 font-display text-xl sm:text-2xl">
              {{ member.name }}
            </h2>
            <p class="mt-1 text-sm font-semibold uppercase tracking-[0.15em] text-gold-400">
              {{ $t(`charangaTeam.roles.${member.roleKey}`) }}
            </p>
          </li>
        </ul>

        <div class="mt-14">
          <a
            :href="ticketUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-full bg-gold-500 px-8 py-4 text-base sm:text-lg font-semibold text-wine-950 hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-wine-950"
          >
            {{ $t('charangaTeam.ctaTickets') }}
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
      </div>
    </main>

    <SiteFooter />
  </div>
</template>
