import { STEP_METRIC_CONDITIONS_SCHEMA } from '../../form-steps/metric-conditions/schema.js';
import { type TAlertBaseSchema } from '../types.js';
import { STEP_SELECT_WATCHLIST_SCHEMA } from './watchlist-form-step/schema.js';
export type TWatchlistApiAlert = {
    settings: {
        type: 'metric_signal';
        target: {
            watchlist_id: string | number;
        };
    };
};
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
        readonly initState: (apiAlert?: Partial<TWatchlistApiAlert> | null | undefined) => {
            watchlist: {
                id: string | null;
                title: string;
            };
        };
        readonly validate: (state: {
            watchlist: {
                id: string | null;
                title: string;
            };
        }) => boolean;
        readonly ui: import("../../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: {
            watchlist: {
                id: string | null;
                title: string;
            };
        }) => TWatchlistApiAlert;
    }, {
        readonly name: "metric-conditions";
        readonly initState: (apiAlert?: Partial<import("../../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: import("../../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
    }, {
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: Partial<import("../../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: import("../../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
    }, {
        readonly name: "name-description";
        readonly initState: (apiAlert?: Partial<import("../../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../../form-steps/name-description/schema.js").TNameDescriptionState;
        readonly validate: (state: import("../../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
        readonly ui: import("../../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../../form-steps/name-description/schema.js").TNameDescriptionState) => import("../../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
    }];
    readonly deduceApiAlert: (apiAlert: Partial<TWatchlistApiAlert>) => boolean;
    readonly suggestTitle: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "watchlist";
        readonly initState: (apiAlert?: Partial<TWatchlistApiAlert> | null | undefined) => {
            watchlist: {
                id: string | null;
                title: string;
            };
        };
        readonly validate: (state: {
            watchlist: {
                id: string | null;
                title: string;
            };
        }) => boolean;
        readonly ui: import("../../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: {
            watchlist: {
                id: string | null;
                title: string;
            };
        }) => TWatchlistApiAlert;
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "metric-conditions";
        readonly initState: (apiAlert?: Partial<import("../../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: import("../../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: Partial<import("../../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: import("../../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: Partial<import("../../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../../form-steps/name-description/schema.js").TNameDescriptionState;
        readonly validate: (state: import("../../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
        readonly ui: import("../../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../../form-steps/name-description/schema.js").TNameDescriptionState) => import("../../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
    }>] & {
        length: 4;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "watchlist";
        readonly initState: (apiAlert?: Partial<TWatchlistApiAlert> | null | undefined) => {
            watchlist: {
                id: string | null;
                title: string;
            };
        };
        readonly validate: (state: {
            watchlist: {
                id: string | null;
                title: string;
            };
        }) => boolean;
        readonly ui: import("../../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: {
            watchlist: {
                id: string | null;
                title: string;
            };
        }) => TWatchlistApiAlert;
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "metric-conditions";
        readonly initState: (apiAlert?: Partial<import("../../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert> | null | undefined) => import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: import("../../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../form-steps/metric-conditions/schema.js").TMetricConditionsApiAlert;
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: Partial<import("../../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert> | null | undefined) => import("../../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: import("../../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../../form-steps/notifications-privacy/schema.js").TNotificationsState) => import("../../form-steps/notifications-privacy/schema.js").TNotificationsApiAlert;
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: Partial<import("../../form-steps/name-description/schema.js").TNameDescriptionApiAlert> | null | undefined) => import("../../form-steps/name-description/schema.js").TNameDescriptionState;
        readonly validate: (state: import("../../form-steps/name-description/schema.js").TNameDescriptionState) => boolean;
        readonly ui: import("../../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("../../form-steps/name-description/schema.js").TNameDescriptionState) => import("../../form-steps/name-description/schema.js").TNameDescriptionApiAlert;
    }>] & {
        length: 4;
    }) => Promise<string> | string;
};
