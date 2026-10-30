import { SectionHeader } from '../components/ui/SectionHeader';
import { highlights } from '../data/experience';
import './About.css';

export function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <SectionHeader path="sobre" title="Gestão pública me ensinou o problema. Código virou a solução." />

        <div className="about">
          <div className="about__copy">
            <p>
              Sou de Maricá, no Rio. Formado em Banco de Dados e cursando Engenharia de Software. Trabalhei seis anos
              como chefe de setor administrativo numa autarquia municipal, cuidando de contratos, custos e prazos de
              cinco diretorias.
            </p>
            <p>
              Foi lá que comecei a automatizar. Conciliação de folha que levava dias virou script em Python. Controle
              de contrato em planilha virou painel no Power BI. Prazo perdido virou quadro de Scrum.
            </p>
            <p>
              Hoje uso isso para construir sistemas e análises para empresas de verdade, de oficina a restaurante.
              Gosto de entender a rotina de quem vai usar antes de escrever a primeira linha.
            </p>
          </div>

          <dl className="about__stats">
            {highlights.map((item) => (
              <div key={item.label} className="about__stat">
                <dt className="about__stat-label">{item.label}</dt>
                <dd className="about__stat-value">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
