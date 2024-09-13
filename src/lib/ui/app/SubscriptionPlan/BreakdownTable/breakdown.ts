import { SubscriptionPlan } from '../plans.js'

export type TBreakdownFeature = {
  name: string
  description?: string
  isLimit?: boolean
  isAccess?: boolean
  isCheck?: boolean
  postfix?: string
}

export const CONSUMER_PLANS_BREAKDOWN = [
  {
    category: 'General',
    features: [
      // { name: 'Browser tabs', isLimit: true },
      {
        name: 'Bi-weekly report',
        description: `<b>Exclusive Pro reports</b> to update on Santiment's top indicators on a biweekly basis`,
        isCheck: true,
      },
      { name: 'Pro Insights', isAccess: true },
    ],
  },

  {
    category: 'Metrics',
    features: [],
    link: { title: 'Metrics Documentation', url: 'https://academy.santiment.net/metrics/' },
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
    features: [
      { name: 'Trending Coins', isAccess: true },
      { name: 'Trending Words', isAccess: true },
      { name: 'Trending Topics', isAccess: true },
      { name: 'Social Context', isAccess: true },
    ],
  },

  {
    category: 'API',
    features: [
      { name: 'Historical data restriction', isLimit: true },

      { name: 'Realtime restriction for restricted metrics', isLimit: true },
      { name: 'API calls / minute', isLimit: true },
      { name: 'API calls / hour', isLimit: true },
      { name: 'API calls / month', isLimit: true },
    ],
  },

  {
    category: 'Queries',
    features: [
      { name: 'Historical data access', isLimit: true },
      { name: 'Credits', isLimit: true },
      { name: 'Executed queries / minute restriction', isLimit: true },
      { name: 'Executed queries / hour restriction', isLimit: true },
      { name: 'Executed queries / day restriction', isLimit: true },
      { name: 'Private queries', isLimit: true },
    ],
  },

  {
    category: 'Support',
    features: [
      { name: 'Support through Intercom/Discord', isCheck: true },
      { name: 'Group chat with our experts', isCheck: true },
      { name: 'Direct technical support', isCheck: true },
    ],
  },
]

export const BUSINESS_PLANS_BREAKDOWN = [
  {
    category: 'General',
    features: [
      { name: 'Multi-seat account', isLimit: true },
      { name: 'Access to our closed Discord channel', isCheck: true },
    ],
  },

  {
    category: 'Metrics',
    features: [],
    link: { title: 'Metrics Documentation', url: 'https://academy.santiment.net/metrics/' },
  },

  {
    category: 'API',
    features: [
      { name: 'Historical data restriction', isLimit: true },
      { name: 'Current data access', isLimit: true },
      { name: 'API calls / minute', isLimit: true },
      { name: 'API calls / hour', isLimit: true },
      { name: 'API calls / month', isLimit: true },
    ],
  },

  {
    category: 'Queries',
    features: [
      { name: 'Historical data access', isLimit: true },
      { name: 'Credits', isLimit: true },
      { name: 'Rate limit / minute', isLimit: true },
      { name: 'Rate limit / hour', isLimit: true },
      { name: 'Rate limit / day', isLimit: true },
      { name: 'Private queries', isLimit: true },
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

export type TPlanFeatureBreakdown = boolean | string | number

export const SubscriptionPlanBreakdown: Record<
  string,
  undefined | Record<string, TPlanFeatureBreakdown>
> = {
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

    'Group chat with our experts': false,
    'Direct technical support': false,
  },

  [SubscriptionPlan.PRO.key]: {
    'Dedicated account manager': false,
    'Custom onboarding & education': false,

    'Hide watermark on charts': false,
    'Embed charts': 'Part access',

    'Custom Alerts': 20,

    'Historical data restriction': '1 year',
    'Realtime restriction for restricted metrics': '30-day lag',
    'API calls / minute': '100 API calls / min',
    'API calls / hour': '1K API calls / hour	',
    'API calls / month': '5K API calls / mo',

    'Historical data access': '1 year',
    Credits: '10K',
    'Executed queries / minute restriction': '50 queries / min',
    'Executed queries / hour restriction': '1K queries / hour',
    'Executed queries / day restriction': '5K queries / day',
    'Private queries': 'No',

    'Direct technical support': false,
  },

  [SubscriptionPlan.MAX.key]: {
    'Custom Alerts': 20,

    'Historical data restriction': '1 year',
    'Realtime restriction for restricted metrics': 'No restriction',
    'API calls / minute': '100 API calls / min',
    'API calls / hour': '4K API calls / hour',
    'API calls / month': '80K API calls / mo',

    'Historical data access': '2 year',
    Credits: '20K',
    'Executed queries / minute restriction': '50 queries / min',
    'Executed queries / hour restriction': '2K queries / hour',
    'Executed queries / day restriction': '10K queries / day',
    'Private queries': 'No',
  },

  [SubscriptionPlan.CUSTOM.key]: {
    'Multi-seat account': 'Custom',

    'Historical data restriction': 'No restriction',
    'Current data access': 'No restriction',

    'API calls / minute': 'Custom',
    'API calls / hour': 'Custom',
    'API calls / month': 'Custom',

    'Historical data access': 'Full history',
    Credits: 'Custom',
    'Rate limit / minute': 'Custom',
    'Rate limit / hour': 'Custom',
    'Rate limit / day': 'Custom',
    'Private queries': 'Yes',

    'Custom Alerts': 'Custom',
  },

  [SubscriptionPlan.BUSINESS_PRO.key]: {
    'Multi-seat account': false,

    'Historical data restriction': 'Last 2 years',
    'Current data access': 'No restriction',

    'API calls / minute': '600 API calls / min',
    'API calls / hour': '30K API calls / hour	',
    'API calls / month': '600K API calls / mo',

    'Historical data access': '2 years',
    Credits: '50K',
    'Rate limit / minute': '100 queries / min',
    'Rate limit / hour': '3000 queries / hour	',
    'Rate limit / day': '15К queries / day',
    'Private queries': 'Yes',

    'Direct technical support': false,

    'Custom Alerts': '20',

    'Custom metric development': false,
    'New blockchain integrations': false,
    'Service Level Agreements': false,
    'Data reselling rights': false,
    'Custom data integratoins': false,
  },

  [SubscriptionPlan.BUSINESS_MAX.key]: {
    'Multi-seat account': '3 seats',

    'Historical data restriction': 'No restriction',
    'Current data access': 'No restriction',

    'API calls / minute': '1200 API calls / min',
    'API calls / hour': '60K API calls / hour	',
    'API calls / month': '1200K API calls / mo',

    'Historical data access': 'Full history',
    Credits: '50K',
    'Rate limit / minute': '100 queries / min',
    'Rate limit / hour': '3000 queries / hour	',
    'Rate limit / day': '15К queries / day',
    'Private queries': 'Yes',

    'Custom Alerts': '20',
  },
}
