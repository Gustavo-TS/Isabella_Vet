<template>
  <article
    class="reveal flex h-full min-h-[360px] flex-col rounded-[1.75rem] border p-5 shadow-soft transition duration-300 hover:-translate-y-1 sm:min-h-[390px] sm:p-6"
    :class="isSelected ? 'border-gold bg-forest text-white hover:bg-forest' : 'border-forest/15 bg-forest text-white hover:bg-forest/95'"
  >
    <div class="flex items-start justify-between gap-3 sm:gap-4">
      <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-white transition duration-300 sm:h-14 sm:w-14 sm:text-xl">
        {{ category.icon }}
      </div>
      <span class="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white sm:px-3 sm:text-xs">
        {{ selectedTypeNames.length }}/{{ category.types.length }}
      </span>
    </div>

    <div class="flex-1">
      <h2 class="mt-4 text-lg font-semibold text-white sm:mt-5 sm:text-xl">{{ category.name }}</h2>
      <p class="mt-2 text-sm leading-6 text-white/75">{{ category.description }}</p>

      <div v-if="selectedTypeNames.length" class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="type in selectedTypeNames"
          :key="type"
          class="rounded-full border border-gold/20 bg-gold px-3 py-1 text-xs font-semibold text-forest"
        >
          Selecionado: {{ type }}
        </span>
      </div>
    </div>

    <button
      type="button"
      class="mt-auto w-full rounded-full px-4 py-2 text-sm font-semibold transition"
      :class="expanded || isSelected ? 'bg-gold text-forest' : 'bg-white/10 text-white hover:bg-white/20'"
      @click="$emit('toggle', category)"
    >
      {{ expanded ? 'Fechar' : isSelected ? 'Selecionado' : 'Selecionar' }}
    </button>

    <transition name="fade-slide">
      <div v-if="expanded" class="mt-5 rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-4">
        <div class="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
          <div>
            <p class="text-xs uppercase tracking-[0.28em] text-goldSoft/80">Serviço selecionado</p>
            <h3 class="mt-1 text-base font-semibold text-white">{{ category.name }}</h3>
          </div>
          <span class="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white">
            {{ selectedTypeNames.length }}/{{ category.types.length }} selecionados
          </span>
        </div>

        <div class="mt-4 grid gap-2">
          <button
            v-for="type in category.types"
            :key="type"
            type="button"
            class="rounded-2xl border px-3 py-3 text-left text-sm transition"
            :class="selectedTypeNames.includes(type) ? 'border-gold bg-gold text-forest shadow-[0_0_0_1px_rgba(255,255,255,0.35)]' : 'border-white/10 bg-white/5 text-white hover:bg-white/10'"
            @click="$emit('select-type', { category, type })"
          >
            <div class="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
              <span class="min-w-0 truncate">{{ type }}</span>
              <span class="text-xs font-semibold" :class="selectedTypeNames.includes(type) ? 'text-forest' : 'text-goldSoft'">
                {{ selectedTypeNames.includes(type) ? 'Selecionado' : 'Selecionar' }}
              </span>
            </div>
          </button>
        </div>
      </div>
    </transition>
  </article>
</template>

<script setup>
defineProps({
  category: Object,
  expanded: Boolean,
  selectedTypeNames: Array,
  isSelected: Boolean,
})

defineEmits(['toggle', 'select-type'])
</script>
