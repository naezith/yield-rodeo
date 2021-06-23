const networks = ['avalanche', 'bsc', 'fantom', 'heco', 'polygon']
const network_ids = {
  'bsc': 56,
  'heco': 128,
  'polygon': 137,
  'fantom': 250,
  'avalanche': 43114
}

const getPools = async (network, type) => {
  const result = await fetch(
      type === 'stake' ?
          `https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/features/configure/stake/${network}_stake.js` :
          `https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/features/configure/vault/${network}_pools.js`
  )

  let text = await result.text()
  const beginningText = ' = ['
  const endingText = '];'
  text = text.substr(text.indexOf(beginningText) + beginningText.length - 1,
      text.indexOf(endingText) - endingText.length)
      .replaceAll('earnContractAbi: govPoolABI,', '')

  const jsonObj = eval(text)

  for(let pool of jsonObj) {
    pool.network = network
    pool.network_id = network_ids[network]
    pool.key = network + '-' + pool.id
    pool.type = type // stake or pool
  }

  return jsonObj
}

const fetchAllPools = async () => {
  let pools = {
    'stake': {},
    'pool': {},
  }

  let lengths = 0
  await Promise.all(Object.keys(pools).map(async type => {
    await Promise.all(networks.map(async network => {
      pools[type][network] = await getPools(network, type)
      lengths += pools[type][network].length
    }))
  }))


  let allCombined = []

  for(let type of Object.keys(pools))
    for(let network of networks)
      allCombined = allCombined.concat(pools[type][network])

  return allCombined
}


export const getYields = async () => {
  const allPools = await fetchAllPools()

  return allPools.map(pool => {
    const [platform, coinA, coinB] = pool.id.split('-').map(w => w.toUpperCase())
    return {
      key: pool.key,
      platform, coinA, coinB,
      ...pool
    }
  })
}

export const getYieldsWithPrices = async () => {
  const yields = await getYields()
  const prices = await (await fetch('https://api.beefy.finance/lps')).json()
  const apyBreakdowns = await (await fetch('https://api.beefy.finance/apy/breakdown')).json()
  const tvls = await (await fetch('https://api.beefy.finance/tvl')).json()

  return yields.map(pool => {
    const lpPrice = prices[pool.id]
    const tvlToken = tvls[pool.network_id][pool.id]
    const apyBreakdown = apyBreakdowns[pool.id]
    return {
    ...pool,
      lpPrice: lpPrice,
      tvl: tvlToken,
      ...apyBreakdown
    }
  }).filter(pool => pool.tvl > 0 && pool.totalApy > 0.01)
      .sort((a, b) => a.totalApy < b.totalApy ? 1 : -1)
}

export const poolLogoUrl = path => 'https://raw.githubusercontent.com/beefyfinance/beefy-app/master/src/images/'  + path