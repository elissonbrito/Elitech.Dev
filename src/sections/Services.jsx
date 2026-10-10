import { SectionHeader } from '../components/ui/SectionHeader';
import { Icon } from '../components/ui/Icon';
import { services, bundleOffer } from '../data/services';
import './Services.css';

function ServiceCard({ service }) {
  return (
    <article id={service.id} className="service-card">
      <div className="service-card__top">
        <span className="service-card__icon">
          <Icon name={service.icon} size={24} />
        </span>
        <span className="service-card__key mono">svc.{service.slug}</span>
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__text">{service.description}</p>
      <ul className="tag-list" aria-label="Tecnologias e marcas">
        {service.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Services() {
  return (
    <section id="servicos" className="section">
      <div className="container">
        <SectionHeader path="servicos" title="Uma empresa para o digital e o físico.">
          Na mesma visita resolvemos o portão, a câmera e o computador, e ainda colocamos o seu negócio na
          internet.
        </SectionHeader>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <aside className="bundle">
          <div className="bundle__copy">
            <span className="bundle__label mono">{bundleOffer.label}</span>
            <strong className="bundle__title">{bundleOffer.title}</strong>
          </div>
          <ul className="bundle__terms">
            {bundleOffer.terms.map((term) => (
              <li key={term}>
                <Icon name="check" size={16} />
                {term}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
