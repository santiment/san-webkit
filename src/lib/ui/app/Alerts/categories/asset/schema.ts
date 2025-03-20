import type { TAssetSlug } from '$lib/ctx/assets/index.svelte.js'
import type { TApiAlert } from '../../types.js'

import { createAlertSchema, type TAlertBaseSchema } from '../types.js'
import { STEP_ASSETS_SCHEMA } from './asset-form-step/schema.js'

export type TBaseSchema = TAlertBaseSchema<
  'asset',
  {
    steps: [typeof STEP_ASSETS_SCHEMA]
    deduceApiAlert: (
      apiAlert: TApiAlert<{
        type: 'metric_signal'
        target: { slug: TAssetSlug[] }
        metric: string
        operation: unknown
        time_window: `${number}d`
      }>,
    ) => boolean
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

  deduceApiAlert(apiAlert) {
    return Boolean(
      apiAlert.settings?.type.includes('metric_signal') && apiAlert.settings?.target.slug,
    )
  },
})
