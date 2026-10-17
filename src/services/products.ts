import type { Product, ProductResponse } from '../types/product';

const PRODUCTS_ENDPOINT =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

function isProduct(value: unknown): value is Product {
  if (typeof value !== 'object' || value === null) return false;

  const product = value as Record<string, unknown>;

  return (
    typeof product.productName === 'string' &&
    typeof product.descriptionShort === 'string' &&
    typeof product.photo === 'string' &&
    /^https?:\/\//.test(product.photo) &&
    typeof product.price === 'number' &&
    Number.isFinite(product.price) &&
    product.price >= 0
  );
}

function isProductResponse(value: unknown): value is ProductResponse {
  if (typeof value !== 'object' || value === null) return false;

  const response = value as Record<string, unknown>;

  return (
    response.success === true &&
    Array.isArray(response.products) &&
    response.products.every(isProduct)
  );
}

export async function getProducts(signal?: AbortSignal): Promise<Product[]> {
  const response = await fetch(PRODUCTS_ENDPOINT, { signal });

  if (!response.ok) {
    throw new Error('Não foi possível carregar os produtos.');
  }

  const data: unknown = await response.json();

  if (!isProductResponse(data)) {
    throw new Error('Os dados recebidos dos produtos estão inválidos.');
  }

  return data.products;
}
