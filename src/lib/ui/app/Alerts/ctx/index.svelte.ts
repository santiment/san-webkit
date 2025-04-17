import type { TAlertSchemaUnion } from '../categories/index.js'
import type { TApiAlert } from '../types.js'

import { createCtx } from '$lib/utils/index.js'

import { createAlertStep } from '../form-steps/index.svelte.js'

export const useAlertFormCtx = createCtx(
  'alerts_useAlertFormCtx',
  ({ schema, apiAlert }: { schema: TAlertSchemaUnion; apiAlert?: null | TApiAlert }) => {
    const steps = schema.steps.map((step) => createAlertStep(apiAlert, step))

    let selectedIndex = $state(0)
    const selectedStep = $derived(steps[selectedIndex])

    const isAlertValid = $derived(steps.every((step) => step.isValid.$))

    return {
      schema: schema as TAlertSchemaUnion & {
        suggestTitle: (_steps: typeof steps) => Promise<string> | string
        suggestDescription: (_steps: typeof steps) => Promise<string> | string
      },
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

      isAlertValid: {
        get $() {
          return isAlertValid
        },
      },
    }
  },
)
