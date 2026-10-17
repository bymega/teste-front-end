# Etapa 2 — Vitrine de produtos

**Branch:** `feature/products`, criada a partir de `develop`.

## Implementado

- Consumo do JSON oficial com `fetch` e `AbortController`;
- Validação de formato da resposta e tipagem TypeScript;
- Componente reutilizável de card de produto e formatação em reais;
- Vitrine com quatro cards visíveis no desktop e rolagem horizontal responsiva;
- Setas de navegação, rolagem por toque e estados de carregamento, vazio e erro;
- Abertura de uma prévia acessível dos detalhes do produto ao clicar.

## Sobre os dados

A API fornece exclusivamente `productName`, `descriptionShort`, `photo` e `price`. Não fornece categorias, preço anterior, frete nem parcelas. Por isso, esses valores **não foram inventados**. As categorias acima da vitrine são apenas rótulos visuais do Figma, não filtros.

## Próxima etapa

Na branch `feature/product-modal`, aperfeiçoar o popup conforme o Figma, incluindo controle de quantidade, estilos definitivos e revisão de acessibilidade. O controle de compra real está fora do escopo do teste.

## Validação local

```sh
npm ci
npm run lint
npm run build
npm run dev
```

O comportamento da API no navegador depende da disponibilidade do endpoint e das permissões CORS concedidas pelo servidor.
