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
    deduceApiAlert: (apiAlert: Partial<TAssetApiAlert>) => boolean;
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
        readonly initState: (apiAlert?: Partial<TAssetApiAlert> | null | undefined) => import("./asset-form-step/state.js").TAssetState;
        readonly validate: (state: import("./asset-form-step/state.js").TAssetState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./asset-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./asset-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./asset-form-step/state.js").TAssetState) => import("../../../../../utils/types/index.js").DeepPartial<TAssetApiAlert>;
    }, {
        readonly name: "metric-conditions";
        readonly initState: (apiAlert?: Partial<TApiAlert<{
            metric: string;
            time_window: import("../../time.js").TAPITimeWindow;
            operation: import("../../operations.js").TApiOperation;
        }>> | null | undefined) => import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/metric-conditions/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/metric-conditions/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../../../../utils/types/index.js").DeepPartial<TApiAlert<{
            metric: string;
            time_window: import("../../time.js").TAPITimeWindow;
            operation: import("../../operations.js").TApiOperation;
        }>>;
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
    readonly deduceApiAlert: (apiAlert: Partial<TAssetApiAlert>) => boolean;
    readonly suggestTitle: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "assets";
        readonly initState: (apiAlert?: Partial<TAssetApiAlert> | null | undefined) => import("./asset-form-step/state.js").TAssetState;
        readonly validate: (state: import("./asset-form-step/state.js").TAssetState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./asset-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./asset-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./asset-form-step/state.js").TAssetState) => import("../../../../../utils/types/index.js").DeepPartial<TAssetApiAlert>;
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "metric-conditions";
        readonly initState: (apiAlert?: Partial<TApiAlert<{
            metric: string;
            time_window: import("../../time.js").TAPITimeWindow;
            operation: import("../../operations.js").TApiOperation;
        }>> | null | undefined) => import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/metric-conditions/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/metric-conditions/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../../../../utils/types/index.js").DeepPartial<TApiAlert<{
            metric: string;
            time_window: import("../../time.js").TAPITimeWindow;
            operation: import("../../operations.js").TApiOperation;
        }>>;
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
        length: 4;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "assets";
        readonly initState: (apiAlert?: Partial<TAssetApiAlert> | null | undefined) => import("./asset-form-step/state.js").TAssetState;
        readonly validate: (state: import("./asset-form-step/state.js").TAssetState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./asset-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./asset-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./asset-form-step/state.js").TAssetState) => import("../../../../../utils/types/index.js").DeepPartial<TAssetApiAlert>;
    }>, import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "metric-conditions";
        readonly initState: (apiAlert?: Partial<TApiAlert<{
            metric: string;
            time_window: import("../../time.js").TAPITimeWindow;
            operation: import("../../operations.js").TApiOperation;
        }>> | null | undefined) => import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState;
        readonly validate: (state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/metric-conditions/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("../../form-steps/metric-conditions/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState) => import("../../../../../utils/types/index.js").DeepPartial<TApiAlert<{
            metric: string;
            time_window: import("../../time.js").TAPITimeWindow;
            operation: import("../../operations.js").TApiOperation;
        }>>;
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
        length: 4;
    }) => Promise<string> | string;
};
