import './Brands.scss';

export function Brands() {
  return (
    <section className="brands" aria-labelledby="marcas-titulo">
      <h2 id="marcas-titulo">Navegue por marcas</h2>
      <div className="brands__list" aria-label="Econverse">
        {Array.from({ length: 5 }, (_, index) => (
          <div className="brands__badge" key={index} aria-hidden={index !== 0}>
            <span className="brands__mark" aria-hidden="true" />
            <span><strong>econ</strong>verse</span>
          </div>
        ))}
      </div>
    </section>
  );
}
