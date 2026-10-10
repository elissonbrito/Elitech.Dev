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
          <span className="mono">Maricá</span>
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

/** Painel de dados genérico (chamados por bairro + tendência). */
export function DashboardMockup() {
  const rows = [
    { label: 'Bairro A', value: 80, peak: true },
    { label: 'Bairro B', value: 62 },
    { label: 'Bairro C', value: 48 },
    { label: 'Bairro D', value: 35 },
  ];

  return (
    <div className="mock-stage">
      <div className="mini-panel">
        <div className="mini-panel__head">
          <strong>Painel de chamados</strong>
          <span className="mono">exemplo</span>
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
