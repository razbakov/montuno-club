<script setup lang="ts">
const props = defineProps<{
  url: string
  size?: number
}>()

const qrSize = computed(() => props.size || 200)

// Use QR Server API for reliable QR generation
const qrImageUrl = computed(() => {
  const encoded = encodeURIComponent(props.url)
  return `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize.value}x${qrSize.value}&data=${encoded}&format=svg&margin=0`
})
</script>

<template>
  <img
    :src="qrImageUrl"
    :alt="`QR code for ${url}`"
    :width="qrSize"
    :height="qrSize"
    class="block"
    loading="eager"
  />
</template>
