<template>
  <section class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24 px-4 text-center">
    <h1 class="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
      Bem-vindo ao nosso site!
    </h1>
    <p class="text-lg md:text-xl opacity-90">
      Conectando-se à Enedis de forma simples e rápida.
    </p>
  </section>
</template>

<style>
@keyframes fade-in {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}
</style>
