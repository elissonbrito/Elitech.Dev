import { useTypewriter } from '../../hooks/useTypewriter';
import './Terminal.css';

const LINES = [
  '$ elitech new --cliente "seu-negocio"',
  '  ✓ levantamento    ✓ protótipo    ✓ aprovação',
  '$ elitech deploy --suporte maricá',
  '  ✓ no ar. garantia de 90 dias ativa.',
];

/** Terminal que "digita" o fluxo de trabalho da EliTech. */
export function Terminal() {
  const { visible, done } = useTypewriter(LINES);

  return (
    <div className="terminal mono" aria-label="Fluxo de trabalho: levantamento, protótipo, aprovação e entrega com suporte em Maricá">
      {visible.map((line, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className={line.trimStart().startsWith('✓') ? 'terminal__out' : 'terminal__cmd'} aria-hidden="true">
          {line}
          {index === visible.length - 1 && !done && <span className="terminal__cursor" />}
        </div>
      ))}
      {done && (
        <div className="terminal__cmd" aria-hidden="true">
          $ <span className="terminal__cursor terminal__cursor--blink" />
        </div>
      )}
    </div>
  );
}
