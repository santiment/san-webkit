import type { TApiAlert } from '../types.js';
export declare const SCHEMAS: readonly [{
    readonly name: "asset";
    readonly ui: {
        label: string;
        description: string;
        icon: string;
    };
    readonly steps: readonly [{
        readonly name: "assets";
        readonly initState: (apiAlert?: null | import("./asset/schema.js").TAssetApiAlert) => import("./asset/asset-form-step/state.js").TAssetState;
        readonly validate: (state: import("./asset/asset-form-step/state.js").TAssetState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./asset/asset-form-step/state.js").TAssetState) => {
            settings: object;
        };
    }, {
        readonly name: "metric-conditions";
        readonly initState: (alert?: TApiAlert<{
            metric: string;
            time_window: import("../time.js").TAPITimeWindow;
            operation: import("../operations.js").TApiOperation;
        }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
            settings: object;
        };
    }, {
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
            settings: object;
        };
    }, {
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
        readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/name-description/schema.js").TState) => {
            settings: object;
        };
    }];
    readonly deduceApiAlert: (apiAlert: import("./asset/schema.js").TAssetApiAlert) => boolean;
    readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "assets";
        readonly initState: (apiAlert?: null | import("./asset/schema.js").TAssetApiAlert) => import("./asset/asset-form-step/state.js").TAssetState;
        readonly validate: (state: import("./asset/asset-form-step/state.js").TAssetState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./asset/asset-form-step/state.js").TAssetState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "metric-conditions";
        readonly initState: (alert?: TApiAlert<{
            metric: string;
            time_window: import("../time.js").TAPITimeWindow;
            operation: import("../operations.js").TApiOperation;
        }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
        readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/name-description/schema.js").TState) => {
            settings: object;
        };
    }>] & {
        length: 4;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "assets";
        readonly initState: (apiAlert?: null | import("./asset/schema.js").TAssetApiAlert) => import("./asset/asset-form-step/state.js").TAssetState;
        readonly validate: (state: import("./asset/asset-form-step/state.js").TAssetState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./asset/asset-form-step/state.js").TAssetState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "metric-conditions";
        readonly initState: (alert?: TApiAlert<{
            metric: string;
            time_window: import("../time.js").TAPITimeWindow;
            operation: import("../operations.js").TApiOperation;
        }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
        readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/name-description/schema.js").TState) => {
            settings: object;
        };
    }>] & {
        length: 4;
    }) => Promise<string> | string;
}, {
    readonly name: "watchlist";
    readonly ui: {
        label: string;
        description: string;
        icon: string;
    };
    readonly steps: readonly [{
        readonly name: "watchlist";
        readonly initState: (apiAlert?: null | import("./watchlist/schema.js").TWatchlistApiAlert) => import("./watchlist/watchlist-form-step/state.js").TWatchlistState;
        readonly validate: (state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => {
            settings: object;
        };
    }, {
        readonly name: "metric-conditions";
        readonly initState: (alert?: TApiAlert<{
            metric: string;
            time_window: import("../time.js").TAPITimeWindow;
            operation: import("../operations.js").TApiOperation;
        }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
            settings: object;
        };
    }, {
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
            settings: object;
        };
    }, {
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
        readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/name-description/schema.js").TState) => {
            settings: object;
        };
    }];
    readonly deduceApiAlert: (apiAlert: import("./watchlist/schema.js").TWatchlistApiAlert) => boolean;
    readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "watchlist";
        readonly initState: (apiAlert?: null | import("./watchlist/schema.js").TWatchlistApiAlert) => import("./watchlist/watchlist-form-step/state.js").TWatchlistState;
        readonly validate: (state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "metric-conditions";
        readonly initState: (alert?: TApiAlert<{
            metric: string;
            time_window: import("../time.js").TAPITimeWindow;
            operation: import("../operations.js").TApiOperation;
        }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
        readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/name-description/schema.js").TState) => {
            settings: object;
        };
    }>] & {
        length: 4;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "watchlist";
        readonly initState: (apiAlert?: null | import("./watchlist/schema.js").TWatchlistApiAlert) => import("./watchlist/watchlist-form-step/state.js").TWatchlistState;
        readonly validate: (state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "metric-conditions";
        readonly initState: (alert?: TApiAlert<{
            metric: string;
            time_window: import("../time.js").TAPITimeWindow;
            operation: import("../operations.js").TApiOperation;
        }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
        readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/name-description/schema.js").TState) => {
            settings: object;
        };
    }>] & {
        length: 4;
    }) => Promise<string> | string;
}, {
    readonly name: "screener";
    readonly ui: {
        label: string;
        description: string;
        icon: string;
    };
    readonly steps: readonly [{
        readonly name: "screener";
        readonly initState: (apiAlert?: null | import("./screener/schema.js").TScreenerApiAlert) => import("./screener/screener-form-step/schema.js").TScreenerState;
        readonly validate: (state: import("./screener/screener-form-step/schema.js").TScreenerState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./screener/screener-form-step/schema.js").TScreenerState) => {
            settings: object;
        };
    }, {
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
            settings: object;
        };
    }, {
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
        readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/name-description/schema.js").TState) => {
            settings: object;
        };
    }];
    readonly deduceApiAlert: (apiAlert: import("./screener/schema.js").TScreenerApiAlert) => boolean;
    readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "screener";
        readonly initState: (apiAlert?: null | import("./screener/schema.js").TScreenerApiAlert) => import("./screener/screener-form-step/schema.js").TScreenerState;
        readonly validate: (state: import("./screener/screener-form-step/schema.js").TScreenerState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./screener/screener-form-step/schema.js").TScreenerState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
        readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/name-description/schema.js").TState) => {
            settings: object;
        };
    }>] & {
        length: 3;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "screener";
        readonly initState: (apiAlert?: null | import("./screener/schema.js").TScreenerApiAlert) => import("./screener/screener-form-step/schema.js").TScreenerState;
        readonly validate: (state: import("./screener/screener-form-step/schema.js").TScreenerState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./screener/screener-form-step/schema.js").TScreenerState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
        readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/name-description/schema.js").TState) => {
            settings: object;
        };
    }>] & {
        length: 3;
    }) => Promise<string> | string;
}, {
    readonly name: "wallet";
    readonly ui: {
        label: string;
        description: string;
        icon: string;
    };
    readonly steps: readonly [{
        readonly name: "wallet";
        readonly initState: (apiAlert?: null | import("./wallet/schema.js").TWalletApiAlert) => import("./wallet/wallet-form-step/schema.js").TWalletState;
        readonly validate: (state: import("./wallet/wallet-form-step/schema.js").TWalletState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./wallet/wallet-form-step/schema.js").TWalletState) => {
            settings: object;
        };
    }, {
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
            settings: object;
        };
    }, {
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
        readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/name-description/schema.js").TState) => {
            settings: object;
        };
    }];
    readonly deduceApiAlert: (apiAlert: import("./wallet/schema.js").TWalletApiAlert) => boolean;
    readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "wallet";
        readonly initState: (apiAlert?: null | import("./wallet/schema.js").TWalletApiAlert) => import("./wallet/wallet-form-step/schema.js").TWalletState;
        readonly validate: (state: import("./wallet/wallet-form-step/schema.js").TWalletState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./wallet/wallet-form-step/schema.js").TWalletState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
        readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/name-description/schema.js").TState) => {
            settings: object;
        };
    }>] & {
        length: 3;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "wallet";
        readonly initState: (apiAlert?: null | import("./wallet/schema.js").TWalletApiAlert) => import("./wallet/wallet-form-step/schema.js").TWalletState;
        readonly validate: (state: import("./wallet/wallet-form-step/schema.js").TWalletState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./wallet/wallet-form-step/schema.js").TWalletState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
        readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/name-description/schema.js").TState) => {
            settings: object;
        };
    }>] & {
        length: 3;
    }) => Promise<string> | string;
}, {
    readonly name: "social-trends";
    readonly ui: {
        label: string;
        description: string;
        icon: string;
    };
    readonly steps: readonly [{
        readonly name: "select-trend";
        readonly initState: (apiAlert?: null | import("./social-trends/schema.js").TSocialTrendsApiAlert) => import("./social-trends/select-trend-form-step/schema.js").TTrendState;
        readonly validate: (state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => {
            settings: object;
        };
    }, {
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
            settings: object;
        };
    }, {
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
        readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/name-description/schema.js").TState) => {
            settings: object;
        };
    }];
    readonly deduceApiAlert: (apiAlert: import("./social-trends/schema.js").TSocialTrendsApiAlert) => boolean;
    readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "select-trend";
        readonly initState: (apiAlert?: null | import("./social-trends/schema.js").TSocialTrendsApiAlert) => import("./social-trends/select-trend-form-step/schema.js").TTrendState;
        readonly validate: (state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
        readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/name-description/schema.js").TState) => {
            settings: object;
        };
    }>] & {
        length: 3;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "select-trend";
        readonly initState: (apiAlert?: null | import("./social-trends/schema.js").TSocialTrendsApiAlert) => import("./social-trends/select-trend-form-step/schema.js").TTrendState;
        readonly validate: (state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
        readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/name-description/schema.js").TState) => {
            settings: object;
        };
    }>] & {
        length: 3;
    }) => Promise<string> | string;
}];
export declare const SchemaByType: {
    asset: {
        readonly name: "asset";
        readonly ui: {
            label: string;
            description: string;
            icon: string;
        };
        readonly steps: readonly [{
            readonly name: "assets";
            readonly initState: (apiAlert?: null | import("./asset/schema.js").TAssetApiAlert) => import("./asset/asset-form-step/state.js").TAssetState;
            readonly validate: (state: import("./asset/asset-form-step/state.js").TAssetState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("./asset/asset-form-step/state.js").TAssetState) => {
                settings: object;
            };
        }, {
            readonly name: "metric-conditions";
            readonly initState: (alert?: TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                settings: object;
            };
        }, {
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                settings: object;
            };
        }, {
            readonly name: "name-description";
            readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/name-description/schema.js").TState) => {
                settings: object;
            };
        }];
        readonly deduceApiAlert: (apiAlert: import("./asset/schema.js").TAssetApiAlert) => boolean;
        readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "assets";
            readonly initState: (apiAlert?: null | import("./asset/schema.js").TAssetApiAlert) => import("./asset/asset-form-step/state.js").TAssetState;
            readonly validate: (state: import("./asset/asset-form-step/state.js").TAssetState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("./asset/asset-form-step/state.js").TAssetState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (alert?: TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/name-description/schema.js").TState) => {
                settings: object;
            };
        }>] & {
            length: 4;
        }) => Promise<string> | string;
        readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "assets";
            readonly initState: (apiAlert?: null | import("./asset/schema.js").TAssetApiAlert) => import("./asset/asset-form-step/state.js").TAssetState;
            readonly validate: (state: import("./asset/asset-form-step/state.js").TAssetState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("./asset/asset-form-step/state.js").TAssetState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (alert?: TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/name-description/schema.js").TState) => {
                settings: object;
            };
        }>] & {
            length: 4;
        }) => Promise<string> | string;
    };
    watchlist: {
        readonly name: "watchlist";
        readonly ui: {
            label: string;
            description: string;
            icon: string;
        };
        readonly steps: readonly [{
            readonly name: "watchlist";
            readonly initState: (apiAlert?: null | import("./watchlist/schema.js").TWatchlistApiAlert) => import("./watchlist/watchlist-form-step/state.js").TWatchlistState;
            readonly validate: (state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => {
                settings: object;
            };
        }, {
            readonly name: "metric-conditions";
            readonly initState: (alert?: TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                settings: object;
            };
        }, {
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                settings: object;
            };
        }, {
            readonly name: "name-description";
            readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/name-description/schema.js").TState) => {
                settings: object;
            };
        }];
        readonly deduceApiAlert: (apiAlert: import("./watchlist/schema.js").TWatchlistApiAlert) => boolean;
        readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "watchlist";
            readonly initState: (apiAlert?: null | import("./watchlist/schema.js").TWatchlistApiAlert) => import("./watchlist/watchlist-form-step/state.js").TWatchlistState;
            readonly validate: (state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (alert?: TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/name-description/schema.js").TState) => {
                settings: object;
            };
        }>] & {
            length: 4;
        }) => Promise<string> | string;
        readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "watchlist";
            readonly initState: (apiAlert?: null | import("./watchlist/schema.js").TWatchlistApiAlert) => import("./watchlist/watchlist-form-step/state.js").TWatchlistState;
            readonly validate: (state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (alert?: TApiAlert<{
                metric: string;
                time_window: import("../time.js").TAPITimeWindow;
                operation: import("../operations.js").TApiOperation;
            }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/name-description/schema.js").TState) => {
                settings: object;
            };
        }>] & {
            length: 4;
        }) => Promise<string> | string;
    };
    screener: {
        readonly name: "screener";
        readonly ui: {
            label: string;
            description: string;
            icon: string;
        };
        readonly steps: readonly [{
            readonly name: "screener";
            readonly initState: (apiAlert?: null | import("./screener/schema.js").TScreenerApiAlert) => import("./screener/screener-form-step/schema.js").TScreenerState;
            readonly validate: (state: import("./screener/screener-form-step/schema.js").TScreenerState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("./screener/screener-form-step/schema.js").TScreenerState) => {
                settings: object;
            };
        }, {
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                settings: object;
            };
        }, {
            readonly name: "name-description";
            readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/name-description/schema.js").TState) => {
                settings: object;
            };
        }];
        readonly deduceApiAlert: (apiAlert: import("./screener/schema.js").TScreenerApiAlert) => boolean;
        readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "screener";
            readonly initState: (apiAlert?: null | import("./screener/schema.js").TScreenerApiAlert) => import("./screener/screener-form-step/schema.js").TScreenerState;
            readonly validate: (state: import("./screener/screener-form-step/schema.js").TScreenerState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("./screener/screener-form-step/schema.js").TScreenerState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/name-description/schema.js").TState) => {
                settings: object;
            };
        }>] & {
            length: 3;
        }) => Promise<string> | string;
        readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "screener";
            readonly initState: (apiAlert?: null | import("./screener/schema.js").TScreenerApiAlert) => import("./screener/screener-form-step/schema.js").TScreenerState;
            readonly validate: (state: import("./screener/screener-form-step/schema.js").TScreenerState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("./screener/screener-form-step/schema.js").TScreenerState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/name-description/schema.js").TState) => {
                settings: object;
            };
        }>] & {
            length: 3;
        }) => Promise<string> | string;
    };
    wallet: {
        readonly name: "wallet";
        readonly ui: {
            label: string;
            description: string;
            icon: string;
        };
        readonly steps: readonly [{
            readonly name: "wallet";
            readonly initState: (apiAlert?: null | import("./wallet/schema.js").TWalletApiAlert) => import("./wallet/wallet-form-step/schema.js").TWalletState;
            readonly validate: (state: import("./wallet/wallet-form-step/schema.js").TWalletState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("./wallet/wallet-form-step/schema.js").TWalletState) => {
                settings: object;
            };
        }, {
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                settings: object;
            };
        }, {
            readonly name: "name-description";
            readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/name-description/schema.js").TState) => {
                settings: object;
            };
        }];
        readonly deduceApiAlert: (apiAlert: import("./wallet/schema.js").TWalletApiAlert) => boolean;
        readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "wallet";
            readonly initState: (apiAlert?: null | import("./wallet/schema.js").TWalletApiAlert) => import("./wallet/wallet-form-step/schema.js").TWalletState;
            readonly validate: (state: import("./wallet/wallet-form-step/schema.js").TWalletState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("./wallet/wallet-form-step/schema.js").TWalletState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/name-description/schema.js").TState) => {
                settings: object;
            };
        }>] & {
            length: 3;
        }) => Promise<string> | string;
        readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "wallet";
            readonly initState: (apiAlert?: null | import("./wallet/schema.js").TWalletApiAlert) => import("./wallet/wallet-form-step/schema.js").TWalletState;
            readonly validate: (state: import("./wallet/wallet-form-step/schema.js").TWalletState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("./wallet/wallet-form-step/schema.js").TWalletState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/name-description/schema.js").TState) => {
                settings: object;
            };
        }>] & {
            length: 3;
        }) => Promise<string> | string;
    };
    "social-trends": {
        readonly name: "social-trends";
        readonly ui: {
            label: string;
            description: string;
            icon: string;
        };
        readonly steps: readonly [{
            readonly name: "select-trend";
            readonly initState: (apiAlert?: null | import("./social-trends/schema.js").TSocialTrendsApiAlert) => import("./social-trends/select-trend-form-step/schema.js").TTrendState;
            readonly validate: (state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => {
                settings: object;
            };
        }, {
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                settings: object;
            };
        }, {
            readonly name: "name-description";
            readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/name-description/schema.js").TState) => {
                settings: object;
            };
        }];
        readonly deduceApiAlert: (apiAlert: import("./social-trends/schema.js").TSocialTrendsApiAlert) => boolean;
        readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "select-trend";
            readonly initState: (apiAlert?: null | import("./social-trends/schema.js").TSocialTrendsApiAlert) => import("./social-trends/select-trend-form-step/schema.js").TTrendState;
            readonly validate: (state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/name-description/schema.js").TState) => {
                settings: object;
            };
        }>] & {
            length: 3;
        }) => Promise<string> | string;
        readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "select-trend";
            readonly initState: (apiAlert?: null | import("./social-trends/schema.js").TSocialTrendsApiAlert) => import("./social-trends/select-trend-form-step/schema.js").TTrendState;
            readonly validate: (state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../form-steps/notifications-privacy/schema.js").TNotificationsState;
            readonly validate: (state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "name-description";
            readonly initState: (apiAlert?: null | TApiAlert) => import("../form-steps/name-description/schema.js").TState;
            readonly validate: (state: import("../form-steps/name-description/schema.js").TState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/name-description/schema.js").TState) => {
                settings: object;
            };
        }>] & {
            length: 3;
        }) => Promise<string> | string;
    };
};
export type TAlertSchemaUnion = (typeof SCHEMAS)[number];
export declare function deduceApiAlertSchema(apiAlert?: null | TApiAlert): null | TAlertSchemaUnion;
