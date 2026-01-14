<template>
  <div class="bg-white text-gray-800 px-6 py-12">
    <section class="max-w-4xl mx-auto text-center mb-12" data-aos="fade-in">
      <h1 class="text-4xl font-bold text-blue-800 mb-4">Qui sommes-nous ?</h1>
      <p class="text-lg text-gray-600">Nous sommes une équipe passionnée par l'énergie, la transparence et la technologie.</p>
    </section>

    <section class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" data-aos="fade-up">
      <div class="bg-gray-50 p-6 rounded-xl shadow">
        <h3 class="text-xl font-semibold mb-2">Notre mission</h3>
        <p>Rendre l'accès aux données énergétiques simple, sécurisé et accessible à tous, en respectant la vie privée.</p>
      </div>
      <div class="bg-gray-50 p-6 rounded-xl shadow">
        <h3 class="text-xl font-semibold mb-2">Nos valeurs</h3>
        <ul class="list-disc list-inside text-gray-700">
          <li>Transparence</li>
          <li>Sécurité</li>
          <li>Autonomie</li>
        </ul>
      </div>
    </section>

    <section class="text-center mt-16" data-aos="fade-up">
      <h2 class="text-2xl font-semibold text-blue-700 mb-2">Restons en contact</h2>
      <p class="mb-4">contact@energieconnect.fr</p>
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
