export const whatsappNumber = '11940247017'

export const categories = [
  {
    id: 'consultas',
    name: 'Consultas',
    icon: '🩺',
    description: 'Atendimentos gerais e avaliações clínicas.',
  },
  {
    id: 'vacinas',
    name: 'Vacinas',
    icon: '💉',
    description: 'Vacinação e reforço imunológico.',
  },
  {
    id: 'exames',
    name: 'Exames',
    icon: '🧪',
    description: 'Apoio diagnóstico e coletas.',
  },
  {
    id: 'procedimentos',
    name: 'Procedimentos',
    icon: '🩹',
    description: 'Procedimentos simples e cuidados pontuais.',
  },
  {
    id: 'preventivo',
    name: 'Preventivo',
    icon: '🛡️',
    description: 'Ações para prevenção e bem-estar.',
  },
  {
    id: 'acompanhamento',
    name: 'Acompanhamento',
    icon: '📋',
    description: 'Acompanhamentos contínuos e suporte.',
  },
  {
    id: 'orientacoes',
    name: 'Orientações',
    icon: '💡',
    description: 'Orientações práticas para o tutor.',
  },
]

export const fields = [
  { id: 'tutorName', label: 'Nome do tutor', type: 'text', placeholder: 'Ex.: Maria Souza' },
  { id: 'petName', label: 'Nome do pet', type: 'text', placeholder: 'Ex.: Luna' },
  { id: 'species', label: 'Especie', type: 'select', options: ['Cao', 'Gato'] },
  { id: 'neighborhood', label: 'Bairro/regiao', type: 'text', placeholder: 'Ex.: Vila Formosa' },
  { id: 'bestTime', label: 'Melhor horario para atendimento', type: 'text', placeholder: 'Ex.: manha, tarde ou noite' },
  { id: 'observations', label: 'Observacoes', type: 'textarea', placeholder: 'Descreva qualquer detalhe importante' },
]
