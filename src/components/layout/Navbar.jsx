import { useEffect, useState } from 'react';
import { Logo } from '../brand/Logo';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { NavItem } from './NavItem';
import { navigation } from '../../data/navigation';
import { site } from '../../config/site';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrolled } from '../../hooks/useScrolled';
import './Navbar.css';

const SECTION_IDS = navigation.map((item) => item.id);

export function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);
  const scrolled = useScrolled();

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const nextTheme = theme === 'dark' ? 'claro' : 'escuro';

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-menu-open' : ''}`}>
      <div className="navbar__inner container">
        <a className="navbar__brand" href="#topo" aria-label={`${site.name}, voltar ao início`} onClick={closeMenu}>
          <Logo size={34} />
        </a>

        <nav className="navbar__nav" id="menu-principal" aria-label="Principal">
          <ul className="nav-list">
            {navigation.map((item) => (
              <NavItem key={item.id} item={item} activeId={activeId} onNavigate={closeMenu} />
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="icon-button"
            onClick={onToggleTheme}
            aria-label={`Mudar para tema ${nextTheme}`}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>

          <span className="navbar__cta">
            <Button href={site.contact.whatsappUrl} icon="whatsapp" size="sm">
              Orçamento
            </Button>
          </span>

          <button
            type="button"
            className="icon-button navbar__burger"
            aria-expanded={menuOpen}
            aria-controls="menu-principal"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
