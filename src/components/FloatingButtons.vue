<template>
  <div>
    <a href="[WHATSAPP]" class="fixed bottom-6 right-6 z-50 rounded-full bg-forest px-5 py-4 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-forest/90 hover:shadow-soft">
      WhatsApp
    </a>
    <button v-show="showTop" @click="$emit('top')" class="fixed bottom-6 left-6 z-50 rounded-full border border-gold/20 bg-white px-4 py-3 text-sm font-semibold text-forest shadow-soft transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-glow">
      Topo
    </button>
  </div>
</template>

<script setup>
defineProps({ showTop: Boolean })
defineEmits(['top'])
</script>
