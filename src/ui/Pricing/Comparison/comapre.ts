import { Plan } from '@/utils/plans'

export const COMPARE_TABLE = [
  {
    category: 'General',
    features: [
      { name: 'Browser tabs', isLimit: true },
      {
        name: 'Bi-weekly report',
        description: `<b>Exclusive Pro reports</b> to update on Santiment's top indicators on a biweekly basis`,
        isCheck: true,
      },
      { name: 'Pro Insights', isAccess: true },
    ],
  },

  {
    category: 'Support',
    isCheck: true,
    features: [
      { name: 'Priority support' },
      { name: 'Dedicated account manager' },
      { name: 'Custom onboarding & education' },
    ],
  },

  {
    category: 'Charts',
    features: [
      {
        name: "Chart's data period",
        description: `<b>Limited data!</b> For users on the Free plan, some data has time range limitations`,
        isAccess: true,
      },
      { name: 'Hide watermark on charts', isCheck: true },
      { name: 'Download chart as SCV', isCheck: true },
      { name: 'Embed charts', isAccess: true },
    ],
  },

  {
    category: 'Alerts',
    features: [
      { name: 'Custom Alerts', isLimit: true },
      {
        name: 'Alert durations',
        description:
          '<b>Duration restriction!</b> For users on the Free plan, any Alert will be valid just for 30 days.',
        isLimit: true,
      },
      {
        name: 'Webhooks',
        isCheck: true,
      },
    ],
  },

  {
    category: 'Screener',
    features: [
      { name: 'Screeners', isLimit: true },
      {
        name: 'Screener filters',
        isAccess: true,
      },
    ],
  },

  {
    category: 'Integrations',
    isCheck: true,
    features: [{ name: 'Google Sheets Plugin' }, { name: 'CSV' }, { name: 'Telegram' }],
  },

  {
    category: 'Financial data',
    isCheck: true,
    features: [{ name: 'Price' }, { name: 'Marketcap' }, { name: 'Volume' }],
  },

  {
    category: 'On-chain data',
    isCheck: true,
    features: [
      { name: 'Daily active addresses' },
      { name: 'Rolling 24-hour active addresses ' },
      { name: '1-hour active addresses' },
      { name: 'Price-DAA Divergence model' },
      { name: 'Network growth' },
      { name: 'Transaction volume' },
      { name: 'Top transactions dashboard' },
      { name: 'Velocity' },
      { name: 'Circulation (1d, 7d, 30d, 60d, 90d, 180d, 365d, 2y, 3y, 5y, 10y)' },
      { name: 'Age consumed' },
      { name: 'Dormant circulation (1d, 7d, 30d, 60d, 90d, 180d, 365d, 2y, 3y, 5y, 10y)' },
      { name: 'Mean Coin Age' },
      { name: 'Mean Dollar Invested Age' },
      { name: 'MVRV ratio (intraday, 1d, 7d, 30d, 60d, 90d, 180d, 365d, 2y, 3y, 5y, 10y)' },
      { name: 'MVRV Long/Short difference' },
      { name: 'Realized cap (1d, 7d, 30d, 60d, 90d, 180d, 365d, 2y, 3y, 5y, 10y)' },
      { name: 'Network realized profit/loss' },
      { name: 'NVT ratio (using transaction volume)' },
      { name: 'NVT ratio (using circulation)' },
      { name: 'Stock to Flow ratio' },
      { name: 'Daily active deposits' },
      { name: 'Deposit transactions' },
      { name: 'Exchange inflow' },
      { name: 'Exchange outflow' },
      { name: 'Exchange balance' },
      { name: 'Supply on exchanges' },
      { name: 'Supply on exchanges (as % of total supply)' },
      { name: 'Supply outside of exchanges' },
      { name: 'Withdrawal transactions' },
      { name: 'Holder distribution' },
      { name: 'Holder distribution combined balance' },
      { name: 'Supply held by top addresses' },
      { name: 'Supply held by top addresses (as % of total supply)' },
      { name: 'Supply held by top non-exchange addresses' },
      { name: 'Supply held by top exchange addresses' },
      { name: 'Gas used' },
      { name: 'Total value locked in DeFi' },
      { name: 'Tokenized BTC on Ethereum' },
      { name: 'Decentralized exchanges (total volume)' },
      { name: 'Decentralized exchanges (dex-specific volume)' },
      { name: 'Decentralized exchanges (total number of trades)' },
      { name: 'Decentralized exchanges (dex-specific number of trades)' },
      { name: 'ETH spent over time (ETH and ERC-20 projects)' },
    ],
  },

  {
    category: 'Development metrics',
    isCheck: true,
    features: [{ name: 'Development activity' }, { name: 'Development contributors count' }],
  },

  {
    category: 'Social metrics',
    isCheck: true,
    features: [
      { name: 'Social dominance' },
      { name: 'Social volume' },
      { name: 'Social sentiment (total)' },
      { name: 'Social sentiment (twitter)' },
      { name: 'Social sentiment (reddit)' },
      { name: 'Social sentiment (telegram)' },
      { name: 'Topic Search' },
      { name: 'Social Trends (Top 10 hyped trends right now)' },
    ],
  },
]

export const FREE_COMPARED_FEATURES = {
  'Browser tabs': 'Up to 4',
  'Bi-weekly report': false,
  'Pro Insights': false,

  'Priority support': false,
  'Dedicated account manager': false,
  'Custom onboarding & education': false,

  "Chart's data period": false,
  'Download chart as SCV': false,
  'Hide watermark on charts': false,
  'Embed charts': 'Limited',

  'Custom Alerts': 3,
  'Alert durations': '30 days',
  Webhooks: false,

  Screeners: 1,
  'Screener filters': 'Limited',

  'Google Sheets Plugin': false,
  CSV: false,
}

export const PRO_COMPARED_FEATURES = {
  'Dedicated account manager': false,
  'Custom onboarding & education': false,

  'Hide watermark on charts': false,
  'Embed charts': 'Part access',

  'Custom Alerts': 20,
}

export const PRO_PLUS_COMPARED_FEATURES = {}

export const PlanFeatures = {
  [Plan.FREE]: FREE_COMPARED_FEATURES,
  [Plan.PRO]: PRO_COMPARED_FEATURES,
  [Plan.MAX]: PRO_PLUS_COMPARED_FEATURES,
  [Plan.PRO_PLUS]: PRO_PLUS_COMPARED_FEATURES,
}
