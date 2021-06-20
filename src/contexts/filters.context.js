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
  desiredCoins: 'usdc dai busd',
  desiredPlatforms: 'cake auto aave sushi quick venus 1inch ellipsis mdex'
}

const FiltersContext = createContext(defaultFilters)

export default FiltersContext