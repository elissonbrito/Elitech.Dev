import { CodeView } from '../tech/CodeView';
import './mockups.css';

/** App Primeiros Passos em moldura de celular. */
export function PrimeirosPassosMockup() {
  const cards = [
    { label: 'Próxima vacina', value: 'em 5 dias', tone: 'a' },
    { label: 'Rotina de sono', value: 'registrar hoje', tone: 'b' },
    { label: 'Marcos do bebê', value: '3 de 8', tone: 'c' },
  ];

  return (
    <div className="mock-stage">
      <div className="phone">
        <span className="phone__notch" aria-hidden="true" />
        <strong className="phone__title">Primeiros Passos</strong>
        {cards.map((card) => (
          <div key={card.label} className={`phone__card phone__card--${card.tone}`}>
            <span>{card.label}</span>
            <strong>{card.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Painel da ouvidoria Ágora. */
export function AgoraMockup() {
  const bars = [40, 65, 50, 85, 70, 58];
  return (
    <div className="mock-stage">
      <div className="mini-panel">
        <div className="mini-panel__head">
          <strong>Ágora · Ouvidoria</strong>
          <span className="mono">protótipo</span>
        </div>
        <div className="mini-panel__chips">
          <span>Recebidas</span>
          <span>Em análise</span>
          <span>Respondidas</span>
        </div>
        <div className="mini-panel__bars" aria-hidden="true">
          {bars.map((height, index) => (
            <i key={height + index} style={{ height: `${height}%` }} className={index === 3 ? 'is-peak' : ''} />
          ))}
        </div>
      </div>
    </div>
  );
}

const DEFAULT_ROWS = [
  { label: 'Serviço A', value: 80, peak: true },
  { label: 'Serviço B', value: 62 },
  { label: 'Serviço C', value: 48 },
  { label: 'Serviço D', value: 35 },
];

/** Painel de dados genérico (ranking em barras + tendência). */
export function DashboardMockup({ title = 'Painel de chamados', tag = 'exemplo', rows = DEFAULT_ROWS }) {
  return (
    <div className="mock-stage">
      <div className="mini-panel">
        <div className="mini-panel__head">
          <strong>{title}</strong>
          <span className="mono">{tag}</span>
        </div>
        <div className="mini-panel__rows" aria-hidden="true">
          {rows.map((row) => (
            <div key={row.label} className="mini-panel__row">
              <span>{row.label}</span>
              <i style={{ width: `${row.value}%` }} className={row.peak ? 'is-peak' : ''} />
            </div>
          ))}
        </div>
        <svg className="mini-panel__spark" viewBox="0 0 200 50" aria-hidden="true" preserveAspectRatio="none">
          <polyline points="0,42 30,36 60,38 90,24 120,28 150,14 180,18 200,6" />
        </svg>
      </div>
    </div>
  );
}

/** Cartões de indicadores com os números reais de um projeto de dados. */
export function KpiMockup({ title, tag, kpis = [] }) {
  return (
    <div className="mock-stage">
      <div className="mini-panel">
        <div className="mini-panel__head">
          <strong>{title}</strong>
          <span className="mono">{tag}</span>
        </div>
        <dl className="mini-panel__kpis">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className={`mini-panel__kpi ${kpi.peak ? 'is-peak' : ''} ${/\d/.test(kpi.value) ? '' : 'is-text'}`}
            >
              <dt>{kpi.label}</dt>
              <dd>{kpi.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

/** Conversa de exemplo com a Bia, bot de DM do Instagram. */
export function ChatMockup() {
  const messages = [
    { from: 'user', text: 'Oi! Vocês atendem no sábado?' },
    { from: 'bot', text: 'Oi! Atendemos sim, das 9h às 13h. Quer que eu reserve um horário?' },
    { from: 'user', text: 'Quero, 10h.' },
  ];

  return (
    <div className="mock-stage">
      <div className="chat">
        <div className="chat__head">
          <span className="chat__avatar" aria-hidden="true">B</span>
          <strong>Bia</strong>
          <span className="chat__status mono">online</span>
        </div>
        {messages.map((message) => (
          <p key={message.text} className={`chat__bubble chat__bubble--${message.from}`}>
            {message.text}
          </p>
        ))}
        <span className="chat__typing" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </div>
    </div>
  );
}

/** Trecho de código em mini editor, para projetos de backend. */
export function CodeMockup({ file, code }) {
  return (
    <div className="mock-stage mock-stage--code">
      <div className="mini-code">
        <span className="mini-code__tab mono">{file}</span>
        <CodeView code={code} />
      </div>
    </div>
  );
}
