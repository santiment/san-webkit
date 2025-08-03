import type { TApiAlert } from '../../types.js';
import { STEP_METRIC_CONDITIONS_SCHEMA } from '../../form-steps/metric-conditions/schema.js';
import { type TAlertBaseSchema } from '../types.js';
import { STEP_SELECT_WATCHLIST_SCHEMA } from './watchlist-form-step/schema.js';
export type TWatchlistApiAlert = TApiAlert<{
    type: 'metric_signal';
    target: {
        watchlist_id: string | number;
    };
}>;
export type TBaseSchema = TAlertBaseSchema<'watchlist', {
    steps: [typeof STEP_SELECT_WATCHLIST_SCHEMA, typeof STEP_METRIC_CONDITIONS_SCHEMA];
    deduceApiAlert: (apiAlert: Partial<TWatchlistApiAlert>) => boolean;
}>;
export declare const ALERT_WATCHLIST_SCHEMA: {
    readonly name: "watchlist";
    readonly ui: {
        label: string;
        description: string;
        icon: string;
    };
    readonly steps: readonly [{
        readonly name: "watchlist";
        readonly initState: (apiAlert?: Partial<TWatchlistApiAlert> | null | undefined) => import("./watchlist-form-step/state.js").TWatchlistState;
        readonly validate: (state: import("./watchlist-form-step/state.js").TWatchlistState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./watchlist-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./watchlist-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./watchlist-form-step/state.js").TWatchlistState) => import("../../../../../utils/types/index.js").DeepPartial<TWatchlistApiAlert>;
    }, {
        readonly name: "metric-conditions";
        readonly initState: (apiAlert?: Partial<TApiAlert<{
            metric: string;
            time_window: import("../../time.js").TAPITimeWindow;
            operation: import("../../operations.js").TApiOperation;
        }>> | null | undefined) => import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/metric-conditions/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/metric-conditions/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../../../../utils/types/index.js").DeepPartial<TApiAlert<{
            metric: string;
            time_window: import("../../time.js").TAPITimeWindow;
            operation: import("../../operations.js").TApiOperation;
        }>>;
    }, {
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/notifications-privacy/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/notifications-privacy/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("../../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../../../../../utils/types/index.js").DeepPartial<TApiAlert>;
    }, {
        readonly name: "name-description";
        readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../../form-steps/name-description/schema.js").TNameDescriptionState;
        readonly validate: (state: import("../../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/name-description/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/name-description/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("../../form-steps/name-description/schema.js").TNameDescriptionState) => import("../../../../../utils/types/index.js").DeepPartial<TApiAlert>;
    }];
    readonly deduceApiAlert: (apiAlert: Partial<TWatchlistApiAlert>) => boolean;
    readonly suggestTitle: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "watchlist";
        readonly initState: (apiAlert?: Partial<TWatchlistApiAlert> | null | undefined) => import("./watchlist-form-step/state.js").TWatchlistState;
        readonly validate: (state: import("./watchlist-form-step/state.js").TWatchlistState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./watchlist-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./watchlist-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./watchlist-form-step/state.js").TWatchlistState) => import("../../../../../utils/types/index.js").DeepPartial<TWatchlistApiAlert>;
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "metric-conditions";
        readonly initState: (apiAlert?: Partial<TApiAlert<{
            metric: string;
            time_window: import("../../time.js").TAPITimeWindow;
            operation: import("../../operations.js").TApiOperation;
        }>> | null | undefined) => import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/metric-conditions/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/metric-conditions/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../../../../utils/types/index.js").DeepPartial<TApiAlert<{
            metric: string;
            time_window: import("../../time.js").TAPITimeWindow;
            operation: import("../../operations.js").TApiOperation;
        }>>;
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/notifications-privacy/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/notifications-privacy/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("../../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../../../../../utils/types/index.js").DeepPartial<TApiAlert>;
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../../form-steps/name-description/schema.js").TNameDescriptionState;
        readonly validate: (state: import("../../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/name-description/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/name-description/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("../../form-steps/name-description/schema.js").TNameDescriptionState) => import("../../../../../utils/types/index.js").DeepPartial<TApiAlert>;
    }>] & {
        length: 4;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "watchlist";
        readonly initState: (apiAlert?: Partial<TWatchlistApiAlert> | null | undefined) => import("./watchlist-form-step/state.js").TWatchlistState;
        readonly validate: (state: import("./watchlist-form-step/state.js").TWatchlistState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./watchlist-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./watchlist-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./watchlist-form-step/state.js").TWatchlistState) => import("../../../../../utils/types/index.js").DeepPartial<TWatchlistApiAlert>;
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "metric-conditions";
        readonly initState: (apiAlert?: Partial<TApiAlert<{
            metric: string;
            time_window: import("../../time.js").TAPITimeWindow;
            operation: import("../../operations.js").TApiOperation;
        }>> | null | undefined) => import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/metric-conditions/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/metric-conditions/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../../../../utils/types/index.js").DeepPartial<TApiAlert<{
            metric: string;
            time_window: import("../../time.js").TAPITimeWindow;
            operation: import("../../operations.js").TApiOperation;
        }>>;
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/notifications-privacy/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/notifications-privacy/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("../../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../../../../../utils/types/index.js").DeepPartial<TApiAlert>;
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => import("../../form-steps/name-description/schema.js").TNameDescriptionState;
        readonly validate: (state: import("../../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/name-description/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/name-description/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("../../form-steps/name-description/schema.js").TNameDescriptionState) => import("../../../../../utils/types/index.js").DeepPartial<TApiAlert>;
    }>] & {
        length: 4;
    }) => Promise<string> | string;
};
