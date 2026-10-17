# Etapa 3 — Modal de produtos

Branch: `feature/product-modal`. Base: `develop`.

## Escopo

- Popup associado ao produto escolhido, com imagem, nome, preço e descrição provenientes do JSON;
- Controle de quantidade entre 1 e 99, iniciando em 01;
- Botão Comprar amarelo e controle de quantidade ao lado, seguindo as medidas do Figma;
- Fechamento pelo X, tecla Escape e clique no fundo escurecido;
- Abertura com foco no título, contenção do foco enquanto o popup estiver aberto e retorno ao elemento anterior ao fechar, usando `<dialog>` nativo;
- Descrição adicional com valor total calculado conforme a quantidade;
- Resposta ao botão Comprar como **seleção de demonstração**, sem simular pagamento ou integração com checkout;
- Modal responsivo sem biblioteca de interface.

## Referência de layout

Figma `Home > Popup`, nó `1:2580`:

- Pop-up de aproximadamente 769 × 299 px no desktop;
- Coluna com imagem à esquerda e informações à direita;
- Título e preço em Poppins, descrição em Work Sans;
- Azul `#3442b5`, roxo `#271c47`, amarelo `#f7ca11`;
- Seletor de quantidade 110 × 36 px, botão Comprar 188 × 36 px.

A consulta ao Figma voltou a atingir o limite do plano Starter. Os ícones de mais, menos e fechar foram feitos com caracteres tipográficos enquanto os SVGs oficiais não puderem ser exportados.

## Validação manual

1. Atualizar `feature/product-modal` e reiniciar o servidor, se necessário.
2. Clicar na imagem ou no botão Comprar de diferentes cards e confirmar que os dados correspondem ao card.
3. Usar + e −; conferir início em 01, mínimo 01 e máximo 99.
4. Conferir a descrição expandida e o valor total para a quantidade selecionada.
5. Testar fechamento por X, Escape e clique fora.
6. Navegar por Tab/Shift+Tab e confirmar retorno do foco ao produto ao fechar.
7. Testar janela desktop de 1440 px, mobile de 375 px e viewport de altura reduzida.
8. Executar `npm run lint` e `npm run build` antes do PR.

Os testes completos dependem de validação local; esta implementação não afirma que houve uma compra.
