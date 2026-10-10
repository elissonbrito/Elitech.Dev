/**
 * Árvore de navegação. Cada nó pode ter `children` com a mesma forma,
 * em qualquer profundidade — o componente <NavItem /> se renderiza
 * recursivamente a partir desta estrutura.
 */
export const navigation = [
  {
    id: 'servicos',
    label: 'Serviços',
    href: '#servicos',
    children: [
      {
        id: 'nav-software',
        label: 'Software',
        href: '#svc-software',
        children: [
          { id: 'nav-sites', label: 'Sites e landing pages', href: '#svc-software' },
          { id: 'nav-sistemas', label: 'Sistemas de gestão', href: '#svc-software' },
          { id: 'nav-apps', label: 'Apps mobile', href: '#svc-software' },
        ],
      },
      { id: 'nav-dados', label: 'Dados e dashboards', href: '#svc-dados' },
      {
        id: 'nav-seguranca',
        label: 'Segurança eletrônica',
        href: '#svc-cftv',
        children: [
          { id: 'nav-cftv', label: 'CFTV IP', href: '#svc-cftv' },
          { id: 'nav-alarmes', label: 'Alarmes e intrusão', href: '#svc-alarmes' },
          { id: 'nav-portoes', label: 'Portões eletrônicos', href: '#svc-portoes' },
        ],
      },
      { id: 'nav-infra', label: 'Computadores e servidores', href: '#svc-infra' },
    ],
  },
  { id: 'portfolio', label: 'Portfólio', href: '#portfolio' },
  { id: 'processo', label: 'Como trabalhamos', href: '#processo' },
  { id: 'contato', label: 'Contato', href: '#contato' },
];
