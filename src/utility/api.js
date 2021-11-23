import {calcDaily} from './utils'

const networks = ['avalanche', 'bsc', 'fantom', 'heco', 'polygon', 'arbitrum', 'harmony', 'celo', 'moonriver', 'cronos']
const network_info = {
  'bsc': {
    id: 56,
    explorer: 'https://bscscan.com/'
  },
  'heco': {
    id: 128,
    explorer: 'https://hecoinfo.com/'
  },
  'polygon': {
    id: 137,
    explorer: 'https://polygonscan.com/'
  },
  'fantom': {
    id: 250,
    explorer: 'https://ftmscan.com/'
  },
  'avalanche': {
    id: 43114,
    explorer: 'https://cchain.explorer.avax.network/'
  },
  'arbitrum': {
    id: 42161,
    explorer: 'https://arbiscan.io/'
  },
  'harmony': {
    id: 1666600000,
    explorer: 'https://explorer.harmony.one/'
  },
  'celo': {
    id: 42220,
    explorer: 'https://explorer.celo.org/'
  },
  'moonriver': {
    id: 1285,
    explorer: 'https://blockscout.moonriver.moonbeam.network/'
  },
  'cronos': {
    id: 25,
    explorer: 'https://cronos.crypto.org/explorer/'
  },
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
      .replace(/earnContractAbi: govPoolABI,/g, '')
      .replace(/, '4BELT'/g, '')
      .replace(/partners: \[.*\]/g, 'partners: []')

  const jsonObj = eval(text)

  for(let pool of jsonObj) {
    pool.network = network
    pool.network_id = network_info[network].id
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

  await Promise.all(Object.keys(pools).map(async type => {
    await Promise.all(networks.map(async network => {
      pools[type][network] = await getPools(network, type)
    }))
  }))


  let allCombined = []

  for(let type of Object.keys(pools))
    for(let network of networks)
      allCombined = allCombined.concat(pools[type][network])

  return allCombined
}

export const getYieldsWithPrices = async () => {
  const yields = await fetchAllPools()
  const prices = await (await fetch('https://api.beefy.finance/lps')).json()
  const apyBreakdowns = await (await fetch('https://api.beefy.finance/apy/breakdown')).json()
  const tvls = await (await fetch('https://api.beefy.finance/tvl')).json()

  return yields.map(pool => {
    const lpPrice = prices[pool.id]
    const tvlToken = tvls[pool.network_id] ? tvls[pool.network_id][pool.id] : ''
    const apyBreakdown = apyBreakdowns[pool.id]
    return {
      depositFee: '0.0%',
      withdrawalFee: '0.1%',
      dailyApy: apyBreakdown && calcDaily(apyBreakdown.totalApy),
      ...pool,
      lpPrice: lpPrice,
      tvl: tvlToken,
      ...apyBreakdown
    }
  }).filter(pool => pool.tvl > 0 && pool.totalApy > 0.0001)
      .sort((a, b) => a.totalApy < b.totalApy ? 1 : -1)
}

export const coinLogoUrl = ticker => 'https://farm.army/token/'  + ticker.toLowerCase() + '.webp?v=3'
export const poolLogoUrl = path => 'https://raw.githubusercontent.com/beefyfinance/beefy-app/master/src/images/'  + path
export const addressUrl = (network, address) => network_info[network].explorer + 'address/' + address