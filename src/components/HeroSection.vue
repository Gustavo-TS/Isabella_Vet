<template>
  <section id="inicio" class="bg-hero pt-32">
    <div class="mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-10 lg:grid-cols-2 lg:px-8 lg:py-24">
      <div class="reveal flex flex-col justify-center">
        <p class="section-kicker mb-4">Atendimento Premium e Humanizado</p>
        <h1 class="font-display text-6xl leading-none text-forest sm:text-7xl">Isabella Tagliatti Sampaio </h1>
        <p class="mt-4 text-lg uppercase tracking-[0.25em] text-gold">Médica Veterinária</p>
        <p class="mt-8 max-w-xl text-lg leading-8 text-slate-600">Um atendimento delicado, sofisticado e verdadeiramente acolhedor, pensado para cuidar do seu pet com atenção individual, escuta e excelência clínica.</p>
        <div class="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div v-for="item in pills" :key="item.title" class="premium-card p-5">
            <div class="flex items-center gap-3">
              <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest/10 text-forest">{{ item.icon }}</div>
              <h3 class="text-sm font-semibold uppercase tracking-[0.18em] text-forest">{{ item.title }}</h3>
            </div>
            <p class="mt-4 text-sm leading-7 text-slate-600">{{ item.description }}</p>
          </div>
        </div>
      </div>
      <div class="reveal relative">
        <div class="absolute -left-6 top-8 h-24 w-24 rounded-full border border-gold/20"></div>
        <div class="absolute -bottom-4 right-4 h-32 w-32 rounded-full bg-gold/10 blur-2xl"></div>
        <div class="glass-panel mask-organic relative overflow-hidden p-4">
          <div class="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] border border-gold/20 bg-gradient-to-br from-forest/5 via-white to-gold/10 p-4">
            <img :src="fotoVetSrc" alt="Foto da veterinária Isabella Tagliatti Sampaio" class="h-full w-full rounded-[1.5rem] object-cover" loading="eager" />
          </div>
          <div class="gold-line mt-4 h-px"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ whatsappLink: String })

const fotoVetSrc = '/image/Foto-vet-dog.jpeg'

</script>
