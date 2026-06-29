<template>
  <section id="resumo" class="reveal rounded-[2rem] border border-forest/15 bg-forest p-6 shadow-soft backdrop-blur-xl">
    <div class="flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="section-kicker text-goldSoft/80">Agendamento selecionado</p>
        <h2 class="mt-2 text-2xl font-semibold text-white">{{ selectedServices.length }} item(ns)</h2>
      </div>
      <span class="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">{{ selectedServices.length }} escolhidos</span>
    </div>

    <div class="mt-6 grid gap-6">
      <div class="min-w-0 rounded-[1.5rem] border border-white/10 bg-white/10 p-4">
        <div class="mb-4 flex items-center justify-between text-sm text-white/80">
          <span>Serviços escolhidos</span>
          <span class="font-semibold text-white">{{ selectedServices.length }}</span>
        </div>

        <div class="max-h-72 overflow-y-auto pr-1" v-if="selectedServices.length">
          <ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <li v-for="item in selectedServices" :key="item.id" class="flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-white/10 p-3">
              <div class="min-w-0">
                <p class="truncate text-sm font-medium text-white">{{ item.name }}</p>
              </div>
              <button type="button" class="shrink-0 text-xs font-semibold text-goldSoft hover:text-white" @click="$emit('toggle', item)">
                Remover
              </button>
            </li>
          </ul>
        </div>

        <p v-else class="text-sm text-white/65">Nenhum serviço selecionado ainda.</p>
      </div>

      <form class="grid gap-4" @submit.prevent="$emit('send')">
        <div v-for="field in fields" :key="field.id" class="grid gap-2">
          <label :for="field.id" class="text-sm font-medium text-white">{{ field.label }}</label>
          <input
            v-if="field.type !== 'textarea' && field.type !== 'select'"
            :id="field.id"
            v-model="form[field.id]"
            :type="field.type"
            :placeholder="field.placeholder"
            class="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
          />
          <select
            v-else-if="field.type === 'select'"
            :id="field.id"
            v-model="form[field.id]"
            class="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white focus:border-gold focus:outline-none"
          >
            <option value="" class="bg-slate-950 text-white">Selecione</option>
            <option v-for="option in field.options" :key="option" :value="option" class="bg-slate-950 text-white">
              {{ option }}
            </option>
          </select>
          <textarea
            v-else
            :id="field.id"
            v-model="form[field.id]"
            :placeholder="field.placeholder"
            rows="3"
            class="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          class="mt-2 rounded-full bg-gold px-5 py-3 font-semibold text-forest transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          Enviar pelo WhatsApp
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
defineProps({
  selectedServices: Array,
  form: Object,
  fields: Array,
})

defineEmits(['toggle', 'send'])
</script>
