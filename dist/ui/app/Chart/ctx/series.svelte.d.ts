import type { ISeriesApi } from '@santiment-network/chart-next';
import type { TAggregation, TInterval, TMetricData, TMetricTargetSelectorInputObject } from '../api/index.js';
import type { TMetricUnit } from '../../../../ctx/metrics-registry/api.js';
import { type TChartCombinedDistributionMetric, type TChartMetric, type TChartMetricBase, type TMetricFormula, type TMetricSelector, type TMetricStyles, type TMetricType, type TMetricTypes } from '../../../../ctx/metrics-registry/types/index.js';
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
    toApiSchema$: () => {
        type: TMetricTypes;
        apiMetricName?: string;
        id: TUUIDv7;
        formula?: TMetricFormula;
        distribution?: TCombinedDistributionSeries['distribution'];
        version?: string;
        interval?: TInterval;
        selector?: null | TMetricTargetSelectorInputObject;
        pane?: number;
        visible?: boolean;
        color: string;
        style: TMetricStyles;
        unit?: TMetricUnit;
        scaleId?: string;
        scaleVisible?: boolean;
        isSelectorLocked?: boolean;
        isFilledGradient?: boolean;
        candleDownColor?: string;
        baseline?: TChartMetric['baseline'];
    };
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
export type TCombinedDistributionSeries = TBaseSeries<TMetricType['COMBINED_DISTRIBUTION']> & {
    label: string;
    apiMetricName: string;
    selector: SS<TMetricSelector>;
    formula: {
        $: TMetricFormula;
    };
    distribution: TChartCombinedDistributionMetric['distribution'];
};
export type TSeries = TAssetSeries | TFormulaSeries | TTraditionalFinanceSeries | TDataStoreSeries | TCombinedDistributionSeries;
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
                id: TUUIDv7;
            } | undefined;
        }[];
        export(): {
            type: TMetricTypes;
            apiMetricName?: string;
            id: TUUIDv7;
            formula?: TMetricFormula;
            distribution?: TCombinedDistributionSeries["distribution"];
            version?: string;
            interval?: TInterval;
            selector?: null | TMetricTargetSelectorInputObject;
            pane?: number;
            visible?: boolean;
            color: string;
            style: TMetricStyles;
            unit?: TMetricUnit;
            scaleId?: string;
            scaleVisible?: boolean;
            isSelectorLocked?: boolean;
            isFilledGradient?: boolean;
            candleDownColor?: string;
            baseline?: TChartMetric["baseline"];
        }[];
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
                    id: TUUIDv7;
                } | undefined;
            }[];
            export(): {
                type: TMetricTypes;
                apiMetricName?: string;
                id: TUUIDv7;
                formula?: TMetricFormula;
                distribution?: TCombinedDistributionSeries["distribution"];
                version?: string;
                interval?: TInterval;
                selector?: Partial<{
                    address: import("../api/index.js").TAddress;
                    blockchain: string;
                    blockchainAddress: import("../api/index.js").TBlockchainAddressSelectorInputObject;
                    contractAddress: string;
                    ecosystems: string[];
                    holdersCount: number;
                    ignoredSlugs: string[];
                    label: string;
                    labelFqn: string;
                    labelFqns: string[];
                    labels: string[];
                    marketSegments: string[];
                    organization: string;
                    organizations: string[];
                    owner: string;
                    owners: string[];
                    slug: import("../../../../ctx/assets/api.js").TAssetSlug;
                    slugs: import("../../../../ctx/assets/api.js").TAssetSlug[];
                    source: string;
                    text: string;
                    watchlistId: number;
                    watchlistSlug: string;
                }> | null;
                pane?: number;
                visible?: boolean;
                color: string;
                style: TMetricStyles;
                unit?: TMetricUnit;
                scaleId?: string;
                scaleVisible?: boolean;
                isSelectorLocked?: boolean;
                isFilledGradient?: boolean;
                candleDownColor?: string;
                baseline?: TChartMetric["baseline"];
            }[];
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
                    id: TUUIDv7;
                } | undefined;
            }[];
            export(): {
                type: TMetricTypes;
                apiMetricName?: string;
                id: TUUIDv7;
                formula?: TMetricFormula;
                distribution?: TCombinedDistributionSeries["distribution"];
                version?: string;
                interval?: TInterval;
                selector?: null | TMetricTargetSelectorInputObject;
                pane?: number;
                visible?: boolean;
                color: string;
                style: TMetricStyles;
                unit?: TMetricUnit;
                scaleId?: string;
                scaleVisible?: boolean;
                isSelectorLocked?: boolean;
                isFilledGradient?: boolean;
                candleDownColor?: string;
                baseline?: TChartMetric["baseline"];
            }[];
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
