<template>
  <div class="bg-white px-6 py-12 text-gray-800">
    <section class="max-w-4xl mx-auto text-center mb-12" data-aos="fade-in">
      <h1 class="text-4xl font-bold text-blue-800 mb-4">Le projet ÉnergieConnect</h1>
      <p class="text-lg text-gray-600">Une plateforme conçue pour les citoyens, avec pour objectif de démocratiser l'accès aux données de consommation énergétique.</p>
    </section>

    <section class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto" data-aos="fade-up">
      <div class="bg-blue-50 p-6 rounded-xl shadow">
        <h3 class="text-xl font-semibold mb-2">Transparence</h3>
        <p>Vos données vous appartiennent. Notre plateforme vous donne le plein contrôle.</p>
      </div>
      <div class="bg-blue-50 p-6 rounded-xl shadow">
        <h3 class="text-xl font-semibold mb-2">Interopérabilité</h3>
        <p>Connexion avec Enedis via un protocole standard (OAuth2).</p>
      </div>
      <div class="bg-blue-50 p-6 rounded-xl shadow">
        <h3 class="text-xl font-semibold mb-2">Open Source</h3>
        <p>Le code est public et auditable sur GitHub. Participez avec nous !</p>
      </div>
    </section>

    <section class="text-center mt-16" data-aos="fade-up">
      <a
        href="https://github.com/seuprojeto"
        target="_blank"
        class="inline-block bg-gray-800 text-white px-6 py-3 rounded-full shadow hover:bg-black transition"
      >
        Voir sur GitHub
      </a>
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
