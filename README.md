# Site EliTech

Site institucional e portfólio da **EliTech Tecnologia e Segurança** (Maricá, RJ).
React 18 + Vite, sem bibliotecas de UI, com tema escuro/claro.

## Rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a pasta dist/ pronta para publicar
```

## Publicar

- **GitHub Pages / Render (Static Site):** build command `npm run build`, publish directory `dist`.
  O `base: './'` no `vite.config.js` já permite publicar em subpasta (ex.: `usuario.github.io/elitech-site`).

## Onde mexer

| Quero mudar…                     | Arquivo                       |
| -------------------------------- | ----------------------------- |
| Telefone, Instagram, e-mail      | `src/config/site.js`          |
| Trocar o símbolo da logo         | substitua `src/assets/elitech-icon.png` (fundo transparente) |
| Menu e submenus                  | `src/data/navigation.js`      |
| Serviços                         | `src/data/services.js`        |
| Projetos do portfólio            | `src/data/projects.js`        |
| Arquivos do "IDE" do topo        | `src/data/fileTree.js`        |
| Cores e fontes                   | `src/styles/tokens.css`       |

## Estrutura

```
src/
├── config/        dados institucionais (fonte única)
├── data/          conteúdo: navegação, serviços, projetos, árvore de arquivos
├── hooks/         useTheme, useActiveSection, useTypewriter, useScrolled…
├── utils/         tree.js (funções recursivas), highlight.js
├── components/
│   ├── brand/     Logo (símbolo oficial + ELITECH)
│   ├── layout/    Navbar, NavItem (recursivo), Footer
│   ├── tech/      FileTree (recursivo), CodeView, Terminal, CircuitCanvas, WindowFrame
│   ├── mockups/   telas ilustrativas dos projetos
│   └── ui/        Button, Icon, SectionHeader, StatusPill
└── sections/      Hero, Services, Portfolio, Process, Contact
```

## Recursividade

- **`NavItem`** renderiza a si mesmo para cada `children` do menu: qualquer profundidade em
  `navigation.js` vira dropdown em cascata no desktop e acordeão no celular.
- **`FileTree`** (explorer do topo) renderiza pastas e arquivos recursivamente.
- **`utils/tree.js`**: `countLeaves`, `findFirstLeaf`, `findPath`, `someDescendant`,
  `collectBranchIds` — todas percorrem a árvore de forma recursiva.

## Princípios

- Conteúdo separado de apresentação (tudo em `data/` e `config/`).
- Componentes pequenos e de responsabilidade única; cada um com seu CSS.
- Cores só por tokens (`var(--…)`), com tema claro/escuro.
- Acessível: links e botões reais, foco visível, `prefers-reduced-motion` respeitado.
