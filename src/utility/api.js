import {calcDaily} from './utils'

const networks = ['avalanche', 'bsc', 'fantom', 'heco', 'polygon']
const network_info = {
  'bsc': {
    id: 56,
    explorer: 'https://bscscan.com/address/'
  },
  'heco': {
    id: 128,
    explorer: 'https://hecoinfo.com/address/'
  },
  'polygon': {
    id: 137,
    explorer: 'https://polygonscan.com/address/'
  },
  'fantom': {
    id: 250,
    explorer: 'https://ftmscan.com/address/'
  },
  'avalanche': {
    id: 43114,
    explorer: 'https://cchain.explorer.avax.network/address/'
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
    const tvlToken = tvls[pool.network_id][pool.id]
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

export const coinLogoUrl = ticker => 'https://trustwallet-assets-api.vercel.app/api/symbol/'  + ticker
export const poolLogoUrl = path => 'https://raw.githubusercontent.com/beefyfinance/beefy-app/master/src/images/'  + path
export const addressUrl = (network, address) => network_info[network].explorer + address