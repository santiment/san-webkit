import { createAlertSchema, type TAlertBaseSchema } from '../types.js'

export type TBaseSchema = TAlertBaseSchema<
  'social-trends',
  {
    steps: []
  }
>

export const ALERT_SOCIAL_TRENDS_SCHEMA = createAlertSchema<TBaseSchema>({
  name: 'social-trends',

  category: {
    label: 'Social trends',
    description: 'Create an alert for any of the social words, asset or watchlist',
    icon: 'comment',
  },

  steps: [],
})
