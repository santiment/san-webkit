import type { ISeriesApi } from '@santiment-network/chart'
import type {
  TMetricData,
  TMetricTargetSelectorInputObject,
  TTimeseriesMetricTransformInputObject,
} from '../api/index.js'

import { ss } from 'svelte-runes'
import { createCtx } from '$lib/utils/index.js'
import { DEFAULT_FORMATTER } from './formatters.js'

type TMetric = {
  name: string
  label?: string

  style: 'line' | 'histogram'
  color?: string

  selector?: null | TMetricTargetSelectorInputObject
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
  scaleMargins,
  scaleInverted = false,
  transform,
  transformData,

  tooltipFormatter = DEFAULT_FORMATTER,
  scaleFormatter,
}: TMetric) {
  const scale = $state({
    id: scaleId || name,
    visible: true,
    inverted: scaleInverted,
    scaleMargins,
  })

  return {
    id: __METRIC_SERIES_ID++,

    apiMetricName: name,
    label,

    type: ss<TMetric['style']>(style),
    data: ss<TMetricData>([]),
    color: ss<string>(color || 'green'),

    loading: ss(true),
    error: ss(null),

    pane: ss(pane),

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
  }
}

export type TSeries = ReturnType<typeof createSeries>

export const useMetricSeriesCtx = createCtx(
  'useMetricSeriesCtx',
  (defaultMetrics: TMetric[] = []) => {
    let series = $state.raw(
      defaultMetrics.map((item) => {
        return createSeries(item)
      }),
    )

    return {
      metricSeries: {
        get $() {
          return series
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
