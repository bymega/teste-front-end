import { useRef } from 'react';
import type { Product } from '../../types/product';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductCarousel.scss';

interface ProductCarouselProps {
  products: Product[];
  onSelect: (product: Product) => void;
  viewportId: string;
  label: string;
  prioritizeImages?: boolean;
}

export function ProductCarousel({
  products,
  onSelect,
  viewportId,
  label,
  prioritizeImages = false,
}: ProductCarouselProps) {
  const listRef = useRef<HTMLDivElement>(null);

  function scroll(direction: -1 | 1) {
    const list = listRef.current;
    if (!list) return;

    const card = list.querySelector<HTMLElement>('.product-card');
    if (!card) return;

    const gap = Number.parseFloat(getComputedStyle(list).columnGap) || 0;
    list.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: 'smooth',
    });
  }

  return (
    <div className="product-carousel">
      <button
        className="product-carousel__arrow product-carousel__arrow--previous"
        type="button"
        onClick={() => scroll(-1)}
        aria-label={`Ver produtos anteriores em ${label}`}
        aria-controls={viewportId}
      >
        <span aria-hidden="true">‹</span>
      </button>

      <div
        className="product-carousel__viewport"
        id={viewportId}
        ref={listRef}
        role="region"
        aria-label={label}
        tabIndex={0}
      >
        {products.map((product, index) => (
          <ProductCard
            key={`${product.productName}-${index}`}
            product={product}
            index={index}
            prioritizeImage={prioritizeImages}
            onSelect={onSelect}
          />
        ))}
      </div>

      <button
        className="product-carousel__arrow product-carousel__arrow--next"
        type="button"
        onClick={() => scroll(1)}
        aria-label={`Ver próximos produtos em ${label}`}
        aria-controls={viewportId}
      >
        <span aria-hidden="true">›</span>
      </button>
    </div>
  );
}
