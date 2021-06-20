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

  console.log(result)
  return result
  // return Object.keys(result).map(key => {
  //   const pool = result[key]
  //   const [platform, coinA, coinB] = key.split('-').map(w => w.toUpperCase())
  //   return {
  //     key: key,
  //     platform, coinA, coinB,
  //     ...pool
  //   }
  // }).filter(pool => pool.totalApy > 0.01)
  //   .sort((a, b) => a.totalApy < b.totalApy ? 1 : -1)
}

export const getYieldsWithPrices = async () => {
  const yields = await getYields()
  const prices = await getLpPrices()
  return yields.map(pool => ({
    lpPrice: prices[pool.key]
  }))
}

export const coinLogoUrl = ticker => 'https://trustwallet-assets-api.vercel.app/api/symbol/' + ticker