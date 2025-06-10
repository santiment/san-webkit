import type { TAssetApiAlert } from '../schema.js';
import type { TAssetState } from './state.js';
import { type TStepBaseSchema } from '../../../form-steps/types.js';
export type TBaseSchema = TStepBaseSchema<'assets', {
    initState: (apiAlert?: null | TAssetApiAlert) => TAssetState;
}>;
export declare const STEP_ASSETS_SCHEMA: {
    readonly name: "assets";
    readonly initState: (apiAlert?: null | TAssetApiAlert) => TAssetState;
    readonly validate: (state: TAssetState) => boolean;
    readonly ui: {
        title: string;
        label: string;
        description: string;
        Form: import("svelte").Component<any>;
        Legend?: import("svelte").Component<any>;
    };
    readonly reduceToApi: (apiAlert: {
        settings: object;
    }, state: TAssetState) => {
        settings: object;
    };
};
