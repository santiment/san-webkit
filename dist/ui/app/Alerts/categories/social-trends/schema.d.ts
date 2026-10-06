import type { TAssetSlug } from '../../../../../ctx/assets/index.js';
import { type TAlertBaseSchema } from '../types.js';
import { STEP_SELECT_TREND_SCHEMA } from './select-trend-form-step/schema.js';
export type TSocialTrendsApiAlert = {
    settings: {
        type: 'trending_words';
    } & TSocialTrendsApiAlertTarget;
};
export type TSocialTrendsApiAlertTarget = {
    target: {
        slug: TAssetSlug[];
    };
    operation: {
        trending_project: true;
    };
} | {
    target: {
        word: string[];
    };
    operation: {
        trending_word: true;
    };
} | {
    target: {
        watchlist_id: number | null;
    };
    operation: {
        trending_project: true;
    };
};
export type TBaseSchema = TAlertBaseSchema<'social-trends', {
    steps: [typeof STEP_SELECT_TREND_SCHEMA];
    deduceApiAlert: (apiAlert: Partial<TSocialTrendsApiAlert>) => boolean;
}>;
export declare const ALERT_SOCIAL_TRENDS_SCHEMA: {
    readonly name: "social-trends";
    readonly ui: {
        label: string;
        description: string;
        icon: string;
    };
    readonly steps: readonly [{
        readonly name: "select-trend";
        readonly initState: (apiAlert?: Partial<TSocialTrendsApiAlert> | null | undefined) => import("./select-trend-form-step/schema.js").TTrendState;
        readonly validate: (state: import("./select-trend-form-step/schema.js").TTrendState) => boolean;
        readonly ui: import("../../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("./select-trend-form-step/schema.js").TTrendState) => TSocialTrendsApiAlert;
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
    readonly deduceApiAlert: (apiAlert: Partial<TSocialTrendsApiAlert>) => boolean;
    readonly suggestTitle: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "select-trend";
        readonly initState: (apiAlert?: Partial<TSocialTrendsApiAlert> | null | undefined) => import("./select-trend-form-step/schema.js").TTrendState;
        readonly validate: (state: import("./select-trend-form-step/schema.js").TTrendState) => boolean;
        readonly ui: import("../../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("./select-trend-form-step/schema.js").TTrendState) => TSocialTrendsApiAlert;
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
        readonly name: "select-trend";
        readonly initState: (apiAlert?: Partial<TSocialTrendsApiAlert> | null | undefined) => import("./select-trend-form-step/schema.js").TTrendState;
        readonly validate: (state: import("./select-trend-form-step/schema.js").TTrendState) => boolean;
        readonly ui: import("../../form-steps/types.js").TStepUI["ui"];
        readonly reduceToApi: (state: import("./select-trend-form-step/schema.js").TTrendState) => TSocialTrendsApiAlert;
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
