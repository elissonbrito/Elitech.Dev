import './WindowFrame.css';

/** Moldura de janela (IDE/navegador) usada no hero e nos mockups. */
export function WindowFrame({ title, address, children, className = '', tone = 'app' }) {
  return (
    <div className={`window window--${tone} ${className}`}>
      <div className="window__bar">
        <span className="window__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        {address ? (
          <span className="window__address mono">{address}</span>
        ) : (
          <span className="window__title mono">{title}</span>
        )}
      </div>
      <div className="window__body">{children}</div>
    </div>
  );
}
