import {currencySymbols} from '../helpers/currencySymbols';

const formatAmount = (number: number) =>
  String(number).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,');

const getAmount = (price = 0) => Math.floor(Number(price));

const getDecimals = (price = 0) => {
  const decimals = String(price).split('.')[1] ?? 0;
  return Number(decimals);
};

const getFormated = (currency: string, amount: number, decimals: number) => {
  const symbolObj = currencySymbols.find(({code}) => code === currency);
  const decimalsFormated = String(decimals).padEnd(2, '0');
  const amountFormated = formatAmount(amount).replace(/,/g, '.');

  return `${symbolObj?.symbol_native} ${amountFormated},${decimalsFormated}`;
};

export {formatAmount, getAmount, getDecimals, getFormated};
