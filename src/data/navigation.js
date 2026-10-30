/**
 * Árvore de navegação. Cada nó pode ter `children` com a mesma forma,
 * em qualquer profundidade — o componente <NavItem /> se renderiza
 * recursivamente a partir desta estrutura.
 */
export const navigation = [
  { id: 'sobre', label: 'Sobre', href: '#sobre' },
  {
    id: 'projetos',
    label: 'Projetos',
    href: '#projetos',
    children: [
      { id: 'nav-software', label: 'Sistemas', href: '#projeto-r-bombas' },
      { id: 'nav-dados', label: 'Dados e BI', href: '#projeto-spotify' },
      { id: 'nav-automacao', label: 'Automação e IA', href: '#projeto-bia' },
    ],
  },
  { id: 'stack', label: 'Stack', href: '#stack' },
  { id: 'experiencia', label: 'Experiência', href: '#experiencia' },
  { id: 'contato', label: 'Contato', href: '#contato' },
];
