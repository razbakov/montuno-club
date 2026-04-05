<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const open = ref(false)

const currentLocale = computed(() =>
  locales.value.find((l) => (typeof l === 'string' ? l : l.code) === locale.value),
)
</script>

<template>
  <div class="relative">
    <button
      class="flex items-center gap-1 text-sm text-wine-200 hover:text-white transition-colors"
      @click="open = !open"
    >
      {{ typeof currentLocale === 'string' ? currentLocale : currentLocale?.code?.toUpperCase() }}
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <Transition
      enter-from-class="opacity-0 -translate-y-1"
      enter-active-class="transition duration-150"
      leave-to-class="opacity-0 -translate-y-1"
      leave-active-class="transition duration-100"
    >
      <div
        v-if="open"
        class="absolute right-0 mt-2 w-36 rounded-lg bg-wine-900 border border-wine-700/50 shadow-xl py-1 z-50"
      >
        <button
          v-for="loc in locales"
          :key="typeof loc === 'string' ? loc : loc.code"
          class="block w-full text-left px-4 py-2 text-sm transition-colors"
          :class="locale === (typeof loc === 'string' ? loc : loc.code) ? 'text-gold-400' : 'text-wine-200 hover:text-white hover:bg-wine-800/50'"
          @click="setLocale(typeof loc === 'string' ? loc : loc.code); open = false"
        >
          {{ typeof loc === 'string' ? loc : loc.name }}
        </button>
      </div>
    </Transition>
  </div>
</template>
