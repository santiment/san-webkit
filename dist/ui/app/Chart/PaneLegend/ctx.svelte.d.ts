import type { TPane } from '../ctx/panes.svelte.js';
export declare const usePanesTooltip: (() => {
    paneIndexSeries: {
        readonly $: Map<TPane, [number, ...{
            id: import("../../../../utils/uuid/index.js").TUUIDv4;
            type: "asset_metric" | "traditional_finance_metric" | "formulas_metric";
            apiMetricName: string;
            label: string;
            getLabels$: (metricSeries: import("../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => import("../../../../ctx/metrics-registry/types/index.js").TLabels;
            getSelectorLabels$: (metricSeries: import("../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => import("../../../../ctx/metrics-registry/types/index.js").TLabels;
            data: {
                $: import("../api/index.js").TMetricData;
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
            aggregation: {
                $: import("../api/index.js").TAggregation;
            };
            pane: {
                readonly $: number | undefined;
                update$(): void;
            };
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
            interval: {
                $: `${number}y` | `${number}h` | `${number}m` | `${number}d` | undefined;
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
            formula: {
                $: import("../../../../ctx/metrics-registry/types/index.js").TMetricFormula;
            } | undefined;
            ui: {
                readonly $$: {
                    color: string;
                    style: import("../../../../ctx/metrics-registry/types/index.js").TMetricStyles;
                    isSelectorLocked: boolean;
                    isFilledGradient: boolean;
                    tooltipFormatter: (value: any) => number | string;
                    scaleFormatter: ((value: number) => string) | undefined;
                    candleDownColor: string | undefined;
                    baseline: {
                        value: 0;
                        topColor: string;
                        bottomColor: string;
                    } | undefined;
                };
            };
            chartSeriesApi: null | import("@santiment-network/chart-next").ISeriesApi<any>;
            transformData: ((data: import("../api/index.js").TMetricData) => import("../api/index.js").TMetricData) | undefined;
            meta: Record<string, any> | undefined;
        }[]]>;
    };
    hoverPoint: {
        readonly $: {
            datetime: number;
            index: number;
        } | null;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        paneIndexSeries: {
            readonly $: Map<TPane, [number, ...{
                id: import("../../../../utils/uuid/index.js").TUUIDv4;
                type: "asset_metric" | "traditional_finance_metric" | "formulas_metric";
                apiMetricName: string;
                label: string;
                getLabels$: (metricSeries: import("../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => import("../../../../ctx/metrics-registry/types/index.js").TLabels;
                getSelectorLabels$: (metricSeries: import("../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => import("../../../../ctx/metrics-registry/types/index.js").TLabels;
                data: {
                    $: import("../api/index.js").TMetricData;
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
                aggregation: {
                    $: import("../api/index.js").TAggregation;
                };
                pane: {
                    readonly $: number | undefined;
                    update$(): void;
                };
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
                interval: {
                    $: `${number}y` | `${number}h` | `${number}m` | `${number}d` | undefined;
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
                formula: {
                    $: import("../../../../ctx/metrics-registry/types/index.js").TMetricFormula;
                } | undefined;
                ui: {
                    readonly $$: {
                        color: string;
                        style: import("../../../../ctx/metrics-registry/types/index.js").TMetricStyles;
                        isSelectorLocked: boolean;
                        isFilledGradient: boolean;
                        tooltipFormatter: (value: any) => number | string;
                        scaleFormatter: ((value: number) => string) | undefined;
                        candleDownColor: string | undefined;
                        baseline: {
                            value: 0;
                            topColor: string;
                            bottomColor: string;
                        } | undefined;
                    };
                };
                chartSeriesApi: null | import("@santiment-network/chart-next").ISeriesApi<any>;
                transformData: ((data: import("../api/index.js").TMetricData) => import("../api/index.js").TMetricData) | undefined;
                meta: Record<string, any> | undefined;
            }[]]>;
        };
        hoverPoint: {
            readonly $: {
                datetime: number;
                index: number;
            } | null;
        };
    };
    set: () => {
        paneIndexSeries: {
            readonly $: Map<TPane, [number, ...{
                id: import("../../../../utils/uuid/index.js").TUUIDv4;
                type: "asset_metric" | "traditional_finance_metric" | "formulas_metric";
                apiMetricName: string;
                label: string;
                getLabels$: (metricSeries: import("../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => import("../../../../ctx/metrics-registry/types/index.js").TLabels;
                getSelectorLabels$: (metricSeries: import("../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => import("../../../../ctx/metrics-registry/types/index.js").TLabels;
                data: {
                    $: import("../api/index.js").TMetricData;
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
                aggregation: {
                    $: import("../api/index.js").TAggregation;
                };
                pane: {
                    readonly $: number | undefined;
                    update$(): void;
                };
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
                interval: {
                    $: `${number}y` | `${number}h` | `${number}m` | `${number}d` | undefined;
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
                formula: {
                    $: import("../../../../ctx/metrics-registry/types/index.js").TMetricFormula;
                } | undefined;
                ui: {
                    readonly $$: {
                        color: string;
                        style: import("../../../../ctx/metrics-registry/types/index.js").TMetricStyles;
                        isSelectorLocked: boolean;
                        isFilledGradient: boolean;
                        tooltipFormatter: (value: any) => number | string;
                        scaleFormatter: ((value: number) => string) | undefined;
                        candleDownColor: string | undefined;
                        baseline: {
                            value: 0;
                            topColor: string;
                            bottomColor: string;
                        } | undefined;
                    };
                };
                chartSeriesApi: null | import("@santiment-network/chart-next").ISeriesApi<any>;
                transformData: ((data: import("../api/index.js").TMetricData) => import("../api/index.js").TMetricData) | undefined;
                meta: Record<string, any> | undefined;
            }[]]>;
        };
        hoverPoint: {
            readonly $: {
                datetime: number;
                index: number;
            } | null;
        };
    };
};
export declare const useShiftModeStartPoint: (() => {
    startPointIndex: {
        $: number | null;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        startPointIndex: {
            $: number | null;
        };
    };
    set: () => {
        startPointIndex: {
            $: number | null;
        };
    };
};
