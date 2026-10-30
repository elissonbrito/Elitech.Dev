import iconSrc from '../../assets/elitech-icon.png';
import { site } from '../../config/site';
import './Logo.css';

/** Símbolo da marca: o "E" em circuito com o escudo. */
export function LogoMark({ size = 40, decorative = true }) {
  return (
    <img
      className="logo-mark"
      src={iconSrc}
      height={size}
      width={Math.round(size * 0.846)}
      alt={decorative ? '' : site.name}
      draggable="false"
    />
  );
}

/** Logo completa: símbolo + nome (+ linha e slogan opcionais). */
export function Logo({ size = 36, withTagline = false }) {
  const [first, last] = site.name.split(' ');

  return (
    <span className="logo">
      <LogoMark size={size} />
      <span className="logo__text">
        <span className="logo__word" aria-label={site.name}>
          <span className="logo__eli">{first}</span> <span className="logo__tech">{last}</span>
        </span>
        {withTagline && (
          <>
            <span className="logo__rule" aria-hidden="true">
              <span />
              <i />
              <span />
            </span>
            <span className="logo__tagline">{site.tagline}</span>
          </>
        )}
      </span>
    </span>
  );
}
