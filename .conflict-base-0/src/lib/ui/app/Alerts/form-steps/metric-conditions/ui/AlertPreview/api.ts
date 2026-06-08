import type { TApiTimeWindow } from '$ui/app/Alerts/time.js'
import type { TApiOperation } from '$ui/app/Alerts/operations.js'

import { ApiQuery } from '$lib/api/index.js'

type TQueryHistoricalPointsProps = {
  cooldown: TApiTimeWindow
  settings: {
    type: 'metric_signal'
    metric: string
    target: { slug: string }
    time_window?: TApiTimeWindow
    operation: TApiOperation
  }
}

type THistoricalPointRaw = {
  current: number
  percent_change: number
  'triggered?': boolean
  datetime: string
}

export const queryHistoricalTriggerPoints = ApiQuery(
  (variables: TQueryHistoricalPointsProps) => ({
    schema: `
      query historicalTriggerPoints($cooldown: String, $settings: json!) {
        historicalTriggerPoints(cooldown: $cooldown, settings: $settings)
      }
    `,
    variables: { ...variables, settings: JSON.stringify(variables.settings) },
  }),
  (gql: { historicalTriggerPoints: THistoricalPointRaw[] }) => gql.historicalTriggerPoints,
)

export const queryAssetPriceUsd = ApiQuery(
  (slug: string) => ({
    schema: `
    query projectPriceUsd($slug: String!){
      projectBySlug(slug: $slug) {
        priceUsd
      }
    }`,
    variables: { slug },
  }),
  (gql: { projectBySlug: { priceUsd: number } }) => gql.projectBySlug.priceUsd,
)
