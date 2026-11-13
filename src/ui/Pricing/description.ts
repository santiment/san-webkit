import { Plan } from '@/utils/plans'

export const PlanDescription: Record<Plan, { description: string; features: string[] }> = {
  [Plan.PRO_PLUS]: {
    description: 'Complete analytics & backtesting framework',
    features: [
      'All features from PRO plus:',
      "Access to Santiment's API",
      'Dedicated Account Manager',
      'Google Sheets / Excel Plugin',
      'Closed chat with Santiment analytics',
      'Tailored market reports and token analysis',
      'White-labeled embeddable charts',
    ],
  },

  [Plan.FREE]: {
    description: 'Your starter plan',
    features: [
      '30-day lag in Sanbase',
      'Hidden top 3 tokens in Trending Coins',
      '500 credits for Queries tool',
      '30-day lag for API with basic access ',
      'No filters and sorting for Screener',
      'Up to 3 simultaneous alerts',
    ],
  },

  [Plan.PRO]: {
    description: 'Monetise the alpha',
    features: [
      'Present-day and full historical data in Sanbase',
      'Full access to Trending Coins',
      '10K credits for Queries tool',
      '30-day lag for API with basic access ',
      'Full access to screener, 20 alerts',
      'Access to Google Sheets plugin',
      'Exclusive reports and market insights',
    ],
  },

  [Plan.MAX]: {
    description: 'Be ahead of the game',
    features: [
      'Present-day and full historical data in Sanbase and Trending Coins',
      'Technical support included',
      '20K credits for Queries tool',
      'Full API access',
      'Full access to screener, 20 alerts',
      'Access to Google Sheets plugin',
      'Exclusive reports and market insights',
    ],
  },

  [Plan.BUSINESS_PRO]: {
    description: 'Test your strategy',
    features: [
      '2 years of historical data through API',
      'Real-time API data without restrictions',
      '600K API calls / mo',
      '50K credits for Queries tool',
      'Dedicated account manager',
      'Technical support included',
    ],
  },

  [Plan.BUSINESS_MAX]: {
    description: 'Build your research',
    features: [
      'Full historical data and metrics',
      'Real-time API data without restrictions',
      '1200K API calls / mo',
      '500K credits for Queries tool',
      'Dedicated account manager',
      'Technical support included',
      'Multi-seat account with 3 seats',
    ],
  },

  [Plan.CUSTOM]: {
    description: 'Everything custom',
    features: [
      'Custom development of data solutions',
      'Data reselling rights agreement',
      'SLA',
      'All historical data available',
      'Custom API calls and Queries credits',
      'Technical support included',
    ],
  },
}
