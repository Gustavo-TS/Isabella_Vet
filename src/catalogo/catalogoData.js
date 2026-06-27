export const whatsappNumber = '11940247017'

export const filters = ['Todas', 'Consultas', 'Vacinas', 'Exames', 'Procedimentos', 'Preventivo', 'Acompanhamento', 'Orientacoes']

export const categories = [
  {
    id: 'consultas',
    name: 'Consultas',
    icon: '🩺',
    description: 'Atendimentos gerais e avaliações clínicas.',
    note: 'Toque para ver os tipos',
    types: [
      'Consulta veterinaria domiciliar',
      'Consulta de rotina',
      'Consulta para filhotes',
      'Consulta geriatrica',
      'Retorno veterinario',
    ],
  },
  {
    id: 'vacinas',
    name: 'Vacinas',
    icon: '💉',
    description: 'Vacinação e reforço imunológico.',
    note: 'Toque para ver os tipos',
    types: [
      'Vacinacao para caes',
      'Vacinacao para gatos',
      'Reforco vacinal',
      'Avaliacao pre-vacinal',
    ],
  },
  {
    id: 'exames',
    name: 'Exames',
    icon: '🧪',
    description: 'Apoio diagnóstico e coletas.',
    note: 'Toque para ver os tipos',
    types: [
      'Coleta de sangue domiciliar',
      'Exames laboratoriais',
      'Avaliacao clinica',
      'Check-up preventivo',
    ],
  },
  {
    id: 'procedimentos',
    name: 'Procedimentos',
    icon: '🩹',
    description: 'Procedimentos simples e cuidados pontuais.',
    note: 'Toque para ver os tipos',
    types: [
      'Curativos',
      'Aplicacao de medicacao',
      'Retirada de pontos',
      'Limpeza de feridas simples',
    ],
  },
  {
    id: 'preventivo',
    name: 'Preventivo',
    icon: '🛡️',
    description: 'Ações para prevenção e bem-estar.',
    note: 'Toque para ver os tipos',
    types: [
      'Controle de vermifugacao',
      'Controle de pulgas e carrapatos',
      'Orientacao nutricional',
      'Avaliacao de peso',
    ],
  },
  {
    id: 'acompanhamento',
    name: 'Acompanhamento',
    icon: '📋',
    description: 'Acompanhamentos contínuos e suporte.',
    note: 'Toque para ver os tipos',
    types: [
      'Pos-operatorio',
      'Acompanhamento de tratamento',
      'Acompanhamento de pets idosos',
      'Acompanhamento de doencas cronicas',
    ],
  },
  {
    id: 'orientacoes',
    name: 'Orientações',
    icon: '💡',
    description: 'Orientações práticas para o tutor.',
    note: 'Toque para ver os tipos',
    types: [
      'Orientacao para novos tutores',
      'Cuidados com filhotes',
      'Cuidados com gatos',
      'Adaptacao de ambiente',
    ],
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
