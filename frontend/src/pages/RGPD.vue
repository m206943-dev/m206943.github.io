<template>
  <div class="bg-white px-6 py-12 text-gray-800">
    <section class="max-w-4xl mx-auto text-center mb-10" data-aos="fade-in">
      <h1 class="text-4xl font-bold text-blue-800 mb-4">Données & RGPD</h1>
      <p class="text-lg text-gray-600">Votre consentement est essentiel. Voici comment nous respectons vos droits.</p>
    </section>

    <section class="max-w-3xl mx-auto bg-gray-50 p-6 rounded-xl shadow" data-aos="fade-up">
      <h3 class="text-xl font-semibold mb-4">Engagements</h3>
      <ul class="list-disc list-inside text-gray-700 space-y-2">
        <li>Nous ne stockons que les données nécessaires à l’affichage de votre consommation.</li>
        <li>Votre consentement est demandé avant toute connexion Enedis.</li>
        <li>Vous pouvez supprimer vos données à tout moment.</li>
      </ul>
    </section>

    <section class="text-center mt-10" data-aos="zoom-in">
      <router-link
        to="/connecter"
        class="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
      >
        Gérer mon consentement
      </router-link>
    </section>
  </div>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'

onMounted(() => {
  AOS.init()
})
</script>
