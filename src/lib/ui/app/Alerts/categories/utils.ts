import type { TApiAlert } from '../types.js'
import type { TAlertSchemaUnion } from './index.js'

import { ALERT_ASSET_SCHEMA } from './asset/schema.js'

export function deduceApiAlertSchema(apiAlert?: null | TApiAlert): null | TAlertSchemaUnion {
  if (apiAlert) {
    return ALERT_ASSET_SCHEMA
  }

  return null
}
