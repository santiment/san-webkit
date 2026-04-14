import type { ISeriesApi } from '@santiment-network/chart-next';
import type { TAggregation, TMetricData } from '../api/index.js';
import { type TChartMetric, type TLabels } from '../../../../ctx/metrics-registry/types/index.js';
import { DEFAULT_FORMATTER, DEFAULT_Y_FORMATTER } from '../../../../utils/formatters/index.js';
export declare function createSeries({ type, apiMetricName, label, data, getLabels$, getSelectorLabels$, selector, interval, pane, unit, style, color, visible, scaleId, scaleMargins, scaleInverted, scaleVisible, isSelectorLocked, isFilledGradient, transformData, meta, ...rest }: TChartMetric): {
    id: import("../../../../utils/uuid/index.js").TUUIDv7;
    type: "asset_metric" | "traditional_finance_metric" | "formulas_metric" | "data_store_metric";
    apiMetricName: string;
    label: string;
    getLabels$: (metricSeries: import("../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => TLabels;
    getSelectorLabels$: (metricSeries: import("../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => TLabels;
    version: {
        $: string | undefined;
    };
    data: {
        $: TMetricData;
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
    warnings: {
        $: string[] | null;
    };
    aggregation: {
        $: TAggregation;
    };
    pane: {
        readonly $: number | undefined;
        update$(): void;
    };
    formatters: {
        readonly $: {
            tooltipFormatter: typeof DEFAULT_FORMATTER;
            scaleFormatter: typeof DEFAULT_Y_FORMATTER;
        };
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
            unit: import("../../../../ctx/metrics-registry/api.js").TMetricUnit | undefined;
            isSelectorLocked: boolean;
            isFilledGradient: boolean;
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
    chartSeriesApi: null | ISeriesApi<any>;
    transformData: ((data: TMetricData) => TMetricData) | undefined;
    meta: Partial<{
        args: Partial<{
            [x: string]: unknown;
            selector: import("../../../../ctx/metrics-registry/types/index.js").TMetricSelector;
        }>;
        isNew: boolean;
        displayOrder: number;
        settingsSchema?: import("../../../../ctx/metrics-registry/settings-schema.js").TSettingsSchema;
    }> | undefined;
    toApiSchema$(): {
        type: "asset_metric" | "traditional_finance_metric" | "formulas_metric" | "data_store_metric";
        apiMetricName: string;
        id: import("../../../../utils/uuid/index.js").TUUIDv7;
        formula: import("../../../../ctx/metrics-registry/types/index.js").TMetricFormula | undefined;
        version: string | undefined;
        interval: `${number}y` | `${number}h` | `${number}m` | `${number}d` | undefined;
        selector: Partial<{
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
        pane: number | undefined;
        visible: boolean;
        color: string;
        style: import("../../../../ctx/metrics-registry/types/index.js").TMetricStyles;
        unit: import("../../../../ctx/metrics-registry/api.js").TMetricUnit | undefined;
        scaleId: string;
        scaleVisible: boolean;
        isSelectorLocked: boolean;
        isFilledGradient: boolean;
        candleDownColor: string | undefined;
        baseline: {
            value: number;
            topColor: string;
            bottomColor: string;
        } | undefined;
    };
};
export type TSeries = ReturnType<typeof createSeries>;
export declare const useMetricSeriesCtx: ((defaultMetrics?: TChartMetric[]) => {
    metricSeries: {
        readonly $: {
            id: import("../../../../utils/uuid/index.js").TUUIDv7;
            type: "asset_metric" | "traditional_finance_metric" | "formulas_metric" | "data_store_metric";
            apiMetricName: string;
            label: string;
            getLabels$: (metricSeries: import("../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => TLabels;
            getSelectorLabels$: (metricSeries: import("../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => TLabels;
            version: {
                $: string | undefined;
            };
            data: {
                $: TMetricData;
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
            warnings: {
                $: string[] | null;
            };
            aggregation: {
                $: TAggregation;
            };
            pane: {
                readonly $: number | undefined;
                update$(): void;
            };
            formatters: {
                readonly $: {
                    tooltipFormatter: typeof DEFAULT_FORMATTER;
                    scaleFormatter: typeof DEFAULT_Y_FORMATTER;
                };
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
                    unit: import("../../../../ctx/metrics-registry/api.js").TMetricUnit | undefined;
                    isSelectorLocked: boolean;
                    isFilledGradient: boolean;
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
            chartSeriesApi: null | ISeriesApi<any>;
            transformData: ((data: TMetricData) => TMetricData) | undefined;
            meta: Partial<{
                args: Partial<{
                    [x: string]: unknown;
                    selector: import("../../../../ctx/metrics-registry/types/index.js").TMetricSelector;
                }>;
                isNew: boolean;
                displayOrder: number;
                settingsSchema?: import("../../../../ctx/metrics-registry/settings-schema.js").TSettingsSchema;
            }> | undefined;
            toApiSchema$(): {
                type: "asset_metric" | "traditional_finance_metric" | "formulas_metric" | "data_store_metric";
                apiMetricName: string;
                id: import("../../../../utils/uuid/index.js").TUUIDv7;
                formula: import("../../../../ctx/metrics-registry/types/index.js").TMetricFormula | undefined;
                version: string | undefined;
                interval: `${number}y` | `${number}h` | `${number}m` | `${number}d` | undefined;
                selector: Partial<{
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
                pane: number | undefined;
                visible: boolean;
                color: string;
                style: import("../../../../ctx/metrics-registry/types/index.js").TMetricStyles;
                unit: import("../../../../ctx/metrics-registry/api.js").TMetricUnit | undefined;
                scaleId: string;
                scaleVisible: boolean;
                isSelectorLocked: boolean;
                isFilledGradient: boolean;
                candleDownColor: string | undefined;
                baseline: {
                    value: number;
                    topColor: string;
                    bottomColor: string;
                } | undefined;
            };
        }[];
        readonly asScope$: {
            name: string;
            aggregation: TAggregation;
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
        add(metric: TChartMetric): TSeries;
        addSeries(metricSeries: TSeries): number;
        delete(index: number): void;
        deleteSeries(metricSeries: TSeries): void;
        findById(id?: string): "" | {
            id: import("../../../../utils/uuid/index.js").TUUIDv7;
            type: "asset_metric" | "traditional_finance_metric" | "formulas_metric" | "data_store_metric";
            apiMetricName: string;
            label: string;
            getLabels$: (metricSeries: import("../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => TLabels;
            getSelectorLabels$: (metricSeries: import("../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => TLabels;
            version: {
                $: string | undefined;
            };
            data: {
                $: TMetricData;
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
            warnings: {
                $: string[] | null;
            };
            aggregation: {
                $: TAggregation;
            };
            pane: {
                readonly $: number | undefined;
                update$(): void;
            };
            formatters: {
                readonly $: {
                    tooltipFormatter: typeof DEFAULT_FORMATTER;
                    scaleFormatter: typeof DEFAULT_Y_FORMATTER;
                };
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
                    unit: import("../../../../ctx/metrics-registry/api.js").TMetricUnit | undefined;
                    isSelectorLocked: boolean;
                    isFilledGradient: boolean;
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
            chartSeriesApi: null | ISeriesApi<any>;
            transformData: ((data: TMetricData) => TMetricData) | undefined;
            meta: Partial<{
                args: Partial<{
                    [x: string]: unknown;
                    selector: import("../../../../ctx/metrics-registry/types/index.js").TMetricSelector;
                }>;
                isNew: boolean;
                displayOrder: number;
                settingsSchema?: import("../../../../ctx/metrics-registry/settings-schema.js").TSettingsSchema;
            }> | undefined;
            toApiSchema$(): {
                type: "asset_metric" | "traditional_finance_metric" | "formulas_metric" | "data_store_metric";
                apiMetricName: string;
                id: import("../../../../utils/uuid/index.js").TUUIDv7;
                formula: import("../../../../ctx/metrics-registry/types/index.js").TMetricFormula | undefined;
                version: string | undefined;
                interval: `${number}y` | `${number}h` | `${number}m` | `${number}d` | undefined;
                selector: Partial<{
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
                pane: number | undefined;
                visible: boolean;
                color: string;
                style: import("../../../../ctx/metrics-registry/types/index.js").TMetricStyles;
                unit: import("../../../../ctx/metrics-registry/api.js").TMetricUnit | undefined;
                scaleId: string;
                scaleVisible: boolean;
                isSelectorLocked: boolean;
                isFilledGradient: boolean;
                candleDownColor: string | undefined;
                baseline: {
                    value: number;
                    topColor: string;
                    bottomColor: string;
                } | undefined;
            };
        } | undefined;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        metricSeries: {
            readonly $: {
                id: import("../../../../utils/uuid/index.js").TUUIDv7;
                type: "asset_metric" | "traditional_finance_metric" | "formulas_metric" | "data_store_metric";
                apiMetricName: string;
                label: string;
                getLabels$: (metricSeries: import("../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => TLabels;
                getSelectorLabels$: (metricSeries: import("../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => TLabels;
                version: {
                    $: string | undefined;
                };
                data: {
                    $: TMetricData;
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
                warnings: {
                    $: string[] | null;
                };
                aggregation: {
                    $: TAggregation;
                };
                pane: {
                    readonly $: number | undefined;
                    update$(): void;
                };
                formatters: {
                    readonly $: {
                        tooltipFormatter: typeof DEFAULT_FORMATTER;
                        scaleFormatter: typeof DEFAULT_Y_FORMATTER;
                    };
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
                        unit: import("../../../../ctx/metrics-registry/api.js").TMetricUnit | undefined;
                        isSelectorLocked: boolean;
                        isFilledGradient: boolean;
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
                chartSeriesApi: null | ISeriesApi<any>;
                transformData: ((data: TMetricData) => TMetricData) | undefined;
                meta: Partial<{
                    args: Partial<{
                        [x: string]: unknown;
                        selector: import("../../../../ctx/metrics-registry/types/index.js").TMetricSelector;
                    }>;
                    isNew: boolean;
                    displayOrder: number;
                    settingsSchema?: import("../../../../ctx/metrics-registry/settings-schema.js").TSettingsSchema;
                }> | undefined;
                toApiSchema$(): {
                    type: "asset_metric" | "traditional_finance_metric" | "formulas_metric" | "data_store_metric";
                    apiMetricName: string;
                    id: import("../../../../utils/uuid/index.js").TUUIDv7;
                    formula: import("../../../../ctx/metrics-registry/types/index.js").TMetricFormula | undefined;
                    version: string | undefined;
                    interval: `${number}y` | `${number}h` | `${number}m` | `${number}d` | undefined;
                    selector: Partial<{
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
                    pane: number | undefined;
                    visible: boolean;
                    color: string;
                    style: import("../../../../ctx/metrics-registry/types/index.js").TMetricStyles;
                    unit: import("../../../../ctx/metrics-registry/api.js").TMetricUnit | undefined;
                    scaleId: string;
                    scaleVisible: boolean;
                    isSelectorLocked: boolean;
                    isFilledGradient: boolean;
                    candleDownColor: string | undefined;
                    baseline: {
                        value: number;
                        topColor: string;
                        bottomColor: string;
                    } | undefined;
                };
            }[];
            readonly asScope$: {
                name: string;
                aggregation: TAggregation;
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
            add(metric: TChartMetric): TSeries;
            addSeries(metricSeries: TSeries): number;
            delete(index: number): void;
            deleteSeries(metricSeries: TSeries): void;
            findById(id?: string): "" | {
                id: import("../../../../utils/uuid/index.js").TUUIDv7;
                type: "asset_metric" | "traditional_finance_metric" | "formulas_metric" | "data_store_metric";
                apiMetricName: string;
                label: string;
                getLabels$: (metricSeries: import("../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => TLabels;
                getSelectorLabels$: (metricSeries: import("../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => TLabels;
                version: {
                    $: string | undefined;
                };
                data: {
                    $: TMetricData;
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
                warnings: {
                    $: string[] | null;
                };
                aggregation: {
                    $: TAggregation;
                };
                pane: {
                    readonly $: number | undefined;
                    update$(): void;
                };
                formatters: {
                    readonly $: {
                        tooltipFormatter: typeof DEFAULT_FORMATTER;
                        scaleFormatter: typeof DEFAULT_Y_FORMATTER;
                    };
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
                        unit: import("../../../../ctx/metrics-registry/api.js").TMetricUnit | undefined;
                        isSelectorLocked: boolean;
                        isFilledGradient: boolean;
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
                chartSeriesApi: null | ISeriesApi<any>;
                transformData: ((data: TMetricData) => TMetricData) | undefined;
                meta: Partial<{
                    args: Partial<{
                        [x: string]: unknown;
                        selector: import("../../../../ctx/metrics-registry/types/index.js").TMetricSelector;
                    }>;
                    isNew: boolean;
                    displayOrder: number;
                    settingsSchema?: import("../../../../ctx/metrics-registry/settings-schema.js").TSettingsSchema;
                }> | undefined;
                toApiSchema$(): {
                    type: "asset_metric" | "traditional_finance_metric" | "formulas_metric" | "data_store_metric";
                    apiMetricName: string;
                    id: import("../../../../utils/uuid/index.js").TUUIDv7;
                    formula: import("../../../../ctx/metrics-registry/types/index.js").TMetricFormula | undefined;
                    version: string | undefined;
                    interval: `${number}y` | `${number}h` | `${number}m` | `${number}d` | undefined;
                    selector: Partial<{
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
                    pane: number | undefined;
                    visible: boolean;
                    color: string;
                    style: import("../../../../ctx/metrics-registry/types/index.js").TMetricStyles;
                    unit: import("../../../../ctx/metrics-registry/api.js").TMetricUnit | undefined;
                    scaleId: string;
                    scaleVisible: boolean;
                    isSelectorLocked: boolean;
                    isFilledGradient: boolean;
                    candleDownColor: string | undefined;
                    baseline: {
                        value: number;
                        topColor: string;
                        bottomColor: string;
                    } | undefined;
                };
            } | undefined;
        };
    };
    set: (defaultMetrics?: TChartMetric[]) => {
        metricSeries: {
            readonly $: {
                id: import("../../../../utils/uuid/index.js").TUUIDv7;
                type: "asset_metric" | "traditional_finance_metric" | "formulas_metric" | "data_store_metric";
                apiMetricName: string;
                label: string;
                getLabels$: (metricSeries: import("../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => TLabels;
                getSelectorLabels$: (metricSeries: import("../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => TLabels;
                version: {
                    $: string | undefined;
                };
                data: {
                    $: TMetricData;
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
                warnings: {
                    $: string[] | null;
                };
                aggregation: {
                    $: TAggregation;
                };
                pane: {
                    readonly $: number | undefined;
                    update$(): void;
                };
                formatters: {
                    readonly $: {
                        tooltipFormatter: typeof DEFAULT_FORMATTER;
                        scaleFormatter: typeof DEFAULT_Y_FORMATTER;
                    };
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
                        unit: import("../../../../ctx/metrics-registry/api.js").TMetricUnit | undefined;
                        isSelectorLocked: boolean;
                        isFilledGradient: boolean;
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
                chartSeriesApi: null | ISeriesApi<any>;
                transformData: ((data: TMetricData) => TMetricData) | undefined;
                meta: Partial<{
                    args: Partial<{
                        [x: string]: unknown;
                        selector: import("../../../../ctx/metrics-registry/types/index.js").TMetricSelector;
                    }>;
                    isNew: boolean;
                    displayOrder: number;
                    settingsSchema?: import("../../../../ctx/metrics-registry/settings-schema.js").TSettingsSchema;
                }> | undefined;
                toApiSchema$(): {
                    type: "asset_metric" | "traditional_finance_metric" | "formulas_metric" | "data_store_metric";
                    apiMetricName: string;
                    id: import("../../../../utils/uuid/index.js").TUUIDv7;
                    formula: import("../../../../ctx/metrics-registry/types/index.js").TMetricFormula | undefined;
                    version: string | undefined;
                    interval: `${number}y` | `${number}h` | `${number}m` | `${number}d` | undefined;
                    selector: Partial<{
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
                    pane: number | undefined;
                    visible: boolean;
                    color: string;
                    style: import("../../../../ctx/metrics-registry/types/index.js").TMetricStyles;
                    unit: import("../../../../ctx/metrics-registry/api.js").TMetricUnit | undefined;
                    scaleId: string;
                    scaleVisible: boolean;
                    isSelectorLocked: boolean;
                    isFilledGradient: boolean;
                    candleDownColor: string | undefined;
                    baseline: {
                        value: number;
                        topColor: string;
                        bottomColor: string;
                    } | undefined;
                };
            }[];
            readonly asScope$: {
                name: string;
                aggregation: TAggregation;
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
            add(metric: TChartMetric): TSeries;
            addSeries(metricSeries: TSeries): number;
            delete(index: number): void;
            deleteSeries(metricSeries: TSeries): void;
            findById(id?: string): "" | {
                id: import("../../../../utils/uuid/index.js").TUUIDv7;
                type: "asset_metric" | "traditional_finance_metric" | "formulas_metric" | "data_store_metric";
                apiMetricName: string;
                label: string;
                getLabels$: (metricSeries: import("../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => TLabels;
                getSelectorLabels$: (metricSeries: import("../../../../ctx/metrics-registry/types/index.js").TLabelGetterMetricSeries) => TLabels;
                version: {
                    $: string | undefined;
                };
                data: {
                    $: TMetricData;
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
                warnings: {
                    $: string[] | null;
                };
                aggregation: {
                    $: TAggregation;
                };
                pane: {
                    readonly $: number | undefined;
                    update$(): void;
                };
                formatters: {
                    readonly $: {
                        tooltipFormatter: typeof DEFAULT_FORMATTER;
                        scaleFormatter: typeof DEFAULT_Y_FORMATTER;
                    };
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
                        unit: import("../../../../ctx/metrics-registry/api.js").TMetricUnit | undefined;
                        isSelectorLocked: boolean;
                        isFilledGradient: boolean;
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
                chartSeriesApi: null | ISeriesApi<any>;
                transformData: ((data: TMetricData) => TMetricData) | undefined;
                meta: Partial<{
                    args: Partial<{
                        [x: string]: unknown;
                        selector: import("../../../../ctx/metrics-registry/types/index.js").TMetricSelector;
                    }>;
                    isNew: boolean;
                    displayOrder: number;
                    settingsSchema?: import("../../../../ctx/metrics-registry/settings-schema.js").TSettingsSchema;
                }> | undefined;
                toApiSchema$(): {
                    type: "asset_metric" | "traditional_finance_metric" | "formulas_metric" | "data_store_metric";
                    apiMetricName: string;
                    id: import("../../../../utils/uuid/index.js").TUUIDv7;
                    formula: import("../../../../ctx/metrics-registry/types/index.js").TMetricFormula | undefined;
                    version: string | undefined;
                    interval: `${number}y` | `${number}h` | `${number}m` | `${number}d` | undefined;
                    selector: Partial<{
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
                    pane: number | undefined;
                    visible: boolean;
                    color: string;
                    style: import("../../../../ctx/metrics-registry/types/index.js").TMetricStyles;
                    unit: import("../../../../ctx/metrics-registry/api.js").TMetricUnit | undefined;
                    scaleId: string;
                    scaleVisible: boolean;
                    isSelectorLocked: boolean;
                    isFilledGradient: boolean;
                    candleDownColor: string | undefined;
                    baseline: {
                        value: number;
                        topColor: string;
                        bottomColor: string;
                    } | undefined;
                };
            } | undefined;
        };
    };
    __CTX: "webkit_useMetricSeriesCtx";
};
export declare function useMetricSeriesDeleteListener(fn: (metric: TSeries) => void): void;
