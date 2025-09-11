import type { UTCTimestamp } from '@santiment-network/chart-next'
import type { TNominal } from '$lib/utils/index.js'
import type { TAssetSlug } from '$lib/ctx/assets/index.js'

import { ApiQuery } from '$lib/api/index.js'

export type TInterval = `${number}m` | `${number}h` | `${number}d` | `${number}y`

export type TAggregation = undefined | 'OHLC'

export type TTimeseriesMetricTransformInputObject = {
  type:
    | 'cumulative_sum'
    | 'z_score'
    | 'moving_average'
    | 'changes'
    | 'consecutive_differences'
    | 'percent_change'
    | 'cumulative_percent_change'
  movingAverageBase?: number
}

export type TBlockchainAddressSelectorInputObject = {
  id?: number | string
  address: string
  infrastructure: string
}

export type TAddress = TNominal<string, 'TAddress'>

export type TMetricTargetSelectorInputObject = Partial<{
  address: TAddress
  blockchain: string
  blockchainAddress: TBlockchainAddressSelectorInputObject
  contractAddress: string
  ecosystems: string[]
  holdersCount: number
  ignoredSlugs: string[]
  label: string
  labelFqn: string
  labelFqns: string[]
  labels: string[]
  marketSegments: string[]
  organization: string
  organizations: string[]
  owner: string
  owners: string[]
  slug: TAssetSlug
  slugs: TAssetSlug[]
  source: string
  text: string
  watchlistId: number
  watchlistSlug: string
}>

export type TVariables = {
  metric: string

  selector: TMetricTargetSelectorInputObject

  from: string
  to: string
  interval: TInterval

  transform?: TTimeseriesMetricTransformInputObject
  includeIncompleteData?: boolean
  aggregation?: TAggregation
}

export const queryGetMetric = ApiQuery(
  ({ metric, selector, from, to, interval, transform, aggregation }: TVariables) => ({
    schema: `
  query getMetric(
    $metric: String!
    $from: DateTime!
    $to: DateTime!
    $interval: interval
    $transform: TimeseriesMetricTransformInputObject
    $aggregation: Aggregation
    $includeIncompleteData: Boolean = true
    $selector: MetricTargetSelectorInputObject
  ) {
    getMetric(metric: $metric) {
      timeseriesDataJson(
        selector: $selector
        from: $from
        to: $to
        interval: $interval
        transform: $transform
        aggregation: $aggregation
        includeIncompleteData: $includeIncompleteData
        fields: {datetime: "d" ${aggregation === 'OHLC' ? 'valueOhlc: "v" open:"o" high:"h" close:"c" low:"l"' : 'value: "v"'} }
      ) 
    }
  }
`,
    variables: { metric, selector, from, to, interval, transform, aggregation },
  }),
  (gql: { getMetric: { timeseriesDataJson: { d: string; v: TRawPointData }[] } }): TMetricData =>
    gql.getMetric.timeseriesDataJson.map((item) => ({
      time: (Date.parse(item.d) / 1000) as UTCTimestamp,
      ...mapPointData(item.v),
    })),
  { cacheTime: undefined },
)

export type TMetricData = (
  | { time: UTCTimestamp; value: number }
  | { time: UTCTimestamp; value: number; open: number; high: number; low: number; close: number }
)[]

type TRawPointData = number | { o: number; h: number; c: number; l: number }
function mapPointData(value: TRawPointData) {
  if (typeof value === 'number') {
    return { value }
  }

  return {
    value: value.c, // NOTE: Making it compatible with formulas

    open: value.o,
    high: value.h,
    low: value.l,
    close: value.c,
  }
}
