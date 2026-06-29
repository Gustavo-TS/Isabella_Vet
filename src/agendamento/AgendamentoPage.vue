<template>
  <section class="reveal min-h-screen bg-hero px-4 pb-32 pt-20 text-slate-900 sm:px-6 lg:px-8">
    <div class="mx-auto mb-6 flex max-w-7xl">
      <RouterLink to="/" class="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-forest px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
        <span aria-hidden="true">←</span>
        Voltar
      </RouterLink>
    </div>

    <div class="mx-auto flex max-w-7xl flex-col gap-10">
      <AgendamentoHero />
      <AgendamentoGrid
        :filtered-categories="filteredCategories"
        :selected-services-by-category="selectedServicesByCategory"
        @toggle="toggleCategory"
      />

      <AgendamentoResumo
        :selected-services="selectedServices"
        :form="form"
        :fields="fields"
        @toggle="removeItem"
        @send="openWhatsApp"
      />
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import AgendamentoHero from './components/AgendamentoHero.vue'
import AgendamentoGrid from './components/AgendamentoGrid.vue'
import AgendamentoResumo from './components/AgendamentoResumo.vue'
import { categories, fields, whatsappNumber } from './agendamentoData.js'

const selectedItems = ref([])

const form = reactive({
  tutorName: '',
  petName: '',
  species: '',
  neighborhood: '',
  bestTime: '',
  observations: '',
})

const filteredCategories = computed(() => categories)
const selectedServices = computed(() => selectedItems.value)

const selectedServicesByCategory = computed(() =>
  selectedItems.value.reduce((acc, item) => {
    acc[item.id] = [item.name]
    return acc
  }, {})
)

const toggleCategory = (category) => {
  const existing = selectedItems.value.some((item) => item.id === category.id)
  if (existing) {
    selectedItems.value = selectedItems.value.filter((item) => item.id !== category.id)
    return
  }

  selectedItems.value = [
    ...selectedItems.value,
    {
      id: category.id,
      name: category.name,
    },
  ]
}

const removeItem = (item) => {
  selectedItems.value = selectedItems.value.filter((entry) => entry.id !== item.id)
}

const buildMessage = () => {
  const selected = selectedServices.value.map((item) => `- ${item.name}`).join('\n')
  const lines = [
    'Olá, tudo bem? Gostaria de verificar a disponibilidade para os seguintes serviços:',
    '',
    selected || '- Nenhum serviço selecionado',
    '',
    `Meu nome é: ${form.tutorName || '[não informado]'}`,
    `Nome do pet: ${form.petName || '[não informado]'}`,
    `Meu pet é um: ${form.species || '[cão/gato]'}`,
    `Região: ${form.neighborhood || '[preencher região]'}`,
    `Preferência de horário: ${form.bestTime || '[preencher horário]'}`,
    `Observações: ${form.observations || '[sem observações]'}`,
    '',
    'Aguardo retorno. Obrigado(a)!',
  ]
  return lines.join('\n')
}

const whatsappLink = computed(() => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildMessage())}`)

const openWhatsApp = () => {
  window.open(whatsappLink.value, '_blank', 'noopener,noreferrer')
}

let observer = null

onMounted(() => {
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
  observer?.disconnect?.()
})
</script>
