<template>
  <footer class="border-t border-gold/10 bg-white">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-4 lg:px-8">
      <div>
        <div class="group mt-3 max-w-[220px] overflow-hidden rounded-2xl border border-gold/15 bg-white p-2 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-soft">
          <img :src="simboloSrc" alt="Logo Isabella Tagliatti Sampaio" class="h-auto w-full rounded-xl object-contain transition duration-300 group-hover:scale-[1.02]" loading="lazy" />
        </div>
        <div class="group mt-4 inline-flex items-center gap-3 rounded-full border border-gold/15 bg-white px-4 py-2 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-soft">
          <img src="/image/instagram.png" alt="Instagram" class="h-5 w-5 object-contain transition duration-300 group-hover:scale-110" loading="lazy" />
          <span class="text-sm font-medium text-forest">Ver perfil</span>
        </div>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-[0.22em] text-forest">Contato</h3>
        <ul class="mt-4 space-y-3 text-sm text-slate-600">
          <li><a :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="transition duration-300 hover:text-forest hover:underline">[WHATSAPP]</a></li>
          <li><a :href="addressLink" target="_blank" rel="noopener noreferrer" class="transition duration-300 hover:text-forest hover:underline">[ENDEREÇO]</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-[0.22em] text-forest">Disponibilidade</h3>
        <p class="mt-4 text-sm leading-7 text-slate-600">Verificar disponibilidade</p>
        <p class="mt-6 text-xs uppercase tracking-[0.2em] text-slate-400">© 2026 Isabella Tagliatti Sampaio | CRMV-SP 66404. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const simboloSrc = '/image/IM-Logo.jpg'

defineProps({
  menu: Array,
  whatsappLink: String,
  instagramLink: String,
  addressLink: String,
})
</script>
