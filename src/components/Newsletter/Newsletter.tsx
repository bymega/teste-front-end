import { useState } from 'react';
import type { FormEvent } from 'react';
import './Newsletter.scss';

export function Newsletter() {
  const [notice, setNotice] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice('Formulário demonstrativo: nenhum dado foi enviado ou armazenado.');
  }

  return (
    <section className="newsletter" aria-labelledby="newsletter-titulo">
      <div className="newsletter__inner">
        <div className="newsletter__copy">
          <h2 id="newsletter-titulo">Inscreva-se na nossa newsletter</h2>
          <p>Receba novidades e ofertas especiais.</p>
        </div>
        <form className="newsletter__form" onSubmit={handleSubmit}>
          <label className="visually-hidden" htmlFor="newsletter-nome">Seu nome</label>
          <input id="newsletter-nome" name="nome" type="text" placeholder="Seu nome" autoComplete="name" required />
          <label className="visually-hidden" htmlFor="newsletter-email">Seu e-mail</label>
          <input id="newsletter-email" name="email" type="email" placeholder="Seu e-mail" autoComplete="email" required />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
      {notice && <p className="newsletter__notice" role="status">{notice}</p>}
    </section>
  );
}
