import type { TAssetApiAlert } from '../schema.js';
import type { TAssetState } from './state.js';
import { type TStepBaseSchema } from '../../../form-steps/types.js';
export type TBaseSchema = TStepBaseSchema<'assets', TAssetApiAlert, TAssetState>;
export declare const STEP_ASSETS_SCHEMA: {
    readonly name: "assets";
    readonly initState: (apiAlert?: Partial<TAssetApiAlert> | null | undefined) => TAssetState;
    readonly validate: (state: TAssetState) => boolean;
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
    readonly reduceToApi: (state: TAssetState) => import("../../../../../../utils/types/index.js").DeepPartial<TAssetApiAlert>;
};
