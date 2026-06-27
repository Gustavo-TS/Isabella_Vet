<template>
  <section id="contato" class="relative overflow-hidden bg-forest text-white">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(201,162,74,0.12),transparent_28%)]"></div>
    <div class="absolute inset-0 opacity-[0.18]">
      <div class="absolute left-10 top-16 h-px w-56 bg-gradient-to-r from-transparent via-white to-transparent"></div>
      <div class="absolute right-16 top-28 h-px w-40 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      <div class="absolute bottom-16 left-1/3 h-px w-64 bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>
      <div class="absolute -right-10 top-1/3 h-44 w-44 rounded-full border border-white/10"></div>
      <div class="absolute bottom-8 left-8 h-24 w-24 rounded-full border border-gold/10"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div class="reveal rounded-[2.5rem] border border-white/10 bg-white/6 p-8 shadow-[0_24px_90px_rgba(0,0,0,0.2)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-gold/25">
        <div class="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          <div>
            <p class="text-xs uppercase tracking-[0.38em] text-white/60">Atendimento Personalizado</p>
            <h2 class="mt-6 max-w-xl font-display text-5xl leading-tight text-white sm:text-6xl">
              Atendimento domiciliar com toda a delicadeza que seu pet merece.
            </h2>
            <p class="mt-6 text-lg leading-8 text-white/78">
              Realizo atendimento veterinário domiciliar para proporcionar mais conforto, tranquilidade e segurança ao seu pet. Entre em contato para verificar a disponibilidade de horários e região atendida.
            </p>


            <div class="mt-5 flex flex-col gap-4 sm:flex-row">
              <a
                :href="whatsappLink"
                target="_blank"
                rel="noopener noreferrer"
                class="group mt-4 inline-flex items-center gap-3 rounded-full border border-gold/15 bg-white px-4 py-2 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-soft"
              >
                <img src="/image/whatsapp.png" alt="WhatsApp" class="h-5 w-5 object-contain transition duration-300 group-hover:scale-110" loading="lazy" />
                <span class="text-sm font-medium text-forest">Agendar pelo WhatsApp</span>
              </a>
              <a
                :href="instagramLink"
                target="_blank"
                rel="noopener noreferrer"
                class="group mt-4 inline-flex items-center gap-3 rounded-full border border-gold/15 bg-white px-4 py-2 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-soft"
              >
                <img src="/image/instagram.png" alt="Instagram" class="h-5 w-5 object-contain transition duration-300 group-hover:scale-110" loading="lazy" />
                <span class="text-sm font-medium text-forest">Agendar pelo Instagram</span>
              </a>
            </div>

            <p class="mt-8 max-w-xl text-sm uppercase tracking-[0.28em] text-white/60">
              Estou pronta para cuidar do seu melhor amigo no conforto da sua casa.
            </p>
          </div>

          <div class="grid gap-4">
            <article
              v-for="(card, index) in cards"
              :key="card.title"
              class="reveal group rounded-[1.9rem] border border-white/10 bg-white/6 p-5 shadow-[0_16px_50px_rgba(0,0,0,0.15)] backdrop-blur-md transition duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-gold/25 hover:shadow-[0_0_0_1px_rgba(201,162,74,0.26),0_18px_40px_rgba(0,0,0,0.18)]"
              :style="{ transitionDelay: `${index * 70}ms` }"
            >
              <div class="flex items-start gap-4">
                <div class="min-w-0">
                  <p class="text-xs uppercase tracking-[0.34em] text-white/55">{{ card.label }}</p>
                  <h3 class="mt-2 font-display text-3xl text-white">{{ card.title }}</h3>
                  <p class="mt-3 text-sm leading-7 text-white/72">{{ card.description }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  whatsappLink: String,
  instagramLink: String,
  addressLink: String,
})

// const chips = ['Atendimento humanizado', 'Menos estresse para o pet', 'Horário agendado']

const cards = [
  {
    label: 'Disponibilidade',
    title: 'Consultar horários disponíveis',
    description: 'Entre em contato para verificar os horários e alinhar a melhor visita para o seu pet.',
  },
  {
    label: 'Atendimento',
    title: 'Consultas veterinárias em domicílio',
    description: 'Consulta no conforto da sua casa, priorizando segurança, acolhimento e tranquilidade.',
  },
  {
    label: 'Compromisso',
    title: 'Cuidado individualizado para cada paciente',
    description: 'Atendimento personalizado, com atenção às necessidades específicas de cada animal.',
  },
]
</script>
