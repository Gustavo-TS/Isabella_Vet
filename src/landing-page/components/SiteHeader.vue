<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="transparent ? 'bg-transparent' : scrolled ? 'border-b border-gold/10 bg-white/80 backdrop-blur-xl' : 'bg-transparent'"
  >
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
      <div class="flex items-center gap-4">
        <div class="group flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gold/30 bg-white/80 p-1 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-soft">
          <img :src="simboloSrc" alt="Símbolo da Isabella Tagliatti Sampaio" class="h-full w-full rounded-full object-contain transition duration-300 group-hover:scale-105" loading="eager" />
        </div>
        <div class="leading-tight">
          <div class="font-display text-2xl text-forest">Isabella Tagliatti Sampaio | CRMV-SP 66404</div>
          <div class="text-[11px] uppercase tracking-[0.35em] text-slate-500">Médica Veterinária</div>
        </div>
      </div>
      <RouterLink v-if="showCta" to="/agendamento" class="rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-forest/90 hover:shadow-soft">Agendar consulta</RouterLink>
    </nav>
  </header>
</template>

<script setup>
const simboloSrc = '/image/IM-Simbolo.png'

defineProps({
  menu: Array,
  scrolled: Boolean,
  transparent: {
    type: Boolean,
    default: false,
  },
  showCta: {
    type: Boolean,
    default: true,
  },
})
</script>
