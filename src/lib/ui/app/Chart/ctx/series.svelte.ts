import type { ISeriesApi } from '@santiment-network/chart-next'
import type {
  TMetricData,
  TMetricTargetSelectorInputObject,
  TTimeseriesMetricTransformInputObject,
} from '../api/index.js'
import type { TUUIDv4 } from '$lib/utils/uuid/index.js'

import { ss, createCtx, type SS } from '$lib/utils/index.js'
import { DEFAULT_FORMATTER } from '$lib/utils/formatters/index.js'

export type TMetricSelector = null | TMetricTargetSelectorInputObject

export type TMetricFormula = { expr: string; name: string; id: TUUIDv4 }

export type TMetric = {
  name: string
  label?: string

  style: 'line' | 'histogram'
  color?: string
  visible?: boolean

  selector?: TMetricSelector
  transformData?: (data: TMetricData) => TMetricData
  transform?: TTimeseriesMetricTransformInputObject

  pane?: number

  tooltipFormatter?: (value: any) => number | string

  scaleId?: string
  scaleInverted?: boolean
  scaleMargins?: { top: number; bottom: number }
  scaleFormatter?: (value: number) => string
}

let __METRIC_SERIES_ID = 0
export function createSeries({
  name,
  label = name,
  selector = null,
  scaleId,
  style = 'line',
  color,
  pane,
  visible = true,
  scaleMargins,
  scaleInverted = false,
  transform,
  transformData,

  tooltipFormatter = DEFAULT_FORMATTER,
  scaleFormatter,

  formula,
}: TMetric & {
  selector?: TMetricSelector | SS<TMetricSelector>
  formula?: undefined | TMetricFormula | SS<undefined | TMetricFormula>
}) {
  const scale = $state({
    id: scaleId || name,
    visible: true,
    inverted: scaleInverted,
    scaleMargins,
  })

  let paneSignal = $state(pane)

  const metric = {
    id: __METRIC_SERIES_ID++,

    apiMetricName: name,
    label,

    type: ss<TMetric['style']>(style),
    data: ss<TMetricData>([]),
    color: ss<string>(color || 'green'),

    visible: ss(visible),
    loading: ss(true),
    error: ss(null),

    pane: {
      get $() {
        // Reading signal
        paneSignal
        return metric.chartSeriesApi?.getPane().paneIndex() ?? pane
      },
      update$() {
        // Triggering signal update
        paneSignal = NaN
      },
    },

    transform,

    transformData,

    tooltipFormatter,
    scaleFormatter,

    scale: {
      get $$() {
        return scale
      },
    },

    selector: ss<null | TMetricTargetSelectorInputObject>(selector),

    chartSeriesApi: null as null | ISeriesApi<any>,

    formula: ss<undefined | TMetricFormula>(formula),
  }

  return metric
}

export type TSeries = ReturnType<typeof createSeries>

export const useMetricSeriesCtx = createCtx(
  'webkit_useMetricSeriesCtx',
  (defaultMetrics: TMetric[] = []) => {
    let series = $state.raw(
      defaultMetrics.map((item) => {
        return createSeries(item)
      }),
    )

    const asScope = $derived(
      series.map((item) => ({
        name: item.apiMetricName,
        selector: $state.snapshot(item.selector.$),
        formula: $state.snapshot(item.formula.$),
      })),
    )

    return {
      metricSeries: {
        get $() {
          return series
        },

        get asScope$() {
          return asScope
        },

        add(metric: TMetric) {
          series.push(createSeries(metric))
          series = series.slice()
        },
        delete(metricSeries: TSeries) {
          const index = series.indexOf(metricSeries)
          if (index === -1) return

          series.splice(index, 1)
          series = series.slice()
        },
      },
    }
  },
)
