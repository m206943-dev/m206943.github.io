<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-4xl font-bold text-blue-700 mb-6">
        Connexion sécurisée à votre compte Enedis
      </h1>
      <p class="text-lg text-gray-700 mb-10">
        En quelques étapes simples, connectez votre compte et accédez à vos données de consommation.
      </p>

      <!-- Étapes -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 class="font-bold text-blue-600 text-xl mb-2">1. Cliquez sur le bouton</h3>
          <p class="text-gray-600">Lancez le processus sécurisé d'autorisation avec Enedis.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 class="font-bold text-blue-600 text-xl mb-2">2. Autorisez l'accès</h3>
          <p class="text-gray-600">Connectez-vous à Enedis et donnez votre consentement temporaire.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 class="font-bold text-blue-600 text-xl mb-2">3. Visualisez vos données</h3>
          <p class="text-gray-600">Vous serez redirigé vers votre tableau de bord avec les données chargées.</p>
        </div>
      </div>

      <!-- Bouton de connexion -->
      <button
        @click="connectToEnedis"
        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg text-lg"
      >
        Se connecter à Enedis
      </button>

      <p class="text-sm text-gray-500 mt-6">
        Vos données sont traitées en toute confidentialité et selon la réglementation RGPD.
      </p>
    </div>
  </div>
</template>

<script setup>
const clientId = 'linky-app' // proxy já aceita esse ID
const redirectUri = 'http://localhost:5173/callback' // Substitua pelo domínio final em produção

function connectToEnedis() {
  const authUrl = `https://conso.boris.sh`
  window.location.href = authUrl
}
</script>
