import type { TApiAlert } from '../../types.js';
import { STEP_SELECT_SCREENER_SCHEMA } from './screener-form-step/schema.js';
import { type TAlertBaseSchema } from '../types.js';
export type TScreenerApiAlert = TApiAlert<{
    type: 'screener_signal';
    metric: 'social_volume_total';
    target: {
        watchlist_id: number | null;
    };
}>;
export type TBaseSchema = TAlertBaseSchema<'screener', {
    steps: [typeof STEP_SELECT_SCREENER_SCHEMA];
    deduceApiAlert: (apiAlert: TScreenerApiAlert) => boolean;
}>;
export declare const ALERT_SCREENER_SCHEMA: {
    readonly name: "screener";
    readonly ui: {
        label: string;
        description: string;
        icon: string;
    };
    readonly steps: readonly [{
        readonly name: "screener";
        readonly initState: (apiAlert?: null | TScreenerApiAlert) => Pick<NonNullable<TScreenerApiAlert["settings"]>, "target" | "metric">;
        readonly validate: (state: Pick<{
            channel: import("../../channels.js").TApiChannel[];
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
            channel: import("../../channels.js").TApiChannel[];
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
    readonly deduceApiAlert: (apiAlert: TScreenerApiAlert) => boolean;
};
