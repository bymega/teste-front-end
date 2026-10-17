import './Categories.scss';

interface Category {
  name: string;
  symbol: string;
}

const categories: Category[] = [
  { name: 'Tecnologia', symbol: '⌘' },
  { name: 'Supermercado', symbol: '▣' },
  { name: 'Bebidas', symbol: '◉' },
  { name: 'Ferramentas', symbol: '⚒' },
  { name: 'Saúde', symbol: '+' },
  { name: 'Esportes e Fitness', symbol: '↗' },
  { name: 'Moda', symbol: '◇' },
];

export function Categories() {
  return (
    <section className="categories" id="categorias" aria-label="Compre por categoria">
      <ul className="categories__list">
        {categories.map(({ name, symbol }, index) => (
          <li className="categories__item" key={name}>
            <div className={index === 0 ? 'categories__tile categories__tile--active' : 'categories__tile'}>
              <span aria-hidden="true" className="categories__icon">{symbol}</span>
            </div>
            <p className={index === 0 ? 'categories__label categories__label--active' : 'categories__label'}>{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
