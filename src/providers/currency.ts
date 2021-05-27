const formatAmount = (number = 0) =>
  String(number)
    .replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')
    .replace(/,/g, '.');

const formatDecimals = (decimals = 0) => String(decimals).padEnd(2, '0');

export {formatAmount, formatDecimals};
