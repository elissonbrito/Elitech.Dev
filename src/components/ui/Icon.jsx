/**
 * Ícones de traço (stroke) desenhados à mão — sem dependências externas.
 * Uso: <Icon name="camera" size={24} />
 */
const PATHS = {
  code: 'M3 5h18v12H3zM8 21h8M12 17v4M9 9l-2 2 2 2M15 9l2 2-2 2',
  chart: 'M4 20V11M10 20V5M16 20v-6M2 20h20',
  camera: 'M3 8l11-3 2.5 6.5-11 3zM8.5 13.5l1.2 3.5H14M14 17v3.5M17 7.5h.01',
  shield: 'M12 2.5l8 3v6c0 5-3.4 8.8-8 10.5-4.6-1.7-8-5.5-8-10.5v-6zM12 8v5M12 16h.01',
  gate: 'M2 6h20v12H2zM6 6v12M10 6v12M14 6v12M18 6v12',
  server: 'M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01',
  whatsapp: 'M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3.5 20l1.2-4.1A8.5 8.5 0 1 1 20.5 11.5z',
  instagram: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.5 6.5h.01',
  mail: 'M3 5h18v14H3zM3 6l9 7 9-7',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  external: 'M14 4h6v6M20 4l-9 9M18 14v6H4V6h6',
  chevron: 'M9 6l6 6-6 6',
  folder: 'M3 6h6l2 2h10v11H3z',
  file: 'M6 3h8l4 4v14H6zM14 3v4h4',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6L6 18',
  sun: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',
  moon: 'M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z',
  copy: 'M9 9h11v11H9zM5 15H4V4h11v1',
  check: 'M5 12l5 5L20 7',
  terminal: 'M3 4h18v16H3zM7 9l3 3-3 3M12 15h5',
};

export function Icon({ name, size = 20, strokeWidth = 1.8, className, label }) {
  const d = PATHS[name];
  if (!d) return null;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <path d={d} />
    </svg>
  );
}
