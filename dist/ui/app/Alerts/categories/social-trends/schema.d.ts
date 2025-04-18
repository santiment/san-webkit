import type { TAssetSlug } from '../../../../../ctx/assets/index.svelte.js';
import type { TApiAlert } from '../../types.js';
import { type TAlertBaseSchema } from '../types.js';
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
        watchlist_id: number;
    };
    operation: {
        trending_project: true;
    };
})>;
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
        readonly initState: (apiAlert?: null | TSocialTrendsApiAlert) => Pick<NonNullable<TSocialTrendsApiAlert["settings"]>, "target" | "operation">;
        readonly validate: (state: Pick<NonNullable<({
            channel: import("../../channels.js").TApiChannel[];
        } & ({
            type: "trending_words";
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
                watchlist_id: number;
            };
            operation: {
                trending_project: true;
            };
        }))) | null>, "target" | "operation">) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: Pick<NonNullable<({
            channel: import("../../channels.js").TApiChannel[];
        } & ({
            type: "trending_words";
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
                watchlist_id: number;
            };
            operation: {
                trending_project: true;
            };
        }))) | null>, "target" | "operation">) => {
            settings: object;
        };
    }, {
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
            channel: import("../../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../../time.js").TTimeWindow;
        };
        readonly validate: (state: {
            channel: import("../../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../../time.js").TTimeWindow;
        }) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: {
            channel: import("../../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../../time.js").TTimeWindow;
        }) => {
            settings: object;
        };
    }, {
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | TApiAlert) => {
            title: string;
            description: string;
        };
        readonly validate: (state: {
            title: string;
            description: string;
        }) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: {
            title: string;
            description: string;
        }) => {
            settings: object;
        };
    }];
    readonly deduceApiAlert: (apiAlert: TSocialTrendsApiAlert) => boolean;
    readonly suggestTitle: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "select-trend";
        readonly initState: (apiAlert?: null | TSocialTrendsApiAlert) => Pick<NonNullable<TSocialTrendsApiAlert["settings"]>, "target" | "operation">;
        readonly validate: (state: Pick<NonNullable<({
            channel: import("../../channels.js").TApiChannel[];
        } & ({
            type: "trending_words";
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
                watchlist_id: number;
            };
            operation: {
                trending_project: true;
            };
        }))) | null>, "target" | "operation">) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: Pick<NonNullable<({
            channel: import("../../channels.js").TApiChannel[];
        } & ({
            type: "trending_words";
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
                watchlist_id: number;
            };
            operation: {
                trending_project: true;
            };
        }))) | null>, "target" | "operation">) => {
            settings: object;
        };
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
            channel: import("../../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../../time.js").TTimeWindow;
        };
        readonly validate: (state: {
            channel: import("../../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../../time.js").TTimeWindow;
        }) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: {
            channel: import("../../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../../time.js").TTimeWindow;
        }) => {
            settings: object;
        };
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | TApiAlert) => {
            title: string;
            description: string;
        };
        readonly validate: (state: {
            title: string;
            description: string;
        }) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: {
            title: string;
            description: string;
        }) => {
            settings: object;
        };
    }>] & {
        length: 3;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "select-trend";
        readonly initState: (apiAlert?: null | TSocialTrendsApiAlert) => Pick<NonNullable<TSocialTrendsApiAlert["settings"]>, "target" | "operation">;
        readonly validate: (state: Pick<NonNullable<({
            channel: import("../../channels.js").TApiChannel[];
        } & ({
            type: "trending_words";
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
                watchlist_id: number;
            };
            operation: {
                trending_project: true;
            };
        }))) | null>, "target" | "operation">) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: Pick<NonNullable<({
            channel: import("../../channels.js").TApiChannel[];
        } & ({
            type: "trending_words";
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
                watchlist_id: number;
            };
            operation: {
                trending_project: true;
            };
        }))) | null>, "target" | "operation">) => {
            settings: object;
        };
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
            channel: import("../../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../../time.js").TTimeWindow;
        };
        readonly validate: (state: {
            channel: import("../../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../../time.js").TTimeWindow;
        }) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: {
            channel: import("../../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../../time.js").TTimeWindow;
        }) => {
            settings: object;
        };
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "name-description";
        readonly initState: (apiAlert?: null | TApiAlert) => {
            title: string;
            description: string;
        };
        readonly validate: (state: {
            title: string;
            description: string;
        }) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: {
            title: string;
            description: string;
        }) => {
            settings: object;
        };
    }>] & {
        length: 3;
    }) => Promise<string> | string;
};
