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
        readonly initState: (apiAlert?: null | TAssetApiAlert) => import("./asset-form-step/state.js").TAssetState;
        readonly validate: (state: import("./asset-form-step/state.js").TAssetState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./asset-form-step/state.js").TAssetState) => {
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
    readonly deduceApiAlert: (apiAlert: TAssetApiAlert) => boolean;
    readonly suggestTitle: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "assets";
        readonly initState: (apiAlert?: null | TAssetApiAlert) => import("./asset-form-step/state.js").TAssetState;
        readonly validate: (state: import("./asset-form-step/state.js").TAssetState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./asset-form-step/state.js").TAssetState) => {
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
        length: 4;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "assets";
        readonly initState: (apiAlert?: null | TAssetApiAlert) => import("./asset-form-step/state.js").TAssetState;
        readonly validate: (state: import("./asset-form-step/state.js").TAssetState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./asset-form-step/state.js").TAssetState) => {
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
        length: 4;
    }) => Promise<string> | string;
};
