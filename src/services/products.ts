import type { Product, ProductResponse } from '../types/product';

const OFFICIAL_PRODUCTS_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

// Durante o desenvolvimento, o Vite encaminha a requisição para evitar CORS.
// Em produção, a consulta tenta a URL oficial antes de usar a cópia local.
const PRODUCTS_ENDPOINT = import.meta.env.DEV
  ? '/api/econverse/produtos.json'
  : OFFICIAL_PRODUCTS_URL;

const LOCAL_PRODUCTS_ENDPOINT = `${import.meta.env.BASE_URL}data/produtos.json`;

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

async function loadProducts(url: string, signal?: AbortSignal): Promise<Product[]> {
  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`Resposta HTTP ${response.status}`);
  }

  const data: unknown = await response.json();

  if (!isProductResponse(data)) {
    throw new Error('O JSON de produtos tem formato inválido.');
  }

  return data.products;
}

export async function getProducts(signal?: AbortSignal): Promise<Product[]> {
  try {
    return await loadProducts(PRODUCTS_ENDPOINT, signal);
  } catch (primaryError: unknown) {
    // A tela desmontada não deve disparar uma segunda requisição.
    if (signal?.aborted) throw primaryError;

    try {
      // Cópia fiel do JSON do teste: evita vitrine vazia caso o servidor
      // remoto esteja indisponível ou não permita requisições do navegador.
      return await loadProducts(LOCAL_PRODUCTS_ENDPOINT, signal);
    } catch (fallbackError: unknown) {
      if (signal?.aborted) throw fallbackError;

      throw new Error(
        'Não foi possível carregar os produtos. Tente novamente em instantes.',
      );
    }
  }
}
