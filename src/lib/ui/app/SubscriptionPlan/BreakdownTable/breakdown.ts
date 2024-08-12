import { Plan } from '@/utils/plans'
import { SubscriptionPlan } from '../plans.js'

export const CONSUMER_PLANS_BREAKDOWN = [
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
    category: 'Charts',
    features: [
      {
        name: "Chart's data period",
        description: `<b>Limited data!</b> For users on the Free plan, some data has time range limitations`,
        isAccess: true,
      },
      { name: 'Hide watermark on charts', isCheck: true },
      { name: 'Download chart as CSV', isCheck: true },
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
    category: 'Development metrics',
    isCheck: true,
    features: [{ name: 'Development activity' }, { name: 'Development contributors count' }],
  },

  {
    category: 'Social Trends',
    isCheck: true,
    features: [
      { name: 'Trending Coins' },
      { name: 'Trending Words' },
      { name: 'Trending Topics' },
      { name: 'Social Context' },
    ],
  },

  {
    category: 'API',
    isCheck: true,
    features: [
      { name: 'Historical data restriction' },
      { name: 'Realtime restriction for restricted metrics' },
      { name: 'API calls / minute' },
      { name: 'API calls / hour' },
      { name: 'API calls / month' },
    ],
  },

  {
    category: 'Queries',
    isCheck: true,
    features: [
      { name: 'Historical data access' },
      { name: 'Credits' },
      { name: 'Executed queries / minute restriction' },
      { name: 'Executed queries / hour restriction' },
      { name: 'Executed queries / day restriction' },
      { name: 'Private queries' },
    ],
  },

  {
    category: 'Support',
    isCheck: true,
    features: [
      { name: 'Support through Intercom/Discord' },
      { name: 'Group chat with our experts' },
      { name: 'Direct technical support' },
    ],
  },
]

export const BUSINESS_PLANS_BREAKDOWN = [
  {
    category: 'General',
    features: [
      { name: 'Multi-seat account', isLimit: true },
      { name: 'Access to our closed Discord channel', isLimit: true },
    ],
  },

  {
    category: 'API',
    isCheck: true,
    features: [
      { name: 'Historical data access' },
      { name: 'Current data access' },
      { name: 'API calls / minute' },
      { name: 'API calls / hour' },
      { name: 'API calls / month' },
    ],
  },

  {
    category: 'Queries',
    isCheck: true,
    features: [
      { name: 'Historical data access' },
      { name: 'Credits' },
      { name: 'Rate limit / minute' },
      { name: 'Rate limit / hour' },
      { name: 'Rate limit / day' },
      { name: 'Private queries' },
    ],
  },

  {
    category: 'Support',
    isCheck: true,
    features: [{ name: 'Dedicated account manager' }, { name: 'Direct technical support' }],
  },

  {
    category: 'Charts',
    features: [
      {
        name: 'Access to historical and current data',
        description: `<b>Limited data!</b> For users on the Free plan, some data has time range limitations`,
        isAccess: true,
      },
      { name: 'Download chart data as CSV', isCheck: true },
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
    category: 'Custom development',
    isCheck: true,
    features: [
      { name: 'Custom metric development' },
      { name: 'New blockchain integrations' },
      { name: 'Service Level Agreements' },
      { name: 'Data reselling rights' },
      { name: 'Custom data integratoins' },
    ],
  },
]

export const SubscriptionPlanBreakdown = {
  [SubscriptionPlan.FREE.key]: {
    'Browser tabs': 'Up to 4',
    'Bi-weekly report': false,
    'Pro Insights': false,

    "Chart's data period": false,
    'Hide watermark on charts': false,
    'Download chart as CSV': false,
    'Embed charts': 'Limited',

    'Custom Alerts': 3,
    'Alert durations': '30 days',
    Webhooks: false,

    Screeners: 1,
    'Screener filters': 'Limited',

    'Google Sheets Plugin': false,
    CSV: false,

    'Trending Coins': 'No access to Top 3 tokens',
    'Trending Words': 'No access to Top 3 words',
    //   'Trending Topics': '',
    'Social Context': 'Limited data',

    'Historical data restriction': '1 year',
    'Realtime restriction for restricted metrics': '30-day lag',
    'API calls / minute': '100 API calls / min',
    'API calls / hour': '500 API calls / hour	',
    'API calls / month': '1K API calls / mo',

    'Historical data access': '1 year with 30-day lag',
    Credits: '500',
    'Executed queries / minute restriction': '20 queries / min',
    'Executed queries / hour restriction': '200 queries / hour',
    'Executed queries / day restriction': '500 queries / day',
    'Private queries': 'No',

    //   'Support through Intercom/Discord': true,
    'Group chat with our experts': false,
    'Directs technical support': false,
  },
}

export const FREE_COMPARED_FEATURES = {
  'Browser tabs': 'Up to 4',
  'Bi-weekly report': false,
  'Pro Insights': false,

  "Chart's data period": false,
  'Hide watermark on charts': false,
  'Download chart as CSV': false,
  'Embed charts': 'Limited',

  'Custom Alerts': 3,
  'Alert durations': '30 days',
  Webhooks: false,

  Screeners: 1,
  'Screener filters': 'Limited',

  'Google Sheets Plugin': false,
  CSV: false,

  'Trending Coins': 'No access to Top 3 tokens',
  'Trending Words': 'No access to Top 3 words',
  //   'Trending Topics': '',
  'Social Context': 'Limited data',

  'Historical data restriction': '1 year',
  'Realtime restriction for restricted metrics': '30-day lag',
  'API calls / minute': '100 API calls / min',
  'API calls / hour': '500 API calls / hour	',
  'API calls / month': '1K API calls / mo',

  'Historical data access': '1 year with 30-day lag',
  Credits: '500',
  'Executed queries / minute restriction': '20 queries / min',
  'Executed queries / hour restriction': '200 queries / hour',
  'Executed queries / day restriction': '500 queries / day',
  'Private queries': 'No',

  //   'Support through Intercom/Discord': true,
  'Group chat with our experts': false,
  'Directs technical support': false,
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
