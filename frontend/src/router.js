import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import QuiSommesNous from './pages/QuiSommesNous.vue'
import Projet from './pages/Projet.vue'
import RGPD from './pages/RGPD.vue'
import Connecter from './pages/Connecter.vue'
import Dashboard from './pages/Dashboard.vue'


const routes = [
{ path: '/', component: Home },
{ path: '/qui-sommes-nous', component: QuiSommesNous },
{ path: '/projet', component: Projet },
{ path: '/rgpd', component: RGPD },
{ path: '/connecter', component: Connecter },
{ path: '/dashboard', component: Dashboard }
]


export default createRouter({
history: createWebHistory(),
routes
})
