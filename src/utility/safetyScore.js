// https://github.com/beefyfinance/beefy-landing-v2/blob/main/src/helpers/safetyScore.js
// https://github.com/beefyfinance/beefy-landing-v2/blob/main/src/config/risk.js
export const MAX_SCORE = 10;

export const RISKS = {
  COMPLEXITY_LOW: {
    category: "Categry-Beefy",
    score: 0,
    title: "Complexity-Low-Titl",
    explanation: "Complexity-Low-Expl",
    condition: "Complexity-Low-Cond",
  },

  COMPLEXITY_MID: {
    category: "Categry-Beefy",
    score: 0.3,
    title: "Complexity-Mid-Titl",
    explanation: "Complexity-Mid-Expl",
    condition: "Complexity-Mid-Cond",
  },

  COMPLEXITY_HIGH: {
    category: "Categry-Beefy",
    score: 0.5,
    title: "Complexity-Hi-Titl",
    explanation: "Complexity-Hi-Expl",
    condition: "Complexity-Hi-Cond",
  },

  BATTLE_TESTED: {
    category: "Categry-Beefy",
    score: 0,
    title: "Testd-Battle-Titl",
    explanation: "Testd-Battle-Expl",
    condition: "Testd-Battle-Cond",
  },

  NEW_STRAT: {
    category: "Categry-Beefy",
    score: 0.3,
    title: "Testd-New-Titl",
    explanation: "Testd-New-Expl",
    condition: "Testd-New-Cond",
  },

  EXPERIMENTAL_STRAT: {
    category: "Categry-Beefy",
    score: 0.7,
    title: "Testd-Experimtl-Titl",
    explanation: "Testd-Experimtl-Expl",
    condition: "Testd-Experimtl-Cond",
  },

  IL_NONE: {
    category: "Categry-Asset",
    score: 0,
    title: "IL-None-Titl",
    explanation: "IL-None-Expl",
    condition: "IL-None-Cond",
  },

  IL_LOW: {
    category: "Categry-Asset",
    score: 0.2,
    title: "IL-Low-Titl",
    explanation: "IL-Low-Expl",
    condition: "IL-Low-Cond",
  },

  IL_HIGH: {
    category: "Categry-Asset",
    score: 0.5,
    title: "IL-High-Titl",
    explanation: "IL-High-Expl",
    condition: "IL-High-Cond",
  },

  ALGO_STABLE: {
    category: "Categry-Asset",
    score: 0.5,
    title: "IL-AlgoStable-Titl",
    explanation: "IL-AlgoStable-Expl",
    condition: "IL-AlgoStable-Cond",
  },

  LIQ_HIGH: {
    category: "Categry-Asset",
    score: 0,
    title: "Liquidt-High-Titl",
    explanation: "Liquidt-High-Expl",
    condition: "Liquidt-High-Cond",
  },

  LIQ_LOW: {
    category: "Categry-Asset",
    score: 0.3,
    title: "Liquidt-Low-Titl",
    explanation: "Liquidt-Low-Expl",
    condition: "Liquidt-Low-Cond",
  },

  MCAP_LARGE: {
    category: "Categry-Asset",
    score: 0,
    title: "MktCap-Large-Titl",
    explanation: "MktCap-Large-Expl",
    condition: "MktCap-Large-Cond",
  },

  MCAP_MEDIUM: {
    category: "Categry-Asset",
    score: 0.1,
    title: "MktCap-Mid-Titl",
    explanation: "MktCap-Mid-Expl",
    condition: "MktCap-Mid-Cond",
  },

  MCAP_SMALL: {
    category: "Categry-Asset",
    score: 0.3,
    title: "MktCap-Small-Titl",
    explanation: "MktCap-Small-Expl",
    condition: "MktCap-Small-Cond",
  },

  MCAP_MICRO: {
    category: "Categry-Asset",
    score: 0.5,
    title: "MktCap-Micro-Titl",
    explanation: "MktCap-Micro-Expl",
    condition: "MktCap-Micro-Cond",
  },

  SUPPLY_CENTRALIZED: {
    category: "Categry-Asset",
    score: 1,
    title: "Concentrated-Titl",
    explanation: "Concentrated-Expl",
    condition: "Concentrated-Cond",
  },

  PLATFORM_ESTABLISHED: {
    category: "Categry-Platform",
    score: 0,
    title: "Platfrm-Establshd-Titl",
    explanation: "Platfrm-Establshd-Expl",
    condition: "Platfrm-Establshd-Cond",
  },

  PLATFORM_NEW: {
    category: "Categry-Platform",
    score: 0.5,
    title: "Platfrm-New-Titl",
    explanation: "Platfrm-New-Expl",
    condition: "Platfrm-New-Cond",
  },

  NO_AUDIT: {
    category: "Categry-Platform",
    score: 0.3,
    title: "Platfrm-AuditNo-Titl",
    explanation: "Platfrm-AuditNo-Expl",
    condition: "Platfrm-AuditNo-Cond",
  },

  AUDIT: {
    category: "Categry-Platform",
    score: 0,
    title: "Platfrm-Audit-Titl",
    explanation: "Platfrm-Audit-Expl",
    condition: "Platfrm-Audit-Cond",
  },

  CONTRACTS_VERIFIED: {
    category: "Categry-Platform",
    score: 0,
    title: "Platfrm-Verified-Titl",
    explanation: "Platfrm-Verified-Expl",
    condition: "Platfrm-Verified-Cond",
  },

  CONTRACTS_UNVERIFIED: {
    category: "Categry-Platform",
    score: 1,
    title: "Platfrm-VerifiedNo-Titl",
    explanation: "Platfrm-VerifiedNo-Expl",
    condition: "Platfrm-VerifiedNo-Cond",
  },

  ADMIN_WITH_TIMELOCK: {
    category: "Categry-Platform",
    score: 0,
    title: "Platfrm-Timelock-Titl",
    explanation: "Platfrm-Timelock-Expl",
    condition: "Platfrm-Timelock-Cond",
  },

  ADMIN_WITHOUT_TIMELOCK: {
    category: "Categry-Platform",
    score: 0.5,
    title: "Platfrm-TimelockNo-Titl",
    explanation: "Platfrm-TimelockNo-Expl",
    condition: "Platfrm-TimelockNo-Cond",
  },
};

export const CATEGORIES = {
  "Categry-Beefy": 0.2,
  "Categry-Asset": 0.2,
  "Categry-Platform": 0.6,
};

const calcRisk = (arr) => {
  const categories = {};
  for (const c in CATEGORIES) {
    categories[c] = [];
  }

  // reverse lookup
  arr.forEach((r, idx) => {
    if (!(r in RISKS)) {
      //console.warn('unknown risk', r);
      return;
    }

    const cat = RISKS[r].category;
    if (!(cat in CATEGORIES)) {
      console.warn("unknown category", cat);
      return;
    }

    categories[cat].push(r);
  });

  // reduce & clamp
  let risk = 0;
  for (const c in CATEGORIES) {
    const w = CATEGORIES[c];
    risk +=
      w *
      Math.min(
        1,
        categories[c].reduce((acc, r) => acc + RISKS[r].score, 0)
      );
  }

  return risk;
};

const safetyScore = (arr) => {
  if (!arr || arr.length === 0) return null;

  return MAX_SCORE * (1 - calcRisk(arr));
};

export default safetyScore;
