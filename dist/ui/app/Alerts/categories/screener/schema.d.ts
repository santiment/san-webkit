import type { TApiAlert } from '../../types.js';
import { STEP_SELECT_SCREENER_SCHEMA } from './screener-form-step/schema.js';
import { type TAlertBaseSchema } from '../types.js';
export type TScreenerApiAlert = TApiAlert<{
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
}>;
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
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./screener-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./screener-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./screener-form-step/schema.js").TScreenerState) => import("../../../../../utils/types/index.js").DeepPartial<TScreenerApiAlert>;
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
    readonly deduceApiAlert: (apiAlert: Partial<TScreenerApiAlert>) => boolean;
    readonly suggestTitle: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "screener";
        readonly initState: (apiAlert?: Partial<TScreenerApiAlert> | null | undefined) => import("./screener-form-step/schema.js").TScreenerState;
        readonly validate: (state: import("./screener-form-step/schema.js").TScreenerState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./screener-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./screener-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./screener-form-step/schema.js").TScreenerState) => import("../../../../../utils/types/index.js").DeepPartial<TScreenerApiAlert>;
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
        length: 3;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "screener";
        readonly initState: (apiAlert?: Partial<TScreenerApiAlert> | null | undefined) => import("./screener-form-step/schema.js").TScreenerState;
        readonly validate: (state: import("./screener-form-step/schema.js").TScreenerState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./screener-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./screener-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./screener-form-step/schema.js").TScreenerState) => import("../../../../../utils/types/index.js").DeepPartial<TScreenerApiAlert>;
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
        length: 3;
    }) => Promise<string> | string;
};
