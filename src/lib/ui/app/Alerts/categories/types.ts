import type { TStepSchema } from '../form-steps/types.js'
import type { TApiAlert } from '../types.js'

import { STEP_NAME_DESCRIPTION_SCHEMA } from '../form-steps/name-description/schema.js'
import { STEP_NOTIFICATIONS_PRIVACY_SCHEMA } from '../form-steps/notifications-privacy/schema.js'

type TReplaceReturnType<T extends (...args: any) => any, TNewReturn> = (
  ...args: Parameters<T>
) => TNewReturn

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
  suggestTitle: TReplaceReturnType<GProps['deduceApiAlert'], string>
  suggestDescription: TReplaceReturnType<GProps['deduceApiAlert'], string>
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
