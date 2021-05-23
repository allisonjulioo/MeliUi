const currency = (currency: string, amount: number, decimals: number) => {
  const formatter = new Intl.NumberFormat(currency, {
    style: 'currency',
    currency: 'BRL',
  });
  const number = `${amount}.${decimals}`;
  const value = Number(Number(number).toFixed(2));
  return formatter.format(value);
};

export {currency};
