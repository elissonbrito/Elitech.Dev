/**
 * Projetos do portfólio. `mockup` escolhe a tela ilustrativa em
 * src/components/mockups e `mockupProps` alimenta as telas genéricas.
 * `category` alimenta os filtros. `url` é a demonstração e `repo` o código no GitHub.
 */
export const projectCategories = [
  { id: 'todos', label: 'Todos' },
  { id: 'software', label: 'Sistemas' },
  { id: 'dados', label: 'Dados e BI' },
  { id: 'automacao', label: 'Automação e IA' },
];

export const projects = [
  {
    id: 'projeto-r-bombas',
    name: 'R Bombas',
    kind: 'Sistema de gestão de serviços',
    category: 'software',
    featured: true,
    status: { label: 'concluído', tone: 'info' },
    summary:
      'Uma oficina de bombas que funcionava só no papel ganhou cadastro de clientes, ordens de serviço, histórico por equipamento e alertas automáticos de revisão.',
    stack: ['HTML/JS', 'GitHub Pages', 'Supabase'],
    url: 'https://elissonjbrito.github.io/R_Bombas/',
    repo: 'https://github.com/ElissonJBrito/R_Bombas',
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
      'Sistema interno para lançar pedidos, emitir nota e rotear a impressão: cada item segue direto para a parrilla, a cozinha ou o caixa. API com autenticação JWT e cinco padrões de projeto, rodando em VM na Oracle Cloud.',
    stack: ['Django REST', 'React', 'PostgreSQL', 'Docker', 'JWT', 'Oracle Cloud'],
    url: null,
    repo: 'https://github.com/elissonbrito/Toca-do-Espanhol',
    mockup: 'toca',
  },
  {
    id: 'projeto-spotify',
    name: 'Spotify Top 200 Brasil',
    kind: 'Análise de dados · 1º tri/2025',
    category: 'dados',
    featured: true,
    status: { label: 'publicado', tone: 'ok' },
    summary:
      'Analisei o ranking diário do trimestre: 82,8% dos streams vieram de lançamentos recentes, sertanejo, funk e forró somaram 69% do consumo e os picos caem aos sábados. Relatório técnico em português e inglês.',
    stack: ['Python', 'Pandas', 'EDA', 'Visualização'],
    url: null,
    mockup: 'kpi',
    mockupProps: {
      title: 'Top 200 Brasil',
      tag: '1º tri/2025',
      kpis: [
        { label: 'streams', value: '5,9 bi' },
        { label: 'artistas', value: '256' },
        { label: 'lançamentos recentes', value: '82,8%', peak: true },
        { label: 'sertanejo, funk e forró', value: '69%' },
      ],
    },
  },
  {
    id: 'projeto-ecommerce',
    name: 'Desafio de e-commerce',
    kind: 'Power BI · desafio técnico',
    category: 'dados',
    status: { label: 'entregue', tone: 'ok' },
    summary:
      'Juntei 10 CSVs num modelo estrela com 16 medidas DAX e achei R$ 37,8 mil em perdas com itens vendidos abaixo do custo, além de um gateway com comportamento fora do padrão.',
    stack: ['Power BI', 'DAX', 'Power Query', 'Modelo estrela'],
    url: null,
    mockup: 'kpi',
    mockupProps: {
      title: 'E-commerce',
      tag: '5.000 pedidos',
      kpis: [
        { label: 'perda abaixo do custo', value: 'R$ 37,8 mil', peak: true },
        { label: 'taxas', value: 'R$ 112,7 mil' },
        { label: 'itens no prejuízo', value: '393' },
        { label: 'gateway anômalo', value: '35,6%' },
      ],
    },
  },
  {
    id: 'projeto-superstore',
    name: 'Superstore',
    kind: 'Power BI · varejo',
    category: 'dados',
    status: { label: 'entregue', tone: 'ok' },
    summary:
      'Painel de 3 páginas sobre 9.994 transações. Mostrou que Furniture vende muito e quase não deixa margem, enquanto Technology tem a melhor margem.',
    stack: ['Power BI', 'DAX', 'Modelo estrela'],
    url: null,
    mockup: 'kpi',
    mockupProps: {
      title: 'Superstore',
      tag: 'varejo',
      kpis: [
        { label: 'transações', value: '9.994' },
        { label: 'medidas DAX', value: '8' },
        { label: 'melhor margem', value: 'Technology', peak: true },
        { label: 'margem quase nula', value: 'Furniture' },
      ],
    },
  },
  {
    id: 'projeto-rfm',
    name: 'Segmentação RFM',
    kind: 'Ciência de dados',
    category: 'dados',
    status: { label: 'entregue', tone: 'ok' },
    summary:
      'Segmentei clientes por recência, frequência e valor com KMeans. Entreguei o relatório técnico e uma apresentação executiva para quem decide.',
    stack: ['Python', 'scikit-learn', 'KMeans', 'Jupyter'],
    url: null,
    mockup: 'dashboard',
    mockupProps: {
      title: 'Segmentos RFM',
      tag: 'ilustrativo',
      rows: [
        { label: 'Campeões', value: 42, peak: true },
        { label: 'Leais', value: 70 },
        { label: 'Em risco', value: 38 },
        { label: 'Perdidos', value: 24 },
      ],
    },
  },
  {
    id: 'projeto-ouvidoria',
    name: 'Painel de ouvidoria',
    kind: 'Python · Dash',
    category: 'dados',
    status: { label: 'entregue', tone: 'ok' },
    summary:
      'Painel interativo com 384 chamados de ouvidoria em 4 tipos de serviço, para enxergar onde a demanda se concentra e cobrar prazo.',
    stack: ['Python', 'Dash', 'Pandas'],
    url: null,
    mockup: 'dashboard',
  },
  {
    id: 'projeto-bia',
    name: 'Bia',
    kind: 'Bot de atendimento no Instagram',
    category: 'automacao',
    status: { label: 'projeto próprio', tone: 'info' },
    summary:
      'Assistente que responde as mensagens diretas do Instagram com IA generativa, orquestrada no n8n e hospedada na Oracle Cloud.',
    stack: ['n8n', 'Gemini', 'Oracle Cloud'],
    url: null,
    mockup: 'chat',
  },
  {
    id: 'projeto-sigma',
    name: 'SIGMA',
    kind: 'Plataforma web',
    category: 'software',
    status: { label: 'em desenvolvimento', tone: 'info' },
    summary: 'Sistema com fila em Redis e webhooks assinados com HMAC, para integrar com serviços de terceiros sem abrir brecha.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    url: null,
    mockup: 'code',
    mockupProps: {
      file: 'webhook.ts',
      code: `// valida a assinatura antes de processar
const assinatura = hmac("sha256", segredo, corpo);
if (assinatura !== header["x-signature"]) {
  return res.status(401).end();
}
await fila.add("evento", corpo);`,
    },
  },
  {
    id: 'projeto-ingressos',
    name: 'Plataforma de ingressos',
    kind: 'API · Clean Architecture',
    category: 'software',
    status: { label: 'em desenvolvimento', tone: 'info' },
    summary: 'Backend de venda de ingressos com regras de negócio isoladas da infraestrutura e 20 testes automatizados.',
    stack: ['NestJS', 'TypeScript', 'Prisma'],
    url: null,
    mockup: 'code',
    mockupProps: {
      file: 'comprar-ingresso.usecase.ts',
      code: `export class ComprarIngresso {
  constructor(private repo: IngressoRepo) {}

  async executar(eventoId: string) {
    const lote = await this.repo.loteAtivo(eventoId);
    return lote.reservar(1);
  }
}`,
    },
  },
  {
    id: 'projeto-agora',
    name: 'Projeto Ágora',
    kind: 'Protótipo · ouvidoria digital',
    category: 'software',
    status: { label: 'em desenvolvimento', tone: 'info' },
    summary: 'Protótipo de ouvidoria digital para o cidadão registrar e acompanhar manifestações no mapa, com painel de gestão.',
    stack: ['NestJS', 'Next.js', 'PostGIS'],
    url: null,
    repo: 'https://github.com/elissonbrito/APP_-gora',
    mockup: 'agora',
  },
  {
    id: 'projeto-primeiros-passos',
    name: 'Primeiros Passos',
    kind: 'App mobile · React',
    category: 'software',
    status: { label: 'MVP', tone: 'info' },
    summary: 'App para pais de primeira viagem acompanharem rotina, vacinas e marcos de desenvolvimento do bebê.',
    stack: ['React', 'Mobile-first'],
    url: null,
    mockup: 'primeirosPassos',
  },
];
