import { onMount } from 'svelte'

import { createCtx, type TNominal } from '$lib/utils/index.js'
import { ApiQuery } from '$lib/api/index.js'
import { Query } from '$lib/api/executor.js'

export type TMetricKey = TNominal<string, 'TMetricKey'>

const queryGetOrderedMetrics = ApiQuery(
  () => `{
  getOrderedMetrics {
    categories
    metrics {
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
        m: TMetricKey
        t: string
        ui: string
        c: string
        g: null | string
        cs: string
        un: string
        d: string
        a: object
        in: boolean
        do: number
      }[]
    }
  }) => {
    const { categories, metrics } = gql.getOrderedMetrics

    const metricByKey = metrics.reduce((acc, item) => {
      return Object.assign(acc, {
        [item.m]: {
          key: item.m,
          label: item.ui,

          category: item.c,
          group: item.g || '',
          chartStyle: item.cs,

          unit: item.un,

          meta: {
            args: item.a,
            type: item.t,
            isNew: item.in,
            displayOrder: item.do,
          },
        },
      })
    }, {})

    console.log(metricByKey)

    return gql.getOrderedMetrics
  },
  {
    cacheTime: undefined,
  },
)

export const useMetricsRegistryCtx = createCtx('webkit_useMetricsRegistryCtx', () => {
  let metrics = $state.raw<any[]>([])
  //const assetBySlugMap = $derived(new Map(assets.map((item) => [item.slug, item])))

  onMount(() => {
    queryGetOrderedMetrics(Query)().then((items) => {
      console.log(items)
    })
  })

  return {
    metrics: {
      get $() {
        return metrics
      },
    },
  }
})
