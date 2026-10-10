/** Linhas de serviço da EliTech. `icon` aponta para um nome em <Icon />. */
export const services = [
  {
    id: 'svc-software',
    slug: 'software',
    icon: 'code',
    title: 'Desenvolvimento web e software',
    description: 'Sites, sistemas de gestão, PDV e apps sob medida, prontos para crescer junto com o negócio.',
    tags: ['React', 'Node', 'Django', 'Expo'],
  },
  {
    id: 'svc-dados',
    slug: 'dados',
    icon: 'chart',
    title: 'Dados e dashboards',
    description: 'Organização de dados, indicadores e painéis em Power BI e Python para decidir com números.',
    tags: ['Power BI', 'Python', 'SQL'],
  },
  {
    id: 'svc-cftv',
    slug: 'cftv',
    icon: 'camera',
    title: 'CFTV IP',
    description: 'Câmeras com acesso pelo celular, projeto de cobertura, gravação em NVR e rede PoE.',
    tags: ['Intelbras', 'PoE', 'H.265'],
  },
  {
    id: 'svc-alarmes',
    slug: 'alarmes',
    icon: 'shield',
    title: 'Alarmes e intrusão',
    description: 'Sensores, centrais e sirenes para proteger casa e comércio, com aviso no celular.',
    tags: ['Sensores', 'Centrais'],
  },
  {
    id: 'svc-portoes',
    slug: 'portoes',
    icon: 'gate',
    title: 'Portões eletrônicos',
    description: 'Instalação e manutenção de automatizadores, centrais, fim de curso e controles.',
    tags: ['PPA', 'Garen', 'Rossi'],
  },
  {
    id: 'svc-infra',
    slug: 'infra',
    icon: 'server',
    title: 'Computadores e servidores',
    description: 'Formatação, manutenção, montagem de PCs e servidores domésticos (NAS) para arquivos e backup.',
    tags: ['Manutenção', 'Montagem', 'NAS'],
  },
];

export const bundleOffer = {
  label: 'pacotes combinados',
  title: 'Site, câmeras e painel de dados num só contrato.',
  terms: ['Visita técnica gratuita', '90 dias de garantia na mão de obra'],
};
