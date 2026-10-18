import type { Product } from '../../types/product';
import { formatPrice } from '../../utils/formatPrice';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  index: number;
  onSelect: (product: Product) => void;
  prioritizeImage?: boolean;
}

export function ProductCard({
  product,
  index,
  onSelect,
  prioritizeImage = false,
}: ProductCardProps) {
  return (
    <article className="product-card">
      <button
        className="product-card__image-button"
        type="button"
        onClick={() => onSelect(product)}
        aria-label={`Ver detalhes de ${product.productName}`}
      >
        <img
          src={product.photo}
          alt={product.productName}
          width="278"
          height="228"
          loading={prioritizeImage && index < 4 ? 'eager' : 'lazy'}
          decoding="async"
        />
      </button>

      <div className="product-card__body">
        <h3>{product.productName}</h3>
        <p className="product-card__price">{formatPrice(product.price)}</p>
        <button
          type="button"
          className="product-card__purchase"
          onClick={() => onSelect(product)}
          aria-label={`Ver detalhes de ${product.productName}`}
        >
          Comprar
        </button>
      </div>
    </article>
  );
}
