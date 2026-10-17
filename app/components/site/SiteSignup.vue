<script setup lang="ts">
import type { SiteSection } from '~/composables/useWeDanceSite'
// People who sign up here land in MontunoClub's contacts on WeDance.
defineProps<{ section: SiteSection; contactsUrl: string; tinted?: boolean }>()
</script>

<template>
  <SiteBlock :anchor="section.anchor" :tinted="tinted" width="max-w-3xl text-center">
    <SiteHeading :eyebrow="section.eyebrow" :title="section.title" :accent="section.titleAccent" size="text-4xl sm:text-5xl leading-tight" />
    <SiteParagraphs :body="section.body" class="mt-6" p-class="text-lg text-wine-200" />
    <div class="mt-10">
      <EmailCaptureForm :contacts-url="contactsUrl" />
    </div>
  </SiteBlock>
</template>
