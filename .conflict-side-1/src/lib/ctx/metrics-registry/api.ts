import type { TMetricSelector } from './types/index.js'

import { type TNominal } from '../../utils/types/index.js'
import { ApiQuery } from '../../api/index.js'
import { percentFormatter, usdFormatter } from '../../utils/formatters/index.js'
import {
  zodGranularityRulesSchema,
  zodSettingsSchema,
  type TGranularityRulesSchema,
  type TSettingsSchema,
} from './settings-schema.js'

export type TMetricKey = TNominal<string, 'TMetricKey'>

export type TMetricUnit = '' | 'usd' | 'percent'

type TMetricArgs = Partial<{
  selector: TMetricSelector
  [x: string]: unknown
}>

export type TRegistryMetric = {
  key: string
  queryKey: undefined | string

  label: string

  category: string
  group?: string

  chartStyle: string
  node: string

  unit: string
  formatter: undefined | ((value: number) => string)

  meta: {
    args: TMetricArgs
    isNew: boolean
    displayOrder: number
    settingsSchema?: TSettingsSchema
    granularityRules?: TGranularityRulesSchema
  }

  reqMeta: object
}
export type TMetricsRegistry = Record<string, undefined | TRegistryMetric>

export const queryGetOrderedMetrics = ApiQuery(
  () => `{
  getOrderedMetrics {
    categories
    metrics {
      k:uiKey
      m:metric
      t:type
      ui:uiHumanReadableName
      c:categoryName
      g:groupName
      cs:chartStyle
      un:unit
      d:description
      a:args
      in:isNew
      do:displayOrder
    }
  }
}`,
  (gql: {
    getOrderedMetrics: {
      categories: string[]
      metrics: {
        k: null | string
        m: TMetricKey
        t: string
        ui: string
        c: string
        g: null | string
        cs: string
        un: TMetricUnit
        d: string
        a: {
          settingsSchema: TSettingsSchema
          [x: string]: any
        }
        in: boolean
        do: number
      }[]
    }
  }) => {
    const { categories, metrics } = gql.getOrderedMetrics

    const CategoryIndex = categories.reduce(
      (acc, item, i) => Object.assign(acc, { [item]: i + 1 }),
      {} as Record<string, number>,
    )

    const MetricsRegistry = metrics
      .sort((a, b) => {
        const categoryDiff = CategoryIndex[a.c] - CategoryIndex[b.c]

        if (categoryDiff) return categoryDiff
        else return a.do - b.do
      })
      .reduce((acc, item) => {
        const key = item.k ?? item.m
        const { settingsSchema, granularityRules, ...args } = item.a ?? {}

        return Object.assign(acc, {
          [key]: {
            key,
            queryKey: item.k ? item.m : undefined,

            label: item.ui || '',

            category: item.c || '',
            group: item.g || undefined,

            // enforce style check
            chartStyle: enforceCorrectChartStyle(item.cs),
            node: enforceCorrectChartStyle(item.cs), // LEGACY

            unit: item.un || undefined,
            formatter: getTooltipFormatterByUnit(item.un), // LEGACY

            meta: {
              args,
              settingsSchema: zodSettingsSchema.safeParse(settingsSchema).data,
              granularityRules: zodGranularityRulesSchema.safeParse(granularityRules).data,
              //type: item.t,
              isNew: item.in,
              displayOrder: item.do,
            },

            reqMeta: item.a, // LEGACY
          },
        })
      }, {} as TMetricsRegistry)

    return { categories, MetricsRegistry }
  },
  {
    cacheTime: undefined,
  },
)

function getTooltipFormatterByUnit(unit: TMetricUnit) {
  switch (unit) {
    case 'usd':
      return usdFormatter
    case 'percent':
      return percentFormatter
  }
}

const ALLOWED_STYLES = new Set(['line', 'bar', 'greenRedBar', 'filledLine', 'gradientLine', 'area'])
function enforceCorrectChartStyle(chartStyle: string) {
  return ALLOWED_STYLES.has(chartStyle) ? chartStyle : 'line'
}
