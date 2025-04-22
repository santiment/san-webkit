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
        readonly initState: (apiAlert?: null | import("./asset/schema.js").TAssetApiAlert) => {
            target: {
                slug: string[];
            };
        };
        readonly validate: (state: {
            target: {
                slug: string[];
            };
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
            target: {
                slug: string[];
            };
        }) => {
            settings: object;
        };
    }, {
        readonly name: "metric-conditions";
        readonly initState: (alert?: TApiAlert<{
            metric: string;
            time_window: import("../time.js").TTimeWindow;
            operation: import("../operations.js").TApiOperation;
        }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
            settings: object;
        };
    }, {
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        };
        readonly validate: (state: {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
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
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
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
    readonly deduceApiAlert: (apiAlert: import("./asset/schema.js").TAssetApiAlert) => boolean;
    readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "assets";
        readonly initState: (apiAlert?: null | import("./asset/schema.js").TAssetApiAlert) => {
            target: {
                slug: string[];
            };
        };
        readonly validate: (state: {
            target: {
                slug: string[];
            };
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
            target: {
                slug: string[];
            };
        }) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "metric-conditions";
        readonly initState: (alert?: TApiAlert<{
            metric: string;
            time_window: import("../time.js").TTimeWindow;
            operation: import("../operations.js").TApiOperation;
        }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        };
        readonly validate: (state: {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
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
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        }) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        length: 4;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "assets";
        readonly initState: (apiAlert?: null | import("./asset/schema.js").TAssetApiAlert) => {
            target: {
                slug: string[];
            };
        };
        readonly validate: (state: {
            target: {
                slug: string[];
            };
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
            target: {
                slug: string[];
            };
        }) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "metric-conditions";
        readonly initState: (alert?: TApiAlert<{
            metric: string;
            time_window: import("../time.js").TTimeWindow;
            operation: import("../operations.js").TApiOperation;
        }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        };
        readonly validate: (state: {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
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
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        }) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        length: 4;
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
        readonly initState: (apiAlert?: null | import("./social-trends/schema.js").TSocialTrendsApiAlert) => Pick<NonNullable<import("./social-trends/schema.js").TSocialTrendsApiAlert["settings"]>, "target" | "operation">;
        readonly validate: (state: Pick<NonNullable<({
            channel: import("../channels.js").TApiChannel[];
        } & ({
            type: "trending_words";
        } & ({
            target: {
                slug: import("../../../../ctx/assets/index.svelte.js").TAssetSlug[];
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
            channel: import("../channels.js").TApiChannel[];
        } & ({
            type: "trending_words";
        } & ({
            target: {
                slug: import("../../../../ctx/assets/index.svelte.js").TAssetSlug[];
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
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        };
        readonly validate: (state: {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
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
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
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
    readonly deduceApiAlert: (apiAlert: import("./social-trends/schema.js").TSocialTrendsApiAlert) => boolean;
    readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "select-trend";
        readonly initState: (apiAlert?: null | import("./social-trends/schema.js").TSocialTrendsApiAlert) => Pick<NonNullable<import("./social-trends/schema.js").TSocialTrendsApiAlert["settings"]>, "target" | "operation">;
        readonly validate: (state: Pick<NonNullable<({
            channel: import("../channels.js").TApiChannel[];
        } & ({
            type: "trending_words";
        } & ({
            target: {
                slug: import("../../../../ctx/assets/index.svelte.js").TAssetSlug[];
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
            channel: import("../channels.js").TApiChannel[];
        } & ({
            type: "trending_words";
        } & ({
            target: {
                slug: import("../../../../ctx/assets/index.svelte.js").TAssetSlug[];
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
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        };
        readonly validate: (state: {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
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
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        }) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "select-trend";
        readonly initState: (apiAlert?: null | import("./social-trends/schema.js").TSocialTrendsApiAlert) => Pick<NonNullable<import("./social-trends/schema.js").TSocialTrendsApiAlert["settings"]>, "target" | "operation">;
        readonly validate: (state: Pick<NonNullable<({
            channel: import("../channels.js").TApiChannel[];
        } & ({
            type: "trending_words";
        } & ({
            target: {
                slug: import("../../../../ctx/assets/index.svelte.js").TAssetSlug[];
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
            channel: import("../channels.js").TApiChannel[];
        } & ({
            type: "trending_words";
        } & ({
            target: {
                slug: import("../../../../ctx/assets/index.svelte.js").TAssetSlug[];
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
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        };
        readonly validate: (state: {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
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
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        }) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
}, {
    readonly name: "watchlist";
    readonly ui: {
        label: string;
        description: string;
        icon: string;
    };
    readonly steps: readonly [{
        readonly name: "watchlist";
        readonly initState: (apiAlert?: null | import("./watchlist/schema.js").TWatchlistApiAlert) => {
            target: {
                watchlist_id: number | null;
            };
        };
        readonly validate: (state: {
            target: {
                watchlist_id: number | null;
            };
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
            target: {
                watchlist_id: number | null;
            };
        }) => {
            settings: object;
        };
    }, {
        readonly name: "metric-conditions";
        readonly initState: (alert?: TApiAlert<{
            metric: string;
            time_window: import("../time.js").TTimeWindow;
            operation: import("../operations.js").TApiOperation;
        }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
            settings: object;
        };
    }, {
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        };
        readonly validate: (state: {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
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
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
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
    readonly deduceApiAlert: (apiAlert: import("./watchlist/schema.js").TWatchlistApiAlert) => boolean;
    readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "watchlist";
        readonly initState: (apiAlert?: null | import("./watchlist/schema.js").TWatchlistApiAlert) => {
            target: {
                watchlist_id: number | null;
            };
        };
        readonly validate: (state: {
            target: {
                watchlist_id: number | null;
            };
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
            target: {
                watchlist_id: number | null;
            };
        }) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "metric-conditions";
        readonly initState: (alert?: TApiAlert<{
            metric: string;
            time_window: import("../time.js").TTimeWindow;
            operation: import("../operations.js").TApiOperation;
        }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        };
        readonly validate: (state: {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
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
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        }) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        length: 4;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "watchlist";
        readonly initState: (apiAlert?: null | import("./watchlist/schema.js").TWatchlistApiAlert) => {
            target: {
                watchlist_id: number | null;
            };
        };
        readonly validate: (state: {
            target: {
                watchlist_id: number | null;
            };
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
            target: {
                watchlist_id: number | null;
            };
        }) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "metric-conditions";
        readonly initState: (alert?: TApiAlert<{
            metric: string;
            time_window: import("../time.js").TTimeWindow;
            operation: import("../operations.js").TApiOperation;
        }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        };
        readonly validate: (state: {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
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
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        }) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        readonly initState: (apiAlert?: null | import("./screener/schema.js").TScreenerApiAlert) => Pick<NonNullable<import("./screener/schema.js").TScreenerApiAlert["settings"]>, "target" | "metric">;
        readonly validate: (state: Pick<{
            channel: import("../channels.js").TApiChannel[];
        } & {
            type: "screener_signal";
            metric: "social_volume_total";
            target: {
                watchlist_id: number | null;
            };
        }, "target" | "metric">) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: Pick<{
            channel: import("../channels.js").TApiChannel[];
        } & {
            type: "screener_signal";
            metric: "social_volume_total";
            target: {
                watchlist_id: number | null;
            };
        }, "target" | "metric">) => {
            settings: object;
        };
    }, {
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        };
        readonly validate: (state: {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
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
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
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
    readonly deduceApiAlert: (apiAlert: import("./screener/schema.js").TScreenerApiAlert) => boolean;
    readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "screener";
        readonly initState: (apiAlert?: null | import("./screener/schema.js").TScreenerApiAlert) => Pick<NonNullable<import("./screener/schema.js").TScreenerApiAlert["settings"]>, "target" | "metric">;
        readonly validate: (state: Pick<{
            channel: import("../channels.js").TApiChannel[];
        } & {
            type: "screener_signal";
            metric: "social_volume_total";
            target: {
                watchlist_id: number | null;
            };
        }, "target" | "metric">) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: Pick<{
            channel: import("../channels.js").TApiChannel[];
        } & {
            type: "screener_signal";
            metric: "social_volume_total";
            target: {
                watchlist_id: number | null;
            };
        }, "target" | "metric">) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        };
        readonly validate: (state: {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
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
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        }) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "screener";
        readonly initState: (apiAlert?: null | import("./screener/schema.js").TScreenerApiAlert) => Pick<NonNullable<import("./screener/schema.js").TScreenerApiAlert["settings"]>, "target" | "metric">;
        readonly validate: (state: Pick<{
            channel: import("../channels.js").TApiChannel[];
        } & {
            type: "screener_signal";
            metric: "social_volume_total";
            target: {
                watchlist_id: number | null;
            };
        }, "target" | "metric">) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: Pick<{
            channel: import("../channels.js").TApiChannel[];
        } & {
            type: "screener_signal";
            metric: "social_volume_total";
            target: {
                watchlist_id: number | null;
            };
        }, "target" | "metric">) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        };
        readonly validate: (state: {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
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
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        }) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
}, {
    readonly name: "wallet";
    readonly ui: {
        label: string;
        description: string;
        icon: string;
    };
    readonly steps: readonly [{
        readonly name: "wallet";
        readonly initState: (apiAlert?: null | import("./wallet/schema.js").TWalletApiAlert) => {
            target: {
                address: string;
            } | null;
            assetSlug: string | null;
            type: ("wallet_movement" | "wallet_usd_valuation" | "wallet_assets_held") | null;
            conditions: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState["conditions"] | null;
        };
        readonly validate: (state: {
            target: {
                address: string;
            } | null;
            assetSlug: string | null;
            type: ("wallet_movement" | "wallet_usd_valuation" | "wallet_assets_held") | null;
            conditions: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState["conditions"] | null;
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
            target: {
                address: string;
            } | null;
            assetSlug: string | null;
            type: ("wallet_movement" | "wallet_usd_valuation" | "wallet_assets_held") | null;
            conditions: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState["conditions"] | null;
        }) => {
            settings: object;
        };
    }, {
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        };
        readonly validate: (state: {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
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
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
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
    readonly deduceApiAlert: (apiAlert: import("./wallet/schema.js").TWalletApiAlert) => boolean;
    readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "wallet";
        readonly initState: (apiAlert?: null | import("./wallet/schema.js").TWalletApiAlert) => {
            target: {
                address: string;
            } | null;
            assetSlug: string | null;
            type: ("wallet_movement" | "wallet_usd_valuation" | "wallet_assets_held") | null;
            conditions: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState["conditions"] | null;
        };
        readonly validate: (state: {
            target: {
                address: string;
            } | null;
            assetSlug: string | null;
            type: ("wallet_movement" | "wallet_usd_valuation" | "wallet_assets_held") | null;
            conditions: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState["conditions"] | null;
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
            target: {
                address: string;
            } | null;
            assetSlug: string | null;
            type: ("wallet_movement" | "wallet_usd_valuation" | "wallet_assets_held") | null;
            conditions: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState["conditions"] | null;
        }) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        };
        readonly validate: (state: {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
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
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        }) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "wallet";
        readonly initState: (apiAlert?: null | import("./wallet/schema.js").TWalletApiAlert) => {
            target: {
                address: string;
            } | null;
            assetSlug: string | null;
            type: ("wallet_movement" | "wallet_usd_valuation" | "wallet_assets_held") | null;
            conditions: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState["conditions"] | null;
        };
        readonly validate: (state: {
            target: {
                address: string;
            } | null;
            assetSlug: string | null;
            type: ("wallet_movement" | "wallet_usd_valuation" | "wallet_assets_held") | null;
            conditions: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState["conditions"] | null;
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
            target: {
                address: string;
            } | null;
            assetSlug: string | null;
            type: ("wallet_movement" | "wallet_usd_valuation" | "wallet_assets_held") | null;
            conditions: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState["conditions"] | null;
        }) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        };
        readonly validate: (state: {
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
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
            channel: import("../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: import("../time.js").TTimeWindow;
        }) => {
            settings: object;
        };
    }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
            readonly initState: (apiAlert?: null | import("./asset/schema.js").TAssetApiAlert) => {
                target: {
                    slug: string[];
                };
            };
            readonly validate: (state: {
                target: {
                    slug: string[];
                };
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
                target: {
                    slug: string[];
                };
            }) => {
                settings: object;
            };
        }, {
            readonly name: "metric-conditions";
            readonly initState: (alert?: TApiAlert<{
                metric: string;
                time_window: import("../time.js").TTimeWindow;
                operation: import("../operations.js").TApiOperation;
            }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                settings: object;
            };
        }, {
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            };
            readonly validate: (state: {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
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
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
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
        readonly deduceApiAlert: (apiAlert: import("./asset/schema.js").TAssetApiAlert) => boolean;
        readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "assets";
            readonly initState: (apiAlert?: null | import("./asset/schema.js").TAssetApiAlert) => {
                target: {
                    slug: string[];
                };
            };
            readonly validate: (state: {
                target: {
                    slug: string[];
                };
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
                target: {
                    slug: string[];
                };
            }) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (alert?: TApiAlert<{
                metric: string;
                time_window: import("../time.js").TTimeWindow;
                operation: import("../operations.js").TApiOperation;
            }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            };
            readonly validate: (state: {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
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
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            }) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
            length: 4;
        }) => Promise<string> | string;
        readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "assets";
            readonly initState: (apiAlert?: null | import("./asset/schema.js").TAssetApiAlert) => {
                target: {
                    slug: string[];
                };
            };
            readonly validate: (state: {
                target: {
                    slug: string[];
                };
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
                target: {
                    slug: string[];
                };
            }) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (alert?: TApiAlert<{
                metric: string;
                time_window: import("../time.js").TTimeWindow;
                operation: import("../operations.js").TApiOperation;
            }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            };
            readonly validate: (state: {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
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
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            }) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
            length: 4;
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
            readonly initState: (apiAlert?: null | import("./social-trends/schema.js").TSocialTrendsApiAlert) => Pick<NonNullable<import("./social-trends/schema.js").TSocialTrendsApiAlert["settings"]>, "target" | "operation">;
            readonly validate: (state: Pick<NonNullable<({
                channel: import("../channels.js").TApiChannel[];
            } & ({
                type: "trending_words";
            } & ({
                target: {
                    slug: import("../../../../ctx/assets/index.svelte.js").TAssetSlug[];
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
                channel: import("../channels.js").TApiChannel[];
            } & ({
                type: "trending_words";
            } & ({
                target: {
                    slug: import("../../../../ctx/assets/index.svelte.js").TAssetSlug[];
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
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            };
            readonly validate: (state: {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
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
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
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
        readonly deduceApiAlert: (apiAlert: import("./social-trends/schema.js").TSocialTrendsApiAlert) => boolean;
        readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "select-trend";
            readonly initState: (apiAlert?: null | import("./social-trends/schema.js").TSocialTrendsApiAlert) => Pick<NonNullable<import("./social-trends/schema.js").TSocialTrendsApiAlert["settings"]>, "target" | "operation">;
            readonly validate: (state: Pick<NonNullable<({
                channel: import("../channels.js").TApiChannel[];
            } & ({
                type: "trending_words";
            } & ({
                target: {
                    slug: import("../../../../ctx/assets/index.svelte.js").TAssetSlug[];
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
                channel: import("../channels.js").TApiChannel[];
            } & ({
                type: "trending_words";
            } & ({
                target: {
                    slug: import("../../../../ctx/assets/index.svelte.js").TAssetSlug[];
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
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            };
            readonly validate: (state: {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
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
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            }) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "select-trend";
            readonly initState: (apiAlert?: null | import("./social-trends/schema.js").TSocialTrendsApiAlert) => Pick<NonNullable<import("./social-trends/schema.js").TSocialTrendsApiAlert["settings"]>, "target" | "operation">;
            readonly validate: (state: Pick<NonNullable<({
                channel: import("../channels.js").TApiChannel[];
            } & ({
                type: "trending_words";
            } & ({
                target: {
                    slug: import("../../../../ctx/assets/index.svelte.js").TAssetSlug[];
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
                channel: import("../channels.js").TApiChannel[];
            } & ({
                type: "trending_words";
            } & ({
                target: {
                    slug: import("../../../../ctx/assets/index.svelte.js").TAssetSlug[];
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
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            };
            readonly validate: (state: {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
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
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            }) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    watchlist: {
        readonly name: "watchlist";
        readonly ui: {
            label: string;
            description: string;
            icon: string;
        };
        readonly steps: readonly [{
            readonly name: "watchlist";
            readonly initState: (apiAlert?: null | import("./watchlist/schema.js").TWatchlistApiAlert) => {
                target: {
                    watchlist_id: number | null;
                };
            };
            readonly validate: (state: {
                target: {
                    watchlist_id: number | null;
                };
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
                target: {
                    watchlist_id: number | null;
                };
            }) => {
                settings: object;
            };
        }, {
            readonly name: "metric-conditions";
            readonly initState: (alert?: TApiAlert<{
                metric: string;
                time_window: import("../time.js").TTimeWindow;
                operation: import("../operations.js").TApiOperation;
            }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                settings: object;
            };
        }, {
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            };
            readonly validate: (state: {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
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
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
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
        readonly deduceApiAlert: (apiAlert: import("./watchlist/schema.js").TWatchlistApiAlert) => boolean;
        readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "watchlist";
            readonly initState: (apiAlert?: null | import("./watchlist/schema.js").TWatchlistApiAlert) => {
                target: {
                    watchlist_id: number | null;
                };
            };
            readonly validate: (state: {
                target: {
                    watchlist_id: number | null;
                };
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
                target: {
                    watchlist_id: number | null;
                };
            }) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (alert?: TApiAlert<{
                metric: string;
                time_window: import("../time.js").TTimeWindow;
                operation: import("../operations.js").TApiOperation;
            }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            };
            readonly validate: (state: {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
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
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            }) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
            length: 4;
        }) => Promise<string> | string;
        readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "watchlist";
            readonly initState: (apiAlert?: null | import("./watchlist/schema.js").TWatchlistApiAlert) => {
                target: {
                    watchlist_id: number | null;
                };
            };
            readonly validate: (state: {
                target: {
                    watchlist_id: number | null;
                };
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
                target: {
                    watchlist_id: number | null;
                };
            }) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "metric-conditions";
            readonly initState: (alert?: TApiAlert<{
                metric: string;
                time_window: import("../time.js").TTimeWindow;
                operation: import("../operations.js").TApiOperation;
            }> | null) => import("../form-steps/metric-conditions/schema.js").TMetricConditionsState;
            readonly validate: (state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            };
            readonly validate: (state: {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
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
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            }) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
            readonly initState: (apiAlert?: null | import("./screener/schema.js").TScreenerApiAlert) => Pick<NonNullable<import("./screener/schema.js").TScreenerApiAlert["settings"]>, "target" | "metric">;
            readonly validate: (state: Pick<{
                channel: import("../channels.js").TApiChannel[];
            } & {
                type: "screener_signal";
                metric: "social_volume_total";
                target: {
                    watchlist_id: number | null;
                };
            }, "target" | "metric">) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: Pick<{
                channel: import("../channels.js").TApiChannel[];
            } & {
                type: "screener_signal";
                metric: "social_volume_total";
                target: {
                    watchlist_id: number | null;
                };
            }, "target" | "metric">) => {
                settings: object;
            };
        }, {
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            };
            readonly validate: (state: {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
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
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
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
        readonly deduceApiAlert: (apiAlert: import("./screener/schema.js").TScreenerApiAlert) => boolean;
        readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "screener";
            readonly initState: (apiAlert?: null | import("./screener/schema.js").TScreenerApiAlert) => Pick<NonNullable<import("./screener/schema.js").TScreenerApiAlert["settings"]>, "target" | "metric">;
            readonly validate: (state: Pick<{
                channel: import("../channels.js").TApiChannel[];
            } & {
                type: "screener_signal";
                metric: "social_volume_total";
                target: {
                    watchlist_id: number | null;
                };
            }, "target" | "metric">) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: Pick<{
                channel: import("../channels.js").TApiChannel[];
            } & {
                type: "screener_signal";
                metric: "social_volume_total";
                target: {
                    watchlist_id: number | null;
                };
            }, "target" | "metric">) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            };
            readonly validate: (state: {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
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
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            }) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "screener";
            readonly initState: (apiAlert?: null | import("./screener/schema.js").TScreenerApiAlert) => Pick<NonNullable<import("./screener/schema.js").TScreenerApiAlert["settings"]>, "target" | "metric">;
            readonly validate: (state: Pick<{
                channel: import("../channels.js").TApiChannel[];
            } & {
                type: "screener_signal";
                metric: "social_volume_total";
                target: {
                    watchlist_id: number | null;
                };
            }, "target" | "metric">) => boolean;
            readonly ui: {
                title: string;
                label: string;
                description: string;
                Form: import("svelte").Component<any>;
                Legend?: import("svelte").Component<any>;
            };
            readonly reduceToApi: (apiAlert: {
                settings: object;
            }, state: Pick<{
                channel: import("../channels.js").TApiChannel[];
            } & {
                type: "screener_signal";
                metric: "social_volume_total";
                target: {
                    watchlist_id: number | null;
                };
            }, "target" | "metric">) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            };
            readonly validate: (state: {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
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
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            }) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
    wallet: {
        readonly name: "wallet";
        readonly ui: {
            label: string;
            description: string;
            icon: string;
        };
        readonly steps: readonly [{
            readonly name: "wallet";
            readonly initState: (apiAlert?: null | import("./wallet/schema.js").TWalletApiAlert) => {
                target: {
                    address: string;
                } | null;
                assetSlug: string | null;
                type: ("wallet_movement" | "wallet_usd_valuation" | "wallet_assets_held") | null;
                conditions: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState["conditions"] | null;
            };
            readonly validate: (state: {
                target: {
                    address: string;
                } | null;
                assetSlug: string | null;
                type: ("wallet_movement" | "wallet_usd_valuation" | "wallet_assets_held") | null;
                conditions: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState["conditions"] | null;
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
                target: {
                    address: string;
                } | null;
                assetSlug: string | null;
                type: ("wallet_movement" | "wallet_usd_valuation" | "wallet_assets_held") | null;
                conditions: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState["conditions"] | null;
            }) => {
                settings: object;
            };
        }, {
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            };
            readonly validate: (state: {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
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
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
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
        readonly deduceApiAlert: (apiAlert: import("./wallet/schema.js").TWalletApiAlert) => boolean;
        readonly suggestTitle: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "wallet";
            readonly initState: (apiAlert?: null | import("./wallet/schema.js").TWalletApiAlert) => {
                target: {
                    address: string;
                } | null;
                assetSlug: string | null;
                type: ("wallet_movement" | "wallet_usd_valuation" | "wallet_assets_held") | null;
                conditions: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState["conditions"] | null;
            };
            readonly validate: (state: {
                target: {
                    address: string;
                } | null;
                assetSlug: string | null;
                type: ("wallet_movement" | "wallet_usd_valuation" | "wallet_assets_held") | null;
                conditions: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState["conditions"] | null;
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
                target: {
                    address: string;
                } | null;
                assetSlug: string | null;
                type: ("wallet_movement" | "wallet_usd_valuation" | "wallet_assets_held") | null;
                conditions: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState["conditions"] | null;
            }) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            };
            readonly validate: (state: {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
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
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            }) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
        readonly suggestDescription: (steps: [import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "wallet";
            readonly initState: (apiAlert?: null | import("./wallet/schema.js").TWalletApiAlert) => {
                target: {
                    address: string;
                } | null;
                assetSlug: string | null;
                type: ("wallet_movement" | "wallet_usd_valuation" | "wallet_assets_held") | null;
                conditions: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState["conditions"] | null;
            };
            readonly validate: (state: {
                target: {
                    address: string;
                } | null;
                assetSlug: string | null;
                type: ("wallet_movement" | "wallet_usd_valuation" | "wallet_assets_held") | null;
                conditions: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState["conditions"] | null;
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
                target: {
                    address: string;
                } | null;
                assetSlug: string | null;
                type: ("wallet_movement" | "wallet_usd_valuation" | "wallet_assets_held") | null;
                conditions: import("../form-steps/metric-conditions/schema.js").TMetricConditionsState["conditions"] | null;
            }) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            };
            readonly validate: (state: {
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
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
                channel: import("../channels.js").TChannel;
                isPublic: boolean;
                isRepeating: boolean;
                cooldown: import("../time.js").TTimeWindow;
            }) => {
                settings: object;
            };
        }>, import("../form-steps/index.svelte.js").TAlertStep<{
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
};
export type TAlertSchemaUnion = (typeof SCHEMAS)[number];
export declare function deduceApiAlertSchema(apiAlert?: null | TApiAlert): null | TAlertSchemaUnion;
