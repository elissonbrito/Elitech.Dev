import { useState } from 'react';
import { Icon } from '../ui/Icon';
import { isBranch, someDescendant } from '../../utils/tree';

/**
 * Item de menu RECURSIVO: se o nó tiver `children`, renderiza um submenu
 * contendo outros <NavItem /> com profundidade + 1. Funciona com qualquer
 * nível de aninhamento definido em src/data/navigation.js.
 */
export function NavItem({ item, depth = 0, activeId, onNavigate }) {
  const [open, setOpen] = useState(false);
  const hasChildren = isBranch(item);
  const isActive = someDescendant(item, (node) => node.id === activeId);
  const submenuId = `submenu-${item.id}`;

  const handleNavigate = () => {
    setOpen(false);
    onNavigate?.();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && open) {
      event.stopPropagation();
      setOpen(false);
    }
  };

  const classes = [
    'nav-item',
    `nav-item--depth-${depth}`,
    hasChildren && 'nav-item--branch',
    open && 'is-open',
    isActive && 'is-active',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <li className={classes} onKeyDown={handleKeyDown} onMouseLeave={() => setOpen(false)}>
      <div className="nav-item__row">
        <a
          className="nav-item__link"
          href={item.href}
          aria-current={item.id === activeId ? 'true' : undefined}
          onClick={handleNavigate}
        >
          {depth > 0 && <span className="nav-item__prefix mono" aria-hidden="true">{'›'}</span>}
          {item.label}
        </a>

        {hasChildren && (
          <button
            type="button"
            className="nav-item__toggle"
            aria-expanded={open}
            aria-controls={submenuId}
            aria-label={`${open ? 'Fechar' : 'Abrir'} submenu ${item.label}`}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name="chevron" size={14} />
          </button>
        )}
      </div>

      {hasChildren && (
        <ul id={submenuId} className="nav-submenu">
          {item.children.map((child) => (
            <NavItem
              key={child.id}
              item={child}
              depth={depth + 1}
              activeId={activeId}
              onNavigate={onNavigate}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
