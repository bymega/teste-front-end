import './Header.scss';

const links = [
  'Todas Categorias',
  'Supermercado',
  'Livros',
  'Moda',
  'Lançamentos',
  'Ofertas do dia',
  'Assinatura',
] as const;

export function Header() {
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
          <span className="site-header__logo-symbol" aria-hidden="true" />
          <span><strong>econ</strong>verse</span>
        </a>

        <div className="site-header__search">
          <label className="visually-hidden" htmlFor="busca-produtos">Buscar produtos</label>
          <input
            id="busca-produtos"
            type="search"
            placeholder="O que você está buscando?"
            autoComplete="off"
          />
          <span aria-hidden="true" className="site-header__search-icon">
            <img src="/assets/ui/busca.svg" alt="" width="28" height="28" />
          </span>
        </div>

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
