import type { Product } from '../../types/product';
import type { ProductsState } from '../../hooks/useProducts';
import { ProductCarousel } from '../ProductCarousel/ProductCarousel';
import './ProductShowcase.scss';

const categories = [
  'celular',
  'acessórios',
  'tablets',
  'notebooks',
  'TVs',
  'Ver todos',
] as const;

interface ProductShowcaseProps {
  id: string;
  title?: string;
  productsState: ProductsState;
  searchQuery?: string;
  offset?: number;
  showCategories?: boolean;
  onSelect: (product: Product) => void;
  onRetry: () => void;
}

export function ProductShowcase({
  id,
  title = 'Produtos relacionados',
  productsState,
  searchQuery = '',
  offset = 0,
  showCategories = false,
  onSelect,
  onRetry,
}: ProductShowcaseProps) {
  const products = productsState.status === 'success' ? productsState.products : [];
  const normalizedQuery = searchQuery.trim().toLocaleLowerCase('pt-BR');
  const filteredProducts = normalizedQuery
    ? products.filter((product) =>
        `${product.productName} ${product.descriptionShort}`.toLocaleLowerCase('pt-BR').includes(normalizedQuery),
      )
    : products;
  const start = filteredProducts.length ? offset % filteredProducts.length : 0;
  const displayedProducts = [
    ...filteredProducts.slice(start),
    ...filteredProducts.slice(0, start),
  ];

  return (
    <section className="product-showcase" id={id} aria-labelledby={`${id}-titulo`}>
      <div className="product-showcase__heading">
        <h2 id={`${id}-titulo`}>{title}</h2>
        {!showCategories && <span>Ver todos</span>}
      </div>

      {showCategories && (
        <ul className="product-showcase__categories" aria-label="Categorias exibidas na vitrine">
          {categories.map((category, index) => (
            <li
              key={category}
              className={index === 0 ? 'product-showcase__category--active' : undefined}
            >
              {category}
            </li>
          ))}
        </ul>
      )}

      {productsState.status === 'loading' && (
        <p className="product-showcase__status" role="status">Carregando produtos...</p>
      )}

      {productsState.status === 'error' && (
        <div className="product-showcase__status" role="alert">
          <p>{productsState.message}</p>
          <button type="button" onClick={onRetry}>Tentar novamente</button>
        </div>
      )}

      {productsState.status === 'success' && (
        displayedProducts.length ? (
          <ProductCarousel
            viewportId={`${id}-lista`}
            label={title}
            products={displayedProducts}
            onSelect={onSelect}
            prioritizeImages={showCategories}
          />
        ) : (
          <p className="product-showcase__status" role="status">
            {normalizedQuery ? 'Nenhum produto corresponde à busca.' : 'Nenhum produto encontrado.'}
          </p>
        )
      )}
    </section>
  );
}
