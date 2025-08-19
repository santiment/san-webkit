import type { ISeriesApi } from '@santiment-network/chart-next'
import type { TMetricData } from '../api/index.js'

import { type TChartMetric, type TLabels } from '$lib/ctx/metrics-registry/types/index.js'
import { ss, createCtx } from '$lib/utils/index.js'
import { DEFAULT_FORMATTER } from '$lib/utils/formatters/index.js'
import { uuidv4 } from '$lib/utils/uuid/index.js'

const DEFAULT_LABELS_GETTER = () => ['' as TLabels[0], '' as TLabels[1]] as TLabels

export function createSeries({
  type,

  apiMetricName = '',

  label = apiMetricName,

  getLabels$ = DEFAULT_LABELS_GETTER,
  getSelectorLabels$ = DEFAULT_LABELS_GETTER,

  selector = null,
  interval,
  pane,

  style = 'line',
  color = '#00ff00',
  visible = true,

  scaleId,
  scaleMargins,
  scaleInverted = false,

  isSelectorLocked = false,
  transformData,

  tooltipFormatter = DEFAULT_FORMATTER,
  scaleFormatter,

  meta,

  ...rest
}: TChartMetric) {
  const scale = $state({
    id: scaleId || apiMetricName,
    visible: true,
    inverted: scaleInverted,
    scaleMargins,
  })

  let paneSignal = $state(pane)

  const ui = $state({
    color,
    style,

    isSelectorLocked,

    tooltipFormatter,
    scaleFormatter,
  })

  const formula = 'formula' in rest && rest.formula ? ss(rest.formula) : undefined

  const metric = {
    id: uuidv4(),

    type,
    apiMetricName,

    label,
    getLabels$,
    getSelectorLabels$,

    data: ss<TMetricData>([]),
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

    scale: {
      get $$() {
        return scale
      },
    },

    interval: ss(interval),

    selector: ss(selector),

    formula,

    ui: {
      get $$() {
        return ui
      },
    },

    chartSeriesApi: null as null | ISeriesApi<any>,
    transformData,
    meta,
  }

  return metric
}

export type TSeries = ReturnType<typeof createSeries>

export const useMetricSeriesCtx = createCtx(
  'webkit_useMetricSeriesCtx',
  (defaultMetrics: TChartMetric[] = []) => {
    let series = $state.raw(
      defaultMetrics.map((item) => {
        return createSeries(item)
      }),
    )

    const asScope = $derived(
      series.map((item) => ({
        name: item.apiMetricName,
        selector: $state.snapshot(item.selector.$),
        formula: $state.snapshot(item.formula?.$),
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

        add(metric: TChartMetric): TSeries {
          const series = createSeries(metric)
          this.addSeries(series)
          return series
        },

        addSeries(metricSeries: TSeries): number {
          const index = series.push(metricSeries)
          series = series.slice()
          return index
        },

        delete(index: number) {
          series.splice(index, 1)
          series = series.slice()
        },

        deleteSeries(metricSeries: TSeries) {
          const index = series.indexOf(metricSeries)
          if (index === -1) return

          this.delete(index)
        },
      },
    }
  },
)
