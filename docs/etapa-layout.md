# Etapa 1 — Estrutura do layout

**Branch:** `feature/layout-home`

## Implementado

- Cabeçalho com faixa de benefícios, logotipo provisório, campo de pesquisa e navegação;
- Banner promocional com chamada para ação;
- Sete categorias organizadas em componentes;
- Estilos Sass separados por componente e tokens de cores;
- Ajustes básicos para telas menores;
- HTML semântico, título e descrição SEO.

## Fidelidade visual

O Figma foi inspecionado para dimensões, tipografia, cores e estrutura. O plano Starter chegou ao limite de consultas antes da exportação das imagens originais. Portanto, ainda estão **provisórios**:

- Imagem de fundo do banner;
- Logotipo;
- Ícones do cabeçalho;
- Imagens das sete categorias.

**Não usar links temporários do Figma em produção.** Os elementos deverão ser exportados individualmente da cópia do Figma, versionados em `public/assets/` e aplicados nos componentes. Não usar uma captura da página completa como substituição ao HTML.

## Próximas branches

- `feature/products`: integração com o JSON, vitrine, cards e estados de carregamento/erro;
- `feature/product-modal`: modal com dados do produto, foco e interação;
- `fix/responsividade` (se necessário): ajustes visuais e comportamento em telas menores.

## Validação

```bash
npm ci
npm run lint
npm run build
npm run dev
```

Na finalização, atualizar o README com o procedimento de instalação, execução e testes, além de conferir a página contra o Figma em 1440 px.
