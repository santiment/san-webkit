import { math, Timeseries } from './core.js'

const selector_from = math.typed('selector_from', {
  Timeseries: ({ selector }: Timeseries) => {
    if (!selector) {
      throw new Error("Chart metric doesn't have a selector")
    }

    return selector
  },
})

const asset_metric = math.typed('asset_metric', {
  'string, any': (_apiMetricName: string, selector: string | { slug: string }) => {
    if (
      !selector ||
      !(typeof selector === 'string' || (typeof selector === 'object' && 'slug' in selector))
    ) {
      throw new Error('Invalid asset selector was passed to "asset_metric" function')
    }

    return new Timeseries([], null)
  },
})

export const MathChartMetrics = {
  selector_from,
  asset_metric,
}
