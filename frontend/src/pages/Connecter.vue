<template>
<div>
<h1>Connexion</h1>
<p>Connexion sécurisée via Enedis</p>
<p>Nous ne demandons jamais votre mot de passe Enedis</p>
<p>Consentement révocable à tout moment</p>
<button @click="connect">Se connecter avec Enedis</button>
</div>
</template>


<script setup>
function connect() {
window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/enedis/start`
}
</script>
