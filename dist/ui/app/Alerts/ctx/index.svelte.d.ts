import type { TAlertSchemaUnion } from '../categories/index.js';
import type { TApiAlert, TGenericSettings } from '../types.js';
export type TReducedAlert = Omit<TApiAlert<TGenericSettings>, 'id'>;
export declare const useAlertFormCtx: (({ schema, alert }: {
    schema: TAlertSchemaUnion;
    alert?: null | Partial<TApiAlert>;
}) => {
    schema: TAlertSchemaUnion & {
        suggestTitle: (_steps: import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (apiAlert?: Partial<TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }>> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }>>;
        } | {
            readonly name: "assets";
            readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/state.js").TAssetState;
            readonly validate: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/asset/schema.js").TAssetApiAlert>;
        } | {
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
        } | {
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
        } | {
            readonly name: "watchlist";
            readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
            readonly validate: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>;
        } | {
            readonly name: "screener";
            readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
            readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/screener/schema.js").TScreenerApiAlert>;
        } | {
            readonly name: "wallet";
            readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
            readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/wallet/schema.js").TWalletApiAlert>;
        } | {
            readonly name: "select-trend";
            readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
            readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>;
        }>[]) => Promise<string> | string;
        suggestDescription: (_steps: import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (apiAlert?: Partial<TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }>> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }>>;
        } | {
            readonly name: "assets";
            readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/state.js").TAssetState;
            readonly validate: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/asset/schema.js").TAssetApiAlert>;
        } | {
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
        } | {
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
        } | {
            readonly name: "watchlist";
            readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
            readonly validate: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>;
        } | {
            readonly name: "screener";
            readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
            readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/screener/schema.js").TScreenerApiAlert>;
        } | {
            readonly name: "wallet";
            readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
            readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/wallet/schema.js").TWalletApiAlert>;
        } | {
            readonly name: "select-trend";
            readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
            readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>;
        }>[]) => Promise<string> | string;
    };
    reduceStepsToAlert: () => TReducedAlert;
    steps: import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "metric-conditions";
        readonly initState: (apiAlert?: Partial<TApiAlert<{
            metric: string;
            time_window: import("../time.js").TAPITimeWindow;
            operation: import("../operations.js").TApiOperation;
        }>> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert<{
            metric: string;
            time_window: import("../time.js").TAPITimeWindow;
            operation: import("../operations.js").TApiOperation;
        }>>;
    } | {
        readonly name: "assets";
        readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/state.js").TAssetState;
        readonly validate: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/asset/schema.js").TAssetApiAlert>;
    } | {
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
    } | {
        readonly name: "name-description";
        readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
        readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
    } | {
        readonly name: "watchlist";
        readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
        readonly validate: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>;
    } | {
        readonly name: "screener";
        readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
        readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/screener/schema.js").TScreenerApiAlert>;
    } | {
        readonly name: "wallet";
        readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
        readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/wallet/schema.js").TWalletApiAlert>;
    } | {
        readonly name: "select-trend";
        readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
        readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>;
    }>[];
    selectedStep: {
        readonly $: import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (apiAlert?: Partial<TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }>> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }>>;
        } | {
            readonly name: "assets";
            readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/state.js").TAssetState;
            readonly validate: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/asset/schema.js").TAssetApiAlert>;
        } | {
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
        } | {
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
        } | {
            readonly name: "watchlist";
            readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
            readonly validate: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>;
        } | {
            readonly name: "screener";
            readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
            readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/screener/schema.js").TScreenerApiAlert>;
        } | {
            readonly name: "wallet";
            readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
            readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/wallet/schema.js").TWalletApiAlert>;
        } | {
            readonly name: "select-trend";
            readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
            readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>;
        }>;
        index$: number;
    };
    nextStep: {
        readonly $: import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (apiAlert?: Partial<TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }>> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }>>;
        } | {
            readonly name: "assets";
            readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/state.js").TAssetState;
            readonly validate: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/asset/schema.js").TAssetApiAlert>;
        } | {
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
        } | {
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
        } | {
            readonly name: "watchlist";
            readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
            readonly validate: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>;
        } | {
            readonly name: "screener";
            readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
            readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/screener/schema.js").TScreenerApiAlert>;
        } | {
            readonly name: "wallet";
            readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
            readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/wallet/schema.js").TWalletApiAlert>;
        } | {
            readonly name: "select-trend";
            readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
            readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>;
        }> | null;
    };
    isAlertValid: {
        readonly $: boolean;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        schema: TAlertSchemaUnion & {
            suggestTitle: (_steps: import("../form-steps/index.svelte.js").TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (apiAlert?: Partial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
                readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>>;
            } | {
                readonly name: "assets";
                readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/state.js").TAssetState;
                readonly validate: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/asset/schema.js").TAssetApiAlert>;
            } | {
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
            } | {
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
            } | {
                readonly name: "watchlist";
                readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
                readonly validate: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>;
            } | {
                readonly name: "screener";
                readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
                readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/screener/schema.js").TScreenerApiAlert>;
            } | {
                readonly name: "wallet";
                readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
                readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/wallet/schema.js").TWalletApiAlert>;
            } | {
                readonly name: "select-trend";
                readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
                readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>;
            }>[]) => Promise<string> | string;
            suggestDescription: (_steps: import("../form-steps/index.svelte.js").TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (apiAlert?: Partial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
                readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>>;
            } | {
                readonly name: "assets";
                readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/state.js").TAssetState;
                readonly validate: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/asset/schema.js").TAssetApiAlert>;
            } | {
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
            } | {
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
            } | {
                readonly name: "watchlist";
                readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
                readonly validate: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>;
            } | {
                readonly name: "screener";
                readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
                readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/screener/schema.js").TScreenerApiAlert>;
            } | {
                readonly name: "wallet";
                readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
                readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/wallet/schema.js").TWalletApiAlert>;
            } | {
                readonly name: "select-trend";
                readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
                readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>;
            }>[]) => Promise<string> | string;
        };
        reduceStepsToAlert: () => TReducedAlert;
        steps: import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (apiAlert?: Partial<TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }>> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }>>;
        } | {
            readonly name: "assets";
            readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/state.js").TAssetState;
            readonly validate: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/asset/schema.js").TAssetApiAlert>;
        } | {
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
        } | {
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
        } | {
            readonly name: "watchlist";
            readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
            readonly validate: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>;
        } | {
            readonly name: "screener";
            readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
            readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/screener/schema.js").TScreenerApiAlert>;
        } | {
            readonly name: "wallet";
            readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
            readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/wallet/schema.js").TWalletApiAlert>;
        } | {
            readonly name: "select-trend";
            readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
            readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>;
        }>[];
        selectedStep: {
            readonly $: import("../form-steps/index.svelte.js").TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (apiAlert?: Partial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
                readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>>;
            } | {
                readonly name: "assets";
                readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/state.js").TAssetState;
                readonly validate: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/asset/schema.js").TAssetApiAlert>;
            } | {
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
            } | {
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
            } | {
                readonly name: "watchlist";
                readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
                readonly validate: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>;
            } | {
                readonly name: "screener";
                readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
                readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/screener/schema.js").TScreenerApiAlert>;
            } | {
                readonly name: "wallet";
                readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
                readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/wallet/schema.js").TWalletApiAlert>;
            } | {
                readonly name: "select-trend";
                readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
                readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>;
            }>;
            index$: number;
        };
        nextStep: {
            readonly $: import("../form-steps/index.svelte.js").TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (apiAlert?: Partial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
                readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>>;
            } | {
                readonly name: "assets";
                readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/state.js").TAssetState;
                readonly validate: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/asset/schema.js").TAssetApiAlert>;
            } | {
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
            } | {
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
            } | {
                readonly name: "watchlist";
                readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
                readonly validate: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>;
            } | {
                readonly name: "screener";
                readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
                readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/screener/schema.js").TScreenerApiAlert>;
            } | {
                readonly name: "wallet";
                readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
                readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/wallet/schema.js").TWalletApiAlert>;
            } | {
                readonly name: "select-trend";
                readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
                readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>;
            }> | null;
        };
        isAlertValid: {
            readonly $: boolean;
        };
    };
    set: ({ schema, alert }: {
        schema: TAlertSchemaUnion;
        alert?: null | Partial<TApiAlert>;
    }) => {
        schema: TAlertSchemaUnion & {
            suggestTitle: (_steps: import("../form-steps/index.svelte.js").TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (apiAlert?: Partial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
                readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>>;
            } | {
                readonly name: "assets";
                readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/state.js").TAssetState;
                readonly validate: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/asset/schema.js").TAssetApiAlert>;
            } | {
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
            } | {
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
            } | {
                readonly name: "watchlist";
                readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
                readonly validate: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>;
            } | {
                readonly name: "screener";
                readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
                readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/screener/schema.js").TScreenerApiAlert>;
            } | {
                readonly name: "wallet";
                readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
                readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/wallet/schema.js").TWalletApiAlert>;
            } | {
                readonly name: "select-trend";
                readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
                readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>;
            }>[]) => Promise<string> | string;
            suggestDescription: (_steps: import("../form-steps/index.svelte.js").TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (apiAlert?: Partial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
                readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>>;
            } | {
                readonly name: "assets";
                readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/state.js").TAssetState;
                readonly validate: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/asset/schema.js").TAssetApiAlert>;
            } | {
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
            } | {
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
            } | {
                readonly name: "watchlist";
                readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
                readonly validate: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>;
            } | {
                readonly name: "screener";
                readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
                readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/screener/schema.js").TScreenerApiAlert>;
            } | {
                readonly name: "wallet";
                readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
                readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/wallet/schema.js").TWalletApiAlert>;
            } | {
                readonly name: "select-trend";
                readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
                readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>;
            }>[]) => Promise<string> | string;
        };
        reduceStepsToAlert: () => TReducedAlert;
        steps: import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (apiAlert?: Partial<TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }>> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }>>;
        } | {
            readonly name: "assets";
            readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/state.js").TAssetState;
            readonly validate: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/asset/schema.js").TAssetApiAlert>;
        } | {
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
        } | {
            readonly name: "name-description";
            readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
        } | {
            readonly name: "watchlist";
            readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
            readonly validate: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>;
        } | {
            readonly name: "screener";
            readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
            readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/screener/schema.js").TScreenerApiAlert>;
        } | {
            readonly name: "wallet";
            readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
            readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/wallet/schema.js").TWalletApiAlert>;
        } | {
            readonly name: "select-trend";
            readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
            readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>;
        }>[];
        selectedStep: {
            readonly $: import("../form-steps/index.svelte.js").TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (apiAlert?: Partial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
                readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>>;
            } | {
                readonly name: "assets";
                readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/state.js").TAssetState;
                readonly validate: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/asset/schema.js").TAssetApiAlert>;
            } | {
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
            } | {
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
            } | {
                readonly name: "watchlist";
                readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
                readonly validate: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>;
            } | {
                readonly name: "screener";
                readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
                readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/screener/schema.js").TScreenerApiAlert>;
            } | {
                readonly name: "wallet";
                readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
                readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/wallet/schema.js").TWalletApiAlert>;
            } | {
                readonly name: "select-trend";
                readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
                readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>;
            }>;
            index$: number;
        };
        nextStep: {
            readonly $: import("../form-steps/index.svelte.js").TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (apiAlert?: Partial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>> | null | undefined) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
                readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/metric-conditions/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>>;
            } | {
                readonly name: "assets";
                readonly initState: (apiAlert?: Partial<import("../categories/asset/schema.js").TAssetApiAlert> | null | undefined) => import("../categories/asset/asset-form-step/state.js").TAssetState;
                readonly validate: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/asset/asset-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/asset/asset-form-step/state.js").TAssetState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/asset/schema.js").TAssetApiAlert>;
            } | {
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
                readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/notifications-privacy/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
            } | {
                readonly name: "name-description";
                readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
                readonly validate: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../form-steps/name-description/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => import("../../../../utils/types/index.js").DeepPartial<TApiAlert>;
            } | {
                readonly name: "watchlist";
                readonly initState: (apiAlert?: Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
                readonly validate: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>;
            } | {
                readonly name: "screener";
                readonly initState: (apiAlert?: Partial<import("../categories/screener/schema.js").TScreenerApiAlert> | null | undefined) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
                readonly validate: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/screener/screener-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/screener/schema.js").TScreenerApiAlert>;
            } | {
                readonly name: "wallet";
                readonly initState: (apiAlert?: Partial<import("../categories/wallet/schema.js").TWalletApiAlert> | null | undefined) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
                readonly validate: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/wallet/wallet-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/wallet/schema.js").TWalletApiAlert>;
            } | {
                readonly name: "select-trend";
                readonly initState: (apiAlert?: Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
                readonly validate: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
                readonly ui: {
                    title: string;
                    label: string;
                    description: string;
                    Form: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                    }, {}, string>;
                    Legend?: import("svelte").Component<{
                        state: import("../form-steps/index.svelte.js").TBaseState<import("../categories/social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                    }, {}, string> | undefined;
                };
                readonly reduceToApi: (state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => import("../../../../utils/types/index.js").DeepPartial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>;
            }> | null;
        };
        isAlertValid: {
            readonly $: boolean;
        };
    };
};
