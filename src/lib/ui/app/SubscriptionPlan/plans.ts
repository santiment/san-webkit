import { keyify } from '$lib/utils/object.js'

export const Product = keyify(
  {
    SanAPI: { id: '1' },
    Sanbase: { id: '2' },
  },
  'name',
)

export type PlanType = 'business' | 'consumer'

export const PlanTypeDisplayInfo: Record<PlanType, { name: string; className: string }> = {
  consumer: {
    name: '👨‍🦱 For Individuals',
    className: 'outline-green bg-green-light-1',
  },
  business: {
    name: '💼 For Business',
    className: 'outline-blue bg-blue-light-1',
  },
}

export const planTypes = Object.keys(PlanTypeDisplayInfo) as PlanType[]

export const SubscriptionPlan = keyify({
  PRO_PLUS: { name: 'Sanbase Pro+' }, // Deprecated

  FREE: { name: 'Free' },
  PRO: { name: 'Sanbase Pro' },
  MAX: { name: 'Sanbase Max' },

  BUSINESS_PRO: { name: 'Business Pro' },
  BUSINESS_MAX: { name: 'Business Max' },
  CUSTOM: { name: 'Enterprise' },
})

export const SubscriptionPlanDetails: Record<
  string,
  | undefined
  | {
      description: string
      features: string[]
    }
> = {
  [SubscriptionPlan.FREE.key]: {
    description: 'Ideal for new traders and investors to kickstart crypto analysis',
    features: [
      '30-day lag in Sanbase',
      'Hidden top 3 tokens in Trending Coins',
      'Real-time API data with 30-day lag',
      '1K API calls / mo, 1 year historical data',
      'No filters and sorting for Screener',
      'Up to 3 simultaneous alerts',
    ],
  },

  [SubscriptionPlan.PRO.key]: {
    description: 'Ideal for advanced traders and analysts to power decisions with real-time data',
    features: [
      'Present-day and full historical data in Sanbase',
      'Full access to Trending Coins',
      'Real-time API data with 30-day lag',
      '5K API calls / mo, 1 year historical data',
      'Full access to Screener',
      '20 active alerts',
      'Access to Google Sheets plugin',
      'Exclusive reports and market insights',
    ],
  },

  [SubscriptionPlan.MAX.key]: {
    description: 'Ideal for advanced investment strategies with full API access to real-time data',
    features: [
      'Present-day and full historical data in Sanbase and Trending Coins',
      'Technical support included',
      'Real-time API data without restrictions',
      '80K API calls / mo, 2 years historical data',
      'Full access to Screener',
      '50 active alerts',
      'Access to Google Sheets plugin',
      'Exclusive reports and market insights',
    ],
  },

  [SubscriptionPlan.BUSINESS_PRO.key]: {
    description: 'Designed for algorithmic trading and investment strategies',
    features: [
      '2 years of historical data through API',
      'Real-time API data without restrictions',
      '600K API calls / mo with 2 years historical data',
      'Dedicated account manager',
      'Technical support included',
    ],
  },

  [SubscriptionPlan.BUSINESS_MAX.key]: {
    description: 'Designed for deep market analysis and large-scale data integration',
    features: [
      'Full historical data and metrics',
      'Real-time API data without restrictions',
      '1200K API calls / mo, all historical data',
      'Dedicated account manager',
      'Technical support included',
      'Multi-seat account with 3 seats',
    ],
  },

  [SubscriptionPlan.CUSTOM.key]: {
    description: 'Designed for high-demand professional trading and financial platforms',
    features: [
      'Custom development of data solutions',
      'Data reselling rights agreement',
      'SLA',
      'All historical data available',
      'Custom API calls',
      'Technical support included',
    ],
  },
}

export const CONSUMER_PLANS = new Set<string>([
  SubscriptionPlan.FREE.key,
  SubscriptionPlan.PRO.key,
  SubscriptionPlan.MAX.key,
])

export const BUSINESS_PLANS = new Set<string>([
  SubscriptionPlan.BUSINESS_MAX.key,
  SubscriptionPlan.BUSINESS_PRO.key,
  SubscriptionPlan.CUSTOM.key,
])
