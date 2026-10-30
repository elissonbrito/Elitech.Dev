import { SectionHeader } from '../components/ui/SectionHeader';
import { Icon } from '../components/ui/Icon';
import { skillGroups, education } from '../data/skills';
import './Skills.css';

function SkillCard({ group }) {
  return (
    <article id={group.id} className="skill-card">
      <div className="skill-card__top">
        <span className="skill-card__icon">
          <Icon name={group.icon} size={24} />
        </span>
        <span className="skill-card__key mono">stack.{group.slug}</span>
      </div>
      <h3 className="skill-card__title">{group.title}</h3>
      <p className="skill-card__text">{group.description}</p>
      <ul className="tag-list" aria-label="Ferramentas">
        {group.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Skills() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <SectionHeader path="stack" title="Do banco de dados à tela.">
          SQL, Power BI e Python são a base. Em volta delas, o que precisa para um sistema ir ao ar e ficar de pé.
        </SectionHeader>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillCard key={group.id} group={group} />
          ))}
        </div>

        <aside className="education" aria-label="Formação">
          <span className="education__label mono">{education.label}</span>
          <ul className="education__terms">
            {education.items.map((item) => (
              <li key={item.course} className="education__course">
                <Icon name="check" size={16} />
                <span>
                  <strong>{item.course}</strong>
                  <span className="education__meta">
                    {item.school} · {item.when}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
