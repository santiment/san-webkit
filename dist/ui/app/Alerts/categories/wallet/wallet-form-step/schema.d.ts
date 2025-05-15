import type { TWalletApiAlert } from '../schema.js';
import type { TMetricConditionsState } from '../../../form-steps/metric-conditions/schema.js';
import { type TStepBaseSchema } from '../../../form-steps/types.js';
import { Infrastructure } from '../../../../../../utils/address.js';
type TWalletSettings = NonNullable<TWalletApiAlert['settings']>;
export type TWalletState = {
    target: {
        address: TWalletSettings['target']['address'] | null;
        readonly infrastructure: Infrastructure | undefined;
    };
    asset: {
        slug: string;
        name: string;
    } | null;
    type: TWalletSettings['type'] | null;
    conditions: TMetricConditionsState['conditions'] | null;
};
export type TBaseSchema = TStepBaseSchema<'wallet', {
    initState: (apiAlert?: null | TWalletApiAlert) => TWalletState;
}>;
export declare const STEP_SELECT_WALLET_SCHEMA: {
    readonly name: "wallet";
    readonly initState: (apiAlert?: null | TWalletApiAlert) => TWalletState;
    readonly validate: (state: TWalletState) => boolean;
    readonly ui: {
        title: string;
        label: string;
        description: string;
        Form: import("svelte").Component<any>;
        Legend?: import("svelte").Component<any>;
    };
    readonly reduceToApi: (apiAlert: {
        settings: object;
    }, state: TWalletState) => {
        settings: object;
    };
};
export {};
