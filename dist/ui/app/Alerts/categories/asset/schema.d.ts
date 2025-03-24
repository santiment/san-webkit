import type { TAssetSlug } from '../../../../../ctx/assets/index.svelte.js';
import type { TApiAlert } from '../../types.js';
import { type TAlertBaseSchema } from '../types.js';
import { STEP_ASSETS_SCHEMA } from './asset-form-step/schema.js';
export type TAssetApiAlert = TApiAlert<{
    type: 'metric_signal';
    target: {
        slug: TAssetSlug[];
    };
    metric: string;
    operation: unknown;
    time_window: `${number}d`;
}>;
export type TBaseSchema = TAlertBaseSchema<'asset', {
    steps: [typeof STEP_ASSETS_SCHEMA];
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
    readonly deduceApiAlert: (apiAlert: TAssetApiAlert) => boolean;
};
