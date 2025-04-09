import type { TApiAlert } from '../../types.js';
import { STEP_METRIC_CONDITIONS_SCHEMA } from '../../form-steps/metric-conditions/schema.js';
import { type TAlertBaseSchema } from '../types.js';
import { STEP_SELECT_WATCHLIST_SCHEMA } from './watchlist-form-step/schema.js';
export type TWatchlistApiAlert = TApiAlert<{
    type: 'metric_signal';
    target: {
        watchlist_id: number;
    };
}>;
export type TBaseSchema = TAlertBaseSchema<'watchlist', {
    steps: [typeof STEP_SELECT_WATCHLIST_SCHEMA, typeof STEP_METRIC_CONDITIONS_SCHEMA];
    deduceApiAlert: (apiAlert: TWatchlistApiAlert) => boolean;
}>;
export declare const ALERT_WATCHLIST_SCHEMA: {
    readonly name: "watchlist";
    readonly ui: {
        label: string;
        description: string;
        icon: string;
    };
    readonly steps: readonly [{
        readonly name: "watchlist";
        readonly initState: (apiAlert?: null | TWatchlistApiAlert) => {
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
    readonly deduceApiAlert: (apiAlert: TWatchlistApiAlert) => boolean;
};
