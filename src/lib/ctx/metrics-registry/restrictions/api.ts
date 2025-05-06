import { ApiQuery } from '$lib/api/index.js'
import { mapAccessRestrictionsData } from '$scripts/metrics-restrictions/utils.js'

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

export type TMetricRestrictions = NonNullable<
  API.ExtractData<typeof queryGetAccessRestrictions>[string]
>

export const DEFAULT_METRICS_RESTRICTIONS = {}
