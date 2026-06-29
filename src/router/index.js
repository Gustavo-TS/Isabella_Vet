import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../landing-page/LandingPage.vue'
import AgendamentoPage from '../agendamento/AgendamentoPage.vue'

const routes = [
  { path: '/', name: 'landing', component: LandingPage },
  { path: '/agendamento', name: 'agendamento', component: AgendamentoPage },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
