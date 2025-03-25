import type { TApiAlert, TTimeWindow } from '../../types.js'
import type { TApiOperation } from '../../operations.js'

import { getOperationFromApi, reduceOperationToApi, type TOperation } from './operations.js'
import { createStepSchema, type TStepBaseSchema } from '../types.js'
import Form from './ui/index.svelte'

type TAlertSettings = {
  metric: string
  time_window: TTimeWindow
  operation: TApiOperation
}

export type TBaseSchema = TStepBaseSchema<
  'metric-conditions',
  {
    initState: (alert?: TApiAlert<TAlertSettings> | null) => {
      metric: string | null
      conditions: {
        operation: TOperation
        time: TTimeWindow
      }
    }
  }
>

export const STEP_METRIC_CONDITIONS_SCHEMA = createStepSchema<TBaseSchema>({
  name: 'metric-conditions',

  initState: (alert) => ({
    metric: alert?.settings?.metric ?? null,
    conditions: {
      operation: getOperationFromApi(alert?.settings?.operation) ?? {
        type: 'above',
        values: [1, 1],
      },
      time: alert?.settings?.time_window ?? '1d',
    },
  }),

  validate: ({ metric }) => !!metric,

  reduceToApi: (apiAlert, state) => {
    Object.assign(apiAlert.settings, {
      metric: state.metric,
      operation: reduceOperationToApi(state.conditions.operation),
      time_window: state.conditions.time,
    })

    return apiAlert
  },

  ui: {
    title: 'Choose Metric and Conditions',
    label: 'Choose Metric',
    description:
      'Depend on which asset you choose, there will be available metrics for it and the opposite...',

    Form,
  },
})
