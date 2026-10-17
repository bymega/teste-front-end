import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Categories } from './components/Categories/Categories';
import { ProductShowcase } from './components/ProductShowcase/ProductShowcase';
import { ProductDialog } from './components/ProductDialog/ProductDialog';
import { PromoBanners } from './components/PromoBanners/PromoBanners';
import { Brands } from './components/Brands/Brands';
import { Newsletter } from './components/Newsletter/Newsletter';
import { Footer } from './components/Footer/Footer';
import { useProducts } from './hooks/useProducts';
import { formatPrice } from './utils/formatPrice';
import type { Product } from './types/product';
import './App.scss';

export default function App() {
  const { productsState, retry } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectionNotice, setSelectionNotice] = useState<string | null>(null);

  function openProduct(product: Product) {
    setSelectionNotice(null);
    setSelectedProduct(product);
  }

  function handleSelectQuantity(product: Product, quantity: number) {
    const total = formatPrice(product.price * quantity);
    setSelectionNotice(
      `Seleção de demonstração: ${quantity} ${quantity === 1 ? 'unidade' : 'unidades'} de ${product.productName} (${total}). Nenhuma compra foi realizada.`,
    );
  }

  return (
    <>
      <Header />

      <main id="conteudo-principal">
        <Hero />
        <Categories />

        <ProductShowcase
          id="produtos"
          productsState={productsState}
          onRetry={retry}
          onSelect={openProduct}
          showCategories
        />

        <PromoBanners destination="#produtos-recomendados" />

        <ProductShowcase
          id="produtos-recomendados"
          productsState={productsState}
          onRetry={retry}
          onSelect={openProduct}
          offset={4}
        />

        <PromoBanners destination="#produtos-em-destaque" variant="segundo" />

        <Brands />

        <ProductShowcase
          id="produtos-em-destaque"
          productsState={productsState}
          onRetry={retry}
          onSelect={openProduct}
          offset={7}
        />

        {selectionNotice && (
          <p className="home__selection-notice" role="status">{selectionNotice}</p>
        )}

        {selectedProduct && (
          <ProductDialog
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onSelectQuantity={handleSelectQuantity}
          />
        )}
      </main>

      <Newsletter />
      <Footer />
    </>
  );
}
