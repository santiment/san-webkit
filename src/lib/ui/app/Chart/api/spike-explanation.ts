import { ApiQuery } from '$lib/api/index.js'

export type TVariables = any

export const queryGetMetricSpikeExplanations = ApiQuery(
  (variables: TVariables) => ({
    schema: `query ($slug: String!) {
  getMetricSpikeExplanations(
    metric: "social_dominance_total_1h_moving_average"    
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
      spikeStartDatetime: Math.floor(Date.parse(item.ds) / 1000),
      spikeEndDatetime: Math.floor(Date.parse(item.de) / 1000),
    })),
  {
    cacheTime: undefined,
  },
)
