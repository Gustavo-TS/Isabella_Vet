<template>
  <div class="reveal rounded-[2rem] border border-forest/15 bg-forest p-4 shadow-soft backdrop-blur-xl sm:p-5">
    <div class="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <button
        v-for="chip in filters"
        :key="chip"
        type="button"
        @click="setFilter(chip)"
        class="shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition"
        :class="chip === activeFilter ? 'bg-gold text-forest' : 'bg-white/10 text-white/85 hover:bg-white/15'"
      >
        {{ chip }}
      </button>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['update:activeFilter'])

defineProps({
  filters: Array,
  activeFilter: String,
})

const setFilter = (chip) => {
  emit('update:activeFilter', chip)
}
</script>
