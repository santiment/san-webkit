import type { TApiOperation } from '../../operations.js'
import type { TTimeWindow } from '../../time.js'
import type { TApiAlert } from '../../types.js'

import { describeConditions } from '../../form-steps/metric-conditions/utils.js'
import { createAlertSchema, type TAlertBaseSchema } from '../types.js'
import { STEP_SELECT_WALLET_SCHEMA } from './wallet-form-step/schema.js'

export const WalletAlertTypes = [
  'wallet_movement',
  'wallet_usd_valuation',
  'wallet_assets_held',
] as const

export type TWalletAlertType = (typeof WalletAlertTypes)[number]

export type TWalletApiAlert = TApiAlert<{
  target: { address: string | string[] }
  type: TWalletAlertType
  selector: { infrastructure?: string; slug?: string }
  operation?: TApiOperation
  time_window?: TTimeWindow
}>

export type TBaseSchema = TAlertBaseSchema<
  'wallet',
  {
    steps: [typeof STEP_SELECT_WALLET_SCHEMA]

    deduceApiAlert: (apiAlert: Partial<TWalletApiAlert>) => boolean
  }
>

export const ALERT_WALLET_SCHEMA = createAlertSchema<TBaseSchema>({
  name: 'wallet',

  ui: {
    label: 'Wallet address',
    description: 'Create an alert for the specific asset inside a certain wallet',
    icon: 'wallet',
  },

  steps: [STEP_SELECT_WALLET_SCHEMA],

  deduceApiAlert(apiAlert) {
    return WalletAlertTypes.some((type) => type === apiAlert.settings?.type)
  },

  suggestTitle(steps) {
    const walletStep = steps[0]
    const { type, asset, conditions } = walletStep.state.$$

    if (type === 'wallet_movement' && asset && conditions) {
      return `${asset.name} ${describeConditions(null, conditions)}`
    }

    if (type === 'wallet_usd_valuation' && conditions) {
      return `Balance ${describeConditions(null, conditions)}`
    }

    return 'Existed assets exit the wallet or new asset enters the wallet with non-zero balance'
  },

  suggestDescription(_steps) {
    return ''
  },
})
