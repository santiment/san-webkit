import type { TStepSchema } from '../form-steps/types.js'
import type { TApiAlert } from '../types.js'
import type { TAlertStep } from '../form-steps/index.svelte.js'
import type { IfAny } from '$lib/utils/types/index.js'

import { STEP_NAME_DESCRIPTION_SCHEMA } from '../form-steps/name-description/schema.js'
import { STEP_NOTIFICATIONS_PRIVACY_SCHEMA } from '../form-steps/notifications-privacy/schema.js'

type TSchemaStepToAlertStep<GTuple extends [...any[]]> = IfAny<
  GTuple,
  any,
  {
    [Index in keyof GTuple]: TAlertStep<GTuple[Index]>
  } & { length: GTuple['length'] }
>

type TGenericSteps<GSteps extends TStepSchema[]> = IfAny<
  GSteps,
  any,
  [...GSteps, typeof STEP_NOTIFICATIONS_PRIVACY_SCHEMA, typeof STEP_NAME_DESCRIPTION_SCHEMA]
>

export type TAlertBaseSchema<
  GName,
  GProps extends {
    steps: TStepSchema[]
    deduceApiAlert: (apiAlert: TApiAlert) => boolean
  },
> = {
  name: GName

  ui: {
    label: string
    description: string
    icon: string
  }

  steps: GProps['steps']

  deduceApiAlert: GProps['deduceApiAlert']

  suggestTitle: (
    steps: TSchemaStepToAlertStep<TGenericSteps<GProps['steps']>>,
  ) => Promise<string> | string
  suggestDescription: (
    steps: TSchemaStepToAlertStep<TGenericSteps<GProps['steps']>>,
  ) => Promise<string> | string
}

export function createAlertSchema<GBaseSchema extends TAlertBaseSchema<string, any> = any>(
  base: GBaseSchema,
) {
  const schema = {
    name: base.name as GBaseSchema['name'],
    ui: base.ui as GBaseSchema['ui'],
    steps: [
      ...(base.steps as GBaseSchema['steps']),
      STEP_NOTIFICATIONS_PRIVACY_SCHEMA,
      STEP_NAME_DESCRIPTION_SCHEMA,
    ],
    deduceApiAlert: base.deduceApiAlert as GBaseSchema['deduceApiAlert'],
    suggestTitle: base.suggestTitle as GBaseSchema['suggestTitle'],
    suggestDescription: base.suggestDescription as GBaseSchema['suggestDescription'],
  } as const

  return schema
}
