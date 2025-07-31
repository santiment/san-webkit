import type { TAlertSchemaUnion } from '../categories/index.js'
import type { TApiAlert, TGenericSettings } from '../types.js'

import { createCtx } from '$lib/utils/index.js'
import { useMetricsRestrictionsCtx } from '$lib/ctx/metrics-registry/index.js'

import { createAlertStep } from '../form-steps/index.svelte.js'

export type TReducedAlert = Omit<TApiAlert<TGenericSettings>, 'id'>

export const useAlertFormCtx = createCtx(
  'alerts_useAlertFormCtx',
  ({ schema, alert }: { schema: TAlertSchemaUnion; alert?: null | Partial<TApiAlert> }) => {
    const steps = schema.steps.map((step) => createAlertStep(alert, step))

    const { MetricsRestrictions } = useMetricsRestrictionsCtx()

    let selectedIndex = $state(0)
    const selectedStep = $derived(steps[selectedIndex])
    const nextStep = $derived(selectedIndex < steps.length ? steps[selectedIndex + 1] : null)

    const isAlertValid = $derived(steps.every((step) => step.isValid.$))

    function reduceStepsToAlert() {
      const apiAlert = steps.reduce((acc, step) => {
        const state = $state.snapshot(step.state.$$) as typeof step.state.$$

        const stepAlertPart = step.reduceToApi(state as UnionToIntersection<typeof state>)

        return {
          ...acc,
          ...stepAlertPart,
          settings: { ...acc.settings, ...stepAlertPart.settings },
        }
      }, {} as TReducedAlert)

      const changedType = getChangedAlertType(apiAlert.settings)
      if (changedType && apiAlert.settings) {
        apiAlert.settings.type = changedType
      }

      return apiAlert
    }

    function getChangedAlertType(settings: TGenericSettings) {
      if (settings?.type !== 'metric_signal') return null
      if (!('metric' in settings) || typeof settings.metric !== 'string') return null

      const minInterval = MetricsRestrictions.$[settings.metric]?.minInterval
      if (minInterval === '1d') {
        return 'daily_metric_signal'
      }

      return null
    }

    return {
      schema: schema as TAlertSchemaUnion & {
        suggestTitle: (_steps: typeof steps) => Promise<string> | string
        suggestDescription: (_steps: typeof steps) => Promise<string> | string
      },
      reduceStepsToAlert,
      steps,
      selectedStep: {
        get $() {
          return selectedStep
        },

        get index$() {
          return selectedIndex
        },
        set index$(value: number) {
          selectedIndex = value
        },
      },
      nextStep: {
        get $() {
          return nextStep
        },
      },

      isAlertValid: {
        get $() {
          return isAlertValid
        },
      },
    }
  },
)
