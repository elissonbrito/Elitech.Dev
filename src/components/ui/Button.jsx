import { Icon } from './Icon';
import './ui.css';

/**
 * Link com aparência de botão. Links externos abrem em nova aba.
 * variant: 'primary' (vinho da marca) | 'ghost' (contorno)
 */
export function Button({ href, variant = 'primary', icon, children, size = 'md' }) {
  const external = href?.startsWith('http');

  return (
    <a
      className={`btn btn--${variant} btn--${size}`}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {icon && <Icon name={icon} size={18} />}
      <span>{children}</span>
    </a>
  );
}
