import type { TAssetApiAlert } from '../schema.js';
import type { TAssetSlug } from '../../../../../../ctx/assets/api.js';
import { type TStepBaseSchema } from '../../../form-steps/types.js';
export type TAssetState = {
    target: {
        slugs: TAssetSlug[];
        namesMap: Map<TAssetSlug, string>;
    };
};
export type TBaseSchema = TStepBaseSchema<'assets', TAssetApiAlert, TAssetState>;
export declare const STEP_ASSETS_SCHEMA: {
    readonly name: "assets";
    readonly initState: (apiAlert?: Partial<TAssetApiAlert> | null | undefined) => TAssetState;
    readonly validate: (state: TAssetState) => boolean;
    readonly ui: import("../../../form-steps/types.js").TStepUI["ui"];
    readonly reduceToApi: (state: TAssetState) => TAssetApiAlert;
};
