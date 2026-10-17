import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Categories } from './components/Categories/Categories';

export default function App() {
  return (
    <>
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <Categories />
      </main>
    </>
  );
}
