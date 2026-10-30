import { useCallback, useMemo, useState } from 'react';
import { Button } from '../components/ui/Button';
import { StatusPill } from '../components/ui/StatusPill';
import { Icon } from '../components/ui/Icon';
import { CircuitCanvas } from '../components/tech/CircuitCanvas';
import { WindowFrame } from '../components/tech/WindowFrame';
import { FileTree } from '../components/tech/FileTree';
import { CodeView } from '../components/tech/CodeView';
import { Terminal } from '../components/tech/Terminal';
import { fileTree } from '../data/fileTree';
import { site } from '../config/site';
import { countLeaves, findFirstLeaf, findPath } from '../utils/tree';
import './Hero.css';

const INITIAL_EXPANDED = ['root', 'projetos', 'sistemas'];

export function Hero() {
  const [expanded, setExpanded] = useState(() => new Set(INITIAL_EXPANDED));
  const [selected, setSelected] = useState(() => findFirstLeaf(fileTree));

  const totalFiles = useMemo(() => countLeaves(fileTree), []);
  const breadcrumb = useMemo(
    () => (findPath(fileTree, selected.id) ?? []).map((node) => node.name).join(' / '),
    [selected],
  );

  const toggleFolder = useCallback((id) => {
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  return (
    <section id="topo" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <CircuitCanvas />

      <div className="hero__inner container">
        <div className="hero__copy">
          <StatusPill tone="ok">aberto a oportunidades · {site.city}</StatusPill>

          <h1 className="hero__title">
            {site.name}
            <span className="hero__title-accent">{site.role}.</span>
          </h1>

          <p className="hero__lead">
            Passei seis anos na gestão pública transformando papel e planilha em painel, automação e processo.
            Hoje construo sistemas web e análises de dados que resolvem problema de verdade, para clientes reais.
          </p>

          <div className="hero__actions">
            <Button href="#projetos" icon="arrow">
              Ver projetos
            </Button>
            <Button href={site.contact.linkedinUrl} icon="linkedin" variant="ghost">
              LinkedIn
            </Button>
            <Button href={site.contact.githubUrl} icon="github" variant="ghost">
              GitHub
            </Button>
          </div>

          <dl className="hero__specs mono">
            <div>
              <dt>foco</dt>
              <dd>SQL · Power BI · Python</dd>
            </div>
            <div>
              <dt>formação</dt>
              <dd>Banco de Dados · Eng. Software</dd>
            </div>
            <div>
              <dt>código aberto</dt>
              <dd>R Bombas · Toca · Ágora</dd>
            </div>
          </dl>
        </div>

        <WindowFrame title={`${site.handle} · explorer`} className="hero__ide">
          <div className="ide">
            <div className="ide__explorer">
              <span className="ide__label mono">explorer · {totalFiles} arquivos</span>
              <FileTree
                root={fileTree}
                expanded={expanded}
                onToggle={toggleFolder}
                selectedId={selected.id}
                onSelect={setSelected}
              />
            </div>

            <div className="ide__editor">
              <div className="ide__tab mono">
                <Icon name="file" size={13} />
                <span className="ide__crumb">{breadcrumb}</span>
              </div>
              <CodeView code={selected.preview} />
              <a className="ide__open mono" href={selected.href}>
                abrir seção <Icon name="arrow" size={14} />
              </a>
            </div>
          </div>
          <Terminal />
        </WindowFrame>
      </div>
    </section>
  );
}
