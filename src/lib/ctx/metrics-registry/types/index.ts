import type { MaybeSS, SS } from '$lib/utils/state.svelte.js'
import type { TUUIDv4 } from '$lib/utils/uuid/index.js'
import type { FIATS, FUNDS, INDICES_AND_SUPPLY, TAssetSlug } from '$lib/ctx/assets/api.js'
import type {
  TInterval,
  TMetricData,
  TMetricTargetSelectorInputObject,
  TTimeseriesMetricTransformInputObject,
} from '$ui/app/Chart/api/index.js'
import type { TNominal } from '$lib/utils/index.js'

export const MetricType = {
  ASSET: 'asset_metric',
  TRADITIONAL_FINANCE: 'traditional_finance_metric',
  SOCIAL_QUERY: 'social_query_metric',
  WALLET: 'wallet_metric',
  FORMULAS: 'formulas_metric',
} as const

export type TMetricType = typeof MetricType
export type TMetricTypes = TMetricType[keyof TMetricType]

export type TMetricSelector = null | TMetricTargetSelectorInputObject

export type TMetricFormula = { expr: string; name: string; id: TUUIDv4 }

export type TMetric = {
  type: TMetricTypes

  apiMetricName?: string
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

  meta?: Record<string, any>
}

//export type TChartMetric = TMetric & {
//  interval?: TInterval | SS<TInterval>
//  selector?: TMetricSelector | SS<TMetricSelector>
//  formula?: undefined | TMetricFormula | SS<undefined | TMetricFormula>
//  meta?: Record<string, any>
//}

export type TLabels = [TNominal<'TShortLabel', string>, TNominal<'TFullLabel', string>]

export type TLabelGetterMetricSeries = {
  type: TMetricTypes
  selector: SS<TMetricSelector>
  label: string
  formula?: SS<TMetricFormula>
}

export const MetricStyle = {
  LINE: 'line',
  HISTOGRAM: 'histogram',
  AREA: 'area',
  CANDLES: 'candles',
} as const

export type TMetricStyle = typeof MetricStyle
export type TMetricStyles = TMetricStyle[keyof TMetricStyle]

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type TChartMetricBase<GMetricType extends TMetricTypes, GData extends object = {}> = {
  type: GMetricType
  apiMetricName: string

  label?: string
  style?: TMetricStyles
  color?: string
  visible?: boolean
  pane?: number

  scaleId?: string
  scaleVisible?: boolean
  scaleInverted?: boolean
  scaleMargins?: { top: number; bottom: number }
  scaleFormatter?: (value: number) => string

  tooltipFormatter?: (value: any) => number | string

  transformData?: (data: TMetricData) => TMetricData

  interval?: MaybeSS<TInterval>
  selector?: MaybeSS<TMetricSelector>

  getLabels$?: (metricSeries: TLabelGetterMetricSeries) => TLabels
  getSelectorLabels$?: (metricSeries: TLabelGetterMetricSeries) => TLabels

  isSelectorLocked?: boolean
  isFilledGradient?: boolean

  candleDownColor?: string

  meta?: Record<string, any>
} & GData

export type TChartAssetMetric = TChartMetricBase<TMetricType['ASSET']>

export type TChartTraditionalFinanceMetric = TChartMetricBase<TMetricType['TRADITIONAL_FINANCE']>

export type TChartFormulasMetric = TChartMetricBase<
  TMetricType['FORMULAS'],
  { formula: MaybeSS<TMetricFormula> }
>

export type TChartMetric = TChartAssetMetric | TChartTraditionalFinanceMetric | TChartFormulasMetric

// -----------------

export type TApiMetricBase<GType extends TMetricTypes, GData extends object> = {
  id: TUUIDv4
  name: string
  type: GType
} & GData

export type TAssetApiMetric = TApiMetricBase<
  TMetricType['ASSET'],
  {
    selector: { slug: TAssetSlug }
  }
>

export type TTraditionalFinanceApiMetric = TApiMetricBase<
  TMetricType['TRADITIONAL_FINANCE'],
  {
    selector: { slug: (typeof FIATS | typeof INDICES_AND_SUPPLY | typeof FUNDS)[number]['slug'] }
  }
>

export type TSocialQueryApiMetric = TApiMetricBase<
  TMetricType['SOCIAL_QUERY'],
  {
    selector: { text: string }
  }
>

export type TWalletApiMetric = TApiMetricBase<
  TMetricType['WALLET'],
  {
    selector: {
      slug: TAssetSlug
      blockchainAddress: { address: string }
    }
  }
>

export type TFormulasApiMetric = TApiMetricBase<
  TMetricType['FORMULAS'],
  {
    formula: TMetricFormula
  }
>
