<script setup lang="ts">
const { t } = useI18n()
const mobileOpen = ref(false)

const links = computed(() => [
  { label: t('nav.about'), href: '#about' },
  { label: t('nav.expect'), href: '#expect' },
  { label: t('nav.faq'), href: '#faq' },
  { label: t('nav.location'), href: '#location' },
])
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-wine-950/95 backdrop-blur-sm border-b border-wine-800/50">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16">
      <a href="/" class="flex items-center gap-2" aria-label="Montuno Club home">
        <img src="/logo-white.png" alt="Montuno Club" class="h-8" />
      </a>

      <nav class="hidden md:flex items-center gap-8">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm text-wine-200 hover:text-white transition-colors"
        >
          {{ link.label }}
        </a>
        <LangSwitcher />
        <a
          href="https://chat.whatsapp.com/K5Iy5CkTonv5ady2v91b8t"
          target="_blank"
          rel="noopener"
          class="rounded-full bg-gold-500 px-5 py-2 text-sm font-semibold text-wine-950 hover:bg-gold-400 transition-colors"
        >
          {{ $t('nav.joinWhatsApp') }}
        </a>
      </nav>

      <div class="flex items-center gap-3 md:hidden">
        <LangSwitcher />
        <button
          class="text-white p-2"
          aria-label="Toggle menu"
          @click="mobileOpen = !mobileOpen"
        >
          <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <Transition
      enter-from-class="opacity-0 -translate-y-2"
      enter-active-class="transition duration-200"
      leave-to-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150"
    >
      <div v-if="mobileOpen" class="md:hidden bg-wine-950 border-t border-wine-800/50 px-4 pb-4">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="block py-3 text-wine-200 hover:text-white transition-colors"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </a>
        <a
          href="https://chat.whatsapp.com/K5Iy5CkTonv5ady2v91b8t"
          target="_blank"
          rel="noopener"
          class="mt-2 block text-center rounded-full bg-gold-500 px-5 py-3 font-semibold text-wine-950 hover:bg-gold-400 transition-colors"
          @click="mobileOpen = false"
        >
          {{ $t('nav.joinWhatsApp') }}
        </a>
      </div>
    </Transition>
  </header>
</template>
