import { calcDaily, calcMonthly } from "./utils";
import safetyScore from "./safetyScore";
import { fixJSON } from "./helpers";

const fetchPlus = (url, options = {}, retries = 150) =>
  fetch(url, options)
    .then((res) => {
      if (res.ok) {
        return res;
      }
      if (retries > 0) {
        return fetchPlus(url, options, retries - 1);
      }
      throw new Error(res.status);
    })
    .catch((error) => console.error(error.message));

const getRandomParam = () => "?p=" + new Date().getTime();

let networks = [];
let network_info = {};

const getNetworks = async () => {
  const result = await fetch(
    `https://raw.githubusercontent.com/beefyfinance/beefy-api/master/packages/address-book/src/types/chainid.ts` +
      getRandomParam()
  );

  let text = await result.text();
  let start = text.indexOf("{");
  let end = text.indexOf("}", start) + 1;
  text = text.substring(start, end)
            .replace(/ = /g, ": ")
            .replace(",\n}", "\n}");

  const jsonObj = JSON.parse(fixJSON(text));

  networks = [];
  network_info = {};
  for (const [key, value] of Object.entries(jsonObj)) {
    networks.push(key);
    network_info[key] = { id: value };
  }

  return { networks, network_info };
};

const processPools = (pools) => {
  for (let pool of pools) {
    pool.network = pool.chain;
    pool.network_id = network_info[pool.chain].id;
    pool.key = pool.network + "-" + pool.id;

    // Fix withdrawalFee formatting, API bad formatting
    if (pool.withdrawalFee && pool.withdrawalFee.length > 0) {
      if (pool.withdrawalFee === "0.0%") {
        pool.withdrawalFee = "0%";
      }
      if (pool.withdrawalFee[0] === ".") {
        pool.withdrawalFee = "0" + pool.withdrawalFee;
      }
    }

    if (pool.assets) {
      pool.assets = pool.assets.sort();
      pool.name = "";
      for (let a of pool.assets) {
        if (pool.name !== "") pool.name += " · ";
        pool.name += a;
      }
    }

    // Fix depositFee formatting, API bad formatting
    if (pool.depositFee && pool.depositFee.length > 0) {
      if (pool.depositFee[0] === ".") {
        pool.depositFee = "0" + pool.depositFee;
      }
      pool.depositFee = pool.depositFee.replace("<", "");
    }
  }

  return pools;
};

export const getYieldsWithPrices = async () => {
  await getNetworks();
  const yields = processPools(
    await (
      await fetchPlus("https://api.beefy.finance/vaults" + getRandomParam())
    ).json()
  );
  // const prices = await (await fetchPlus('https://api.beefy.finance/lps' + getRandomParam())).json()
  const apyBreakdowns = await (
    await fetchPlus(
      "https://api.beefy.finance/apy/breakdown" + getRandomParam()
    )
  ).json();
  const tvls = await (
    await fetchPlus("https://api.beefy.finance/tvl" + getRandomParam())
  ).json();

  return yields
    .map((pool) => {
      // const lpPrice = prices[pool.id]
      const tvlToken = tvls[pool.network_id]
        ? tvls[pool.network_id][pool.id]
        : "";
      const apyBreakdown = apyBreakdowns[pool.id];
      const score = safetyScore(pool.risks);
      return {
        vaultUrl: beefyUrl(pool.network, pool.id),
        withdrawalFee: "0.1%",
        depositFee: "0%",
        dailyApy: apyBreakdown && calcDaily(apyBreakdown.totalApy),
        monthlyApy: apyBreakdown && calcMonthly(apyBreakdown.totalApy),
        ...pool,
        // lpPrice: lpPrice,
        tvl: tvlToken,
        ...apyBreakdown,
        platformId: pool.platformId.toUpperCase(),
        safetyScore: score === null ? 9.991337 : score,
      };
    })
    .filter((pool) => pool.tvl > 0 && pool.totalApy > 0.0001)
    .sort((a, b) => (a.totalApy < b.totalApy ? 1 : -1));
};

// Get coin logo formats
let logosMap = JSON.parse(window.localStorage.getItem("logosMap"));

const getLogos = async () => {
  if (!logosMap || logosMap.nextRefreshTime <= Date.now()) {
    logosMap = {};
    const githubRequestCount = 2;
    let canFetch =
      (await (await fetch("https://api.github.com/rate_limit")).json()).rate
        .remaining >= githubRequestCount;
    if (canFetch) {
      let lastCommitSha = (
        await (
          await fetch(
            "https://api.github.com/repos/beefyfinance/beefy-app/commits/master"
          )
        ).json()
      ).sha;
      let repoPaths = await (
        await fetch(
          `https://api.github.com/repos/beefyfinance/beefy-app/git/trees/${lastCommitSha}?recursive=1`
        )
      ).json();

      // Map paths to coins
      for (let item of repoPaths.tree) {
        if (item.path === "src/images/single-assets") {
          let saLogosFolder = await (await fetch(item.url)).json();

          for (let item of saLogosFolder.tree) {
            let coinName = item.path.split(".")[0];
            logosMap[coinName] = item.path;
          }

          break;
        }
      }

      // Save
      logosMap.nextRefreshTime = Date.now() + 15 * 60000;
      window.localStorage.setItem("logosMap", JSON.stringify(logosMap));
    }
  }
};
getLogos();

export const coinLogoUrl = (ticker) =>
  "https://raw.githubusercontent.com/beefyfinance/beefy-app/master/src/images/single-assets/" +
  logosMap[ticker];
export const poolLogoUrl = (path) =>
  "https://raw.githubusercontent.com/beefyfinance/beefy-app/master/src/images/" +
  path;
// export const addressUrl = (network, address) => network_info[network].explorer + 'address/' + address
export const beefyUrl = (network, id) =>
  "https://beta.beefy.finance/#/" + network + "/vault/" + id;
