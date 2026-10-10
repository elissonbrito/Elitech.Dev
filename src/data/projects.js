/**
 * Projetos do portfólio. `mockup` escolhe a tela ilustrativa em
 * src/components/mockups. `category` alimenta os filtros.
 */
export const projectCategories = [
  { id: 'todos', label: 'Todos' },
  { id: 'software', label: 'Sistemas' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'dados', label: 'Dados' },
];

export const projects = [
  {
    id: 'projeto-r-bombas',
    name: 'R Bombas',
    kind: 'Sistema de gestão · cliente real',
    category: 'software',
    featured: true,
    status: { label: 'em produção', tone: 'ok' },
    summary:
      'Uma oficina de bombas que funcionava só no papel ganhou cadastro de clientes, ordens de serviço, histórico por equipamento e alertas automáticos de revisão.',
    stack: ['HTML/JS', 'GitHub Pages', 'Supabase'],
    url: 'https://elissonjbrito.github.io/R_Bombas/',
    mockup: 'rbombas',
  },
  {
    id: 'projeto-toca',
    name: 'Toca do Espanhol Parrilla',
    kind: 'PDV e gestão de restaurante',
    category: 'software',
    featured: true,
    status: { label: 'em testes', tone: 'warn' },
    summary:
      'Sistema interno para lançar pedidos, emitir nota e rotear a impressão: cada item segue direto para a parrilla, a cozinha ou o caixa.',
    stack: ['Web + Expo', 'PostgreSQL', 'Render'],
    url: null,
    mockup: 'toca',
  },
  {
    id: 'projeto-primeiros-passos',
    name: 'Primeiros Passos',
    kind: 'App mobile · React',
    category: 'mobile',
    status: { label: 'MVP', tone: 'info' },
    summary: 'App para pais de primeira viagem acompanharem rotina, vacinas e marcos de desenvolvimento do bebê.',
    stack: ['React', 'Mobile-first'],
    url: null,
    mockup: 'primeirosPassos',
  },
  {
    id: 'projeto-agora',
    name: 'Projeto Ágora',
    kind: 'Plataforma web · ouvidoria digital',
    category: 'software',
    status: { label: 'em desenvolvimento', tone: 'info' },
    summary: 'Ouvidoria digital para o cidadão registrar e acompanhar manifestações, com painel de gestão.',
    stack: ['NestJS', 'Next.js'],
    url: null,
    mockup: 'agora',
  },
  {
    id: 'projeto-dashboards',
    name: 'Dashboards de dados',
    kind: 'Dados e BI',
    category: 'dados',
    status: { label: 'entregue', tone: 'ok' },
    summary: 'Painéis de chamados operacionais, segmentação de clientes (RFM) e indicadores de vendas.',
    stack: ['Python', 'Dash', 'Power BI'],
    url: null,
    mockup: 'dashboard',
  },
];
