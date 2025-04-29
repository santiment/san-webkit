import type { TApiAlert } from '../../types.js';
import type { TAssetSlug } from '../../../../../ctx/assets/index.js';
import { STEP_METRIC_CONDITIONS_SCHEMA } from '../../form-steps/metric-conditions/schema.js';
import { type TAlertBaseSchema } from '../types.js';
import { STEP_ASSETS_SCHEMA } from './asset-form-step/schema.js';
export type TAssetApiAlert = TApiAlert<{
    type: 'metric_signal';
    target: {
        slug: TAssetSlug[];
    };
}>;
export type TBaseSchema = TAlertBaseSchema<'asset', {
    steps: [typeof STEP_ASSETS_SCHEMA, typeof STEP_METRIC_CONDITIONS_SCHEMA];
    deduceApiAlert: (apiAlert: TAssetApiAlert) => boolean;
}>;
export declare const ALERT_ASSET_SCHEMA: {
    readonly name: "asset";
    readonly ui: {
        label: string;
        description: string;
        icon: string;
    };
    readonly steps: readonly [{
        readonly name: "assets";
        readonly initState: (apiAlert?: null | TAssetApiAlert) => {
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
            time_window: import("../../time.js").TTimeWindow;
            operation: import("../../operations.js").TApiOperation;
        }> | null) => import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
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
    readonly deduceApiAlert: (apiAlert: TAssetApiAlert) => boolean;
    readonly suggestTitle: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "assets";
        readonly initState: (apiAlert?: null | TAssetApiAlert) => {
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
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "metric-conditions";
        readonly initState: (alert?: TApiAlert<{
            metric: string;
            time_window: import("../../time.js").TTimeWindow;
            operation: import("../../operations.js").TApiOperation;
        }> | null) => import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
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
        length: 4;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "assets";
        readonly initState: (apiAlert?: null | TAssetApiAlert) => {
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
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "metric-conditions";
        readonly initState: (alert?: TApiAlert<{
            metric: string;
            time_window: import("../../time.js").TTimeWindow;
            operation: import("../../operations.js").TApiOperation;
        }> | null) => import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => {
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
        length: 4;
    }) => Promise<string> | string;
};
