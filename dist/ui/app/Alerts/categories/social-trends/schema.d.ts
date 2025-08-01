import type { TApiAlert } from '../../types.js';
import type { TAssetSlug } from '../../../../../ctx/assets/index.js';
import { type TAlertBaseSchema } from '../types.js';
import { STEP_SELECT_TREND_SCHEMA } from './select-trend-form-step/schema.js';
export type TSocialTrendsApiAlert = TApiAlert<{
    type: 'trending_words';
} & TSocialTrendsApiAlertTarget>;
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
        watchlist_id: string | number | null;
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
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./select-trend-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./select-trend-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./select-trend-form-step/schema.js").TTrendState) => import("../../../../../utils/types/index.js").DeepPartial<TSocialTrendsApiAlert>;
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
    readonly deduceApiAlert: (apiAlert: Partial<TSocialTrendsApiAlert>) => boolean;
    readonly suggestTitle: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "select-trend";
        readonly initState: (apiAlert?: Partial<TSocialTrendsApiAlert> | null | undefined) => import("./select-trend-form-step/schema.js").TTrendState;
        readonly validate: (state: import("./select-trend-form-step/schema.js").TTrendState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./select-trend-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./select-trend-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./select-trend-form-step/schema.js").TTrendState) => import("../../../../../utils/types/index.js").DeepPartial<TSocialTrendsApiAlert>;
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
        readonly name: "select-trend";
        readonly initState: (apiAlert?: Partial<TSocialTrendsApiAlert> | null | undefined) => import("./select-trend-form-step/schema.js").TTrendState;
        readonly validate: (state: import("./select-trend-form-step/schema.js").TTrendState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./select-trend-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./select-trend-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./select-trend-form-step/schema.js").TTrendState) => import("../../../../../utils/types/index.js").DeepPartial<TSocialTrendsApiAlert>;
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
