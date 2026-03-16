import type { TWalletApiAlertPart } from '../schema.js'
import type { TMetricConditionsState } from '$ui/app/Alerts/form-steps/metric-conditions/schema.js'

import assert from 'assert'

import { createStepSchema, type TStepBaseSchema } from '$ui/app/Alerts/form-steps/types.js'
import {
  getOperationFromApi,
  reduceOperationToApi,
} from '$ui/app/Alerts/form-steps/metric-conditions/operations.js'
import { getAddressInfrastructure, Infrastructure } from '$lib/utils/address.js'

import Form from './ui/index.svelte'

type TWalletSettings = NonNullable<TWalletApiAlertPart['settings']>

export type TWalletState = {
  target: {
    address: string | null
    readonly infrastructure: Infrastructure | undefined
  }
  asset: { slug: string; name: string } | null
  type: TWalletSettings['type'] | null
  conditions: TMetricConditionsState['conditions'] | null
}

export type TBaseSchema = TStepBaseSchema<'wallet', TWalletApiAlertPart, TWalletState>

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
        address: Array.isArray(target?.address) ? target.address[0] : (target?.address ?? null),
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

  reduceToApi({ target, type, conditions, asset }) {
    assert(type)
    assert(target.address)
    assert(target.infrastructure)

    return {
      settings: {
        type,
        target: {
          address: target.address,
        },
        selector: {
          infrastructure: target.infrastructure,
          slug: asset?.slug,
        },
        time_window: conditions?.time,
        operation: conditions?.operation && reduceOperationToApi(conditions.operation),
      },
    }
  },
})
