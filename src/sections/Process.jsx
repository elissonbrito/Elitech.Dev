import { SectionHeader } from '../components/ui/SectionHeader';
import { processSteps } from '../data/process';
import './Process.css';

/** Etapas em formato de pipeline: a numeração representa a ordem real. */
export function Process() {
  return (
    <section id="processo" className="section">
      <div className="container">
        <SectionHeader path="processo" title="Da conversa à entrega, sem mistério." />

        <ol className="pipeline">
          {processSteps.map((step, index) => (
            <li key={step.id} className="pipeline__step">
              <span className="pipeline__node mono" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="pipeline__title">{step.title}</h3>
              <p className="pipeline__text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
