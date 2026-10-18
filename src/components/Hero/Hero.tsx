import './Hero.scss';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <h1 id="hero-title">Venha conhecer nossas promoções</h1>
        <p>50% Off nos produtos</p>
        <a className="hero__button" href="#categorias">Ver produto</a>
      </div>
    </section>
  );
}
