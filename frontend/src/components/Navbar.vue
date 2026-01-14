<template>
  <nav class="w-full fixed top-0 left-0 z-50 bg-white/50 backdrop-blur-md shadow-sm">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      
      <!-- Logo à esquerda -->
      <div class="text-2xl font-bold text-blue-700">LinkyWise</div>

      <!-- Navegação central -->
      <div class="flex space-x-4 absolute left-1/2 transform -translate-x-1/2">
        <RouterLink
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="px-4 py-2 rounded-lg border border-blue-500 text-blue-700 text-sm font-medium transition-all hover:bg-blue-100"
          :class="{ 'bg-blue-500 text-white': $route.path === link.path }"
        >
          {{ link.label }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const links = [
  { path: '/', label: 'Accueil' },
  { path: '/projet', label: 'Projet' },
  { path: '/rgpd', label: 'RGPD' },
  { path: '/qui-sommes-nous', label: 'Qui sommes-nous' },
  { path: '/connecter', label: 'Connexion' },
  { path: '/dashboard', label: 'Dashboard' }
]
</script>
