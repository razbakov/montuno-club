<script setup lang="ts">
import type { SiteSection } from '~/composables/useWeDanceSite'
// One message with a button (WhatsApp group, tickets, Instagram…).
defineProps<{ section: SiteSection; tinted?: boolean }>()
</script>

<template>
  <SiteBlock :anchor="section.anchor" :tinted="tinted" width="max-w-3xl text-center">
    <SiteHeading :eyebrow="section.eyebrow" :title="section.title" :accent="section.titleAccent" size="text-4xl sm:text-5xl leading-tight" />
    <SiteParagraphs :body="section.body" class="mt-6" p-class="text-lg text-wine-200" />
    <div v-if="section.buttons?.length" class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        v-for="(b, i) in section.buttons"
        :key="i"
        v-bind="linkAttrs(b.url)"
        :class="i === 0
          ? 'rounded-full bg-gold-500 px-8 py-4 text-lg font-semibold text-wine-950 hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20'
          : 'rounded-full border border-wine-600 px-8 py-4 text-wine-200 hover:border-gold-500/50 hover:text-white transition-colors'"
      >
        {{ b.label }}
      </a>
    </div>
  </SiteBlock>
</template>
