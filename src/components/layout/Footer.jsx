import { Logo } from '../brand/Logo';
import { site } from '../../config/site';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <Logo size={40} withTagline />
        <div className="footer__meta mono">
          <span>
            © {year} {site.legalName}
          </span>
          <span>{site.city} · build v1.0.0</span>
        </div>
      </div>
    </footer>
  );
}
