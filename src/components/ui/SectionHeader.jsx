import './ui.css';

/**
 * Cabeçalho padrão das seções: rótulo em estilo de caminho de arquivo,
 * título e texto de apoio opcional.
 */
export function SectionHeader({ path, title, children }) {
  return (
    <header className="section-header">
      <div className="section-header__main">
        <span className="section-header__path mono">
          <span aria-hidden="true">~/elitech/</span>
          {path}
        </span>
        <h2 className="section-header__title">{title}</h2>
      </div>
      {children && <p className="section-header__lead">{children}</p>}
    </header>
  );
}
