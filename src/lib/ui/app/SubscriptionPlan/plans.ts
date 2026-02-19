import { exactObjectKeys } from '$lib/utils/object.js'
import { Plan } from '$lib/utils/plans/index.js'

export const PlanTypeDisplayInfo = {
  consumer: {
    name: '👨‍🦱 For Individuals',
    className: 'outline-green bg-green-light-1',
  },
  business: {
    name: '💼 For Business',
    className: 'outline-blue bg-blue-light-1',
  },
} satisfies Record<string, { name: string; className: string }>

export const planTypes = exactObjectKeys(PlanTypeDisplayInfo)

export type PlanType = (typeof planTypes)[number]

export const SubscriptionPlanDetails: Record<
  string,
  | undefined
  | {
      description: string
      features: string[]
    }
> = {
  [Plan.FREE]: {
    description: 'Ideal for new traders and investors to kickstart crypto analysis',
    features: [
      '30-day lag in Sanbase',
      'Hidden top 3 tokens in Trending Coins',
      'Limited access to Trending Stories',
      'Real-time API data with 30-day lag',
      '1K API calls / mo, 1 year historical data',
      'No filters and sorting for Screener',
      'Up to 3 simultaneous alerts',
    ],
  },

  [Plan.PRO]: {
    description: 'Ideal for advanced traders and analysts to power decisions with real-time data',
    features: [
      'Present-day and full historical data in Sanbase',
      'Full access to Trending Coins and Stories',
      'Real-time API data with 30-day lag',
      '5K API calls / mo, 1 year historical data',
      'Full access to Screener',
      '20 active alerts',
      'Access to Google Sheets plugin',
      'Exclusive reports and market insights',
    ],
  },

  [Plan.MAX]: {
    description: 'Ideal for advanced investment strategies with full API access to real-time data',
    features: [
      'Present-day and full historical data in Sanbase, Trending Coins & Stories',
      'Technical support included',
      'Real-time API data without restrictions',
      '80K API calls / mo, 2 years historical data',
      'Full access to Screener',
      '50 active alerts',
      'Access to Google Sheets plugin',
      'Exclusive reports and market insights',
    ],
  },

  [Plan.BUSINESS_PRO]: {
    description: 'Designed for algorithmic trading and investment strategies',
    features: [
      '2 years of historical data through API',
      'Real-time API data without restrictions',
      '600K API calls / mo with 2 years historical data',
      'Dedicated account manager',
      'Technical support included',
    ],
  },

  [Plan.BUSINESS_MAX]: {
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

  [Plan.CUSTOM]: {
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
