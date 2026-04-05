<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy — Montuno Club',
  description: 'Privacy policy for montuno.club — how we handle your data.',
  robots: 'noindex',
})
</script>

<template>
  <div class="min-h-screen bg-wine-950 text-white">
    <SiteHeader />

    <main class="pt-32 pb-24">
      <div class="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 class="font-display text-3xl sm:text-4xl mb-8">Privacy Policy</h1>

        <div class="space-y-8 text-wine-200">
          <section>
            <h2 class="text-xl font-semibold text-white mb-3">Overview</h2>
            <p class="leading-relaxed">
              Montuno Club ("we", "us") operates the website montuno.club. This page
              informs you about how we collect, use, and protect your personal data when
              you visit our website.
            </p>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-white mb-3">Responsible Party</h2>
            <p class="leading-relaxed">
              Aleksey Razbakov<br />
              Adalbertstr 41a<br />
              80799 Munich, Germany<br />
              alex@montuno.club
            </p>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-white mb-3">Data We Collect</h2>
            <p class="leading-relaxed">
              When you visit montuno.club, our hosting provider may collect standard
              server log data (IP address, browser type, pages visited, timestamps).
              This data is used solely for technical operation and security of the website.
            </p>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-white mb-3">Third-Party Services</h2>
            <p class="leading-relaxed">
              Our website uses Google Fonts to display text. When you load a page,
              your browser connects to Google servers to fetch font files. Google may
              process your IP address in this context. See
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" class="text-gold-400 hover:text-gold-300 underline">Google's Privacy Policy</a>
              for details.
            </p>
            <p class="mt-3 leading-relaxed">
              Links to WeDance, WhatsApp, Instagram, and Facebook are external services
              with their own privacy policies.
            </p>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-white mb-3">Analytics</h2>
            <p class="leading-relaxed">
              We use PostHog for anonymous usage analytics to understand how visitors
              interact with our website. PostHog may set cookies to distinguish unique
              visitors. No personally identifiable information is collected. Data is
              processed on EU servers. See
              <a href="https://posthog.com/privacy" target="_blank" rel="noopener" class="text-gold-400 hover:text-gold-300 underline">PostHog's Privacy Policy</a>
              for details.
            </p>
          </section>

          <section>
            <h2 class="text-xl font-semibold text-white mb-3">Your Rights (GDPR)</h2>
            <p class="leading-relaxed">
              Under EU General Data Protection Regulation, you have the right to access,
              rectify, delete, restrict, or port your personal data. You also have the
              right to object to processing and to lodge a complaint with a supervisory
              authority. Contact us at alex@montuno.club for any data-related requests.
            </p>
          </section>

          <section>
            <p class="text-sm text-wine-400">Last updated: April 2026</p>
          </section>
        </div>
      </div>
    </main>

    <SiteFooter />
  </div>
</template>
