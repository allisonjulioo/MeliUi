import {formatAmount, formatDecimals} from './currency';

describe('Currency formatter', () => {
  test('format amount adding thousand separator', () => {
    expect(formatAmount(1002)).toBe('1.002');
    expect(formatAmount(1)).toBe('1');
    expect(formatAmount(-1000)).toBe('-1.000');
  });

  test('format decimals adding 0 after positive single number', () => {
    expect(formatDecimals(1002)).toBe('1002');
    expect(formatDecimals(-1)).toBe('-1');
    expect(formatDecimals(1)).toBe('10');
    expect(formatDecimals(8)).toBe('80');
    expect(formatDecimals(89)).toBe('89');
  });
});
