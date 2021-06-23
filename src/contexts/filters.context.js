import { createContext } from 'react'

export const emptyFilters = {
  desiredCoins: '',
  strictFilter: true,
  exactMatch: false,
  desiredPlatforms: '',
  includeSingleAssets: true,
  includeLPs: true
}

export const defaultFilters = {
  ...emptyFilters,
  desiredCoins: 'usdc dai busd usdt',
  desiredPlatforms: ''
}

const FiltersContext = createContext(defaultFilters)

export default FiltersContext