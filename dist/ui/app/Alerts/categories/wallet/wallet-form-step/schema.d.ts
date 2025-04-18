import type { TWalletApiAlert } from '../schema.js';
import type { TMetricConditionsState } from '../../../form-steps/metric-conditions/schema.js';
import { type TStepBaseSchema } from '../../../form-steps/types.js';
type TWalletSettings = NonNullable<TWalletApiAlert['settings']>;
export type TBaseSchema = TStepBaseSchema<'wallet', {
    initState: (apiAlert?: null | TWalletApiAlert) => {
        target: TWalletSettings['target'] | null;
        assetSlug: string | null;
        type: TWalletSettings['type'] | null;
        conditions: TMetricConditionsState['conditions'] | null;
    };
}>;
export declare const STEP_SELECT_WALLET_SCHEMA: {
    readonly name: "wallet";
    readonly initState: (apiAlert?: null | TWalletApiAlert) => {
        target: TWalletSettings["target"] | null;
        assetSlug: string | null;
        type: TWalletSettings["type"] | null;
        conditions: TMetricConditionsState["conditions"] | null;
    };
    readonly validate: (state: {
        target: TWalletSettings["target"] | null;
        assetSlug: string | null;
        type: TWalletSettings["type"] | null;
        conditions: TMetricConditionsState["conditions"] | null;
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
        target: TWalletSettings["target"] | null;
        assetSlug: string | null;
        type: TWalletSettings["type"] | null;
        conditions: TMetricConditionsState["conditions"] | null;
    }) => {
        settings: object;
    };
};
export {};
