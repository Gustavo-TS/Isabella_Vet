<template>
  <section class="min-h-screen bg-hero px-4 pb-32 pt-20 text-slate-900 sm:px-6 lg:px-8">
    <SiteHeader :menu="[]" :scrolled="false" :transparent="true" :show-cta="false" />
    <div class="mx-auto flex max-w-7xl flex-col gap-10">
      <CatalogoHero />
      <!-- <CatalogoFilters v-model:activeFilter="activeFilter" :filters="filters" /> -->

      <CatalogoGrid
        :filtered-categories="filteredCategories"
        :expanded-category-id="expandedCategoryId"
        :selected-type-names-by-category="selectedTypeNamesByCategory"
        @toggle="toggleCategory"
        @select-type="selectType"
      />

      <CatalogoResumo :selected-services="selectedServices" :form="form" :fields="fields" @toggle="removeItem" @send="openWhatsApp" />
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import SiteHeader from '../landing-page/components/SiteHeader.vue'
import CatalogoHero from '../catalogo/components/CatalogoHero.vue'
// import CatalogoFilters from '../catalogo/components/CatalogoFilters.vue'
import CatalogoGrid from '../catalogo/components/CatalogoGrid.vue'
import CatalogoResumo from '../catalogo/components/CatalogoResumo.vue'
import { categories, filters, fields, whatsappNumber } from './catalogoData.js'

const activeFilter = ref('Todas')
const expandedCategoryId = ref('')
const selectedItems = ref([])

const form = reactive({
  tutorName: '',
  petName: '',
  species: '',
  neighborhood: '',
  bestTime: '',
  observations: '',
})

const filteredCategories = computed(() => {
  if (activeFilter.value === 'Todas') return categories
  return categories.filter((category) => category.name === activeFilter.value)
})

const selectedServices = computed(() => selectedItems.value)

const selectedTypeNamesByCategory = computed(() =>
  selectedItems.value.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item.name)
    return acc
  }, {})
)

const toggleCategory = (category) => {
  expandedCategoryId.value = expandedCategoryId.value === category.id ? '' : category.id
}

const selectType = ({ category, type }) => {
  const existing = selectedItems.value.some((item) => item.id === `${category.id}-${type}`)
  if (!existing) {
    selectedItems.value = [
      ...selectedItems.value,
      {
        id: `${category.id}-${type}`,
        name: type,
        category: category.name,
      },
    ]
  }
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
    `Meu pet é um: ${form.species || '[cao/gato]'}`,
    `Região: ${form.neighborhood || '[preencher regiao]'}`,
    `Preferência de horário: ${form.bestTime || '[preencher horario]'}`,
    `Observações: ${form.observations || '[sem observacoes]'}`,
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
