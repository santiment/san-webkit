import { STEP_SELECT_SCREENER_SCHEMA } from './screener-form-step/schema.js';
import { type TAlertBaseSchema } from '../types.js';
export type TScreenerApiAlert = {
    settings: {
        type: 'screener_signal';
        metric: 'social_volume_total';
        target: {
            watchlist_id: string | number | null;
        } | 'default';
        operation: {
            selector: {
                watchlist_id: string | number;
            };
        };
    };
};
export type TBaseSchema = TAlertBaseSchema<'screener', {
    steps: [typeof STEP_SELECT_SCREENER_SCHEMA];
    deduceApiAlert: (apiAlert: Partial<TScreenerApiAlert>) => boolean;
}>;
export declare const ALERT_SCREENER_SCHEMA: {
    readonly name: "screener";
    readonly ui: {
        label: string;
        description: string;
        icon: string;
    };
    readonly steps: readonly [{
        readonly name: "screener";
        readonly initState: (apiAlert?: Partial<TScreenerApiAlert> | null | undefined) => import("./screener-form-step/schema.js").TScreenerState;
        readonly validate: (state: import("./screener-form-step/schema.js").TScreenerState) => boolean;
        readonly ui: import("../../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("./screener-form-step/schema.js").TScreenerState) => TScreenerApiAlert;
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
    readonly deduceApiAlert: (apiAlert: Partial<TScreenerApiAlert>) => boolean;
    readonly suggestTitle: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "screener";
        readonly initState: (apiAlert?: Partial<TScreenerApiAlert> | null | undefined) => import("./screener-form-step/schema.js").TScreenerState;
        readonly validate: (state: import("./screener-form-step/schema.js").TScreenerState) => boolean;
        readonly ui: import("../../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("./screener-form-step/schema.js").TScreenerState) => TScreenerApiAlert;
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
        length: 3;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "screener";
        readonly initState: (apiAlert?: Partial<TScreenerApiAlert> | null | undefined) => import("./screener-form-step/schema.js").TScreenerState;
        readonly validate: (state: import("./screener-form-step/schema.js").TScreenerState) => boolean;
        readonly ui: import("../../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("./screener-form-step/schema.js").TScreenerState) => TScreenerApiAlert;
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
        length: 3;
    }) => Promise<string> | string;
};
