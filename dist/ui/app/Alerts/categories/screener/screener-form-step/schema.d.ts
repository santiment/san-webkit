import type { TScreenerApiAlert } from '../schema.js';
import { type TStepBaseSchema } from '../../../form-steps/types.js';
export type TScreenerState = {
    metric: NonNullable<TScreenerApiAlert['settings']>['metric'];
    screener: {
        id: string | null;
        title: string;
    };
};
export type TBaseSchema = TStepBaseSchema<'screener', TScreenerApiAlert, TScreenerState>;
export declare const STEP_SELECT_SCREENER_SCHEMA: {
    readonly name: "screener";
    readonly initState: (apiAlert?: Partial<TScreenerApiAlert> | null | undefined) => TScreenerState;
    readonly validate: (state: TScreenerState) => boolean;
    readonly ui: {
        title: string;
        label: string;
        description: string;
        Form: import("svelte").Component<{
            state: import("../../../form-steps/index.svelte.js").TBaseState<TBaseSchema>;
        }, {}, string>;
        Legend?: import("svelte").Component<{
            state: import("../../../form-steps/index.svelte.js").TBaseState<TBaseSchema>;
        }, {}, string> | undefined;
    };
    readonly reduceToApi: (state: TScreenerState) => import("../../../../../../utils/types/index.js").DeepPartial<TScreenerApiAlert>;
};
