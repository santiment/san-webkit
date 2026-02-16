import type { TSeries } from '../../ctx/series.svelte.js';
export declare const useMetricInfoCtx: ((getOpenedMetric: () => null | TSeries, onMetricInfoClick: (metric: TSeries, targetElement?: HTMLElement) => void) => {
    onMetricInfoClick: (metric: TSeries, targetElement?: HTMLElement) => void;
    openedMetric: {
        readonly $: {
            id: import("../../../../../utils/uuid/index.js").TUUIDv4;
            type: "asset_metric" | "traditional_finance_metric" | "formulas_metric";
            apiMetricName: string;
            label: string;
            getLabels$: (metricSeries: import("../../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => import("../../../../../ctx/metrics-registry/types/index.js").TLabels;
            getSelectorLabels$: (metricSeries: import("../../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => import("../../../../../ctx/metrics-registry/types/index.js").TLabels;
            version: {
                $: string | undefined;
            };
            data: {
                $: import("../../api/index.js").TMetricData;
            };
            visible: {
                $: boolean;
            };
            loading: {
                $: boolean;
            };
            error: {
                $: string | string[] | Error | Error[] | null;
            };
            aggregation: {
                $: import("../../api/index.js").TAggregation;
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
                    address: import("../../api/index.js").TAddress;
                    blockchain: string;
                    blockchainAddress: import("../../api/index.js").TBlockchainAddressSelectorInputObject;
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
                    slug: import("../../../../../ctx/assets/api.js").TAssetSlug;
                    slugs: import("../../../../../ctx/assets/api.js").TAssetSlug[];
                    source: string;
                    text: string;
                    watchlistId: number;
                    watchlistSlug: string;
                }> | null;
            };
            formula: {
                $: import("../../../../../ctx/metrics-registry/types/index.js").TMetricFormula;
            } | undefined;
            ui: {
                readonly $$: {
                    color: string;
                    style: import("../../../../../ctx/metrics-registry/types/index.js").TMetricStyles;
                    isSelectorLocked: boolean;
                    isFilledGradient: boolean;
                    tooltipFormatter: (value: any) => number | string;
                    scaleFormatter: ((value: number) => string) | undefined;
                    candleDownColor: string | undefined;
                    baseline: {
                        value: number;
                        topColor: string;
                        bottomColor: string;
                    } | undefined;
                    signal: {
                        shape: "circle" | "square" | "arrowUp" | "arrowDown";
                        text?: string;
                        isZeroIncluded?: boolean;
                        position: "aboveBar" | "belowBar" | "atPriceTop" | "atPriceBottom";
                    } | undefined;
                };
            };
            chartSeriesApi: null | import("@santiment-network/chart-next").ISeriesApi<any>;
            transformData: ((data: import("../../api/index.js").TMetricData) => import("../../api/index.js").TMetricData) | undefined;
            meta: Record<string, any> | undefined;
        } | null;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        onMetricInfoClick: (metric: TSeries, targetElement?: HTMLElement) => void;
        openedMetric: {
            readonly $: {
                id: import("../../../../../utils/uuid/index.js").TUUIDv4;
                type: "asset_metric" | "traditional_finance_metric" | "formulas_metric";
                apiMetricName: string;
                label: string;
                getLabels$: (metricSeries: import("../../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => import("../../../../../ctx/metrics-registry/types/index.js").TLabels;
                getSelectorLabels$: (metricSeries: import("../../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => import("../../../../../ctx/metrics-registry/types/index.js").TLabels;
                version: {
                    $: string | undefined;
                };
                data: {
                    $: import("../../api/index.js").TMetricData;
                };
                visible: {
                    $: boolean;
                };
                loading: {
                    $: boolean;
                };
                error: {
                    $: string | string[] | Error | Error[] | null;
                };
                aggregation: {
                    $: import("../../api/index.js").TAggregation;
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
                        address: import("../../api/index.js").TAddress;
                        blockchain: string;
                        blockchainAddress: import("../../api/index.js").TBlockchainAddressSelectorInputObject;
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
                        slug: import("../../../../../ctx/assets/api.js").TAssetSlug;
                        slugs: import("../../../../../ctx/assets/api.js").TAssetSlug[];
                        source: string;
                        text: string;
                        watchlistId: number;
                        watchlistSlug: string;
                    }> | null;
                };
                formula: {
                    $: import("../../../../../ctx/metrics-registry/types/index.js").TMetricFormula;
                } | undefined;
                ui: {
                    readonly $$: {
                        color: string;
                        style: import("../../../../../ctx/metrics-registry/types/index.js").TMetricStyles;
                        isSelectorLocked: boolean;
                        isFilledGradient: boolean;
                        tooltipFormatter: (value: any) => number | string;
                        scaleFormatter: ((value: number) => string) | undefined;
                        candleDownColor: string | undefined;
                        baseline: {
                            value: number;
                            topColor: string;
                            bottomColor: string;
                        } | undefined;
                        signal: {
                            shape: "circle" | "square" | "arrowUp" | "arrowDown";
                            text?: string;
                            isZeroIncluded?: boolean;
                            position: "aboveBar" | "belowBar" | "atPriceTop" | "atPriceBottom";
                        } | undefined;
                    };
                };
                chartSeriesApi: null | import("@santiment-network/chart-next").ISeriesApi<any>;
                transformData: ((data: import("../../api/index.js").TMetricData) => import("../../api/index.js").TMetricData) | undefined;
                meta: Record<string, any> | undefined;
            } | null;
        };
    };
    set: (getOpenedMetric: () => null | TSeries, onMetricInfoClick: (metric: TSeries, targetElement?: HTMLElement) => void) => {
        onMetricInfoClick: (metric: TSeries, targetElement?: HTMLElement) => void;
        openedMetric: {
            readonly $: {
                id: import("../../../../../utils/uuid/index.js").TUUIDv4;
                type: "asset_metric" | "traditional_finance_metric" | "formulas_metric";
                apiMetricName: string;
                label: string;
                getLabels$: (metricSeries: import("../../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => import("../../../../../ctx/metrics-registry/types/index.js").TLabels;
                getSelectorLabels$: (metricSeries: import("../../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => import("../../../../../ctx/metrics-registry/types/index.js").TLabels;
                version: {
                    $: string | undefined;
                };
                data: {
                    $: import("../../api/index.js").TMetricData;
                };
                visible: {
                    $: boolean;
                };
                loading: {
                    $: boolean;
                };
                error: {
                    $: string | string[] | Error | Error[] | null;
                };
                aggregation: {
                    $: import("../../api/index.js").TAggregation;
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
                        address: import("../../api/index.js").TAddress;
                        blockchain: string;
                        blockchainAddress: import("../../api/index.js").TBlockchainAddressSelectorInputObject;
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
                        slug: import("../../../../../ctx/assets/api.js").TAssetSlug;
                        slugs: import("../../../../../ctx/assets/api.js").TAssetSlug[];
                        source: string;
                        text: string;
                        watchlistId: number;
                        watchlistSlug: string;
                    }> | null;
                };
                formula: {
                    $: import("../../../../../ctx/metrics-registry/types/index.js").TMetricFormula;
                } | undefined;
                ui: {
                    readonly $$: {
                        color: string;
                        style: import("../../../../../ctx/metrics-registry/types/index.js").TMetricStyles;
                        isSelectorLocked: boolean;
                        isFilledGradient: boolean;
                        tooltipFormatter: (value: any) => number | string;
                        scaleFormatter: ((value: number) => string) | undefined;
                        candleDownColor: string | undefined;
                        baseline: {
                            value: number;
                            topColor: string;
                            bottomColor: string;
                        } | undefined;
                        signal: {
                            shape: "circle" | "square" | "arrowUp" | "arrowDown";
                            text?: string;
                            isZeroIncluded?: boolean;
                            position: "aboveBar" | "belowBar" | "atPriceTop" | "atPriceBottom";
                        } | undefined;
                    };
                };
                chartSeriesApi: null | import("@santiment-network/chart-next").ISeriesApi<any>;
                transformData: ((data: import("../../api/index.js").TMetricData) => import("../../api/index.js").TMetricData) | undefined;
                meta: Record<string, any> | undefined;
            } | null;
        };
    };
    __CTX: "chart_useMetricInfoCtx";
};
