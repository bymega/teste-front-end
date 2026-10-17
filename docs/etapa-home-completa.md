# Etapa 4 — Estrutura da Home completa

**Branch:** `feature/home-completa`, criada a partir de `develop`.

## Componentes e integração

- Mantidos o cabeçalho, banner, categorias, vitrine e modal já aprovados;
- Acrescentados dois pares de banners de parceiros;
- Acrescentada a seção de marcas;
- Três vitrines com os produtos reais do JSON;
- Newsletter demonstrativa e rodapé institucional;
- Consumo de produtos centralizado no hook `useProducts`: uma requisição para todas as vitrines, sem chamadas redundantes;
- IDs únicos para cada vitrine e carrossel;
- Imagens dos cards inferiores carregadas sob demanda;
- Interação dos três carrosséis com o **mesmo modal** de detalhes.

## Limitações conhecidas

O Figma original tem uma Home de 1440 × 4660 px. O plano Starter do Figma bloqueia novas consultas e a exportação dos assets. Por isso, as imagens reais de parceiros e os logotipos continuam pendentes: os fundos promocionais são **gradientes provisórios**, não imagens do layout. Os sete ícones das categorias e seis ícones do cabeçalho foram adicionados usando SVGs cujos identificadores dos nós correspondem ao Figma; os créditos e a licença desses recursos estão em `docs/creditos-assets.md`. A página ainda exige comparação pixel a pixel após exportar os assets.

A lista fornecida pela Econverse contém 10 produtos, sem categorias. Os produtos das três vitrines são os mesmos, apresentados em ordens diferentes; não existe filtro ou inventário separado. As marcas exibidas na seção de círculos são ilustrações visuais da marca Econverse, conforme os itens visíveis na referência consultada anteriormente.

A newsletter não envia nem guarda dados, exibindo mensagem transparente de demonstração ao usuário. Não foram inventadas integrações com backend ou APIs de marketing.

## Validação

```sh
npm ci
npm run lint
npm run build
npm run dev
```

Conferir os três carrosséis, as setas, a correspondência dos produtos no modal, o fechamento do popup, o formulário demonstrativo e as resoluções mobile/desktop.

Não abrir PR até a validação local e a revisão visual. As alterações **não** devem ser mescladas diretamente em `main`.
