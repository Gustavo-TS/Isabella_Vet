<template>
  <section id="sobre" class="bg-forest/3">
    <div class="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
      <div class="reveal group">
        <h2 class="mt-3 font-display text-5xl text-forest">Sobre-mim</h2>
        <br />
        <div class="premium-card overflow-hidden p-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-glow">
          <div class="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] border border-gold/20 bg-white">
            <img :src="fotoVetSrc" alt="Foto da veterinária Isabella Tagliatti Sampaio" class="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]" loading="lazy" />
          </div>
        </div>
      </div>
      <div class="reveal flex flex-col justify-center">
        <h2 class="mt-3 font-display text-5xl text-forest">Cada animal merece um atendimento único.</h2>
        <p class="mt-6 max-w-xl text-lg leading-8 text-slate-600">Médica Veterinária formada pela Universidade São Judas Tadeu, com pós-graduação em Clínica Médica e Cirurgia de Pequenos Animais. Atuo com dedicação, ética e atendimento humanizado, priorizando a saúde, o bem-estar e a qualidade de vida dos animais por meio de um cuidado individualizado e baseado em evidências.</p>
        <div class="mt-10 grid gap-4 sm:grid-cols-3">
          <div v-for="stat in stats" :key="stat.label" class="premium-card p-6 text-center transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-glow">
            <div class="text-3xl font-semibold text-forest">{{ stat.value }}</div>
            <div class="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const fotoVetSrc = '/image/Foto_vet.jpeg'

defineProps({ stats: Array })
</script>
