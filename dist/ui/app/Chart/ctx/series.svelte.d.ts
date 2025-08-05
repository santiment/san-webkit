import type { ISeriesApi } from '@santiment-network/chart-next';
import type { TMetricData, TMetricTargetSelectorInputObject, TTimeseriesMetricTransformInputObject } from '../api/index.js';
import type { TUUIDv4 } from '../../../../utils/uuid/index.js';
import { type SS } from '../../../../utils/index.js';
export type TMetricSelector = null | TMetricTargetSelectorInputObject;
export type TMetricFormula = {
    expr: string;
    name: string;
    id: TUUIDv4;
};
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
    meta?: Record<string, any>;
};
export type TChartMetric = TMetric & {
    selector?: TMetricSelector | SS<TMetricSelector>;
    formula?: undefined | TMetricFormula | SS<undefined | TMetricFormula>;
    meta?: Record<string, any>;
};
export declare function createSeries({ name, label, selector, scaleId, style, color, pane, visible, scaleMargins, scaleInverted, transform, transformData, tooltipFormatter, scaleFormatter, formula, meta, }: TChartMetric): {
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
        readonly $: number | undefined;
        update$(): void;
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
        $: TMetricFormula | undefined;
    };
    meta: Record<string, any> | undefined;
};
export type TSeries = ReturnType<typeof createSeries>;
export declare const useMetricSeriesCtx: ((defaultMetrics?: TChartMetric[]) => {
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
                readonly $: number | undefined;
                update$(): void;
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
                $: TMetricFormula | undefined;
            };
            meta: Record<string, any> | undefined;
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
                name: string;
                id: TUUIDv4;
            } | undefined;
        }[];
        add(metric: TChartMetric): TSeries;
        addSeries(metricSeries: TSeries): number;
        delete(index: number): void;
        deleteSeries(metricSeries: TSeries): void;
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
                    readonly $: number | undefined;
                    update$(): void;
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
                    $: TMetricFormula | undefined;
                };
                meta: Record<string, any> | undefined;
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
                    name: string;
                    id: TUUIDv4;
                } | undefined;
            }[];
            add(metric: TChartMetric): TSeries;
            addSeries(metricSeries: TSeries): number;
            delete(index: number): void;
            deleteSeries(metricSeries: TSeries): void;
        };
    };
    set: (defaultMetrics?: TChartMetric[]) => {
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
                    readonly $: number | undefined;
                    update$(): void;
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
                    $: TMetricFormula | undefined;
                };
                meta: Record<string, any> | undefined;
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
                    name: string;
                    id: TUUIDv4;
                } | undefined;
            }[];
            add(metric: TChartMetric): TSeries;
            addSeries(metricSeries: TSeries): number;
            delete(index: number): void;
            deleteSeries(metricSeries: TSeries): void;
        };
    };
};
