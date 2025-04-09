import type { TApiOperation } from '../../operations.js';
import type { TTimeWindow } from '../../time.js';
import type { TApiAlert } from '../../types.js';
import { type TAlertBaseSchema } from '../types.js';
import { STEP_SELECT_WALLET_SCHEMA } from './wallet-form-step/schema.js';
export declare const WalletAlertTypes: readonly ["wallet_movement", "wallet_usd_valuation", "wallet_assets_held"];
export type TWalletApiAlert = TApiAlert<{
    target: {
        address: string;
    };
    type: (typeof WalletAlertTypes)[number];
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
        readonly initState: (apiAlert?: null | TWalletApiAlert) => {
            target: {
                address: string;
            } | null;
            assetSlug: string | null;
            type: ("wallet_movement" | "wallet_usd_valuation" | "wallet_assets_held") | null;
            conditions: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState["conditions"] | null;
        };
        readonly validate: (state: {
            target: {
                address: string;
            } | null;
            assetSlug: string | null;
            type: ("wallet_movement" | "wallet_usd_valuation" | "wallet_assets_held") | null;
            conditions: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState["conditions"] | null;
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
            conditions: import("../../form-steps/metric-conditions/schema.js").TMetricConditionsState["conditions"] | null;
        }) => {
            settings: object;
        };
    }, {
        readonly name: "notifications-privacy";
        readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
            channel: import("../../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: TTimeWindow;
        };
        readonly validate: (state: {
            channel: import("../../channels.js").TChannel;
            isPublic: boolean;
            isRepeating: boolean;
            cooldown: TTimeWindow;
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
            cooldown: TTimeWindow;
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
    readonly deduceApiAlert: (apiAlert: TWalletApiAlert) => boolean;
};
