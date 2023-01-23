import { createContext } from "react";

export const emptyFilters = {
  desiredCoins: "",
  strictFilter: true,
  exactMatch: false,
  desiredPlatforms: "",
  desiredNetworks: "",
  minimumTvl: 0,
  includeSingleAssets: true,
  includeLPs: true,
};

export const defaultFilters = {
  ...emptyFilters,
  desiredCoins: "usdc dai busd usdt",
  minimumTvl: "100000",
};

const FiltersContext = createContext(defaultFilters);

export default FiltersContext;
