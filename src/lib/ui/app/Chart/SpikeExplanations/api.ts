import type { TAssetSlug } from '$lib/ctx/assets/index.svelte.js'
import type { Time } from '@santiment-network/chart-next'

import { ApiQuery } from '$lib/api/index.js'

export type TVariables = { slug: TAssetSlug }

export const queryGetMetricSpikeExplanations = ApiQuery(
  (variables: TVariables) => ({
    schema: `query ($slug: String!) {
  getMetricSpikeExplanations(
    metric: "mentions_percentage_1h_total"    
    slug:$slug,
    from: "utc_now-60d"
    to: "utc_now"
  ){
    ds:spikeStartDatetime
    de:spikeEndDatetime
    e:explanation
  }
}`,
    variables,
  }),
  (gql: { getMetricSpikeExplanations: { ds: string; de: string; e: string }[] }) =>
    gql.getMetricSpikeExplanations.map((item) => ({
      explanation: item.e,
      spikeStartDatetime: Math.floor(Date.parse(item.ds) / 1000) as Time,
      spikeEndDatetime: Math.floor(Date.parse(item.de) / 1000) as Time,
    })),
  {
    cacheTime: undefined,
  },
)
export type TData = API.ExtractData<typeof queryGetMetricSpikeExplanations>
