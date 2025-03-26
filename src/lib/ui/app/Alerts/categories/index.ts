import type { TApiAlert } from '../types.js'

import { ALERT_ASSET_SCHEMA } from './asset/schema.js'
import { ALERT_SOCIAL_TRENDS_SCHEMA } from './social-trends/schema.js'
import { ALERT_WATCHLIST_SCHEMA } from './watchlist/schema.js'

export const SCHEMAS = [
  ALERT_ASSET_SCHEMA,
  ALERT_SOCIAL_TRENDS_SCHEMA,
  ALERT_WATCHLIST_SCHEMA,
] as const

export const SchemaByType = SCHEMAS.reduce(
  (acc, item) => {
    // @ts-expect-error Assigning schema to reduced accumulator
    acc[item.name] = item

    return acc
  },
  {} as {
    [V in (typeof SCHEMAS)[number] as V['name']]: V
  },
)

export type TAlertSchemaUnion = (typeof SCHEMAS)[number]

export function deduceApiAlertSchema(apiAlert?: null | TApiAlert): null | TAlertSchemaUnion {
  return (apiAlert && SCHEMAS.find((schema) => schema.deduceApiAlert(apiAlert))) || null
}
