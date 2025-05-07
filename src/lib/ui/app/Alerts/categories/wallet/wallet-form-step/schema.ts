import type { TWalletApiAlert } from '../schema.js'
import type { TMetricConditionsState } from '$ui/app/Alerts/form-steps/metric-conditions/schema.js'

import { createStepSchema, type TStepBaseSchema } from '$ui/app/Alerts/form-steps/types.js'
import {
  getOperationFromApi,
  reduceOperationToApi,
} from '$ui/app/Alerts/form-steps/metric-conditions/operations.js'
import { getAddressInfrastructure, Infrastructure } from '$lib/utils/address.js'

import Form from './ui/index.svelte'

type TWalletSettings = NonNullable<TWalletApiAlert['settings']>

export type TWalletState = {
  target: {
    address: TWalletSettings['target']['address'] | null
    readonly infrastructure: Infrastructure | undefined
  }
  asset: { slug: string; name: string } | null
  type: TWalletSettings['type'] | null
  conditions: TMetricConditionsState['conditions'] | null
}

export type TBaseSchema = TStepBaseSchema<
  'wallet',
  {
    initState: (apiAlert?: null | TWalletApiAlert) => TWalletState
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
      target: {
        address: target?.address ?? null,
        get infrastructure() {
          return getAddressInfrastructure(this.address ?? '')
        },
      },
      type: type ?? null,
      asset: selector?.slug ? { slug: selector.slug, name: '' } : null,
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

  validate({ target: { address, infrastructure }, type, conditions, asset }) {
    if (!address || !infrastructure) return false

    switch (type) {
      case 'wallet_assets_held':
        return true
      case 'wallet_movement':
        return !!conditions && !!asset
      case 'wallet_usd_valuation':
        return !!conditions
      case null:
        return false
    }
  },

  reduceToApi(apiAlert, { target, type, conditions, asset }) {
    Object.assign(apiAlert.settings, {
      target,
      type,
      selector: {
        infrastructure: target?.infrastructure,
        slug: asset?.slug,
      },
      time_window: conditions?.time,
      operation: conditions?.operation && reduceOperationToApi(conditions.operation),
    })

    return apiAlert
  },
})
