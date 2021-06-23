import {arrayHasAllOfArray, arrayHasAnyOfArray, textHasAnyOfArray} from './helpers'

const numeral = require('numeral')

export const calcDaily = apy => {
  const g = Math.pow(10, Math.log10(apy + 1) / 365) - 1;

  if (isNaN(g)) {
    return 0;
  }

  return g;
}

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
  const { desiredCoins, strictFilter, exactMatch, desiredPlatforms, desiredNetworks, includeSingleAssets, includeLPs } = filters
  const desiredPlatformsArray = desiredPlatforms.trim().toUpperCase().split(' ')
  const desiredNetworksArray = desiredNetworks.trim().toUpperCase().split(' ')

  return pools.filter(pool => {
    const assets = pool.assets.map(a => a.toLowerCase())

    if(!includeLPs && pool.assets.length > 1) return false
    if(!includeSingleAssets && pool.assets.length === 1) return false

    // Filter coins
    const desiredCoinsArray = desiredCoins.trim().toLowerCase().split(' ')
    if(desiredCoinsArray.length > 0) {
      // Single asset
      if(pool.assets.length === 1) {
        if(!arrayHasAnyOfArray(assets, desiredCoinsArray, exactMatch)) return false
      }
      // Liquidity Pool
      else {
        if(strictFilter) {
          if(!arrayHasAllOfArray(assets, desiredCoinsArray, exactMatch)) return false
        }
        else {
          if(!arrayHasAnyOfArray(assets, desiredCoinsArray, exactMatch)) return false
        }
      }
    }

    // Filter platforms
    if(desiredPlatformsArray.length > 0)
      if(!textHasAnyOfArray(pool.platform.toUpperCase(), desiredPlatformsArray)) return false

    // Filter networks
    if(desiredNetworksArray.length > 0)
      if(!textHasAnyOfArray(pool.network.toUpperCase(), desiredNetworksArray)) return false

    return true
  })
}