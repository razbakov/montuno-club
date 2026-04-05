<script setup lang="ts">
useSeoMeta({
  title: 'Impressum — Montuno Club',
  description: 'Legal disclosure (Impressum) for Montuno Club, a free Salsa Cubana community in Munich.',
  robots: 'noindex',
})
</script>

<template>
  <div class="min-h-screen bg-wine-950 text-white">
    <SiteHeader />

    <main class="pt-32 pb-24">
      <div class="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 class="font-display text-3xl sm:text-4xl mb-8">Impressum</h1>

        <div class="prose prose-invert prose-wine max-w-none space-y-6 text-wine-200">
          <h2 class="text-xl font-semibold text-white">Angaben gem. &sect; 5 TMG</h2>
          <p>
            Aleksey Razbakov<br />
            Adalbertstr 41a<br />
            80799 Munich, Germany
          </p>

          <h2 class="text-xl font-semibold text-white">Kontakt</h2>
          <p>
            E-Mail: alex@montuno.club
          </p>

          <h2 class="text-xl font-semibold text-white">Verantwortlich f&uuml;r den Inhalt gem. &sect; 55 Abs. 2 RSt&sect;</h2>
          <p>
            Aleksey Razbakov<br />
            Adalbertstr 41a<br />
            80799 Munich, Germany
          </p>

          <h2 class="text-xl font-semibold text-white">Haftungsausschluss</h2>
          <p>
            Trotz sorgf&auml;ltiger inhaltlicher Kontrolle &uuml;bernehmen wir keine Haftung
            f&uuml;r die Inhalte externer Links. F&uuml;r den Inhalt der verlinkten Seiten
            sind ausschlie&szlig;lich deren Betreiber verantwortlich.
          </p>
        </div>
      </div>
    </main>

    <SiteFooter />
  </div>
</template>
