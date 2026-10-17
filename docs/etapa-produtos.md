# Etapa 2 — Vitrine de produtos

**Branch:** `feature/products`, criada a partir de `develop`.

## Implementado

- Consumo do JSON oficial da Econverse com `fetch` e `AbortController`;
- Tipagem e validação dos dados retornados;
- Card reutilizável e preço formatado em reais;
- Carrossel responsivo e abertura de prévia do produto;
- Estados de carregamento, vazio e erro;
- Proxy de desenvolvimento do Vite e alternativa local para falhas de rede/CORS.

## Origem dos dados e disponibilidade

O endereço oficial é:

```text
https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
```

O navegador pode impedir requisições diretas entre origens diferentes (CORS).
Para contornar o problema **durante o desenvolvimento**, o Vite expõe:

```text
/api/econverse/produtos.json
```

Essa rota é encaminhada ao JSON oficial pelo servidor de desenvolvimento.
No ambiente de produção, a aplicação tenta o endereço oficial diretamente.
Se a requisição falhar, em qualquer ambiente, é utilizada uma **cópia estática
do JSON oficial**, salva em `public/data/produtos.json`. Esse arquivo não
é atualizado automaticamente: caso os dados de origem mudem, deve ser sincronizado.

Não há API própria, credenciais nem dependências extras. Os produtos são
carregados através de `fetch`; a cópia local permite que a demonstração
continue funcionando se a origem estiver indisponível.

O JSON fornece apenas `productName`, `descriptionShort`, `photo` e
`price`. Não contém categorias reais, desconto, valor anterior nem parcelas.
Por isso, esses dados não são inventados. As categorias da vitrine são somente
rótulos visuais do Figma, não filtros.

## Validação local

Depois de atualizar a branch, **reiniciar o servidor Vite** para aplicar o proxy:

```sh
npm ci
npm run lint
npm run build
npm run dev
```

Visitar a página e conferir os produtos. Para testar o fallback, é possível
bloquear a requisição externa no DevTools e verificar se a vitrine apresenta
os 10 produtos do arquivo local.

## Próxima etapa

Aprimorar o popup em `feature/product-modal`, com os controles e medidas do
Figma e revisão de acessibilidade.
