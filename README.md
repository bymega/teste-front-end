# Teste Front-End — Econverse

Implementação da página inicial e da vitrine de produtos do **teste técnico de Front-End da Econverse**, com base no [layout fornecido no Figma](https://www.figma.com/design/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr).

A aplicação foi desenvolvida com React, TypeScript, Sass e Vite, sem bibliotecas de componentes de interface.

## Requisitos

- Node.js **24** e npm **11** (versões utilizadas no desenvolvimento).
- Navegador atualizado, com suporte ao elemento `<dialog>` nativo.

## Instalação e execução

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/bymega/teste-front-end.git
cd teste-front-end
npm ci
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Abra o endereço indicado pelo Vite no terminal (normalmente `http://localhost:5173`).

## Validação e compilação

```bash
npm run lint
npm run build
npm run preview
```

- `npm run lint`: verifica as regras de qualidade do código.
- `npm run build`: executa a verificação de tipos do TypeScript e gera a versão otimizada em `dist/`.
- `npm run preview`: permite conferir localmente os arquivos compilados.

O GitHub Actions executa lint e build automaticamente nas branches de funcionalidade e em Pull Requests direcionados a `develop` ou `main`.

## Funcionalidades

- Página inicial responsiva com cabeçalho, banner de Black Friday, categorias, banners de parceiros, seção de marcas, newsletter ilustrativa e rodapé.
- Três vitrines de produtos com navegação horizontal, usando componentes compartilhados.
- Consumo do [JSON oficial da Econverse](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json), com validação básica dos dados e tratamento de erros.
- Busca local por nome ou descrição, sem novas requisições à API a cada digitação.
- Modal com informações do produto selecionado, imagem, descrição, preço, quantidade e total demonstrativo.
- Abertura e fechamento do modal por teclado, botão ou clique fora.
- Uso de HTML semântico, rótulos de acessibilidade, link para pular ao conteúdo e suporte a movimento reduzido.

**Importante:** é uma demonstração de interface. Os botões Comprar não processam pagamentos; a newsletter não armazena nem envia informações; os itens institucionais e as categorias ilustrativas não representam rotas ou filtros reais.

## Origem dos produtos

Em desenvolvimento, o Vite encaminha a consulta `/api/econverse/produtos.json` ao serviço oficial para evitar bloqueios de CORS no navegador. Em produção, a aplicação tenta o endereço oficial diretamente.

Se a API estiver indisponível ou bloquear a requisição, a aplicação usa a cópia de contingência versionada em `public/data/produtos.json`. Esta cópia **não é sincronizada automaticamente** com o servidor. O JSON disponibiliza nome, descrição curta, fotografia e preço: não foram fabricados categorias, parcelamento ou descontos inexistentes na origem.

## Organização do código

```text
src/
  components/       Componentes visuais e seus estilos SCSS
  hooks/            Estado e carregamento dos produtos
  services/         Requisições e validação do JSON
  styles/           Tokens visuais e estilos globais
  types/            Tipos TypeScript
  utils/            Formatação de valores
  App.tsx           Composição das seções e interação do modal
public/
  assets/           Logotipo, banners e ícones
  data/             Cópia estática dos produtos para contingência
docs/               Registro de etapas e créditos de recursos
```

O carregamento do JSON é compartilhado pelas vitrines para evitar múltiplas requisições da mesma lista. As imagens de produtos fora da primeira vitrine usam carregamento tardio. Os preços são formatados com `Intl.NumberFormat` para o padrão brasileiro.

## Roteiro de testes manuais

1. Conferir a página em larguras de **1440 px, 768 px e 375 px**, verificando eventuais rolagens horizontais indevidas.
2. Utilizar as setas e o toque para navegar entre produtos de cada vitrine.
3. Selecionar produtos diferentes e verificar nome, imagem, preço e descrição no modal.
4. Testar os botões de quantidade e fechamento por `Esc`, `X` e clique fora.
5. Testar o foco com `Tab` e `Shift+Tab`, o link para pular conteúdo e a opção de movimento reduzido.
6. Pesquisar um nome existente e um termo inexistente no campo de busca; limpar a pesquisa.
7. Validar a mensagem da newsletter demonstrativa sem presumir envio de dados.
8. Executar `npm run lint` e `npm run build`.

## Referências

- [Enunciado do teste](https://github.com/EconverseAG/teste-front-end)
- [Layout original no Figma](https://www.figma.com/design/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr)
- [Créditos e procedência dos recursos visuais](docs/creditos-assets.md)

## Envio

Conforme as instruções da Econverse, o link do repositório deve ser enviado para **gustavo.cipriano@econverse.com.br** com o assunto **Teste Vaga FrontEnd**.

Este projeto é uma implementação do teste técnico, não um e-commerce comercial em operação.
