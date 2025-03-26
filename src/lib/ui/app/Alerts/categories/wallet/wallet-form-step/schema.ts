import type { TWalletApiAlert } from '../schema.js'
import type { TMetricConditionsState } from '$ui/app/Alerts/form-steps/metric-conditions/schema.js'

import { createStepSchema, type TStepBaseSchema } from '$ui/app/Alerts/form-steps/types.js'
import {
  getOperationFromApi,
  reduceOperationToApi,
} from '$ui/app/Alerts/form-steps/metric-conditions/operations.js'
import { getAddressInfrastructure } from '$lib/utils/address.js'

import Form from './ui/index.svelte'

type TWalletSettings = NonNullable<TWalletApiAlert['settings']>

export type TBaseSchema = TStepBaseSchema<
  'wallet',
  {
    initState: (apiAlert?: null | TWalletApiAlert) => {
      target: TWalletSettings['target'] | null
      assetSlug: string | null
      type: TWalletSettings['type'] | null
      conditions: TMetricConditionsState['conditions'] | null
    }
  }
>

export const STEP_SELECT_WALLET_SCHEMA = createStepSchema<TBaseSchema>({
  name: 'wallet',
  ui: {
    title: 'Select Wallet & Event',
    label: 'Select Wallet & Event',
    description: 'You can choose any wallet',

    Form,
  },

  initState(apiAlert) {
    const {
      target,
      type,
      selector,
      operation: apiOperation,
      time_window,
    } = apiAlert?.settings || {}

    const operation = getOperationFromApi(apiOperation)

    return {
      target: target ?? null,
      type: type ?? null,
      assetSlug: selector?.slug ?? null,
      conditions:
        operation && time_window
          ? {
              operation,
              time: time_window,
            }
          : {
              operation: { type: 'above', values: [1, 1] },
              time: '1d',
            },
    }
  },

  validate(state) {
    switch (state.type) {
      case 'wallet_assets_held':
        return !!state.target?.address
      case 'wallet_movement':
        return !!state.target?.address && !!state.conditions && !!state.assetSlug
      case 'wallet_usd_valuation':
        return !!state.target?.address && !!state.conditions
      case null:
        return false
    }
  },

  reduceToApi(apiAlert, { target, type, conditions, assetSlug }) {
    Object.assign(apiAlert.settings, {
      target,
      type,
      selector: {
        infrastructure: getAddressInfrastructure(target?.address ?? ''),
        slug: assetSlug ?? undefined,
      },
      time_window: conditions?.time,
      operation: conditions?.operation && reduceOperationToApi(conditions?.operation),
    })

    return apiAlert
  },
})
