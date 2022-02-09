export const formatCurrency = (money) =>
  money.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
