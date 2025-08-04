import type { TApiOperation } from '../../operations.js';
import type { TTimeWindow } from '../../time.js';
import type { TApiAlert } from '../../types.js';
import { type TAlertBaseSchema } from '../types.js';
import { STEP_SELECT_WALLET_SCHEMA } from './wallet-form-step/schema.js';
export declare const WalletAlertTypes: readonly ["wallet_movement", "wallet_usd_valuation", "wallet_assets_held"];
export type TWalletAlertType = (typeof WalletAlertTypes)[number];
export type TWalletApiAlert = TApiAlert<{
    target: {
        address: string | string[];
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
    deduceApiAlert: (apiAlert: Partial<TWalletApiAlert>) => boolean;
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
        readonly initState: (apiAlert?: Partial<TWalletApiAlert> | null | undefined) => import("./wallet-form-step/schema.js").TWalletState;
        readonly validate: (state: import("./wallet-form-step/schema.js").TWalletState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./wallet-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./wallet-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./wallet-form-step/schema.js").TWalletState) => import("../../../../../utils/types/index.js").DeepPartial<TWalletApiAlert>;
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
    readonly deduceApiAlert: (apiAlert: Partial<TWalletApiAlert>) => boolean;
    readonly suggestTitle: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "wallet";
        readonly initState: (apiAlert?: Partial<TWalletApiAlert> | null | undefined) => import("./wallet-form-step/schema.js").TWalletState;
        readonly validate: (state: import("./wallet-form-step/schema.js").TWalletState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./wallet-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./wallet-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./wallet-form-step/schema.js").TWalletState) => import("../../../../../utils/types/index.js").DeepPartial<TWalletApiAlert>;
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
        length: 3;
    }) => Promise<string> | string;
    readonly suggestDescription: (steps: [import("../../form-steps/index.svelte.js").TAlertStep<{
        readonly name: "wallet";
        readonly initState: (apiAlert?: Partial<TWalletApiAlert> | null | undefined) => import("./wallet-form-step/schema.js").TWalletState;
        readonly validate: (state: import("./wallet-form-step/schema.js").TWalletState) => boolean;
        readonly ui: {
            title: string;
            label: string;
            description: string;
            Form: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./wallet-form-step/schema.js").TBaseSchema>;
            }, {}, string>;
            Legend?: import("svelte").Component<{
                state: import("../../form-steps/index.svelte.js").TBaseState<import("./wallet-form-step/schema.js").TBaseSchema>;
            }, {}, string> | undefined;
        };
        readonly reduceToApi: (state: import("./wallet-form-step/schema.js").TWalletState) => import("../../../../../utils/types/index.js").DeepPartial<TWalletApiAlert>;
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
        length: 3;
    }) => Promise<string> | string;
};
