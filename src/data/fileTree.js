import { site } from '../config/site';

/**
 * Explorer do "IDE" do hero. Pastas têm `children` (recursivo);
 * arquivos têm `href` (seção do site) e `preview` (conteúdo exibido no editor).
 */
export const fileTree = {
  id: 'root',
  name: site.handle,
  children: [
    {
      id: 'sobre.md',
      name: 'sobre.md',
      href: '#sobre',
      preview: `# ${site.name}
// ${site.city}
// banco de dados + engenharia de software
// 6 anos tirando processo do papel
//   na gestão pública`,
    },
    {
      id: 'projetos',
      name: 'projetos',
      children: [
        {
          id: 'sistemas',
          name: 'sistemas',
          children: [
            {
              id: 'r-bombas/index.html',
              name: 'r-bombas.html',
              href: '#projeto-r-bombas',
              preview: `<!-- R Bombas · sistema de gestão -->
<modulo>clientes</modulo>
<modulo>ordens de serviço</modulo>
<modulo>alertas de revisão</modulo>`,
            },
            {
              id: 'toca/pdv.tsx',
              name: 'toca-pdv.tsx',
              href: '#projeto-toca',
              preview: `// roteamento de impressão por categoria
const destino = {
  parrilla: "painel-parrilla",
  guarnicoes: "cozinha",
  bebidas: "caixa",
};`,
            },
          ],
        },
        {
          id: 'dados',
          name: 'dados',
          children: [
            {
              id: 'spotify.py',
              name: 'spotify_top200.py',
              href: '#projeto-spotify',
              preview: `# 1º tri/2025 · Top 200 Brasil
df = pd.read_csv("top200_br.csv")
df["streams"].sum()     # 5,9 bilhões
df["artista"].nunique() # 256
df.groupby("dia_semana")["streams"].sum()`,
            },
            {
              id: 'ecommerce.dax',
              name: 'ecommerce.dax',
              href: '#projeto-ecommerce',
              preview: `-- perda com venda abaixo do custo
Perda = SUMX(
  FILTER(Itens, Itens[preco] < Itens[custo]),
  Itens[custo] - Itens[preco]
)`,
            },
          ],
        },
        {
          id: 'bia.json',
          name: 'bia.n8n.json',
          href: '#projeto-bia',
          preview: `{
  "gatilho": "instagram.dm",
  "modelo": "gemini",
  "host": "oracle-cloud"
}`,
        },
      ],
    },
    {
      id: 'stack.json',
      name: 'stack.json',
      href: '#stack',
      preview: `{
  "principal": ["SQL", "Power BI", "Python"],
  "backend": ["Node", "NestJS", "Django"],
  "frontend": ["React", "Next.js"],
  "infra": ["Docker", "Oracle Cloud"]
}`,
    },
    {
      id: 'contato.json',
      name: 'contato.json',
      href: '#contato',
      preview: `{
  "linkedin": "${site.contact.linkedinHandle}",
  "github": "${site.contact.githubHandle}",
  "cidade": "${site.city}"
}`,
    },
  ],
};
