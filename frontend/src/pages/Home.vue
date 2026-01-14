<template>
  <div class="bg-white text-gray-800">

    <!-- HERO SECTION -->
    <section class="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-blue-100 to-white" data-aos="fade-in">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 text-blue-800">Votre consommation d'énergie, en toute sécurité.</h1>
      <p class="text-lg md:text-xl max-w-2xl mb-6">Connectez votre compte Enedis sans partager votre mot de passe. Visualisez vos données, contrôlez vos autorisations, restez maître de votre énergie.</p>
      <router-link
        to="/connecter"
        class="bg-blue-600 text-white px-8 py-3 rounded-full text-lg shadow-md hover:bg-blue-700 transition"
      >
        Se connecter avec Enedis
      </router-link>
    </section>

    <!-- PROOF / TRUST -->
    <section class="bg-white py-10 text-center" data-aos="fade-up">
      <p class="text-sm text-gray-500 uppercase tracking-widest mb-2">Connexion sécurisée</p>
      <h2 class="text-2xl font-semibold mb-4">Plus de 10 000 utilisateurs nous font confiance</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Enedis_logo_2016.svg/2560px-Enedis_logo_2016.svg.png" alt="Logo Enedis" class="w-48 mx-auto grayscale hover:grayscale-0 transition duration-300">
    </section>

    <!-- FONCTIONNALITÉS -->
    <section class="py-16 bg-gray-50">
      <h2 class="text-3xl font-bold text-center text-blue-700 mb-12" data-aos="fade-down">Fonctionnalités clés</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up">
          <h3 class="text-xl font-semibold mb-2">Connexion Enedis</h3>
          <p class="text-gray-600">Accédez à vos données via OAuth2 sécurisé sans fournir vos identifiants.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="100">
          <h3 class="text-xl font-semibold mb-2">Dashboard intuitif</h3>
          <p class="text-gray-600">Visualisez votre consommation en temps réel avec des graphiques simples et clairs.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="200">
          <h3 class="text-xl font-semibold mb-2">Contrôle RGPD</h3>
          <p class="text-gray-600">Vous pouvez révoquer l’accès à vos données à tout moment. Zéro collecte cachée.</p>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="py-16 bg-white text-center px-6" data-aos="fade-up">
      <h2 class="text-3xl font-bold text-blue-700 mb-10">Comment ça marche ?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-left max-w-5xl mx-auto">
        <div>
          <h4 class="text-lg font-semibold mb-2">1. Connexion sécurisée</h4>
          <p>Vous êtes redirigé vers Enedis pour autoriser l'accès à vos données.</p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-2">2. Visualisation</h4>
          <p>Vous accédez à un tableau de bord personnalisé avec vos données.</p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-2">3. Contrôle & confidentialité</h4>
          <p>Vous pouvez à tout moment supprimer l'accès ou effacer vos données.</p>
        </div>
      </div>
    </section>

    <!-- RGPD CTA -->
    <section class="bg-blue-50 py-16 text-center px-6" data-aos="zoom-in">
      <h2 class="text-2xl font-bold mb-4">Vos données sont protégées.</h2>
      <p class="text-gray-700 mb-6">Nous respectons strictement le RGPD. Votre consentement est requis et révocable à tout moment.</p>
      <router-link
        to="/rgpd"
        class="inline-block bg-blue-700 text-white px-6 py-3 rounded-full shadow hover:bg-blue-800 transition"
      >
        En savoir plus sur la RGPD
      </router-link>
    </section>

    <!-- TESTIMONIALS -->
    <section class="py-16 bg-white" data-aos="fade-up">
      <h2 class="text-2xl font-bold text-center mb-8">Témoignages</h2>
      <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div class="bg-gray-50 p-6 rounded-xl shadow">
          <p>"Simple, rapide, et sécurisé. Je gère enfin ma consommation facilement !"</p>
          <span class="block mt-4 text-sm text-gray-600">— Claire D., Lyon</span>
        </div>
        <div class="bg-gray-50 p-6 rounded-xl shadow">
          <p>"J'adore le fait qu'on ne demande jamais mon mot de passe Enedis."</p>
          <span class="block mt-4 text-sm text-gray-600">— Marc T., Marseille</span>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-gray-100 text-sm text-gray-600 py-8 px-4 text-center">
      <p>&copy; 2026 ÉnergieConnect - Tous droits réservés.</p>
      <div class="flex justify-center gap-4 mt-2">
        <router-link to="/rgpd" class="hover:underline">Politique RGPD</router-link>
        <router-link to="/projet" class="hover:underline">À propos du projet</router-link>
        <a href="https://github.com/votre-repo" target="_blank" class="hover:underline">GitHub</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'

onMounted(() => {
  AOS.init({
    duration: 800,
    once: false,
  })
})
</script>
