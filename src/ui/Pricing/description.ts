import { Plan, PlanName } from '@/utils/plans'

export const PlanDescription = {
  [Plan.PRO]: {
    description: 'Advanced crypto metrics and market insights',
    features: [
      'Sanbase metrics - full historical and present-day data',
      'Access to 20 Sanbase alerts',
      'Full access to Santiment Screener',
      'Daily market insights',
      'Exclusive weekly Pro reports',
      'Market segment dashboards - stablecoins, defi, dexes and more',
    ],
  },

  [Plan.PRO_PLUS]: {
    description: 'Complete analytics & backtesting framework',
    features: [
      'All features from PRO plus:',
      "Access to Santiment's API",
      'Dedicated Account Manager',
      'Google Sheets / Excel Plugin',
      'Closed chat with Santiment analytics',
      'Tailored market reports and token analysis',
    ],
  },
}
