import type { TApiAlert } from '../../types.js';
import { STEP_SELECT_SCREENER_SCHEMA } from './screener-form-step/schema.js';
import { type TAlertBaseSchema } from '../types.js';
import { type Watchlist } from '../watchlist/api.js';
export type TScreenerApiAlert = TApiAlert<{
    type: 'screener_signal';
    metric: 'social_volume_total';
    target: {
        watchlist_id: Watchlist['id'] | null;
    };
}>;
export type TBaseSchema = TAlertBaseSchema<'screener', {
    steps: [typeof STEP_SELECT_SCREENER_SCHEMA];
    deduceApiAlert: (apiAlert: TScreenerApiAlert) => boolean;
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
        readonly initState: (apiAlert?: null | TScreenerApiAlert) => import("./screener-form-step/schema.js").TScreenerState;
        readonly validate: (state: import("./screener-form-step/schema.js").TScreenerState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./screener-form-step/schema.js").TScreenerState) => {
            settings: object;
        };
    }, {
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
            settings: object;
        };
    }, {
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | TApiAlert) => import("../../form-steps/name-description/schema.js").TState;
        readonly validate: (state: import("../../form-steps/name-description/schema.js").TState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../../form-steps/name-description/schema.js").TState) => {
            settings: object;
        };
    }];
    readonly deduceApiAlert: (apiAlert: TScreenerApiAlert) => boolean;
    readonly suggestTitle: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "screener";
        readonly initState: (apiAlert?: null | TScreenerApiAlert) => import("./screener-form-step/schema.js").TScreenerState;
        readonly validate: (state: import("./screener-form-step/schema.js").TScreenerState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./screener-form-step/schema.js").TScreenerState) => {
            settings: object;
        };
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
            settings: object;
        };
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | TApiAlert) => import("../../form-steps/name-description/schema.js").TState;
        readonly validate: (state: import("../../form-steps/name-description/schema.js").TState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../../form-steps/name-description/schema.js").TState) => {
            settings: object;
        };
    }>] & {
        length: 3;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "screener";
        readonly initState: (apiAlert?: null | TScreenerApiAlert) => import("./screener-form-step/schema.js").TScreenerState;
        readonly validate: (state: import("./screener-form-step/schema.js").TScreenerState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./screener-form-step/schema.js").TScreenerState) => {
            settings: object;
        };
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => import("../../form-steps/notifications-privacy/schema.js").TNotificationsState;
        readonly validate: (state: import("../../form-steps/notifications-privacy/schema.js").TNotificationsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../../form-steps/notifications-privacy/schema.js").TNotificationsState) => {
            settings: object;
        };
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | TApiAlert) => import("../../form-steps/name-description/schema.js").TState;
        readonly validate: (state: import("../../form-steps/name-description/schema.js").TState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../../form-steps/name-description/schema.js").TState) => {
            settings: object;
        };
    }>] & {
        length: 3;
    }) => Promise<string> | string;
};
