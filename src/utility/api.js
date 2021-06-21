export const getYields = async () => {
  const result = await (await fetch('https://api.beefy.finance/apy/breakdown')).json()

  return Object.keys(result).map(key => {
    const pool = result[key]
    const [platform, coinA, coinB] = key.split('-').map(w => w.toUpperCase())
    return {
      key: key,
      platform, coinA, coinB,
      ...pool
    }
  }).filter(pool => pool.totalApy > 0.01)
    .sort((a, b) => a.totalApy < b.totalApy ? 1 : -1)
}

export const getLpPrices = async () => {
  const result = await (await fetch('https://api.beefy.finance/lps')).json()
  return result
}

export const getTvls = async () => {
  const result = await (await fetch('https://api.beefy.finance/tvl')).json()
  let tvls = {}
  for(const network of Object.keys(result)) {
    tvls = { ...tvls, ...result[network] }
  }
  return tvls
}

export const getYieldsWithPrices = async () => {
  const yields = await getYields()
  const prices = await getLpPrices()
  const tvls = await getTvls()
  return yields.map(pool => {

    const lpPrice = prices[pool.key]
    const tvlToken = tvls[pool.key]
    return {
    ...pool,
      lpPrice: lpPrice,
      tvl: tvlToken
    }
  }).filter(pool => pool.tvl > 0)
}

export const poolLogoUrl = (coinA, coinB) => 'https://farm.army/token/' + coinA.toLowerCase() + '-' + coinB.toLowerCase() + '.png'
export const coinLogoUrl = ticker => 'https://trustwallet-assets-api.vercel.app/api/symbol/'  + ticker