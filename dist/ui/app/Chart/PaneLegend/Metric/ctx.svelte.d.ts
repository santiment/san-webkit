import type { TSeries } from '../../ctx/series.svelte.js';
export declare const useMetricInfoCtx: ((getOpenedMetric: () => null | TSeries, onMetricInfoClick: (metric: TSeries, targetElement?: HTMLElement) => void) => {
    onMetricInfoClick: (metric: TSeries, targetElement?: HTMLElement) => void;
    openedMetric: {
        readonly $: {
            id: number;
            apiMetricName: string;
            label: string;
            type: {
                $: "line" | "histogram";
            };
            data: {
                $: import("../../api/index.js").TMetricData;
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
            transform: import("../../api/index.js").TTimeseriesMetricTransformInputObject | undefined;
            transformData: ((data: import("../../api/index.js").TMetricData) => import("../../api/index.js").TMetricData) | undefined;
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
            chartSeriesApi: null | import("@santiment-network/chart-next").ISeriesApi<any>;
            formula: {
                expr: string;
            } | undefined;
        } | null;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        onMetricInfoClick: (metric: TSeries, targetElement?: HTMLElement) => void;
        openedMetric: {
            readonly $: {
                id: number;
                apiMetricName: string;
                label: string;
                type: {
                    $: "line" | "histogram";
                };
                data: {
                    $: import("../../api/index.js").TMetricData;
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
                transform: import("../../api/index.js").TTimeseriesMetricTransformInputObject | undefined;
                transformData: ((data: import("../../api/index.js").TMetricData) => import("../../api/index.js").TMetricData) | undefined;
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
                chartSeriesApi: null | import("@santiment-network/chart-next").ISeriesApi<any>;
                formula: {
                    expr: string;
                } | undefined;
            } | null;
        };
    };
    set: (getOpenedMetric: () => null | TSeries, onMetricInfoClick: (metric: TSeries, targetElement?: HTMLElement) => void) => {
        onMetricInfoClick: (metric: TSeries, targetElement?: HTMLElement) => void;
        openedMetric: {
            readonly $: {
                id: number;
                apiMetricName: string;
                label: string;
                type: {
                    $: "line" | "histogram";
                };
                data: {
                    $: import("../../api/index.js").TMetricData;
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
                transform: import("../../api/index.js").TTimeseriesMetricTransformInputObject | undefined;
                transformData: ((data: import("../../api/index.js").TMetricData) => import("../../api/index.js").TMetricData) | undefined;
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
                chartSeriesApi: null | import("@santiment-network/chart-next").ISeriesApi<any>;
                formula: {
                    expr: string;
                } | undefined;
            } | null;
        };
    };
};
