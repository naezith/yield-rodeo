import {calcDaily, calcMonthly} from './utils'
import safetyScore from './safetyScore'

const getRandomParam = () => "?p=" + (new Date()).getTime()

const networks = ['avalanche', 'bsc', 'fantom', 'heco', 'polygon', 'arbitrum', 'harmony', 'celo', 'moonriver', 'cronos', 'fuse', 'metis']
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
  'fuse': {
    id: 122,
    explorer: 'https://explorer.fuse.io/'
  },
  'metis': {
    id: 1088,
    explorer: 'https://andromeda-explorer.metis.io/'
  },
}

const getPools = async (network, type) => {
  const result = await fetch(
      (type === 'stake' ?
          `https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/features/configure/stake/${network}_stake.js` :
          `https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/features/configure/vault/${network}_pools.js`)
          + getRandomParam())

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

    // Fix withdrawalFee formatting, API bad formatting
    if(pool.withdrawalFee && pool.withdrawalFee.length > 0) {
      if(pool.withdrawalFee === "0.0%") {
        pool.withdrawalFee = "0%"
      }
      if(pool.withdrawalFee[0] === '.') {
        pool.withdrawalFee = "0" + pool.withdrawalFee
      }
    }

    // Fix depositFee formatting, API bad formatting
    if(pool.depositFee && pool.depositFee.length > 0) {
      if(pool.depositFee[0] === '.') {
        pool.depositFee = "0" + pool.depositFee
      }
      pool.depositFee = pool.depositFee.replace("<", "")
    }
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
  const prices = await (await fetch('https://api.beefy.finance/lps' + getRandomParam())).json()
  const apyBreakdowns = await (await fetch('https://api.beefy.finance/apy/breakdown' + getRandomParam())).json()
  const tvls = await (await fetch('https://api.beefy.finance/tvl' + getRandomParam())).json()

  return yields.map(pool => {
    const lpPrice = prices[pool.id]
    const tvlToken = tvls[pool.network_id] ? tvls[pool.network_id][pool.id] : ''
    const apyBreakdown = apyBreakdowns[pool.id]
    const score = safetyScore(pool.risks)
    return {
      vaultUrl: beefyUrl(pool.network, pool.id),  
      withdrawalFee: '0.1%',
      depositFee: '0%',
      dailyApy: apyBreakdown && calcDaily(apyBreakdown.totalApy),
      monthlyApy: apyBreakdown && calcMonthly(apyBreakdown.totalApy),
      ...pool,
      lpPrice: lpPrice,
      tvl: tvlToken,
      ...apyBreakdown,
      safetyScore: score === null ? 9.991337 : score,
    }
  }).filter(pool => pool.tvl > 0 && pool.totalApy > 0.0001)
      .sort((a, b) => a.totalApy < b.totalApy ? 1 : -1)
}

export const useFallbackImage = (ev, fallbackUrl) => { ev.target.src = fallbackUrl }
export const coinLogoUrl = (ticker, ext='svg') => 'https://raw.githubusercontent.com/beefyfinance/beefy-app/master/src/images/single-assets/'  + ticker + '.' + ext
export const poolLogoUrl = path => 'https://raw.githubusercontent.com/beefyfinance/beefy-app/master/src/images/'  + path
export const addressUrl = (network, address) => network_info[network].explorer + 'address/' + address
export const beefyUrl = (network, id) => 'https://beta.beefy.finance/#/'+ network + '/vault/' + id