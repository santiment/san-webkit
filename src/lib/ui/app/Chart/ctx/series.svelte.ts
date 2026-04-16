import type { ISeriesApi } from '@santiment-network/chart-next'
import type {
  TAggregation,
  TInterval,
  TMetricData,
  TMetricTargetSelectorInputObject,
} from '../api/index.js'
import type { TMetricUnit } from '$lib/ctx/metrics-registry/api.js'

import { onMount } from 'svelte'

import {
  MetricStyle,
  MetricType,
  suggestCombinedDistributionLabel,
  type TChartCombinedDistributionMetric,
  type TChartMetric,
  type TChartMetricBase,
  // type TLabels,
  type TMetricFormula,
  type TMetricSelector,
  type TMetricStyles,
  type TMetricType,
  type TMetricTypes,
} from '$lib/ctx/metrics-registry/types/index.js'
import { ss, createCtx, type SS } from '$lib/utils/index.js'
import {
  DEFAULT_FORMATTER,
  DEFAULT_Y_FORMATTER,
  percentFormatter,
  usdFormatter,
} from '$lib/utils/formatters/index.js'
import { uuidv7, type TUUIDv7 } from '$lib/utils/uuid/index.js'

// const DEFAULT_LABELS_GETTER = () => ['' as TLabels[0], '' as TLabels[1]] as TLabels

type TBaseSeries<GType extends TMetricTypes> = {
  id: TUUIDv7
  type: GType
  chartSeriesApi: null | ISeriesApi<any>
  transformData?: TChartMetric['transformData']

  version: SS<undefined | string>
  data: SS<TMetricData>
  visible: SS<boolean>
  loading: SS<boolean>
  error: SS<null | string | string[] | Error | Error[]>
  warnings: SS<null | string[]>

  aggregation: SS<TAggregation>
  interval: SS<TChartMetric['interval']>

  pane: {
    get $(): number
    update$(): void
  }

  formatters: {
    get $(): {
      tooltipFormatter: typeof DEFAULT_FORMATTER
      scaleFormatter: typeof DEFAULT_Y_FORMATTER
    }
  }

  scale: {
    get $$(): {
      id: string
      visible: boolean
      inverted: boolean
      scaleMargins?: { top: number; bottom: number }
    }
  }

  ui: {
    get $$(): {
      color: string
      style: NonNullable<TChartMetric['style']>
      unit: TChartMetric['unit']

      isSelectorLocked: boolean
      isFilledGradient: boolean

      candleDownColor?: string
      baseline: TChartMetricBase<any>['baseline']
      signal: TChartMetricBase<any>['signal']
    }
  }

  meta: TChartMetric['meta']

  toApiSchema$: () => {
    type: TMetricTypes
    apiMetricName?: string
    id: TUUIDv7
    formula?: TMetricFormula
    distribution?: TCombinedDistributionSeries['distribution']
    version?: string

    interval?: TInterval
    selector?: null | TMetricTargetSelectorInputObject
    pane?: number

    visible?: boolean
    color: string
    style: TMetricStyles
    unit?: TMetricUnit

    scaleId?: string
    scaleVisible?: boolean

    isSelectorLocked?: boolean
    isFilledGradient?: boolean

    candleDownColor?: string
    baseline?: TChartMetric['baseline']
  }
}

export type TAssetSeries = TBaseSeries<TMetricType['ASSET']> & {
  apiMetricName: string
  get label(): string
  selector: SS<TMetricSelector>
}

export type TFormulaSeries = TBaseSeries<TMetricType['FORMULAS']> & {
  formula: SS<TMetricFormula>
  get label(): string
}

export type TTraditionalFinanceSeries = TBaseSeries<TMetricType['TRADITIONAL_FINANCE']> & {
  apiMetricName: string
  get label(): string
  // NOTE: Traditional Finance metrics have fixed selectors
  selector: SS<TMetricSelector>
}

export type TDataStoreSeries = TBaseSeries<TMetricType['DATA_STORE']> & {
  get label(): string
}

