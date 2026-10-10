import './ui.css';

/** Indicador de estado: tone = 'ok' | 'warn' | 'info' */
export function StatusPill({ tone = 'info', children }) {
  return (
    <span className={`status-pill status-pill--${tone} mono`}>
      <span className="status-pill__dot" aria-hidden="true" />
      {children}
    </span>
  );
}
