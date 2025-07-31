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
        readonly initState: (apiAlert?: Partial<import("./asset/schema.js").TAssetApiAlert> | null | undefined) => import("./asset/asset-form-step/state.js").TAssetState;
        readonly validate: (state: import("./asset/asset-form-step/state.js").TAssetState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./asset/asset-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./asset/asset-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./asset/asset-form-step/state.js").TAssetState) => import("../../../../utils/types/index.js").DeepPartial<import("./asset/schema.js").TAssetApiAlert>;
    }, {
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
    }, {
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
    }, {
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
    }];
    readonly deduceApiAlert: (apiAlert: Partial<import("./asset/schema.js").TAssetApiAlert>) => boolean;
    readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "assets";
        readonly initState: (apiAlert?: Partial<import("./asset/schema.js").TAssetApiAlert> | null | undefined) => import("./asset/asset-form-step/state.js").TAssetState;
        readonly validate: (state: import("./asset/asset-form-step/state.js").TAssetState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./asset/asset-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./asset/asset-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./asset/asset-form-step/state.js").TAssetState) => import("../../../../utils/types/index.js").DeepPartial<import("./asset/schema.js").TAssetApiAlert>;
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    }>] & {
        length: 4;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "assets";
        readonly initState: (apiAlert?: Partial<import("./asset/schema.js").TAssetApiAlert> | null | undefined) => import("./asset/asset-form-step/state.js").TAssetState;
        readonly validate: (state: import("./asset/asset-form-step/state.js").TAssetState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./asset/asset-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./asset/asset-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./asset/asset-form-step/state.js").TAssetState) => import("../../../../utils/types/index.js").DeepPartial<import("./asset/schema.js").TAssetApiAlert>;
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        readonly initState: (apiAlert?: Partial<import("./watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => import("./watchlist/watchlist-form-step/state.js").TWatchlistState;
        readonly validate: (state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./watchlist/watchlist-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./watchlist/watchlist-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => import("../../../../utils/types/index.js").DeepPartial<import("./watchlist/schema.js").TWatchlistApiAlert>;
    }, {
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
    }, {
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
    }, {
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
    }];
    readonly deduceApiAlert: (apiAlert: Partial<import("./watchlist/schema.js").TWatchlistApiAlert>) => boolean;
    readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "watchlist";
        readonly initState: (apiAlert?: Partial<import("./watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => import("./watchlist/watchlist-form-step/state.js").TWatchlistState;
        readonly validate: (state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./watchlist/watchlist-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./watchlist/watchlist-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => import("../../../../utils/types/index.js").DeepPartial<import("./watchlist/schema.js").TWatchlistApiAlert>;
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    }>] & {
        length: 4;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "watchlist";
        readonly initState: (apiAlert?: Partial<import("./watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => import("./watchlist/watchlist-form-step/state.js").TWatchlistState;
        readonly validate: (state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./watchlist/watchlist-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./watchlist/watchlist-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => import("../../../../utils/types/index.js").DeepPartial<import("./watchlist/schema.js").TWatchlistApiAlert>;
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        readonly initState: (apiAlert?: Partial<import("./screener/schema.js").TScreenerApiAlert> | null | undefined) => import("./screener/screener-form-step/schema.js").TScreenerState;
        readonly validate: (state: import("./screener/screener-form-step/schema.js").TScreenerState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./screener/screener-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./screener/screener-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./screener/screener-form-step/schema.js").TScreenerState) => import("../../../../utils/types/index.js").DeepPartial<import("./screener/schema.js").TScreenerApiAlert>;
    }, {
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
    }, {
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
    }];
    readonly deduceApiAlert: (apiAlert: Partial<import("./screener/schema.js").TScreenerApiAlert>) => boolean;
    readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "screener";
        readonly initState: (apiAlert?: Partial<import("./screener/schema.js").TScreenerApiAlert> | null | undefined) => import("./screener/screener-form-step/schema.js").TScreenerState;
        readonly validate: (state: import("./screener/screener-form-step/schema.js").TScreenerState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./screener/screener-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./screener/screener-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./screener/screener-form-step/schema.js").TScreenerState) => import("../../../../utils/types/index.js").DeepPartial<import("./screener/schema.js").TScreenerApiAlert>;
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    }>] & {
        length: 3;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "screener";
        readonly initState: (apiAlert?: Partial<import("./screener/schema.js").TScreenerApiAlert> | null | undefined) => import("./screener/screener-form-step/schema.js").TScreenerState;
        readonly validate: (state: import("./screener/screener-form-step/schema.js").TScreenerState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./screener/screener-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./screener/screener-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./screener/screener-form-step/schema.js").TScreenerState) => import("../../../../utils/types/index.js").DeepPartial<import("./screener/schema.js").TScreenerApiAlert>;
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        readonly initState: (apiAlert?: Partial<import("./wallet/schema.js").TWalletApiAlert> | null | undefined) => import("./wallet/wallet-form-step/schema.js").TWalletState;
        readonly validate: (state: import("./wallet/wallet-form-step/schema.js").TWalletState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./wallet/wallet-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./wallet/wallet-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./wallet/wallet-form-step/schema.js").TWalletState) => import("../../../../utils/types/index.js").DeepPartial<import("./wallet/schema.js").TWalletApiAlert>;
    }, {
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
    }, {
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
    }];
    readonly deduceApiAlert: (apiAlert: Partial<import("./wallet/schema.js").TWalletApiAlert>) => boolean;
    readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "wallet";
        readonly initState: (apiAlert?: Partial<import("./wallet/schema.js").TWalletApiAlert> | null | undefined) => import("./wallet/wallet-form-step/schema.js").TWalletState;
        readonly validate: (state: import("./wallet/wallet-form-step/schema.js").TWalletState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./wallet/wallet-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./wallet/wallet-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./wallet/wallet-form-step/schema.js").TWalletState) => import("../../../../utils/types/index.js").DeepPartial<import("./wallet/schema.js").TWalletApiAlert>;
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    }>] & {
        length: 3;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "wallet";
        readonly initState: (apiAlert?: Partial<import("./wallet/schema.js").TWalletApiAlert> | null | undefined) => import("./wallet/wallet-form-step/schema.js").TWalletState;
        readonly validate: (state: import("./wallet/wallet-form-step/schema.js").TWalletState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./wallet/wallet-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./wallet/wallet-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./wallet/wallet-form-step/schema.js").TWalletState) => import("../../../../utils/types/index.js").DeepPartial<import("./wallet/schema.js").TWalletApiAlert>;
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        readonly initState: (apiAlert?: Partial<import("./social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("./social-trends/select-trend-form-step/schema.js").TTrendState;
        readonly validate: (state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./social-trends/select-trend-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./social-trends/select-trend-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => import("../../../../utils/types/index.js").DeepPartial<import("./social-trends/schema.js").TSocialTrendsApiAlert>;
    }, {
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
    }, {
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
    }];
    readonly deduceApiAlert: (apiAlert: Partial<import("./social-trends/schema.js").TSocialTrendsApiAlert>) => boolean;
    readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "select-trend";
        readonly initState: (apiAlert?: Partial<import("./social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("./social-trends/select-trend-form-step/schema.js").TTrendState;
        readonly validate: (state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./social-trends/select-trend-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./social-trends/select-trend-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => import("../../../../utils/types/index.js").DeepPartial<import("./social-trends/schema.js").TSocialTrendsApiAlert>;
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    }>] & {
        length: 3;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "select-trend";
        readonly initState: (apiAlert?: Partial<import("./social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("./social-trends/select-trend-form-step/schema.js").TTrendState;
        readonly validate: (state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./social-trends/select-trend-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../form-steps/index.svelte.js").TBaseState<import("./social-trends/select-trend-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => import("../../../../utils/types/index.js").DeepPartial<import("./social-trends/schema.js").TSocialTrendsApiAlert>;
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
            readonly initState: (apiAlert?: Partial<import("./asset/schema.js").TAssetApiAlert> | null | undefined) => import("./asset/asset-form-step/state.js").TAssetState;
            readonly validate: (state: import("./asset/asset-form-step/state.js").TAssetState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./asset/asset-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./asset/asset-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("./asset/asset-form-step/state.js").TAssetState) => import("../../../../utils/types/index.js").DeepPartial<import("./asset/schema.js").TAssetApiAlert>;
        }, {
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
        }, {
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
        }, {
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
        }];
        readonly deduceApiAlert: (apiAlert: Partial<import("./asset/schema.js").TAssetApiAlert>) => boolean;
        readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "assets";
            readonly initState: (apiAlert?: Partial<import("./asset/schema.js").TAssetApiAlert> | null | undefined) => import("./asset/asset-form-step/state.js").TAssetState;
            readonly validate: (state: import("./asset/asset-form-step/state.js").TAssetState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./asset/asset-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./asset/asset-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("./asset/asset-form-step/state.js").TAssetState) => import("../../../../utils/types/index.js").DeepPartial<import("./asset/schema.js").TAssetApiAlert>;
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        }>] & {
            length: 4;
        }) => Promise<string> | string;
        readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "assets";
            readonly initState: (apiAlert?: Partial<import("./asset/schema.js").TAssetApiAlert> | null | undefined) => import("./asset/asset-form-step/state.js").TAssetState;
            readonly validate: (state: import("./asset/asset-form-step/state.js").TAssetState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./asset/asset-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./asset/asset-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("./asset/asset-form-step/state.js").TAssetState) => import("../../../../utils/types/index.js").DeepPartial<import("./asset/schema.js").TAssetApiAlert>;
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
            readonly initState: (apiAlert?: Partial<import("./watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => import("./watchlist/watchlist-form-step/state.js").TWatchlistState;
            readonly validate: (state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => import("../../../../utils/types/index.js").DeepPartial<import("./watchlist/schema.js").TWatchlistApiAlert>;
        }, {
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
        }, {
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
        }, {
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
        }];
        readonly deduceApiAlert: (apiAlert: Partial<import("./watchlist/schema.js").TWatchlistApiAlert>) => boolean;
        readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "watchlist";
            readonly initState: (apiAlert?: Partial<import("./watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => import("./watchlist/watchlist-form-step/state.js").TWatchlistState;
            readonly validate: (state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => import("../../../../utils/types/index.js").DeepPartial<import("./watchlist/schema.js").TWatchlistApiAlert>;
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        }>] & {
            length: 4;
        }) => Promise<string> | string;
        readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "watchlist";
            readonly initState: (apiAlert?: Partial<import("./watchlist/schema.js").TWatchlistApiAlert> | null | undefined) => import("./watchlist/watchlist-form-step/state.js").TWatchlistState;
            readonly validate: (state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./watchlist/watchlist-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("./watchlist/watchlist-form-step/state.js").TWatchlistState) => import("../../../../utils/types/index.js").DeepPartial<import("./watchlist/schema.js").TWatchlistApiAlert>;
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
            readonly initState: (apiAlert?: Partial<import("./screener/schema.js").TScreenerApiAlert> | null | undefined) => import("./screener/screener-form-step/schema.js").TScreenerState;
            readonly validate: (state: import("./screener/screener-form-step/schema.js").TScreenerState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./screener/screener-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./screener/screener-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("./screener/screener-form-step/schema.js").TScreenerState) => import("../../../../utils/types/index.js").DeepPartial<import("./screener/schema.js").TScreenerApiAlert>;
        }, {
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
        }, {
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
        }];
        readonly deduceApiAlert: (apiAlert: Partial<import("./screener/schema.js").TScreenerApiAlert>) => boolean;
        readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "screener";
            readonly initState: (apiAlert?: Partial<import("./screener/schema.js").TScreenerApiAlert> | null | undefined) => import("./screener/screener-form-step/schema.js").TScreenerState;
            readonly validate: (state: import("./screener/screener-form-step/schema.js").TScreenerState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./screener/screener-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./screener/screener-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("./screener/screener-form-step/schema.js").TScreenerState) => import("../../../../utils/types/index.js").DeepPartial<import("./screener/schema.js").TScreenerApiAlert>;
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        }>] & {
            length: 3;
        }) => Promise<string> | string;
        readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "screener";
            readonly initState: (apiAlert?: Partial<import("./screener/schema.js").TScreenerApiAlert> | null | undefined) => import("./screener/screener-form-step/schema.js").TScreenerState;
            readonly validate: (state: import("./screener/screener-form-step/schema.js").TScreenerState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./screener/screener-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./screener/screener-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("./screener/screener-form-step/schema.js").TScreenerState) => import("../../../../utils/types/index.js").DeepPartial<import("./screener/schema.js").TScreenerApiAlert>;
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
            readonly initState: (apiAlert?: Partial<import("./wallet/schema.js").TWalletApiAlert> | null | undefined) => import("./wallet/wallet-form-step/schema.js").TWalletState;
            readonly validate: (state: import("./wallet/wallet-form-step/schema.js").TWalletState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./wallet/wallet-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./wallet/wallet-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("./wallet/wallet-form-step/schema.js").TWalletState) => import("../../../../utils/types/index.js").DeepPartial<import("./wallet/schema.js").TWalletApiAlert>;
        }, {
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
        }, {
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
        }];
        readonly deduceApiAlert: (apiAlert: Partial<import("./wallet/schema.js").TWalletApiAlert>) => boolean;
        readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "wallet";
            readonly initState: (apiAlert?: Partial<import("./wallet/schema.js").TWalletApiAlert> | null | undefined) => import("./wallet/wallet-form-step/schema.js").TWalletState;
            readonly validate: (state: import("./wallet/wallet-form-step/schema.js").TWalletState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./wallet/wallet-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./wallet/wallet-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("./wallet/wallet-form-step/schema.js").TWalletState) => import("../../../../utils/types/index.js").DeepPartial<import("./wallet/schema.js").TWalletApiAlert>;
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        }>] & {
            length: 3;
        }) => Promise<string> | string;
        readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "wallet";
            readonly initState: (apiAlert?: Partial<import("./wallet/schema.js").TWalletApiAlert> | null | undefined) => import("./wallet/wallet-form-step/schema.js").TWalletState;
            readonly validate: (state: import("./wallet/wallet-form-step/schema.js").TWalletState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./wallet/wallet-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./wallet/wallet-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("./wallet/wallet-form-step/schema.js").TWalletState) => import("../../../../utils/types/index.js").DeepPartial<import("./wallet/schema.js").TWalletApiAlert>;
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
            readonly initState: (apiAlert?: Partial<import("./social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("./social-trends/select-trend-form-step/schema.js").TTrendState;
            readonly validate: (state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => import("../../../../utils/types/index.js").DeepPartial<import("./social-trends/schema.js").TSocialTrendsApiAlert>;
        }, {
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
        }, {
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
        }];
        readonly deduceApiAlert: (apiAlert: Partial<import("./social-trends/schema.js").TSocialTrendsApiAlert>) => boolean;
        readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "select-trend";
            readonly initState: (apiAlert?: Partial<import("./social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("./social-trends/select-trend-form-step/schema.js").TTrendState;
            readonly validate: (state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => import("../../../../utils/types/index.js").DeepPartial<import("./social-trends/schema.js").TSocialTrendsApiAlert>;
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        }>] & {
            length: 3;
        }) => Promise<string> | string;
        readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "select-trend";
            readonly initState: (apiAlert?: Partial<import("./social-trends/schema.js").TSocialTrendsApiAlert> | null | undefined) => import("./social-trends/select-trend-form-step/schema.js").TTrendState;
            readonly validate: (state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                }, {}, string>;
                Legend?: import("svelte").Component<{
                    state: import("../form-steps/index.svelte.js").TBaseState<import("./social-trends/select-trend-form-step/schema.js").TBaseSchema>;
                }, {}, string> | undefined;
            };
            readonly reduceToApi: (state: import("./social-trends/select-trend-form-step/schema.js").TTrendState) => import("../../../../utils/types/index.js").DeepPartial<import("./social-trends/schema.js").TSocialTrendsApiAlert>;
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        }>] & {
            length: 3;
        }) => Promise<string> | string;
    };
};
export type TAlertSchemaUnion = (typeof SCHEMAS)[number];
export declare function deduceApiAlertSchema(apiAlert?: null | Partial<TApiAlert>): null | TAlertSchemaUnion;
