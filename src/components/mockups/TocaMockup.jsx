import { WindowFrame } from '../tech/WindowFrame';
import './mockups.css';

const CATEGORIES = ['Parrilla', 'Guarnições', 'Bebidas'];
const PRODUCTS = ['Bife de chorizo', 'Ojo de bife', 'Vacío', 'Chorizo criollo'];
const ORDER = [
  { qty: '1×', item: 'Bife de chorizo', route: 'parrilla' },
  { qty: '1×', item: 'Batata rústica', route: 'cozinha' },
  { qty: '2×', item: 'Refrigerante', route: 'caixa' },
];

/** Tela do PDV da Toca do Espanhol, mostrando o roteamento de impressão. */
export function TocaMockup() {
  return (
    <WindowFrame title="toca-do-espanhol · pdv · mesa 07" className="mock mock--toca">
      <div className="toca">
        <div className="toca__catalog">
          <div className="toca__tabs">
            {CATEGORIES.map((category, index) => (
              <span key={category} className={index === 0 ? 'toca__tab is-active' : 'toca__tab'}>
                {category}
              </span>
            ))}
          </div>
          <div className="toca__grid">
            {PRODUCTS.map((product) => (
              <span key={product} className="toca__product">
                {product}
              </span>
            ))}
          </div>
        </div>
        <div className="toca__order">
          <strong>Pedido</strong>
          {ORDER.map((line) => (
            <div key={line.item} className="toca__line">
              <span>
                {line.qty} {line.item}
              </span>
              <span className="toca__route">→ {line.route}</span>
            </div>
          ))}
          <span className="toca__send">Enviar pedido</span>
        </div>
      </div>
    </WindowFrame>
  );
}
