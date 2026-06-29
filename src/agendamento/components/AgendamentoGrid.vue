<template>
  <div id="servicos" class="mt-8 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
    <AgendamentoCard
      v-for="category in filteredCategories"
      :key="category.id"
      :category="category"
      :is-selected="(selectedServicesByCategory[category.id] || []).length > 0"
      @toggle="$emit('toggle', $event)"
    />
  </div>
</template>

<script setup>
import AgendamentoCard from './AgendamentoCard.vue'

defineProps({
  filteredCategories: Array,
  selectedServicesByCategory: Object,
})

defineEmits(['toggle'])
</script>
