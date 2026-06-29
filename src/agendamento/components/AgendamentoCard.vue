<template>
  <article
    class="reveal flex h-full min-h-[320px] flex-col rounded-[1.75rem] border p-5 shadow-soft transition duration-300 hover:-translate-y-1 sm:min-h-[360px] sm:p-6"
    :class="isSelected ? 'border-gold bg-forest text-white hover:bg-forest' : 'border-forest/15 bg-forest text-white hover:bg-forest/95'"
  >
    <div class="flex items-start gap-3">
      <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-xl font-bold text-white">
        {{ category.icon }}
      </div>
      <div class="min-w-0">
        <p class="text-xs uppercase tracking-[0.28em] text-white/60">Serviço</p>
        <h2 class="mt-1 text-xl font-semibold text-white sm:text-2xl">{{ category.name }}</h2>
      </div>
    </div>

    <p class="mt-4 flex-1 text-sm leading-6 text-white/75">
      {{ category.description }}
    </p>

    <button
      type="button"
      class="mt-6 w-full rounded-full px-4 py-3 text-sm font-semibold transition"
      :class="isSelected ? 'bg-gold text-forest' : 'bg-white/10 text-white hover:bg-white/20'"
      @click="$emit('toggle', category)"
    >
      {{ isSelected ? 'Selecionado' : 'Selecionar' }}
    </button>
  </article>
</template>

<script setup>
defineProps({
  category: Object,
  isSelected: Boolean,
})

defineEmits(['toggle'])
</script>
