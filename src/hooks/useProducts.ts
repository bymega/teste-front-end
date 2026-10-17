import { useEffect, useState } from 'react';
import { getProducts } from '../services/products';
import type { Product } from '../types/product';

export type ProductsState =
  | { status: 'loading' }
  | { status: 'success'; products: Product[] }
  | { status: 'error'; message: string };

export function useProducts() {
  const [productsState, setProductsState] = useState<ProductsState>({ status: 'loading' });
  const [requestKey, setRequestKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    getProducts(controller.signal)
      .then((products) => {
        if (!controller.signal.aborted) setProductsState({ status: 'success', products });
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return;
        const message = error instanceof Error
          ? error.message
          : 'Não foi possível carregar os produtos.';
        setProductsState({ status: 'error', message });
      });

    return () => controller.abort();
  }, [requestKey]);

  function retry() {
    setProductsState({ status: 'loading' });
    setRequestKey((key) => key + 1);
  }

  return { productsState, retry };
}
