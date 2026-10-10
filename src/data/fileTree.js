import { site } from '../config/site';

/**
 * Explorer do "IDE" do hero. Pastas têm `children` (recursivo);
 * arquivos têm `href` (seção do site) e `preview` (conteúdo exibido no editor).
 */
export const fileTree = {
  id: 'root',
  name: 'elitech',
  children: [
    {
      id: 'servicos',
      name: 'servicos',
      children: [
        {
          id: 'software',
          name: 'software',
          children: [
            {
              id: 'sistemas.tsx',
              name: 'sistemas.tsx',
              href: '#svc-software',
              preview: `// sistemas sob medida
export const sistema = {
  cliente: "seu-negocio",
  modulos: ["clientes", "pedidos", "relatorios"],
  acesso: "web + celular",
};`,
            },
            {
              id: 'sites.tsx',
              name: 'sites.tsx',
              href: '#svc-software',
              preview: `// presença digital
export default function Site() {
  return <Pagina rapida responsiva seo />;
}`,
            },
          ],
        },
        {
          id: 'dados',
          name: 'dados',
          children: [
            {
              id: 'dashboard.py',
              name: 'dashboard.py',
              href: '#svc-dados',
              preview: `# decisões com números
painel = Dashboard(fonte="vendas.csv")
painel.kpi("faturamento", periodo="mes")
painel.publicar()`,
            },
          ],
        },
        {
          id: 'seguranca',
          name: 'seguranca',
          children: [
            {
              id: 'cftv.conf',
              name: 'cftv.conf',
              href: '#svc-cftv',
              preview: `# projeto de CFTV IP
cameras     = 4
resolucao   = "4MP"
codec       = "H.265"
acesso      = "app no celular"`,
            },
            {
              id: 'alarme.conf',
              name: 'alarme.conf',
              href: '#svc-alarmes',
              preview: `# central de alarme
sensores    = ["porta", "janela", "presenca"]
notificar   = "celular"`,
            },
            {
              id: 'portao.conf',
              name: 'portao.conf',
              href: '#svc-portoes',
              preview: `# automatizador de portão
tipo        = "deslizante"
controles   = 2
fim_de_curso = "ajustado"`,
            },
          ],
        },
      ],
    },
    {
      id: 'projetos',
      name: 'projetos',
      children: [
        {
          id: 'r-bombas',
          name: 'r-bombas',
          children: [
            {
              id: 'r-bombas/index.html',
              name: 'index.html',
              href: '#projeto-r-bombas',
              preview: `<!-- R Bombas · sistema de gestão -->
<modulo>clientes</modulo>
<modulo>ordens de serviço</modulo>
<modulo>alertas de revisão</modulo>`,
            },
          ],
        },
        {
          id: 'toca',
          name: 'toca-do-espanhol',
          children: [
            {
              id: 'toca/pdv.tsx',
              name: 'pdv.tsx',
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
          id: 'agora',
          name: 'agora',
          children: [
            {
              id: 'agora/main.ts',
              name: 'main.ts',
              href: '#projeto-agora',
              preview: `// ouvidoria digital
const app = await NestFactory.create(AppModule);
await app.listen(3000);`,
            },
          ],
        },
      ],
    },
    {
      id: 'contato.json',
      name: 'contato.json',
      href: '#contato',
      preview: `{
  "whatsapp": "${site.contact.phoneLabel}",
  "instagram": "${site.contact.instagramHandle}",
  "cidade": "${site.city}"
}`,
    },
  ],
};
