import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../landing-page/LandingPage.vue'
import CatalogoPage from '../catalogo/CatalogoPage.vue'

const routes = [
  { path: '/', name: 'landing', component: LandingPage },
  { path: '/catalogo', name: 'catalogo', component: CatalogoPage },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
