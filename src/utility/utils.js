import {
  arrayHasAllOfArray,
  arrayHasAnyOfArray,
  textHasAnyOfArray,
} from "./helpers";

const numeral = require("numeral");

export const calcDaily = (apy) => {
  const g = Math.pow(10, Math.log10(apy + 1) / 365) - 1;

  if (isNaN(g)) {
    return 0;
  }

  return g;
};

export const calcMonthly = (apy) => {
  return apy / 12;
};

export const formatAny = (num, format) => {
  const text = numeral(num).format(format);
  return text.indexOf("NaN") !== -1 ? "" : text;
};

export const formatPercentage = (num) => formatAny(num, "0.00a%").toUpperCase();
export const formatInteger = (num) => formatAny(num, "0,0").toUpperCase();
export const formatFiat = (num) => formatAny(num, "$0,0.0a").toUpperCase();

export const filterPools = (pools, filters) => {
  const {
    desiredCoins,
    strictFilter,
    exactMatch,
    desiredPlatforms,
    desiredNetworks,
    includeSingleAssets,
    includeLPs,
  } = filters;
  const desiredPlatformsArray = desiredPlatforms
    .trim()
    .toUpperCase()
    .split(" ");
  const desiredNetworksArray = desiredNetworks.trim().toUpperCase().split(" ");

  return pools.filter((pool) => {
    const assets = pool.assets.map((a) => a.toLowerCase());

    if (!includeLPs && pool.assets.length > 1) return false;
    if (!includeSingleAssets && pool.assets.length === 1) return false;

    // Filter coins
    const desiredCoinsArray = desiredCoins.trim().toLowerCase().split(" ");
    if (desiredCoinsArray.length > 0) {
      // Single asset
      if (pool.assets.length === 1) {
        if (!arrayHasAnyOfArray(assets, desiredCoinsArray, exactMatch))
          return false;
      }
      // Liquidity Pool
      else {
        if (strictFilter) {
          if (!arrayHasAllOfArray(assets, desiredCoinsArray, exactMatch))
            return false;
        } else {
          if (!arrayHasAnyOfArray(assets, desiredCoinsArray, exactMatch))
            return false;
        }
      }
    }

    // Filter platforms
    if (desiredPlatformsArray.length > 0)
      if (
        !textHasAnyOfArray(pool.platformId.toUpperCase(), desiredPlatformsArray)
      )
        return false;
    // Filter networks
    if (desiredNetworksArray.length > 0)
      if (!textHasAnyOfArray(pool.network.toUpperCase(), desiredNetworksArray))
        return false;

    return true;
  });
};

export const addApyValues = (yields, capital) => {
  capital = capital ? parseFloat(capital) : 0;
  if (capital === 0) return yields;

  return yields.map((y) => ({
    ...y,
    totalApyAmount: numeral(y.totalApy).value() * capital,
    dailyApyAmount: numeral(y.dailyApy).value() * capital,
    monthlyApyAmount: numeral(y.monthlyApy).value() * capital,
  }));
};
