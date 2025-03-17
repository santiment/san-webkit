import type { TStepSchema } from '../form-steps/types.js'

import { STEP_NAME_DESCRIPTION_SCHEMA } from '../form-steps/name-description/schema.js'
import { STEP_NOTIFICATIONS_PRIVACY_SCHEMA } from '../form-steps/notifications-privacy/schema.js'

export type TAlertBaseSchema<
  GName,
  GProps extends {
    steps: TStepSchema[]
  },
> = {
  name: GName

  category: {
    label: string
    description: string
    icon: string
  }

  steps: GProps['steps']
}

export function createAlertSchema<GBaseSchema extends TAlertBaseSchema<string, any> = any>(
  base: GBaseSchema,
) {
  const schema = {
    name: base.name as GBaseSchema['name'],
    category: base.category as GBaseSchema['category'],
    steps: [
      ...(base.steps as GBaseSchema['steps']),
      STEP_NOTIFICATIONS_PRIVACY_SCHEMA,
      STEP_NAME_DESCRIPTION_SCHEMA,
    ],
  } as const

  return schema
}
