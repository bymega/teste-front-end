import './PromoBanners.scss';

interface PromoBannersProps {
  destination: string;
  variant?: 'primeiro' | 'segundo';
}

export function PromoBanners({
  destination,
  variant = 'primeiro',
}: PromoBannersProps) {
  return (
    <section className={`promo-banners promo-banners--${variant}`} aria-label="Destaques de parceiros">
      <div className="promo-banners__grid">
        {[1, 2].map((item) => (
          <article className="promo-banners__card" key={item}>
            <div className="promo-banners__content">
              <h2>Parceiros</h2>
              <a href={destination}>Confira</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
