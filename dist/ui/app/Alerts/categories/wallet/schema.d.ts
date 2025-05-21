import type { TApiOperation } from '../../operations.js';
import type { TTimeWindow } from '../../time.js';
import type { TApiAlert } from '../../types.js';
import { type TAlertBaseSchema } from '../types.js';
import { STEP_SELECT_WALLET_SCHEMA } from './wallet-form-step/schema.js';
export declare const WalletAlertTypes: readonly ["wallet_movement", "wallet_usd_valuation", "wallet_assets_held"];
export type TWalletAlertType = (typeof WalletAlertTypes)[number];
export type TWalletApiAlert = TApiAlert<{
    target: {
        address: string;
    };
    type: TWalletAlertType;
    selector: {
        infrastructure?: string;
        slug?: string;
    };
    operation?: TApiOperation;
    time_window?: TTimeWindow;
}>;
export type TBaseSchema = TAlertBaseSchema<'wallet', {
    steps: [typeof STEP_SELECT_WALLET_SCHEMA];
    deduceApiAlert: (apiAlert: TWalletApiAlert) => boolean;
}>;
export declare const ALERT_WALLET_SCHEMA: {
    readonly name: "wallet";
    readonly ui: {
        label: string;
        description: string;
        icon: string;
    };
    readonly steps: readonly [{
        readonly name: "wallet";
        readonly initState: (apiAlert?: null | TWalletApiAlert) => import("./wallet-form-step/schema.js").TWalletState;
        readonly validate: (state: import("./wallet-form-step/schema.js").TWalletState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./wallet-form-step/schema.js").TWalletState) => {
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
    readonly deduceApiAlert: (apiAlert: TWalletApiAlert) => boolean;
    readonly suggestTitle: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "wallet";
        readonly initState: (apiAlert?: null | TWalletApiAlert) => import("./wallet-form-step/schema.js").TWalletState;
        readonly validate: (state: import("./wallet-form-step/schema.js").TWalletState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./wallet-form-step/schema.js").TWalletState) => {
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
        length: 3;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "wallet";
        readonly initState: (apiAlert?: null | TWalletApiAlert) => import("./wallet-form-step/schema.js").TWalletState;
        readonly validate: (state: import("./wallet-form-step/schema.js").TWalletState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<any>;
            Legend?: import("svelte").Component<any>;
        };
        readonly reduceToApi: (apiAlert: {
            settings: object;
        }, state: import("./wallet-form-step/schema.js").TWalletState) => {
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
        length: 3;
    }) => Promise<string> | string;
};
