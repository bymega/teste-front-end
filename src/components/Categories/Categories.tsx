import './Categories.scss';

const categories = [
  { name: 'Tecnologia', icon: '/assets/categories/tecnologia.svg' },
  { name: 'Supermercado', icon: '/assets/categories/supermercado.svg' },
  { name: 'Bebidas', icon: '/assets/categories/bebidas.svg' },
  { name: 'Ferramentas', icon: '/assets/categories/ferramentas.svg' },
  { name: 'Saúde', icon: '/assets/categories/saude.svg' },
  { name: 'Esportes e Fitness', icon: '/assets/categories/esportes.svg' },
  { name: 'Moda', icon: '/assets/categories/moda.svg' },
] as const;

export function Categories() {
  return (
    <section className="categories" id="categorias" aria-label="Compre por categoria">
      <ul className="categories__list">
        {categories.map(({ name, icon }, index) => (
          <li className="categories__item" key={name}>
            <div className={index === 0 ? 'categories__tile categories__tile--active' : 'categories__tile'}>
              <img className="categories__icon" src={icon} alt="" width="61" height="61" loading="lazy" decoding="async" />
            </div>
            <p className={index === 0 ? 'categories__label categories__label--active' : 'categories__label'}>{name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
