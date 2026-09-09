import type { TWalletApiAlert } from '../schema.js';
import type { TMetricConditionsState } from '../../../form-steps/metric-conditions/schema.js';
import { type TStepBaseSchema } from '../../../form-steps/types.js';
import { Infrastructure } from '../../../../../../utils/address.js';
type TWalletSettings = NonNullable<TWalletApiAlert['settings']>;
export type TWalletState = {
    target: {
        address: string | null;
        readonly infrastructure: Infrastructure | undefined;
    };
    asset: {
        slug: string;
        name: string;
    } | null;
    type: TWalletSettings['type'] | null;
    conditions: TMetricConditionsState['conditions'] | null;
};
export type TBaseSchema = TStepBaseSchema<'wallet', TWalletApiAlert, TWalletState>;
export declare const STEP_SELECT_WALLET_SCHEMA: {
    readonly name: "wallet";
    readonly initState: (apiAlert?: Partial<TWalletApiAlert> | null | undefined) => TWalletState;
    readonly validate: (state: TWalletState) => boolean;
    readonly ui: import("../../../form-steps/types.js").TStepUI["ui"];
    readonly reduceToApi: (state: TWalletState) => TWalletApiAlert;
};
export {};
