import './Footer.scss';

const institutional = ['Sobre nós', 'Nossas lojas', 'Nossas marcas'];
const help = ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'];
const terms = ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__identity">
          <a href="#conteudo-principal" className="footer__logo" aria-label="Econverse - voltar ao início">
            <img src="/assets/logo-econverse.svg" alt="" width="139" height="42" loading="lazy" />
          </a>
          <p>Conectando você aos melhores produtos.</p>
        </div>

        <div className="footer__links">
          <section aria-labelledby="footer-institucional">
            <h2 id="footer-institucional">Institucional</h2>
            <ul>{institutional.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          <section aria-labelledby="footer-ajuda">
            <h2 id="footer-ajuda">Ajuda</h2>
            <ul>{help.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          <section aria-labelledby="footer-termos">
            <h2 id="footer-termos">Termos</h2>
            <ul>{terms.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        </div>
      </div>
    </footer>
  );
}
