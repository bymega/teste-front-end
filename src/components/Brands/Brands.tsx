import './Brands.scss';

export function Brands() {
  return (
    <section className="brands" aria-labelledby="marcas-titulo">
      <h2 id="marcas-titulo">Navegue por marcas</h2>
      <div className="brands__list" aria-label="Econverse">
        {Array.from({ length: 5 }, (_, index) => (
          <div className="brands__badge" key={index} aria-hidden={index !== 0}>
            <img src="/assets/logo-econverse.svg" alt={index === 0 ? 'Econverse' : ''} width="139" height="42" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
