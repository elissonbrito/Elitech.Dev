import { SectionHeader } from '../components/ui/SectionHeader';
import { experience } from '../data/experience';
import './Experience.css';

/** Linha do tempo profissional: a numeração segue da mais recente para a mais antiga. */
export function Experience() {
  return (
    <section id="experiencia" className="section section--alt">
      <div className="container">
        <SectionHeader path="experiencia" title="Onde aprendi a resolver problema.">
          Antes de programar para clientes, passei anos do outro lado: dentro da operação, vendo onde o processo
          trava.
        </SectionHeader>

        <ol className="pipeline">
          {experience.map((item, index) => (
            <li key={item.id} className="pipeline__step">
              <span className="pipeline__node mono" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="pipeline__period mono">
                {item.period} · {item.org}
              </span>
              <h3 className="pipeline__title">{item.role}</h3>
              <p className="pipeline__text">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
