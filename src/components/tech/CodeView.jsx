import { tokenizeLine } from '../../utils/highlight';
import './CodeView.css';

/** Editor somente-leitura com numeração de linhas e realce simples. */
export function CodeView({ code }) {
  const lines = code.split('\n');

  return (
    <pre className="code-view" aria-label="Trecho de código ilustrativo">
      <code>
        {lines.map((line, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <span className="code-view__line" key={index}>
            <span className="code-view__number" aria-hidden="true">
              {index + 1}
            </span>
            <span className="code-view__content">
              {tokenizeLine(line).map((token, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <span key={i} className={`tok tok--${token.type}`}>
                  {token.text}
                </span>
              ))}
            </span>
          </span>
        ))}
      </code>
    </pre>
  );
}
