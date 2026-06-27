<template>
  <div id="servicos" class="mt-8 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
    <ServiceCard
      v-for="category in filteredCategories"
      :key="category.id"
      :category="category"
      :expanded="expandedCategoryId === category.id"
      :selected-type-names="selectedTypeNamesByCategory[category.id] || []"
      :is-selected="(selectedTypeNamesByCategory[category.id] || []).length > 0"
      @toggle="$emit('toggle', $event)"
      @select-type="$emit('select-type', $event)"
    />
  </div>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue'

defineProps({
  filteredCategories: Array,
  expandedCategoryId: String,
  selectedTypeNamesByCategory: Object,
})

defineEmits(['toggle', 'select-type'])
</script>
