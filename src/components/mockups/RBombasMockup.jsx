import { WindowFrame } from '../tech/WindowFrame';
import './mockups.css';

const STATS = [
  { label: 'OS abertas', value: 4 },
  { label: 'Concluídas', value: 12 },
  { label: 'Clientes', value: 27 },
  { label: 'Revisões', value: 3, highlight: true },
];

const ORDERS = [
  { id: '#0012', item: 'Bomba submersa', status: 'Em andamento', tone: 'progress' },
  { id: '#0011', item: 'Pressurizador', status: 'Concluído', tone: 'done' },
  { id: '#0010', item: 'Bomba centrífuga', status: 'Concluído', tone: 'done' },
];

const MENU = ['Painel', 'Ordens de serviço', 'Clientes', 'Alertas'];

/** Tela do painel do sistema R Bombas (cores da marca do cliente, dados de exemplo). */
export function RBombasMockup() {
  return (
    <WindowFrame address="elissonjbrito.github.io/R_Bombas" className="mock mock--rbombas">
      <div className="rb">
        <aside className="rb__side">
          <div className="rb__brand">
            <span className="rb__badge">R</span>
            <strong>R BOMBAS</strong>
          </div>
          {MENU.map((entry, index) => (
            <span key={entry} className={index === 0 ? 'rb__menu is-active' : 'rb__menu'}>
              {entry}
            </span>
          ))}
        </aside>
        <div className="rb__main">
          <div className="rb__stats">
            {STATS.map((stat) => (
              <div key={stat.label} className={stat.highlight ? 'rb__stat is-alert' : 'rb__stat'}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
          <div className="rb__head">
            <strong>Ordens recentes</strong>
            <span className="rb__new">+ Nova OS</span>
          </div>
          <ul className="rb__orders">
            {ORDERS.map((order) => (
              <li key={order.id}>
                <span>
                  {order.id} · {order.item}
                </span>
                <span className={`rb__status rb__status--${order.tone}`}>{order.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </WindowFrame>
  );
}
