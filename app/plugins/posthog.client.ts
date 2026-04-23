import posthog from 'posthog-js'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  if (!config.public.posthogKey) return

  const client = posthog.init(config.public.posthogKey as string, {
    api_host: 'https://eu.i.posthog.com',
    capture_pageview: false,
    capture_pageleave: true,
  })

  // Capture the initial pageview. `router.afterEach` only fires on route
  // changes, so without this, bounce visitors (land once + leave) are
  // invisible in analytics — which is most of the traffic on a landing page.
  posthog.capture('$pageview')

  const router = useRouter()
  router.afterEach((to) => {
    posthog.capture('$pageview', { $current_url: to.fullPath })
  })

  return {
    provide: {
      posthog: () => client,
    },
  }
})
