import type { MouseEventParams } from '@santiment-network/chart-next';
export declare const usePanesTooltip: {
    (): {
        paneSet: {
            readonly $: Record<number, Set<{
                id: number;
                apiMetricName: string;
                label: string;
                type: import("svelte-runes").SS<"line" | "histogram">;
                data: import("svelte-runes").SS<import("../api/index.js").TMetricData>;
                color: import("svelte-runes").SS<string>;
                visible: import("svelte-runes").SS<boolean>;
                loading: import("svelte-runes").SS<boolean>;
                error: import("svelte-runes").SS<null>;
                pane: import("svelte-runes").SS<number>;
                transform: import("../api/index.js").TTimeseriesMetricTransformInputObject | undefined;
                transformData: ((data: import("../api/index.js").TMetricData) => import("../api/index.js").TMetricData) | undefined;
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
                chartSeriesApi: null | import("@santiment-network/chart-next").ISeriesApi<any>;
            }>>;
        };
        panes: {
            readonly $: import("@santiment-network/chart-next").IPaneApi<import("@santiment-network/chart-next").Time>[];
        };
        hoverPoint: {
            readonly $: {
                datetime: number;
                seriesData: MouseEventParams["seriesData"];
            } | null;
        };
    };
    get(allCtxs?: Map<string, any>): {
        paneSet: {
            readonly $: Record<number, Set<{
                id: number;
                apiMetricName: string;
                label: string;
                type: import("svelte-runes").SS<"line" | "histogram">;
                data: import("svelte-runes").SS<import("../api/index.js").TMetricData>;
                color: import("svelte-runes").SS<string>;
                visible: import("svelte-runes").SS<boolean>;
                loading: import("svelte-runes").SS<boolean>;
                error: import("svelte-runes").SS<null>;
                pane: import("svelte-runes").SS<number>;
                transform: import("../api/index.js").TTimeseriesMetricTransformInputObject | undefined;
                transformData: ((data: import("../api/index.js").TMetricData) => import("../api/index.js").TMetricData) | undefined;
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
                chartSeriesApi: null | import("@santiment-network/chart-next").ISeriesApi<any>;
            }>>;
        };
        panes: {
            readonly $: import("@santiment-network/chart-next").IPaneApi<import("@santiment-network/chart-next").Time>[];
        };
        hoverPoint: {
            readonly $: {
                datetime: number;
                seriesData: MouseEventParams["seriesData"];
            } | null;
        };
    };
    set(): {
        paneSet: {
            readonly $: Record<number, Set<{
                id: number;
                apiMetricName: string;
                label: string;
                type: import("svelte-runes").SS<"line" | "histogram">;
                data: import("svelte-runes").SS<import("../api/index.js").TMetricData>;
                color: import("svelte-runes").SS<string>;
                visible: import("svelte-runes").SS<boolean>;
                loading: import("svelte-runes").SS<boolean>;
                error: import("svelte-runes").SS<null>;
                pane: import("svelte-runes").SS<number>;
                transform: import("../api/index.js").TTimeseriesMetricTransformInputObject | undefined;
                transformData: ((data: import("../api/index.js").TMetricData) => import("../api/index.js").TMetricData) | undefined;
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
                chartSeriesApi: null | import("@santiment-network/chart-next").ISeriesApi<any>;
            }>>;
        };
        panes: {
            readonly $: import("@santiment-network/chart-next").IPaneApi<import("@santiment-network/chart-next").Time>[];
        };
        hoverPoint: {
            readonly $: {
                datetime: number;
                seriesData: MouseEventParams["seriesData"];
            } | null;
        };
    };
};
