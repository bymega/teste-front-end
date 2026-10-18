import type { FormEvent } from 'react';
import './Header.scss';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const links = [
  'Todas Categorias',
  'Supermercado',
  'Livros',
  'Moda',
  'Lançamentos',
  'Ofertas do dia',
  'Assinatura',
] as const;

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('produtos')?.scrollIntoView({
      behavior: prefersReducedMotion ? 'instant' : 'smooth',
      block: 'start',
    });
  }

  return (
    <header className="site-header">
      <div className="site-header__benefits" aria-label="Benefícios de comprar na Econverse">
        <p>
          <img src="/assets/ui/seguranca.svg" alt="" width="20" height="20" />
          Compra <strong>100% segura</strong>
        </p>
        <p>
          <img src="/assets/ui/frete.svg" alt="" width="20" height="20" />
          <strong>Frete grátis</strong> acima de R$ 200
        </p>
        <p>
          <img src="/assets/ui/cartao.svg" alt="" width="20" height="20" />
          <strong>Parcele</strong> suas compras
        </p>
      </div>

      <div className="site-header__main">
        <a className="site-header__logo" href="#conteudo-principal" aria-label="Econverse - início">
          <img src="/assets/logo-econverse.svg" alt="" width="139" height="42" />
        </a>

        <form className="site-header__search" role="search" onSubmit={handleSearch}>
          <label className="visually-hidden" htmlFor="busca-produtos">Buscar produtos</label>
          <input
            id="busca-produtos"
            type="search"
            placeholder="O que você está buscando?"
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            autoComplete="off"
          />
          <button type="submit" aria-label="Ir para os resultados da busca">
            <img src="/assets/ui/busca.svg" alt="" width="28" height="28" />
          </button>
        </form>

        <div className="site-header__actions" aria-label="Área do cliente">
          <span role="img" aria-label="Comparar produtos">⇄</span>
          <img src="/assets/ui/favoritos.svg" alt="Favoritos" width="32" height="32" />
          <img src="/assets/ui/conta.svg" alt="Minha conta" width="32" height="32" />
          <img src="/assets/ui/carrinho.svg" alt="Carrinho" width="32" height="32" />
        </div>
      </div>

      <nav className="site-header__nav" aria-label="Navegação principal">
        <ul>
          {links.map((label, index) => (
            <li key={label}>
              {index === 0 ? (
                <a href="#categorias">{label}</a>
              ) : (
                <span className={label === 'Ofertas do dia' ? 'site-header__accent' : undefined}>
                  {label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
