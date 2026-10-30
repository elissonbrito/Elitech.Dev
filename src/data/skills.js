/** Áreas de atuação e ferramentas. `icon` aponta para um nome em <Icon />. */
export const skillGroups = [
  {
    id: 'skill-dados',
    slug: 'dados',
    icon: 'chart',
    title: 'Dados e BI',
    description: 'Modelagem dimensional, ETL e painéis que respondem a uma pergunta de negócio, não só mostram gráfico.',
    tags: ['SQL', 'Power BI', 'DAX', 'Power Query', 'Excel avançado', 'Looker Studio'],
  },
  {
    id: 'skill-ciencia',
    slug: 'ciencia',
    icon: 'spark',
    title: 'Análise e ciência de dados',
    description: 'Análise exploratória, segmentação e modelos preditivos. Fiz iniciação científica em deep learning e NLP.',
    tags: ['Python', 'Pandas', 'scikit-learn', 'Dash', 'TensorFlow', 'Keras'],
  },
  {
    id: 'skill-backend',
    slug: 'backend',
    icon: 'server',
    title: 'Backend e APIs',
    description: 'APIs com autenticação, filas e testes, organizadas para crescer sem virar bagunça.',
    tags: ['Node.js', 'NestJS', 'Django', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    id: 'skill-frontend',
    slug: 'frontend',
    icon: 'code',
    title: 'Frontend',
    description: 'Interfaces web e mobile pensadas para quem usa no balcão, no celular e com pressa.',
    tags: ['React', 'Next.js', 'TypeScript', 'JavaScript'],
  },
  {
    id: 'skill-automacao',
    slug: 'automacao',
    icon: 'bolt',
    title: 'Automação e IA',
    description: 'Rotinas repetitivas viram fluxo automático: conciliações em Python, bots e integrações no n8n.',
    tags: ['n8n', 'Gemini', 'Python', 'Webhooks'],
  },
  {
    id: 'skill-processo',
    slug: 'processo',
    icon: 'shield',
    title: 'Infra e gestão',
    description: 'Deploy em nuvem, versionamento e método ágil. Conheço contratação pública por dentro.',
    tags: ['Docker', 'Oracle Cloud', 'Git', 'Scrum', 'Lei 14.133'],
  },
];

export const education = {
  label: 'formação',
  items: [
    { course: 'Tecnólogo em Banco de Dados', school: 'Estácio', when: 'concluído em 2026' },
    { course: 'Engenharia de Software', school: 'Universidade de Vassouras', when: 'conclusão em 2027' },
  ],
};
