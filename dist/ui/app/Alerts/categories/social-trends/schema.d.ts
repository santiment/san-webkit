import type { TApiAlert } from '../../types.js';
import type { TAssetSlug } from '../../../../../ctx/assets/index.js';
import { type TAlertBaseSchema } from '../types.js';
import { type Watchlist } from '../watchlist/api.js';
import { STEP_SELECT_TREND_SCHEMA } from './select-trend-form-step/schema.js';
export type TSocialTrendsApiAlert = TApiAlert<{
    type: 'trending_words';
} & ({
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
        watchlist_id: Watchlist['id'] | null;
    };
    operation: {
        trending_project: true;
    };
})>;
export type TSocialTrendsApiAlertTarget = NonNullable<TSocialTrendsApiAlert['settings']>['target'];
export type TBaseSchema = TAlertBaseSchema<'social-trends', {
    steps: [typeof STEP_SELECT_TREND_SCHEMA];
    deduceApiAlert: (apiAlert: TSocialTrendsApiAlert) => boolean;
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
        readonly initState: (apiAlert?: null | TSocialTrendsApiAlert) => import("./select-trend-form-step/schema.js").TTrendState;
        readonly validate: (state: import("./select-trend-form-step/schema.js").TTrendState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./select-trend-form-step/schema.js").TTrendState) => {
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
    readonly deduceApiAlert: (apiAlert: TSocialTrendsApiAlert) => boolean;
    readonly suggestTitle: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "select-trend";
        readonly initState: (apiAlert?: null | TSocialTrendsApiAlert) => import("./select-trend-form-step/schema.js").TTrendState;
        readonly validate: (state: import("./select-trend-form-step/schema.js").TTrendState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./select-trend-form-step/schema.js").TTrendState) => {
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
        readonly name: "select-trend";
        readonly initState: (apiAlert?: null | TSocialTrendsApiAlert) => import("./select-trend-form-step/schema.js").TTrendState;
        readonly validate: (state: import("./select-trend-form-step/schema.js").TTrendState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./select-trend-form-step/schema.js").TTrendState) => {
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
