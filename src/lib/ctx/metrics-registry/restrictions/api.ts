import { ApiQuery } from '../../../api/index.js'
import { mapAccessRestrictionsData } from './utils.js'

export type TMetricRestrictions = {
  name: string
  minInterval: string
  restrictedFrom: null | string
  restrictedTo: null | string
  docs: { links: string }
}

export const queryGetAccessRestrictions = ApiQuery(
  () => `{ getAccessRestrictions  {
  n:name
  mi:minInterval
  rf:restrictedFrom
  rt:restrictedTo
  d:docs { l:link }
}}`,
  mapAccessRestrictionsData,
  { cache: false },
)

export const DEFAULT_METRICS_RESTRICTIONS = {}
