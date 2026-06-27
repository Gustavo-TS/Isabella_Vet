<template>
  <section id="servicos" class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
    <div class="reveal mb-12">
      <h2 class="mt-3 font-display text-5xl text-forest">Cuidado completo</h2>
    </div>
    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <article v-for="service in services" :key="service.title" class="reveal premium-card group p-7 transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-glow">
        <h3 class="mt-5 text-xl font-semibold text-forest">{{ service.title }}</h3>
        <p class="mt-3 text-sm leading-7 text-slate-600">{{ service.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
defineProps({ services: Array })
</script>
