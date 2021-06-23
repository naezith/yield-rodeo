import {textHasAnyOfArray} from './helpers'

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

export const formatFiat = (num) => {
  return numeral(num).format('$0,0.0a')
}

export const filterPools = (pools, filters) => {
  const { desiredCoins, strictFilter, exactMatch, desiredPlatforms, includeSingleAssets, includeLPs } = filters
  const desiredPlatformsArray = desiredPlatforms.trim().toUpperCase().split(' ')

  return pools.filter(pool => {
    const coinA = pool.coinA.toLowerCase()
    const coinB = !pool.coinB ? undefined : pool.coinB.toLowerCase()

    if(!includeLPs && coinB) return false
    if(!includeSingleAssets && !coinB) return false

    // Filter coins
    const desiredCoinsArray = desiredCoins.trim().toLowerCase().split(' ')
    if(desiredCoinsArray.length > 0) {
      // Single asset
      if(!pool.coinB) {
        if(!textHasAnyOfArray(coinA, desiredCoinsArray, exactMatch)) return false
      }
      // Liquidity Pool
      else {
        if(strictFilter) {
          if(!textHasAnyOfArray(coinA, desiredCoinsArray, exactMatch) || !textHasAnyOfArray(coinB, desiredCoinsArray, exactMatch)) return false
        }
        else {
          if(!textHasAnyOfArray(coinA, desiredCoinsArray, exactMatch) && !textHasAnyOfArray(coinB, desiredCoinsArray, exactMatch)) return false
        }
      }
    }

    // Filter platforms
    if(desiredPlatformsArray.length > 0)
      if(!textHasAnyOfArray(pool.platform.toUpperCase(), desiredPlatformsArray)) return false

    return true
  })
}