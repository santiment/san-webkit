import type { ISeriesApi } from '@santiment-network/chart-next';
import type { TMetricData, TMetricTargetSelectorInputObject, TTimeseriesMetricTransformInputObject } from '../api/index.js';
import { type SS } from '../../../../utils/index.js';
type TMetricSelector = null | TMetricTargetSelectorInputObject;
export type TMetric = {
    name: string;
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
};
export declare function createSeries({ name, label, selector, scaleId, style, color, pane, visible, scaleMargins, scaleInverted, transform, transformData, tooltipFormatter, scaleFormatter, formula, }: TMetric & {
    selector?: TMetricSelector | SS<TMetricSelector>;
    formula?: {
        expr: string;
    };
}): {
    id: number;
    apiMetricName: string;
    label: string;
    type: {
        $: "line" | "histogram";
    };
    data: {
        $: TMetricData;
    };
    color: {
        $: string;
    };
    visible: {
        $: boolean;
    };
    loading: {
        $: boolean;
    };
    error: {
        $: null;
    };
    pane: {
        $: number | undefined;
    };
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
    selector: {
        $: Partial<{
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
    };
    chartSeriesApi: null | ISeriesApi<any>;
    formula: {
        expr: string;
    } | undefined;
};
export type TSeries = ReturnType<typeof createSeries>;
export declare const useMetricSeriesCtx: ((defaultMetrics?: TMetric[]) => {
    metricSeries: {
        readonly $: {
            id: number;
            apiMetricName: string;
            label: string;
            type: {
                $: "line" | "histogram";
            };
            data: {
                $: TMetricData;
            };
            color: {
                $: string;
            };
            visible: {
                $: boolean;
            };
            loading: {
                $: boolean;
            };
            error: {
                $: null;
            };
            pane: {
                $: number | undefined;
            };
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
            selector: {
                $: Partial<{
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
            };
            chartSeriesApi: null | ISeriesApi<any>;
            formula: {
                expr: string;
            } | undefined;
        }[];
        readonly asScope$: {
            name: string;
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
            formula: {
                expr: string;
            } | undefined;
        }[];
        add(metric: TMetric): void;
        delete(metricSeries: TSeries): void;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        metricSeries: {
            readonly $: {
                id: number;
                apiMetricName: string;
                label: string;
                type: {
                    $: "line" | "histogram";
                };
                data: {
                    $: TMetricData;
                };
                color: {
                    $: string;
                };
                visible: {
                    $: boolean;
                };
                loading: {
                    $: boolean;
                };
                error: {
                    $: null;
                };
                pane: {
                    $: number | undefined;
                };
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
                selector: {
                    $: Partial<{
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
                };
                chartSeriesApi: null | ISeriesApi<any>;
                formula: {
                    expr: string;
                } | undefined;
            }[];
            readonly asScope$: {
                name: string;
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
                formula: {
                    expr: string;
                } | undefined;
            }[];
            add(metric: TMetric): void;
            delete(metricSeries: TSeries): void;
        };
    };
    set: (defaultMetrics?: TMetric[]) => {
        metricSeries: {
            readonly $: {
                id: number;
                apiMetricName: string;
                label: string;
                type: {
                    $: "line" | "histogram";
                };
                data: {
                    $: TMetricData;
                };
                color: {
                    $: string;
                };
                visible: {
                    $: boolean;
                };
                loading: {
                    $: boolean;
                };
                error: {
                    $: null;
                };
                pane: {
                    $: number | undefined;
                };
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
                selector: {
                    $: Partial<{
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
                };
                chartSeriesApi: null | ISeriesApi<any>;
                formula: {
                    expr: string;
                } | undefined;
            }[];
            readonly asScope$: {
                name: string;
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
                formula: {
                    expr: string;
                } | undefined;
            }[];
            add(metric: TMetric): void;
            delete(metricSeries: TSeries): void;
        };
    };
};
export {};
