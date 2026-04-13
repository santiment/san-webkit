import type { ISeriesApi } from '@santiment-network/chart-next'
import type { TAggregation, TMetricData } from '../api/index.js'

import { onMount } from 'svelte'

import {
  MetricStyle,
  type TChartMetric,
  type TLabels,
} from '$lib/ctx/metrics-registry/types/index.js'
import { ss, createCtx } from '$lib/utils/index.js'
import {
  DEFAULT_FORMATTER,
  DEFAULT_Y_FORMATTER,
  percentFormatter,
  usdFormatter,
} from '$lib/utils/formatters/index.js'
import { uuidv7 } from '$lib/utils/uuid/index.js'

const DEFAULT_LABELS_GETTER = () => ['' as TLabels[0], '' as TLabels[1]] as TLabels

export function createSeries({
  type,

  apiMetricName = '',

  label = apiMetricName,
  data = [],

  getLabels$ = DEFAULT_LABELS_GETTER,
  getSelectorLabels$ = DEFAULT_LABELS_GETTER,

  selector = null,
  interval,
  pane,
  unit,

  style = 'line',
  color = '#00ff00',
  visible = true,

  scaleId,
  scaleMargins,
  scaleInverted = false,
  scaleVisible = true,

  isSelectorLocked = false,
  isFilledGradient = false,
  transformData,

  meta,

  ...rest
}: TChartMetric) {
  const scale = $state({
    id: scaleId || apiMetricName,
    visible: scaleVisible,
    inverted: scaleInverted,
    scaleMargins,
  })

  let paneSignal = $state(pane)

  const ui = $state({
    color,
    style,
    unit,

    isSelectorLocked,
    isFilledGradient,

    candleDownColor: style === MetricStyle.CANDLES ? rest.candleDownColor : undefined,
    baseline: rest.baseline,
    signal: rest.signal,
  })

  const formula = 'formula' in rest && rest.formula ? ss(rest.formula) : undefined

  const formatters = $derived.by(() => {
    const { unit } = ui
    const result = { tooltipFormatter: DEFAULT_FORMATTER, scaleFormatter: DEFAULT_Y_FORMATTER }

    if (unit === 'usd') {
      result.tooltipFormatter = usdFormatter
    } else if (unit === 'percent') {
      result.tooltipFormatter = percentFormatter
    }

    return result
  })

  const metric = {
    id: rest.id ?? uuidv7(),

    type,
    apiMetricName,

    label,
    getLabels$,
    getSelectorLabels$,

    version: ss<undefined | string>(rest.version),
    data: ss<TMetricData>(data),
    visible: ss(visible),
    loading: ss(!data.length),
    error: ss<null | string | string[] | Error | Error[]>(null),
    warnings: ss<null | string[]>(null),

    aggregation: ss<TAggregation>(style === MetricStyle.CANDLES ? 'OHLC' : undefined),

    pane: {
      get $() {
        // Reading signal
        paneSignal

        return metric.chartSeriesApi?.getPane().paneIndex() ?? pane
      },
      update$() {
        pane = metric.chartSeriesApi?.getPane().paneIndex() ?? pane

        // Triggering signal update
        paneSignal = NaN
      },
    },

    formatters: {
      get $() {
        return formatters
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

    toApiSchema$() {
      return {
        type,
        apiMetricName,
        id: metric.id,
        formula: metric.formula?.$,
        version: metric.version.$,

        interval: metric.interval.$,
        selector: metric.selector.$,
        pane: metric.pane.$,

        visible: metric.visible.$,
        color: metric.ui.$$.color,
        style: metric.ui.$$.style,
        unit: metric.ui.$$.unit,

        scaleId: metric.scale.$$.id,
        scaleVisible: metric.scale.$$.visible,

        isSelectorLocked: metric.ui.$$.isSelectorLocked,
        isFilledGradient: metric.ui.$$.isFilledGradient,

        candleDownColor: metric.ui.$$.candleDownColor,
        baseline: $state.snapshot(metric.ui.$$.baseline),
      }
    },
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
        aggregation: $state.snapshot(item.aggregation.$),
        selector: $state.snapshot(item.selector.$),
        version: $state.snapshot(item.version.$),
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
          const deleted = series.splice(index, 1)
          series = series.slice()

          fireSeriesDeleteEvent(deleted[0], series)
        },

        deleteSeries(metricSeries: TSeries) {
          const index = series.indexOf(metricSeries)
          if (index === -1) return

          this.delete(index)
        },

        findById(id?: string) {
          return id && series.find((item) => item.id === id)
        },
      },
    }
  },
)

const deleteEventSubscribers = new Set<(metric: TSeries, metrics: TSeries[]) => void>()
function fireSeriesDeleteEvent(metric: TSeries, metrics: TSeries[]) {
  deleteEventSubscribers.forEach((fn) => fn(metric, metrics))
}

export function useMetricSeriesDeleteListener(fn: (metric: TSeries) => void) {
  const { metricSeries } = useMetricSeriesCtx.get()

  onMount(() => {
    function onDelete(metric: TSeries, metrics: TSeries[]) {
      if (metricSeries.$ === metrics) fn(metric)
    }

    deleteEventSubscribers.add(onDelete)

    return () => {
      deleteEventSubscribers.delete(onDelete)
    }
  })
}
