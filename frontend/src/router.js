import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Projet from './pages/Projet.vue'
import RGPD from './pages/RGPD.vue'
import QuiSommesNous from './pages/QuiSommesNous.vue'
import Connecter from './pages/Connecter.vue'
import Dashboard from './pages/Dashboard.vue'
import Callback from './pages/Callback.vue' 

const routes = [
  { path: '/', component: Home },
  { path: '/projet', component: Projet },
  { path: '/rgpd', component: RGPD },
  { path: '/qui-sommes-nous', component: QuiSommesNous },
  { path: '/connecter', component: Connecter },
  { path: '/dashboard', component: Dashboard },
  { path: '/callback', component: Callback }, 
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
