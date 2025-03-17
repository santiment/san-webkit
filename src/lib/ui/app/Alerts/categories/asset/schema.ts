import { createAlertSchema, type TAlertBaseSchema } from '../types.js'
import { STEP_ASSETS_SCHEMA } from './asset-form-step/schema.js'

export type TBaseSchema = TAlertBaseSchema<
  'asset',
  {
    steps: [typeof STEP_ASSETS_SCHEMA]
  }
>

export const ALERT_ASSET_SCHEMA = createAlertSchema<TBaseSchema>({
  name: 'asset',

  category: {
    label: 'Asset',
    description: 'Create an alert for the specific asset or group of assets',
    icon: 'asset-small',
  },

  steps: [STEP_ASSETS_SCHEMA],
})
