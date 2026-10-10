import { useMemo, useState } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { StatusPill } from '../components/ui/StatusPill';
import { Icon } from '../components/ui/Icon';
import { mockups } from '../components/mockups';
import { projects, projectCategories } from '../data/projects';
import './Portfolio.css';

const ALL = 'todos';

function ProjectInfo({ project }) {
  return (
    <div className="project__info">
      <div className="project__meta">
        <span className="project__kind mono">{project.kind}</span>
        <StatusPill tone={project.status.tone}>{project.status.label}</StatusPill>
      </div>
      <h3 className="project__name">{project.name}</h3>
      <p className="project__summary">{project.summary}</p>
      <ul className="tag-list" aria-label="Stack">
        {project.stack.map((item) => (
          <li key={item} className="tag">
            {item}
          </li>
        ))}
      </ul>
      {project.url && (
        <a className="project__link" href={project.url} target="_blank" rel="noopener noreferrer">
          Ver sistema no ar <Icon name="external" size={16} />
        </a>
      )}
    </div>
  );
}

function ProjectFeature({ project, reversed }) {
  const Mockup = mockups[project.mockup];
  return (
    <article id={project.id} className={`project project--feature ${reversed ? 'is-reversed' : ''}`}>
      <div className="project__visual">{Mockup && <Mockup />}</div>
      <ProjectInfo project={project} />
    </article>
  );
}

function ProjectCard({ project }) {
  const Mockup = mockups[project.mockup];
  return (
    <article id={project.id} className="project project--card">
      {Mockup && <Mockup />}
      <ProjectInfo project={project} />
    </article>
  );
}

export function Portfolio() {
  const [category, setCategory] = useState(ALL);

  const counts = useMemo(
    () =>
      Object.fromEntries(
        projectCategories.map(({ id }) => [
          id,
          id === ALL ? projects.length : projects.filter((p) => p.category === id).length,
        ]),
      ),
    [],
  );

  const visible = category === ALL ? projects : projects.filter((p) => p.category === category);
  const featured = visible.filter((p) => p.featured);
  const others = visible.filter((p) => !p.featured);

  return (
    <section id="portfolio" className="section section--alt">
      <div className="container">
        <SectionHeader path="projetos" title="Projetos que já saíram do papel.">
          Telas ilustrativas dos sistemas, com dados de exemplo.
        </SectionHeader>

        <div className="filters" role="group" aria-label="Filtrar projetos">
          {projectCategories.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className={`filter ${category === id ? 'is-active' : ''}`}
              aria-pressed={category === id}
              onClick={() => setCategory(id)}
            >
              {label}
              <span className="filter__count mono">{counts[id]}</span>
            </button>
          ))}
        </div>

        {featured.map((project, index) => (
          <ProjectFeature key={project.id} project={project} reversed={index % 2 === 1} />
        ))}

        {others.length > 0 && (
          <div className="project-grid">
            {others.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
