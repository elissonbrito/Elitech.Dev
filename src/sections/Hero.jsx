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

const INITIAL_EXPANDED = ['root', 'servicos', 'software', 'projetos'];

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
          <StatusPill tone="ok">online · atendendo {site.region}</StatusPill>

          <h1 className="hero__title">
            Você imagina,
            <span className="hero__title-accent"> nós desenvolvemos.</span>
          </h1>

          <p className="hero__lead">
            Software, dados e segurança eletrônica para residências e pequenos negócios. Do código à câmera
            instalada na parede, com uma só equipe.
          </p>

          <div className="hero__actions">
            <Button href={site.contact.whatsappUrl} icon="whatsapp">
              Falar no WhatsApp
            </Button>
            <Button href={site.contact.instagramUrl} icon="instagram" variant="ghost">
              {site.contact.instagramHandle}
            </Button>
          </div>

          <dl className="hero__specs mono">
            <div>
              <dt>stack</dt>
              <dd>web · mobile · dados · CFTV</dd>
            </div>
            <div>
              <dt>visita técnica</dt>
              <dd>gratuita</dd>
            </div>
            <div>
              <dt>garantia</dt>
              <dd>90 dias</dd>
            </div>
          </dl>
        </div>

        <WindowFrame title="elitech — explorer" className="hero__ide">
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
