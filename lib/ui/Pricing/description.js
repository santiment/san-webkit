import { Plan } from './../../utils/plans';
export const PlanDescription = {
    [Plan.FREE]: {
        description: 'Basic metrics with a 30-day lag',
        features: [
            'Sanbase metrics, 30 days behind real-time data',
            '2 years of historical data',
            'Personalized asset watchlists',
            'Basic Santiment screener access, without PRO metrics & filters',
            'Access to basic coin movement alerts',
            'Up to 10 simultaneous alerts',
        ],
    },
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
            // eslint-disable-next-line quotes
            "Access to Santiment's API",
            'Dedicated Account Manager',
            'Google Sheets / Excel Plugin',
            'Closed chat with Santiment analytics',
            'Tailored market reports and token analysis',
            'White-labeled embeddable charts',
        ],
    },
};
//# sourceMappingURL=description.js.map