export type TCombinedDistributionSeries = TBaseSeries<TMetricType['COMBINED_DISTRIBUTION']> & {
  label: string
  apiMetricName: string
  selector: SS<TMetricSelector>
  formula: { $: TMetricFormula }
  distribution: TChartCombinedDistributionMetric['distribution']
}

export type TSeries =
  | TAssetSeries
  | TFormulaSeries
  | TTraditionalFinanceSeries
  | TDataStoreSeries
  | TCombinedDistributionSeries

export function createSeries({
  type,

  apiMetricName = '',

  label = apiMetricName,
  data = [],

  // getLabels$ = DEFAULT_LABELS_GETTER,
  // getSelectorLabels$ = DEFAULT_LABELS_GETTER,

  selector = null,
  interval,
  pane = 0,
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

  const metric: TSeries = {
    id: rest.id ?? uuidv7(),

    type: type as any,
    apiMetricName,

    label,
    // getLabels$,
    // getSelectorLabels$,

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
      const scaleVisible = metric.scale.$$.visible

      return {
        type,
        apiMetricName: (metric.type !== MetricType.FORMULAS && apiMetricName) || undefined,
        id: metric.id,
        formula:
          metric.type === MetricType.FORMULAS ? $state.snapshot(metric.formula.$) : undefined,
        distribution:
          metric.type === MetricType.COMBINED_DISTRIBUTION ? metric.distribution : undefined,
        version: metric.version.$,

        interval: metric.interval.$,
        selector: 'selector' in metric ? $state.snapshot(metric.selector.$) : undefined,
        // default 0 -> undefined (omit from API)
        pane: metric.pane.$ || undefined,

        // default true -> undefined (omit from API)
        visible: metric.visible.$ && undefined,
        color: metric.ui.$$.color,
        style: metric.ui.$$.style,
        unit: metric.ui.$$.unit,

        // default random id -> undefined (omit from API)
        scaleId: scaleVisible ? metric.scale.$$.id : undefined,
        // default true -> undefined (omit from API)
        scaleVisible: scaleVisible && undefined,

        // default false -> undefined (omit from API)
        isSelectorLocked: metric.ui.$$.isSelectorLocked || undefined,
        // default false -> undefined (omit from API)
        isFilledGradient: metric.ui.$$.isFilledGradient || undefined,

        candleDownColor: metric.ui.$$.candleDownColor,
        baseline: $state.snapshot(metric.ui.$$.baseline),
      }
    },
  }

  if (metric.type === MetricType.FORMULAS) {
    delete (metric as any).selector
    Object.defineProperty(metric, 'label', {
      get: () => metric.formula.$.name,
    })
  } else if (metric.type === MetricType.COMBINED_DISTRIBUTION) {
    const distribution: Partial<TCombinedDistributionSeries['distribution']> =
      ('distribution' in rest && rest.distribution) || {}

    if (!distribution.ranges?.length) {
      distribution.ranges = ['0_to_0.001']
    }

    const { base = 'holders_distribution', ranges } = distribution

    const SELECTOR_VAR = 'sel'
    const combinedExpression = ranges
      .map((range) => `api_metric("${base}_${range}",${SELECTOR_VAR})`)
      .join('+')

    metric.apiMetricName = `${base}_0_to_0.001`
    metric.distribution = { base, ranges }
    metric.label = suggestCombinedDistributionLabel(metric.distribution)

    metric.formula = {
      $: {
        id: metric.id,
        name: metric.label,
        get expr() {
          return `${SELECTOR_VAR}=${JSON.stringify(metric.selector.$)}\n` + combinedExpression
        },
      },
    }
    // delete (metric as any).formula
  } else {
    delete (metric as any).formula
  }

  return metric
}

// export type TSeries = ReturnType<typeof createSeries>

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
        name: (item as { apiMetricName?: string }).apiMetricName ?? '',
        aggregation: $state.snapshot(item.aggregation.$),
        selector: 'selector' in item ? $state.snapshot(item.selector.$) : null,
        version: $state.snapshot(item.version.$),
        formula: item.type === MetricType.FORMULAS ? $state.snapshot(item.formula.$) : undefined,
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

        export() {
          return series.map((item) => item.toApiSchema$())
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
