var numeral = require('numeral')

export const calcDaily = apy => {
  const g = Math.pow(10, Math.log10(apy + 1) / 365) - 1;

  if (isNaN(g)) {
    return 0;
  }

  return g;
}

export const getPoolName = (pool) => `${pool.coinA}${pool.coinB ? ` + ${pool.coinB}` : ''}`

export const formatPercentage = (num) => {
  const text = numeral(num).format('0.00a%')
  return text.indexOf('NaN') !== -1 ? '🔥' : text
}
export const formatInteger = (num) => {
  return numeral(num).format('0,0')
}