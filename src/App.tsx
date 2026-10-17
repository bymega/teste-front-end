import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Categories } from './components/Categories/Categories';
import { ProductShowcase } from './components/ProductShowcase/ProductShowcase';

export default function App() {
  return (
    <>
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <Categories />
        <ProductShowcase />
      </main>
    </>
  );
}
