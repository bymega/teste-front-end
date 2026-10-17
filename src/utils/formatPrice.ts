const brazilianCurrency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function formatPrice(value: number): string {
  return brazilianCurrency.format(value);
}
