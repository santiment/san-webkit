import type { MaybeSS, SS } from '../../../utils/state.svelte.js';
import type { TUUIDv7 } from '../../../utils/uuid/index.js';
import type { FIATS, FUNDS, INDICES_AND_SUPPLY, TAssetSlug } from '../../assets/api.js';
import type { TInterval, TMetricData, TMetricTargetSelectorInputObject, TTimeseriesMetricTransformInputObject } from '../../../ui/app/Chart/api/index.js';
import type { TNominal } from '../../../utils/index.js';
import type { TMetricUnit, TRegistryMetric } from '../api.js';
export declare const MetricType: {
    readonly ASSET: "asset_metric";
    readonly TRADITIONAL_FINANCE: "traditional_finance_metric";
    readonly SOCIAL_QUERY: "social_query_metric";
    readonly WALLET: "wallet_metric";
    readonly FORMULAS: "formulas_metric";
    readonly COMBINED_DISTRIBUTION: "combined_distribution";
    readonly DATA_STORE: "data_store_metric";
};
export type TMetricType = typeof MetricType;
export type TMetricTypes = TMetricType[keyof TMetricType];
export type TMetricSelector = null | TMetricTargetSelectorInputObject;
export type TMetricFormula = {
    expr: string;
    name: string;
    id: TUUIDv7;
};
export type TMetric = {
    type: TMetricTypes;
    apiMetricName?: string;
    label?: string;
    style: 'line' | 'histogram';
    color?: string;
    visible?: boolean;
    selector?: TMetricSelector;
    transformData?: (data: TMetricData) => TMetricData;
    transform?: TTimeseriesMetricTransformInputObject;
    pane?: number;
    tooltipFormatter?: (value: any) => number | string;
    scaleId?: string;
    scaleInverted?: boolean;
    scaleMargins?: {
        top: number;
        bottom: number;
    };
    scaleFormatter?: (value: number) => string;
    meta?: Record<string, any>;
};
export type TLabels = [TNominal<'TShortLabel', string>, TNominal<'TFullLabel', string>];
export type TLabelGetterMetricSeries = {
    type: TMetricTypes;
    selector: SS<TMetricSelector>;
    label: string;
    formula?: SS<TMetricFormula>;
};
export declare const MetricStyle: {
    readonly LINE: "line";
    readonly HISTOGRAM: "histogram";
    readonly AREA: "area";
    readonly CANDLES: "candles";
    readonly SIGNAL: "signal";
};
export type TMetricStyle = typeof MetricStyle;
export type TMetricStyles = TMetricStyle[keyof TMetricStyle];
export type TChartMetricBase<GMetricType extends TMetricTypes, GData extends object = {}> = {
    id?: TUUIDv7;
    type: GMetricType;
    apiMetricName: string;
    data?: TMetricData;
    label?: string;
    style?: TMetricStyles;
    color?: string;
    visible?: boolean;
    pane?: number;
    unit?: TMetricUnit;
    scaleId?: string;
    scaleVisible?: boolean;
    scaleInverted?: boolean;
    scaleMargins?: {
        top: number;
        bottom: number;
    };
    transformData?: (data: TMetricData) => TMetricData;
    interval?: MaybeSS<TInterval>;
    selector?: MaybeSS<TMetricSelector>;
    getLabels$?: (metricSeries: TLabelGetterMetricSeries) => TLabels;
    getSelectorLabels$?: (metricSeries: TLabelGetterMetricSeries) => TLabels;
    isSelectorLocked?: boolean;
    isFilledGradient?: boolean;
    candleDownColor?: string;
    meta?: Partial<TRegistryMetric['meta']>;
    version?: string;
    baseline?: {
        value: number;
        bottomColor: string;
    };
    signal?: {
        shape: 'circle' | 'square' | 'arrowUp' | 'arrowDown';
        text?: string;
        isZeroIncluded?: boolean;
        position: 'aboveBar' | 'belowBar' | 'atPriceTop' | 'atPriceBottom';
    };
} & GData;
export type TChartAssetMetric = TChartMetricBase<TMetricType['ASSET']>;
export type TChartTraditionalFinanceMetric = TChartMetricBase<TMetricType['TRADITIONAL_FINANCE']>;
export type TChartFormulasMetric = TChartMetricBase<TMetricType['FORMULAS'], {
    formula: MaybeSS<TMetricFormula>;
}>;
export type TChartDataStoreMetric = TChartMetricBase<TMetricType['DATA_STORE']>;
export type TChartCombinedDistributionMetric = TChartMetricBase<TMetricType['COMBINED_DISTRIBUTION'], {
    distribution: {
        base: 'holders_distribution' | 'holders_distribution_combined_balance' | 'percent_of_holders_distribution_combined_balance' | 'holders_labeled_distribution';
        /**
         * Unique set of items
         */
        ranges: Array<'0_to_0.001' | '0.001_to_0.01' | '0.01_to_0.1' | '0.1_to_1' | '1_to_10' | '10_to_100' | '100_to_1k' | '1k_to_10k' | '10k_to_100k' | '100k_to_1M' | '1M_to_10M' | '10M_to_100M' | '100M_to_1B' | '1B_to_inf'>;
    };
}>;
export type TChartMetric = TChartAssetMetric | TChartTraditionalFinanceMetric | TChartFormulasMetric | TChartDataStoreMetric | TChartCombinedDistributionMetric;
export type TApiMetricBase<GType extends TMetricTypes, GData extends object> = {
    id: TUUIDv7;
    name: string;
    type: GType;
} & GData;
export type TAssetApiMetric = TApiMetricBase<TMetricType['ASSET'], {
    selector: {
        slug: TAssetSlug;
    };
}>;
export type TTraditionalFinanceApiMetric = TApiMetricBase<TMetricType['TRADITIONAL_FINANCE'], {
    selector: {
        slug: (typeof FIATS | typeof INDICES_AND_SUPPLY | typeof FUNDS)[number]['slug'];
    };
}>;
export type TSocialQueryApiMetric = TApiMetricBase<TMetricType['SOCIAL_QUERY'], {
    selector: {
        text: string;
    };
}>;
export type TWalletApiMetric = TApiMetricBase<TMetricType['WALLET'], {
    selector: {
        slug: TAssetSlug;
        blockchainAddress: {
            address: string;
        };
    };
}>;
export type TFormulasApiMetric = TApiMetricBase<TMetricType['FORMULAS'], {
    formula: TMetricFormula;
}>;
export declare function suggestCombinedDistributionLabel(distribution: TChartCombinedDistributionMetric['distribution']): string;
