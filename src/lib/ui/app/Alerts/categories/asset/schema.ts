import type { TApiAlert } from '../../types.js'
import type { TAssetSlug } from '$lib/ctx/assets/index.js'

import { STEP_METRIC_CONDITIONS_SCHEMA } from '../../form-steps/metric-conditions/schema.js'
import { createAlertSchema, type TAlertBaseSchema } from '../types.js'
import { STEP_ASSETS_SCHEMA } from './asset-form-step/schema.js'
import {
  defaultMetricDescription,
  defaultMetricTitle,
} from '../../form-steps/name-description/utils.js'
import { getAssetTargetTitle } from './utils.js'

export type TAssetApiAlert = TApiAlert<{
  type: 'metric_signal'
  target: { slug: TAssetSlug[] }
}>

export type TBaseSchema = TAlertBaseSchema<
  'asset',
  {
    steps: [typeof STEP_ASSETS_SCHEMA, typeof STEP_METRIC_CONDITIONS_SCHEMA]
    deduceApiAlert: (apiAlert: TAssetApiAlert) => boolean
  }
>

export const ALERT_ASSET_SCHEMA = createAlertSchema<TBaseSchema>({
  name: 'asset',

  ui: {
    label: 'Asset',
    description: 'Create an alert for the specific asset or group of assets',
    icon: 'asset-small',
  },

  steps: [STEP_ASSETS_SCHEMA, STEP_METRIC_CONDITIONS_SCHEMA],

  deduceApiAlert(apiAlert) {
    return Boolean(
      apiAlert.settings?.type.includes('metric_signal') && apiAlert.settings?.target.slug,
    )
  },

  suggestTitle([assetStep, metricStep]) {
    const { target } = assetStep.state.$$

    return defaultMetricTitle(getAssetTargetTitle(target), metricStep.state.$$)
  },

  suggestDescription([assetStep, metricStep, notificationStep]) {
    const { target } = assetStep.state.$$

    return defaultMetricDescription(
      getAssetTargetTitle(target),
      metricStep.state.$$,
      notificationStep.state.$$,
    )
  },
})
