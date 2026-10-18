# Revisão final — Qualidade e entrega

Branch: `feature/revisao-final` (base: `develop`).

## Ajustes aplicados

- README reescrito em português com instalação, build, testes, arquitetura e limitações da demonstração.
- Busca de produtos funcional no cabeçalho, reaproveitando os dados já carregados e filtrando por nome/descrição.
- Acessibilidade: formulário semântico de busca, botão com nome acessível e link para pular ao conteúdo principal.
- Navegação horizontal do carrossel considera a preferência de movimento reduzido.
- Metadados do documento e ícone da aba vinculados à marca do layout.
- Remoção dos arquivos que sobraram do template inicial do Vite.

## Cenários para validação

1. Busca: digitar "iPhone", conferir a vitrine; digitar termo inexistente e verificar aviso de ausência; limpar para recuperar todos os produtos.
2. Busca: teclar Enter ou clicar na lupa e conferir rolagem para a primeira vitrine.
3. Navegação: usar Tab desde o início para acessar "Pular para o conteúdo principal".
4. Carrossel: usar as setas e conferir a navegação com movimento reduzido habilitado nas configurações do sistema.
5. Modal: abrir e fechar produtos de vitrines diferentes; conferir preço/quantidade, Esc e retorno do foco.
6. Newsletter: confirmar que a mensagem avisa que o cadastro é apenas demonstrativo.
7. Responsividade: testar em 375 px, 768 px e 1440 px e comparar com o Figma.
8. Rodar `npm run lint`, `npm run build` e `npm run preview`.

Não foi realizado teste automatizado em navegador nesta etapa. O GitHub Actions cobre lint e build; os fluxos interativos precisam de validação no navegador antes do merge.
