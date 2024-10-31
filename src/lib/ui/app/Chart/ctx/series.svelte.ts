import { ss } from 'svelte-runes'
import { createCtx } from '$lib/utils/index.js'
import {
  type TMetricData,
  type TMetricTargetSelectorInputObject,
  type TTimeseriesMetricTransformInputObject,
} from '../api/index.js'

type TMetric = {
  name: string
  style: 'line' | 'histogram'
  color?: string

  selector?: null | TMetricTargetSelectorInputObject
  transformData?: (data: TMetricData) => TMetricData
  transform?: TTimeseriesMetricTransformInputObject

  pane?: number

  scaleId?: string
  scaleInverted?: boolean
  scaleMargins?: { top: number; bottom: number }
  scaleFormatter?: (value: number) => string
}

export function createSeries({
  name,
  selector = null,
  scaleId,
  style = 'line',
  color,
  pane,
  scaleMargins,
  scaleInverted = false,
  transform,
  transformData,
  scaleFormatter,
}: TMetric) {
  const scale = $state({
    id: scaleId || name,
    visible: true,
    inverted: scaleInverted,
    scaleMargins,
  })

  return {
    key: name,
    type: ss<TMetric['style']>(style),
    data: ss<TMetricData>([]),
    color: ss<string>(color || 'green'),

    loading: ss(true),
    error: ss(null),

    pane: ss(pane),

    transform,

    transformData,
    scaleFormatter,

    scale: {
      get $$() {
        return scale
      },
    },

    selector: ss<null | TMetricTargetSelectorInputObject>(selector),
  }
}

export type TSeries = ReturnType<typeof createSeries>

export const useMetricSeriesCtx = createCtx(
  'useMetricSeriesCtx',
  (defaultMetrics: TMetric[] = []) => {
    const series = $state.raw(
      defaultMetrics.map((item) => {
        return createSeries(item)
      }),
    )

    return {
      metricSeries: {
        get $() {
          return series
        },
        add() {},
        delete() {},
      },
    }
  },
)
