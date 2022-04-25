import { Plan } from '@/utils/plans'

export const COMPARE_TABLE = [
  {
    category: 'General',
    features: [
      { name: 'Browser tabs', isLimit: true },
      {
        name: 'Bi-weekly report',
        description: '123',
        isCheck: true,
      },
      { name: 'Pro Insights', isAccess: true },
    ],
  },

  {
    category: 'API',
    features: [
      { name: 'API calls / minute' },
      { name: 'API calls / hour' },
      { name: 'API calls / month' },
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
      { name: "Chart's data period", description: '123', isAccess: true },
      { name: 'Hide watermark on charts', isCheck: true },
      { name: 'Download chart as SCV', isCheck: true },
      { name: 'Embed charts', isAccess: true },
    ],
  },

  {
    category: 'Alerts',
    features: [
      { name: 'Custom Alerts', isLimit: true },
      { name: 'Alert durations', description: '', isLimit: true },
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
        isCheck: true,
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

export const PRO_COMPARED_FEATURES = {
  'Browser tabs': 'Up to 4',

  'API calls / minute': '100 API calls / min',
  'API calls / hour': '1000 API calls / hour',
  'API calls / month': '5K API calls / mo',

  'Dedicated account manager': false,
  'Custom onboarding & education': false,

  'Hide watermark on charts': false,
  'Embed charts': 'Part access',

  'Custom Alerts': 20,
}

export const PRO_PLUS_COMPARED_FEATURES = {
  'API calls / minute': '300 API calls / min',
  'API calls / hour': '3000 API calls / hour',
  'API calls / month': '300K API calls / mo',
}

export const PlanFeatures = {
  [Plan.PRO]: PRO_COMPARED_FEATURES,
  [Plan.PRO_PLUS]: PRO_PLUS_COMPARED_FEATURES,
}
