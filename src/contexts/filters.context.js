import { createContext } from 'react'

export const emptyFilters = {
  desiredCoins: '',
  strictFilter: true,
  exactMatch: false,
  desiredPlatforms: '',
  desiredNetworks: '',
  includeSingleAssets: true,
  includeLPs: true
}

export const defaultFilters = {
  ...emptyFilters,
  desiredCoins: 'usdc dai busd usdt',
}

const FiltersContext = createContext(defaultFilters)

export default FiltersContext