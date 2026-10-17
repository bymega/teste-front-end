import { useEffect, useState } from 'react';
import type { Product } from '../../types/product';
import { getProducts } from '../../services/products';
import { ProductCarousel } from '../ProductCarousel/ProductCarousel';
import { ProductDialog } from '../ProductDialog/ProductDialog';
import './ProductShowcase.scss';

type ProductsState =
  | { status: 'loading' }
  | { status: 'success'; products: Product[] }
  | { status: 'error'; message: string };

const categories = [
  'celular',
  'acessórios',
  'tablets',
  'notebooks',
  'TVs',
  'Ver todos',
] as const;

export function ProductShowcase() {
  const [productsState, setProductsState] = useState<ProductsState>({ status: 'loading' });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    getProducts(controller.signal)
      .then((products) => setProductsState({ status: 'success', products }))
      .catch((error: unknown) => {
        if (controller.signal.aborted) return;
        const message = error instanceof Error ? error.message : 'Ocorreu um erro inesperado.';
        setProductsState({ status: 'error', message });
      });

    return () => controller.abort();
  }, [reloadKey]);

  return (
    <section className="product-showcase" id="produtos" aria-labelledby="produtos-titulo">
      <div className="product-showcase__heading">
        <h2 id="produtos-titulo">Produtos relacionados</h2>
        <span>Ver todos</span>
      </div>

      <ul className="product-showcase__categories" aria-label="Categorias ilustradas na vitrine">
        {categories.map((category, index) => (
          <li key={category} className={index === 0 ? 'product-showcase__category--active' : undefined}>
            {category}
          </li>
        ))}
      </ul>

      {productsState.status === 'loading' && (
        <p className="product-showcase__status" role="status">Carregando produtos...</p>
      )}

      {productsState.status === 'error' && (
        <div className="product-showcase__status" role="alert">
          <p>{productsState.message}</p>
          <button type="button" onClick={() => {
            setProductsState({ status: 'loading' });
            setReloadKey((key) => key + 1);
          }}>
            Tentar novamente
          </button>
        </div>
      )}

      {productsState.status === 'success' && (
        productsState.products.length > 0 ? (
          <ProductCarousel products={productsState.products} onSelect={setSelectedProduct} />
        ) : (
          <p className="product-showcase__status">Nenhum produto encontrado.</p>
        )
      )}

      {selectedProduct && (
        <ProductDialog product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  );
}
