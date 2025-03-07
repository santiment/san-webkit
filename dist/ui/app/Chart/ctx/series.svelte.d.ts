import type { ISeriesApi } from '@santiment-network/chart-next';
import type { TMetricData, TMetricTargetSelectorInputObject, TTimeseriesMetricTransformInputObject } from '../api/index.js';
export type TMetric = {
    name: string;
    label?: string;
    style: 'line' | 'histogram';
    color?: string;
    visible?: boolean;
    selector?: null | TMetricTargetSelectorInputObject;
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
};
export declare function createSeries({ name, label, selector, scaleId, style, color, pane, visible, scaleMargins, scaleInverted, transform, transformData, tooltipFormatter, scaleFormatter, }: TMetric): {
    id: number;
    apiMetricName: string;
    label: string;
    type: import("svelte-runes").SS<"line" | "histogram">;
    data: import("svelte-runes").SS<TMetricData>;
    color: import("svelte-runes").SS<string>;
    visible: import("svelte-runes").SS<boolean>;
    loading: import("svelte-runes").SS<boolean>;
    error: import("svelte-runes").SS<null>;
    pane: import("svelte-runes").SS<number>;
    transform: TTimeseriesMetricTransformInputObject | undefined;
    transformData: ((data: TMetricData) => TMetricData) | undefined;
    tooltipFormatter: (value: any) => number | string;
    scaleFormatter: ((value: number) => string) | undefined;
    scale: {
        readonly $$: {
            id: string;
            visible: boolean;
            inverted: boolean;
            scaleMargins: {
                top: number;
                bottom: number;
            } | undefined;
        };
    };
    selector: import("svelte-runes").SS<Partial<{
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
        slug: import("../../../../ctx/assets/index.svelte.js").TAssetSlug;
        slugs: import("../../../../ctx/assets/index.svelte.js").TAssetSlug[];
        source: string;
        text: string;
        watchlistId: number;
        watchlistSlug: string;
    }> | null>;
    chartSeriesApi: null | ISeriesApi<any>;
};
export type TSeries = ReturnType<typeof createSeries>;
export declare const useMetricSeriesCtx: {
    (defaultMetrics?: TMetric[] | undefined): {
        metricSeries: {
            readonly $: {
                id: number;
                apiMetricName: string;
                label: string;
                type: import("svelte-runes").SS<"line" | "histogram">;
                data: import("svelte-runes").SS<TMetricData>;
                color: import("svelte-runes").SS<string>;
                visible: import("svelte-runes").SS<boolean>;
                loading: import("svelte-runes").SS<boolean>;
                error: import("svelte-runes").SS<null>;
                pane: import("svelte-runes").SS<number>;
                transform: TTimeseriesMetricTransformInputObject | undefined;
                transformData: ((data: TMetricData) => TMetricData) | undefined;
                tooltipFormatter: (value: any) => number | string;
                scaleFormatter: ((value: number) => string) | undefined;
                scale: {
                    readonly $$: {
                        id: string;
                        visible: boolean;
                        inverted: boolean;
                        scaleMargins: {
                            top: number;
                            bottom: number;
                        } | undefined;
                    };
                };
                selector: import("svelte-runes").SS<Partial<{
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
                    slug: import("../../../../ctx/assets/index.svelte.js").TAssetSlug;
                    slugs: import("../../../../ctx/assets/index.svelte.js").TAssetSlug[];
                    source: string;
                    text: string;
                    watchlistId: number;
                    watchlistSlug: string;
                }> | null>;
                chartSeriesApi: null | ISeriesApi<any>;
            }[];
            add(metric: TMetric): void;
            delete(metricSeries: TSeries): void;
        };
    };
    get(allCtxs?: Map<string, any>): {
        metricSeries: {
            readonly $: {
                id: number;
                apiMetricName: string;
                label: string;
                type: import("svelte-runes").SS<"line" | "histogram">;
                data: import("svelte-runes").SS<TMetricData>;
                color: import("svelte-runes").SS<string>;
                visible: import("svelte-runes").SS<boolean>;
                loading: import("svelte-runes").SS<boolean>;
                error: import("svelte-runes").SS<null>;
                pane: import("svelte-runes").SS<number>;
                transform: TTimeseriesMetricTransformInputObject | undefined;
                transformData: ((data: TMetricData) => TMetricData) | undefined;
                tooltipFormatter: (value: any) => number | string;
                scaleFormatter: ((value: number) => string) | undefined;
                scale: {
                    readonly $$: {
                        id: string;
                        visible: boolean;
                        inverted: boolean;
                        scaleMargins: {
                            top: number;
                            bottom: number;
                        } | undefined;
                    };
                };
                selector: import("svelte-runes").SS<Partial<{
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
                    slug: import("../../../../ctx/assets/index.svelte.js").TAssetSlug;
                    slugs: import("../../../../ctx/assets/index.svelte.js").TAssetSlug[];
                    source: string;
                    text: string;
                    watchlistId: number;
                    watchlistSlug: string;
                }> | null>;
                chartSeriesApi: null | ISeriesApi<any>;
            }[];
            add(metric: TMetric): void;
            delete(metricSeries: TSeries): void;
        };
    };
    set(defaultMetrics?: TMetric[] | undefined): {
        metricSeries: {
            readonly $: {
                id: number;
                apiMetricName: string;
                label: string;
                type: import("svelte-runes").SS<"line" | "histogram">;
                data: import("svelte-runes").SS<TMetricData>;
                color: import("svelte-runes").SS<string>;
                visible: import("svelte-runes").SS<boolean>;
                loading: import("svelte-runes").SS<boolean>;
                error: import("svelte-runes").SS<null>;
                pane: import("svelte-runes").SS<number>;
                transform: TTimeseriesMetricTransformInputObject | undefined;
                transformData: ((data: TMetricData) => TMetricData) | undefined;
                tooltipFormatter: (value: any) => number | string;
                scaleFormatter: ((value: number) => string) | undefined;
                scale: {
                    readonly $$: {
                        id: string;
                        visible: boolean;
                        inverted: boolean;
                        scaleMargins: {
                            top: number;
                            bottom: number;
                        } | undefined;
                    };
                };
                selector: import("svelte-runes").SS<Partial<{
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
                    slug: import("../../../../ctx/assets/index.svelte.js").TAssetSlug;
                    slugs: import("../../../../ctx/assets/index.svelte.js").TAssetSlug[];
                    source: string;
                    text: string;
                    watchlistId: number;
                    watchlistSlug: string;
                }> | null>;
                chartSeriesApi: null | ISeriesApi<any>;
            }[];
            add(metric: TMetric): void;
            delete(metricSeries: TSeries): void;
        };
    };
};
