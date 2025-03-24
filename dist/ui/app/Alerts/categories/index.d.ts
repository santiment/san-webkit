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
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert) => {
            channel: string[];
            isPublic: boolean;
        };
        readonly validate: (state: {
            channel: string[];
            isPublic: boolean;
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
            channel: string[];
            isPublic: boolean;
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
            channel: ("email" | "telegram")[];
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
            channel: ("email" | "telegram")[];
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
        readonly initState: (apiAlert?: null | TApiAlert) => {
            channel: string[];
            isPublic: boolean;
        };
        readonly validate: (state: {
            channel: string[];
            isPublic: boolean;
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
            channel: string[];
            isPublic: boolean;
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
            readonly name: "notifications-privacy";
            readonly initState: (apiAlert?: null | TApiAlert) => {
                channel: string[];
                isPublic: boolean;
            };
            readonly validate: (state: {
                channel: string[];
                isPublic: boolean;
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
                channel: string[];
                isPublic: boolean;
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
                channel: ("email" | "telegram")[];
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
                channel: ("email" | "telegram")[];
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
            readonly initState: (apiAlert?: null | TApiAlert) => {
                channel: string[];
                isPublic: boolean;
            };
            readonly validate: (state: {
                channel: string[];
                isPublic: boolean;
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
                channel: string[];
                isPublic: boolean;
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
    };
};
export type TAlertSchemaUnion = (typeof SCHEMAS)[number];
export declare function deduceApiAlertSchema(apiAlert?: null | TApiAlert): null | TAlertSchemaUnion;
