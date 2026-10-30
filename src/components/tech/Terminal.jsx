import { useTypewriter } from '../../hooks/useTypewriter';
import './Terminal.css';

const LINES = [
  '$ whoami',
  '  ✓ élisson brito · dados, backend e produto',
  '$ ls projetos/ --publicos',
  '  ✓ r-bombas    toca-do-espanhol    agora',
];

/** Terminal que "digita" uma apresentação rápida. */
export function Terminal() {
  const { visible, done } = useTypewriter(LINES);

  return (
    <div className="terminal mono" aria-label="Apresentação: Élisson Brito, dados, backend e produto, com projetos públicos no GitHub">
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
