<template>
  <div class="min-h-screen flex items-center justify-center">
    <p class="text-lg text-gray-700">Connexion en cours...</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  // Pega o token da hash da URL
  const hashParams = new URLSearchParams(window.location.hash.slice(1))
  const token = hashParams.get('token')

  if (token) {
    localStorage.setItem('enedis_token', token)
    router.push('/dashboard')
  } else {
    alert("Erreur : Token non reçu")
    router.push('/')
  }
})
</script>
