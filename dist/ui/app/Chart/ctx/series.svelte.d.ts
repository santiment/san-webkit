import type { ISeriesApi } from '@santiment-network/chart-next';
import type { TAggregation, TMetricData } from '../api/index.js';
import { type TChartMetric, type TChartMetricBase, type TMetricFormula, type TMetricSelector, type TMetricType, type TMetricTypes } from '../../../../ctx/metrics-registry/types/index.js';
import { type SS } from '../../../../utils/index.js';
import { DEFAULT_FORMATTER, DEFAULT_Y_FORMATTER } from '../../../../utils/formatters/index.js';
import { type TUUIDv7 } from '../../../../utils/uuid/index.js';
type TBaseSeries<GType extends TMetricTypes> = {
    id: TUUIDv7;
    type: GType;
    chartSeriesApi: null | ISeriesApi<any>;
    transformData?: TChartMetric['transformData'];
    version: SS<undefined | string>;
    data: SS<TMetricData>;
    visible: SS<boolean>;
    loading: SS<boolean>;
    error: SS<null | string | string[] | Error | Error[]>;
    warnings: SS<null | string[]>;
    aggregation: SS<TAggregation>;
    interval: SS<TChartMetric['interval']>;
    pane: {
        get $(): number;
        update$(): void;
    };
    formatters: {
        get $(): {
            tooltipFormatter: typeof DEFAULT_FORMATTER;
            scaleFormatter: typeof DEFAULT_Y_FORMATTER;
        };
    };
    scale: {
        get $$(): {
            id: string;
            visible: boolean;
            inverted: boolean;
            scaleMargins?: {
                top: number;
                bottom: number;
            };
        };
    };
    ui: {
        get $$(): {
            color: string;
            style: NonNullable<TChartMetric['style']>;
            unit: TChartMetric['unit'];
            isSelectorLocked: boolean;
            isFilledGradient: boolean;
            candleDownColor?: string;
            baseline: TChartMetricBase<any>['baseline'];
            signal: TChartMetricBase<any>['signal'];
        };
    };
    meta: TChartMetric['meta'];
    toApiSchema$: () => Record<string, unknown>;
};
export type TAssetSeries = TBaseSeries<TMetricType['ASSET']> & {
    apiMetricName: string;
    get label(): string;
    selector: SS<TMetricSelector>;
};
export type TFormulaSeries = TBaseSeries<TMetricType['FORMULAS']> & {
    formula: SS<TMetricFormula>;
    get label(): string;
};
export type TTraditionalFinanceSeries = TBaseSeries<TMetricType['TRADITIONAL_FINANCE']> & {
    apiMetricName: string;
    get label(): string;
    selector: SS<TMetricSelector>;
};
export type TDataStoreSeries = TBaseSeries<TMetricType['DATA_STORE']> & {
    get label(): string;
};
export type TSeries = TAssetSeries | TFormulaSeries | TTraditionalFinanceSeries | TDataStoreSeries;
export declare function createSeries({ type, apiMetricName, label, data, selector, interval, pane, unit, style, color, visible, scaleId, scaleMargins, scaleInverted, scaleVisible, isSelectorLocked, isFilledGradient, transformData, meta, ...rest }: TChartMetric): TSeries;
export declare const useMetricSeriesCtx: ((defaultMetrics?: TChartMetric[]) => {
    metricSeries: {
        readonly $: TSeries[];
        readonly asScope$: {
            name: string;
            aggregation: "OHLC" | undefined;
            selector: {
                address?: import("../api/index.js").TAddress | undefined;
                blockchain?: string | undefined;
                blockchainAddress?: {
                    id?: number | string | undefined;
                    address: string;
                    infrastructure: string;
                } | undefined;
                contractAddress?: string | undefined;
                ecosystems?: string[] | undefined;
                holdersCount?: number | undefined;
                ignoredSlugs?: string[] | undefined;
                label?: string | undefined;
                labelFqn?: string | undefined;
                labelFqns?: string[] | undefined;
                labels?: string[] | undefined;
                marketSegments?: string[] | undefined;
                organization?: string | undefined;
                organizations?: string[] | undefined;
                owner?: string | undefined;
                owners?: string[] | undefined;
                slug?: import("../../../../ctx/assets/api.js").TAssetSlug | undefined;
                slugs?: import("../../../../ctx/assets/api.js").TAssetSlug[] | undefined;
                source?: string | undefined;
                text?: string | undefined;
                watchlistId?: number | undefined;
                watchlistSlug?: string | undefined;
            } | null;
            version: string | undefined;
            formula: {
                expr: string;
                name: string;
                id: import("../../../../utils/uuid/index.js").TUUIDv4;
            } | undefined;
        }[];
        export(): Record<string, unknown>[];
        add(metric: TChartMetric): TSeries;
        addSeries(metricSeries: TSeries): number;
        delete(index: number): void;
        deleteSeries(metricSeries: TSeries): void;
        findById(id?: string): "" | TSeries | undefined;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        metricSeries: {
            readonly $: TSeries[];
            readonly asScope$: {
                name: string;
                aggregation: "OHLC" | undefined;
                selector: {
                    address?: import("../api/index.js").TAddress | undefined;
                    blockchain?: string | undefined;
                    blockchainAddress?: {
                        id?: number | string | undefined;
                        address: string;
                        infrastructure: string;
                    } | undefined;
                    contractAddress?: string | undefined;
                    ecosystems?: string[] | undefined;
                    holdersCount?: number | undefined;
                    ignoredSlugs?: string[] | undefined;
                    label?: string | undefined;
                    labelFqn?: string | undefined;
                    labelFqns?: string[] | undefined;
                    labels?: string[] | undefined;
                    marketSegments?: string[] | undefined;
                    organization?: string | undefined;
                    organizations?: string[] | undefined;
                    owner?: string | undefined;
                    owners?: string[] | undefined;
                    slug?: import("../../../../ctx/assets/api.js").TAssetSlug | undefined;
                    slugs?: import("../../../../ctx/assets/api.js").TAssetSlug[] | undefined;
                    source?: string | undefined;
                    text?: string | undefined;
                    watchlistId?: number | undefined;
                    watchlistSlug?: string | undefined;
                } | null;
                version: string | undefined;
                formula: {
                    expr: string;
                    name: string;
                    id: import("../../../../utils/uuid/index.js").TUUIDv4;
                } | undefined;
            }[];
            export(): Record<string, unknown>[];
            add(metric: TChartMetric): TSeries;
            addSeries(metricSeries: TSeries): number;
            delete(index: number): void;
            deleteSeries(metricSeries: TSeries): void;
            findById(id?: string): "" | TSeries | undefined;
        };
    };
    set: (defaultMetrics?: TChartMetric[]) => {
        metricSeries: {
            readonly $: TSeries[];
            readonly asScope$: {
                name: string;
                aggregation: "OHLC" | undefined;
                selector: {
                    address?: import("../api/index.js").TAddress | undefined;
                    blockchain?: string | undefined;
                    blockchainAddress?: {
                        id?: number | string | undefined;
                        address: string;
                        infrastructure: string;
                    } | undefined;
                    contractAddress?: string | undefined;
                    ecosystems?: string[] | undefined;
                    holdersCount?: number | undefined;
                    ignoredSlugs?: string[] | undefined;
                    label?: string | undefined;
                    labelFqn?: string | undefined;
                    labelFqns?: string[] | undefined;
                    labels?: string[] | undefined;
                    marketSegments?: string[] | undefined;
                    organization?: string | undefined;
                    organizations?: string[] | undefined;
                    owner?: string | undefined;
                    owners?: string[] | undefined;
                    slug?: import("../../../../ctx/assets/api.js").TAssetSlug | undefined;
                    slugs?: import("../../../../ctx/assets/api.js").TAssetSlug[] | undefined;
                    source?: string | undefined;
                    text?: string | undefined;
                    watchlistId?: number | undefined;
                    watchlistSlug?: string | undefined;
                } | null;
                version: string | undefined;
                formula: {
                    expr: string;
                    name: string;
                    id: import("../../../../utils/uuid/index.js").TUUIDv4;
                } | undefined;
            }[];
            export(): Record<string, unknown>[];
            add(metric: TChartMetric): TSeries;
            addSeries(metricSeries: TSeries): number;
            delete(index: number): void;
            deleteSeries(metricSeries: TSeries): void;
            findById(id?: string): "" | TSeries | undefined;
        };
    };
    __CTX: "webkit_useMetricSeriesCtx";
};
export declare function useMetricSeriesDeleteListener(fn: (metric: TSeries) => void): void;
export {};
