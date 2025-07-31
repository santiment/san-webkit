import type { TAlertSchemaUnion } from '../categories/index.js';
import type { TApiAlert } from '../types.js';
export declare const useAlertFormCtx: (({ schema, alert }: {
    schema: TAlertSchemaUnion;
    alert?: null | Partial<TApiAlert>;
}) => {
    schema: TAlertSchemaUnion & {
        suggestTitle: (_steps: import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (alert?: Partial<TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }>> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                settings: object;
            };
        } | {
            readonly name: "assets";
            readonly initState: (apiAlert?: null | Partial<import("../categories/asset/schema.js").TAssetApiAlert>) => import("../categories/asset/asset-form-step/state.js").TAssetState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/asset/asset-form-step/state.js").TAssetState) => {
                settings: object;
            };
        } | {
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | Partial<TApiAlert<unknown>>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                settings: object;
            };
        } | {
            readonly name: "name-description";
            readonly initState: (apiAlert?: null | Partial<TApiAlert>) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => {
                settings: object;
            };
        } | {
            readonly name: "watchlist";
            readonly initState: (apiAlert?: null | Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => {
                settings: object;
            };
        } | {
            readonly name: "screener";
            readonly initState: (apiAlert?: null | Partial<import("../categories/screener/schema.js").TScreenerApiAlert>) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => {
                settings: object;
            };
        } | {
            readonly name: "wallet";
            readonly initState: (apiAlert?: null | Partial<import("../categories/wallet/schema.js").TWalletApiAlert>) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => {
                settings: object;
            };
        } | {
            readonly name: "select-trend";
            readonly initState: (apiAlert?: null | Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => {
                settings: object;
            };
        }>[]) => Promise<string> | string;
        suggestDescription: (_steps: import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (alert?: Partial<TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }>> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                settings: object;
            };
        } | {
            readonly name: "assets";
            readonly initState: (apiAlert?: null | Partial<import("../categories/asset/schema.js").TAssetApiAlert>) => import("../categories/asset/asset-form-step/state.js").TAssetState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/asset/asset-form-step/state.js").TAssetState) => {
                settings: object;
            };
        } | {
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | Partial<TApiAlert<unknown>>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                settings: object;
            };
        } | {
            readonly name: "name-description";
            readonly initState: (apiAlert?: null | Partial<TApiAlert>) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => {
                settings: object;
            };
        } | {
            readonly name: "watchlist";
            readonly initState: (apiAlert?: null | Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => {
                settings: object;
            };
        } | {
            readonly name: "screener";
            readonly initState: (apiAlert?: null | Partial<import("../categories/screener/schema.js").TScreenerApiAlert>) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => {
                settings: object;
            };
        } | {
            readonly name: "wallet";
            readonly initState: (apiAlert?: null | Partial<import("../categories/wallet/schema.js").TWalletApiAlert>) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => {
                settings: object;
            };
        } | {
            readonly name: "select-trend";
            readonly initState: (apiAlert?: null | Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => {
                settings: object;
            };
        }>[]) => Promise<string> | string;
    };
    steps: import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "metric-conditions";
        readonly initState: (alert?: Partial<TApiAlert<{
            metric: string;
            time_window: import("../time.js").TAPITimeWindow;
            operation: import("../operations.js").TApiOperation;
        }>> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
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
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
            settings: object;
        };
    } | {
        readonly name: "assets";
        readonly initState: (apiAlert?: null | Partial<import("../categories/asset/schema.js").TAssetApiAlert>) => import("../categories/asset/asset-form-step/state.js").TAssetState;
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
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../categories/asset/asset-form-step/state.js").TAssetState) => {
            settings: object;
        };
    } | {
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | Partial<TApiAlert<unknown>>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
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
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
            settings: object;
        };
    } | {
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | Partial<TApiAlert>) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
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
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => {
            settings: object;
        };
    } | {
        readonly name: "watchlist";
        readonly initState: (apiAlert?: null | Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
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
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => {
            settings: object;
        };
    } | {
        readonly name: "screener";
        readonly initState: (apiAlert?: null | Partial<import("../categories/screener/schema.js").TScreenerApiAlert>) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
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
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => {
            settings: object;
        };
    } | {
        readonly name: "wallet";
        readonly initState: (apiAlert?: null | Partial<import("../categories/wallet/schema.js").TWalletApiAlert>) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
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
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => {
            settings: object;
        };
    } | {
        readonly name: "select-trend";
        readonly initState: (apiAlert?: null | Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
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
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => {
            settings: object;
        };
    }>[];
    selectedStep: {
        readonly $: import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (alert?: Partial<TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }>> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                settings: object;
            };
        } | {
            readonly name: "assets";
            readonly initState: (apiAlert?: null | Partial<import("../categories/asset/schema.js").TAssetApiAlert>) => import("../categories/asset/asset-form-step/state.js").TAssetState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/asset/asset-form-step/state.js").TAssetState) => {
                settings: object;
            };
        } | {
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | Partial<TApiAlert<unknown>>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                settings: object;
            };
        } | {
            readonly name: "name-description";
            readonly initState: (apiAlert?: null | Partial<TApiAlert>) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => {
                settings: object;
            };
        } | {
            readonly name: "watchlist";
            readonly initState: (apiAlert?: null | Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => {
                settings: object;
            };
        } | {
            readonly name: "screener";
            readonly initState: (apiAlert?: null | Partial<import("../categories/screener/schema.js").TScreenerApiAlert>) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => {
                settings: object;
            };
        } | {
            readonly name: "wallet";
            readonly initState: (apiAlert?: null | Partial<import("../categories/wallet/schema.js").TWalletApiAlert>) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => {
                settings: object;
            };
        } | {
            readonly name: "select-trend";
            readonly initState: (apiAlert?: null | Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => {
                settings: object;
            };
        }>;
        index$: number;
    };
    nextStep: {
        readonly $: import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (alert?: Partial<TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }>> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                settings: object;
            };
        } | {
            readonly name: "assets";
            readonly initState: (apiAlert?: null | Partial<import("../categories/asset/schema.js").TAssetApiAlert>) => import("../categories/asset/asset-form-step/state.js").TAssetState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/asset/asset-form-step/state.js").TAssetState) => {
                settings: object;
            };
        } | {
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | Partial<TApiAlert<unknown>>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                settings: object;
            };
        } | {
            readonly name: "name-description";
            readonly initState: (apiAlert?: null | Partial<TApiAlert>) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => {
                settings: object;
            };
        } | {
            readonly name: "watchlist";
            readonly initState: (apiAlert?: null | Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => {
                settings: object;
            };
        } | {
            readonly name: "screener";
            readonly initState: (apiAlert?: null | Partial<import("../categories/screener/schema.js").TScreenerApiAlert>) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => {
                settings: object;
            };
        } | {
            readonly name: "wallet";
            readonly initState: (apiAlert?: null | Partial<import("../categories/wallet/schema.js").TWalletApiAlert>) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => {
                settings: object;
            };
        } | {
            readonly name: "select-trend";
            readonly initState: (apiAlert?: null | Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => {
                settings: object;
            };
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
                readonly initState: (alert?: Partial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                    settings: object;
                };
            } | {
                readonly name: "assets";
                readonly initState: (apiAlert?: null | Partial<import("../categories/asset/schema.js").TAssetApiAlert>) => import("../categories/asset/asset-form-step/state.js").TAssetState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/asset/asset-form-step/state.js").TAssetState) => {
                    settings: object;
                };
            } | {
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: null | Partial<TApiAlert<unknown>>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                    settings: object;
                };
            } | {
                readonly name: "name-description";
                readonly initState: (apiAlert?: null | Partial<TApiAlert>) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => {
                    settings: object;
                };
            } | {
                readonly name: "watchlist";
                readonly initState: (apiAlert?: null | Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => {
                    settings: object;
                };
            } | {
                readonly name: "screener";
                readonly initState: (apiAlert?: null | Partial<import("../categories/screener/schema.js").TScreenerApiAlert>) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => {
                    settings: object;
                };
            } | {
                readonly name: "wallet";
                readonly initState: (apiAlert?: null | Partial<import("../categories/wallet/schema.js").TWalletApiAlert>) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => {
                    settings: object;
                };
            } | {
                readonly name: "select-trend";
                readonly initState: (apiAlert?: null | Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => {
                    settings: object;
                };
            }>[]) => Promise<string> | string;
            suggestDescription: (_steps: import("../form-steps/index.svelte.js").TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (alert?: Partial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                    settings: object;
                };
            } | {
                readonly name: "assets";
                readonly initState: (apiAlert?: null | Partial<import("../categories/asset/schema.js").TAssetApiAlert>) => import("../categories/asset/asset-form-step/state.js").TAssetState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/asset/asset-form-step/state.js").TAssetState) => {
                    settings: object;
                };
            } | {
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: null | Partial<TApiAlert<unknown>>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                    settings: object;
                };
            } | {
                readonly name: "name-description";
                readonly initState: (apiAlert?: null | Partial<TApiAlert>) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => {
                    settings: object;
                };
            } | {
                readonly name: "watchlist";
                readonly initState: (apiAlert?: null | Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => {
                    settings: object;
                };
            } | {
                readonly name: "screener";
                readonly initState: (apiAlert?: null | Partial<import("../categories/screener/schema.js").TScreenerApiAlert>) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => {
                    settings: object;
                };
            } | {
                readonly name: "wallet";
                readonly initState: (apiAlert?: null | Partial<import("../categories/wallet/schema.js").TWalletApiAlert>) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => {
                    settings: object;
                };
            } | {
                readonly name: "select-trend";
                readonly initState: (apiAlert?: null | Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => {
                    settings: object;
                };
            }>[]) => Promise<string> | string;
        };
        steps: import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (alert?: Partial<TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }>> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                settings: object;
            };
        } | {
            readonly name: "assets";
            readonly initState: (apiAlert?: null | Partial<import("../categories/asset/schema.js").TAssetApiAlert>) => import("../categories/asset/asset-form-step/state.js").TAssetState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/asset/asset-form-step/state.js").TAssetState) => {
                settings: object;
            };
        } | {
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | Partial<TApiAlert<unknown>>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                settings: object;
            };
        } | {
            readonly name: "name-description";
            readonly initState: (apiAlert?: null | Partial<TApiAlert>) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => {
                settings: object;
            };
        } | {
            readonly name: "watchlist";
            readonly initState: (apiAlert?: null | Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => {
                settings: object;
            };
        } | {
            readonly name: "screener";
            readonly initState: (apiAlert?: null | Partial<import("../categories/screener/schema.js").TScreenerApiAlert>) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => {
                settings: object;
            };
        } | {
            readonly name: "wallet";
            readonly initState: (apiAlert?: null | Partial<import("../categories/wallet/schema.js").TWalletApiAlert>) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => {
                settings: object;
            };
        } | {
            readonly name: "select-trend";
            readonly initState: (apiAlert?: null | Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => {
                settings: object;
            };
        }>[];
        selectedStep: {
            readonly $: import("../form-steps/index.svelte.js").TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (alert?: Partial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                    settings: object;
                };
            } | {
                readonly name: "assets";
                readonly initState: (apiAlert?: null | Partial<import("../categories/asset/schema.js").TAssetApiAlert>) => import("../categories/asset/asset-form-step/state.js").TAssetState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/asset/asset-form-step/state.js").TAssetState) => {
                    settings: object;
                };
            } | {
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: null | Partial<TApiAlert<unknown>>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                    settings: object;
                };
            } | {
                readonly name: "name-description";
                readonly initState: (apiAlert?: null | Partial<TApiAlert>) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => {
                    settings: object;
                };
            } | {
                readonly name: "watchlist";
                readonly initState: (apiAlert?: null | Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => {
                    settings: object;
                };
            } | {
                readonly name: "screener";
                readonly initState: (apiAlert?: null | Partial<import("../categories/screener/schema.js").TScreenerApiAlert>) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => {
                    settings: object;
                };
            } | {
                readonly name: "wallet";
                readonly initState: (apiAlert?: null | Partial<import("../categories/wallet/schema.js").TWalletApiAlert>) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => {
                    settings: object;
                };
            } | {
                readonly name: "select-trend";
                readonly initState: (apiAlert?: null | Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => {
                    settings: object;
                };
            }>;
            index$: number;
        };
        nextStep: {
            readonly $: import("../form-steps/index.svelte.js").TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (alert?: Partial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                    settings: object;
                };
            } | {
                readonly name: "assets";
                readonly initState: (apiAlert?: null | Partial<import("../categories/asset/schema.js").TAssetApiAlert>) => import("../categories/asset/asset-form-step/state.js").TAssetState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/asset/asset-form-step/state.js").TAssetState) => {
                    settings: object;
                };
            } | {
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: null | Partial<TApiAlert<unknown>>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                    settings: object;
                };
            } | {
                readonly name: "name-description";
                readonly initState: (apiAlert?: null | Partial<TApiAlert>) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => {
                    settings: object;
                };
            } | {
                readonly name: "watchlist";
                readonly initState: (apiAlert?: null | Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => {
                    settings: object;
                };
            } | {
                readonly name: "screener";
                readonly initState: (apiAlert?: null | Partial<import("../categories/screener/schema.js").TScreenerApiAlert>) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => {
                    settings: object;
                };
            } | {
                readonly name: "wallet";
                readonly initState: (apiAlert?: null | Partial<import("../categories/wallet/schema.js").TWalletApiAlert>) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => {
                    settings: object;
                };
            } | {
                readonly name: "select-trend";
                readonly initState: (apiAlert?: null | Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => {
                    settings: object;
                };
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
                readonly initState: (alert?: Partial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                    settings: object;
                };
            } | {
                readonly name: "assets";
                readonly initState: (apiAlert?: null | Partial<import("../categories/asset/schema.js").TAssetApiAlert>) => import("../categories/asset/asset-form-step/state.js").TAssetState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/asset/asset-form-step/state.js").TAssetState) => {
                    settings: object;
                };
            } | {
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: null | Partial<TApiAlert<unknown>>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                    settings: object;
                };
            } | {
                readonly name: "name-description";
                readonly initState: (apiAlert?: null | Partial<TApiAlert>) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => {
                    settings: object;
                };
            } | {
                readonly name: "watchlist";
                readonly initState: (apiAlert?: null | Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => {
                    settings: object;
                };
            } | {
                readonly name: "screener";
                readonly initState: (apiAlert?: null | Partial<import("../categories/screener/schema.js").TScreenerApiAlert>) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => {
                    settings: object;
                };
            } | {
                readonly name: "wallet";
                readonly initState: (apiAlert?: null | Partial<import("../categories/wallet/schema.js").TWalletApiAlert>) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => {
                    settings: object;
                };
            } | {
                readonly name: "select-trend";
                readonly initState: (apiAlert?: null | Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => {
                    settings: object;
                };
            }>[]) => Promise<string> | string;
            suggestDescription: (_steps: import("../form-steps/index.svelte.js").TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (alert?: Partial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                    settings: object;
                };
            } | {
                readonly name: "assets";
                readonly initState: (apiAlert?: null | Partial<import("../categories/asset/schema.js").TAssetApiAlert>) => import("../categories/asset/asset-form-step/state.js").TAssetState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/asset/asset-form-step/state.js").TAssetState) => {
                    settings: object;
                };
            } | {
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: null | Partial<TApiAlert<unknown>>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                    settings: object;
                };
            } | {
                readonly name: "name-description";
                readonly initState: (apiAlert?: null | Partial<TApiAlert>) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => {
                    settings: object;
                };
            } | {
                readonly name: "watchlist";
                readonly initState: (apiAlert?: null | Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => {
                    settings: object;
                };
            } | {
                readonly name: "screener";
                readonly initState: (apiAlert?: null | Partial<import("../categories/screener/schema.js").TScreenerApiAlert>) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => {
                    settings: object;
                };
            } | {
                readonly name: "wallet";
                readonly initState: (apiAlert?: null | Partial<import("../categories/wallet/schema.js").TWalletApiAlert>) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => {
                    settings: object;
                };
            } | {
                readonly name: "select-trend";
                readonly initState: (apiAlert?: null | Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => {
                    settings: object;
                };
            }>[]) => Promise<string> | string;
        };
        steps: import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (alert?: Partial<TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }>> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                settings: object;
            };
        } | {
            readonly name: "assets";
            readonly initState: (apiAlert?: null | Partial<import("../categories/asset/schema.js").TAssetApiAlert>) => import("../categories/asset/asset-form-step/state.js").TAssetState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/asset/asset-form-step/state.js").TAssetState) => {
                settings: object;
            };
        } | {
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | Partial<TApiAlert<unknown>>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                settings: object;
            };
        } | {
            readonly name: "name-description";
            readonly initState: (apiAlert?: null | Partial<TApiAlert>) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => {
                settings: object;
            };
        } | {
            readonly name: "watchlist";
            readonly initState: (apiAlert?: null | Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => {
                settings: object;
            };
        } | {
            readonly name: "screener";
            readonly initState: (apiAlert?: null | Partial<import("../categories/screener/schema.js").TScreenerApiAlert>) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => {
                settings: object;
            };
        } | {
            readonly name: "wallet";
            readonly initState: (apiAlert?: null | Partial<import("../categories/wallet/schema.js").TWalletApiAlert>) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => {
                settings: object;
            };
        } | {
            readonly name: "select-trend";
            readonly initState: (apiAlert?: null | Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
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
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => {
                settings: object;
            };
        }>[];
        selectedStep: {
            readonly $: import("../form-steps/index.svelte.js").TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (alert?: Partial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                    settings: object;
                };
            } | {
                readonly name: "assets";
                readonly initState: (apiAlert?: null | Partial<import("../categories/asset/schema.js").TAssetApiAlert>) => import("../categories/asset/asset-form-step/state.js").TAssetState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/asset/asset-form-step/state.js").TAssetState) => {
                    settings: object;
                };
            } | {
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: null | Partial<TApiAlert<unknown>>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                    settings: object;
                };
            } | {
                readonly name: "name-description";
                readonly initState: (apiAlert?: null | Partial<TApiAlert>) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => {
                    settings: object;
                };
            } | {
                readonly name: "watchlist";
                readonly initState: (apiAlert?: null | Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => {
                    settings: object;
                };
            } | {
                readonly name: "screener";
                readonly initState: (apiAlert?: null | Partial<import("../categories/screener/schema.js").TScreenerApiAlert>) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => {
                    settings: object;
                };
            } | {
                readonly name: "wallet";
                readonly initState: (apiAlert?: null | Partial<import("../categories/wallet/schema.js").TWalletApiAlert>) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => {
                    settings: object;
                };
            } | {
                readonly name: "select-trend";
                readonly initState: (apiAlert?: null | Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => {
                    settings: object;
                };
            }>;
            index$: number;
        };
        nextStep: {
            readonly $: import("../form-steps/index.svelte.js").TAlertStep<{
                readonly name: "metric-conditions";
                readonly initState: (alert?: Partial<TApiAlert<{
                    metric: string;
                    time_window: import("../time.js").TAPITimeWindow;
                    operation: import("../operations.js").TApiOperation;
                }>> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                    settings: object;
                };
            } | {
                readonly name: "assets";
                readonly initState: (apiAlert?: null | Partial<import("../categories/asset/schema.js").TAssetApiAlert>) => import("../categories/asset/asset-form-step/state.js").TAssetState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/asset/asset-form-step/state.js").TAssetState) => {
                    settings: object;
                };
            } | {
                readonly name: "notifications-privacy";
                readonly initState: (apiAlert?: null | Partial<TApiAlert<unknown>>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                    settings: object;
                };
            } | {
                readonly name: "name-description";
                readonly initState: (apiAlert?: null | Partial<TApiAlert>) => import("../form-steps/name-description/schema.js").TNameDescriptionState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../form-steps/name-description/schema.js").TNameDescriptionState) => {
                    settings: object;
                };
            } | {
                readonly name: "watchlist";
                readonly initState: (apiAlert?: null | Partial<import("../categories/watchlist/schema.js").TWatchlistApiAlert>) => import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/watchlist/watchlist-form-step/state.js").TWatchlistState) => {
                    settings: object;
                };
            } | {
                readonly name: "screener";
                readonly initState: (apiAlert?: null | Partial<import("../categories/screener/schema.js").TScreenerApiAlert>) => import("../categories/screener/screener-form-step/schema.js").TScreenerState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/screener/screener-form-step/schema.js").TScreenerState) => {
                    settings: object;
                };
            } | {
                readonly name: "wallet";
                readonly initState: (apiAlert?: null | Partial<import("../categories/wallet/schema.js").TWalletApiAlert>) => import("../categories/wallet/wallet-form-step/schema.js").TWalletState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/wallet/wallet-form-step/schema.js").TWalletState) => {
                    settings: object;
                };
            } | {
                readonly name: "select-trend";
                readonly initState: (apiAlert?: null | Partial<import("../categories/social-trends/schema.js").TSocialTrendsApiAlert>) => import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState;
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
                readonly reduceToApi: (apiAlert: {
                    settings: object;
                }, state: import("../categories/social-trends/select-trend-form-step/schema.js").TTrendState) => {
                    settings: object;
                };
            }> | null;
        };
        isAlertValid: {
            readonly $: boolean;
        };
    };
};
