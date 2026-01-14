<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Données de consommation</h1>
    <button
      @click="getConsumption"
      class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
    >
      Charger les données
    </button>
    <div v-if="consumption" class="mt-6">
      <pre class="bg-gray-100 p-4 rounded text-sm overflow-auto">{{ consumption }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const consumption = ref(null)

async function getConsumption() {
  const token = localStorage.getItem('enedis_token')
  if (!token) {
    alert('Token non trouvé')
    return
  }

  const res = await fetch('http://localhost:3000/api/consumption', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      token,
      startDate: '2023-11-01',
      endDate: '2023-11-07',
      type: 'curve' // ou 'daily', 'max', etc.
    })
  })

  const data = await res.json()
  consumption.value = JSON.stringify(data, null, 2)
}
</script>
