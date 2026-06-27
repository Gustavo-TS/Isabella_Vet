<template>
  <div>
    <SiteHeader :menu="menu" :scrolled="scrolled" />
    <main class="overflow-hidden">
      <HeroSection :whatsapp-link="whatsappLink" />
      <AboutSection :stats="stats" />
      <ServicesSection :services="services" />
      <ContactSection :contacts="contacts" :whatsapp-link="whatsappLink" :instagram-link="instagramLink" :address-link="addressLink" />
    </main>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'


const menu = [
  { id: 'inicio', label: 'Início', href: '#inicio' },
  { id: 'servicos', label: 'Serviços', href: '#servicos' },
  { id: 'sobre', label: 'Sobre', href: '#sobre' },
  { id: 'contato', label: 'Contato', href: '#contato' },
]

const stats = [
  { value: '7+', label: 'anos de experiência' },
  { value: '150+', label: 'pets atendidos' },
  { value: '100%', label: 'clientes satisfeitos' },
]

const services = [
  {
    title: 'Atendimento à domicílio',
    description: 'Consulta no conforto do seu lar, com acolhimento, praticidade e cuidado individualizado.',
  },
  {
    title: 'Medicamentos',
    description: 'Orientação e prescrição conforme a necessidade clínica do pet, com clareza e responsabilidade.',
  },
  {
    title: 'Vacinação',
    description: 'Aplicação de vacinas com acompanhamento cuidadoso e foco na prevenção.',
  },
  {
    title: 'Carteira de vacinação',
    description: 'Fornecimento e organização da carteira de vacinação para controle e acompanhamento.',
  },
]

const rawWhatsApp = '11940247017'
const message = encodeURIComponent(
  'Olá, Isabella! Meu nome é [SEU NOME] e gostaria de verificar a disponibilidade para um atendimento domiciliar para o meu pet.'
)
const whatsappLink = `https://wa.me/${rawWhatsApp}?text=${message}`
const instagramLink = 'https://www.instagram.com/M.V.Isabella/'
const addressLink = 'https://www.google.com/maps/search/?api=1&query=Vila+Formosa,+São+Paulo+-+SP'

const contacts = [
  { label: 'WhatsApp', value: '11 94024-7017' },
  { label: 'Instagram', value: 'M.V.Isabella' },
  { label: 'Endereço', value: 'Vila Formosa, São Paulo - SP' },
  { label: 'Disponibilidade', value: 'Verificar disponibilidade' },
]

const scrolled = ref(false)
const showTop = ref(false)
let observer = null

const updateScroll = () => {
  scrolled.value = window.scrollY > 24
  showTop.value = window.scrollY > 400
}

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

onMounted(() => {
  updateScroll()
  window.addEventListener('scroll', updateScroll, { passive: true })
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('in-view')
      })
    },
    { threshold: 0.15 }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScroll)
  observer?.disconnect?.()
})
</script>
