import { type TStepBaseSchema } from '../types.js';
export type TNameDescriptionState = {
    title: string;
    description: string;
};
export type TNameDescriptionApiAlert = {
    title: string;
    description: null | string;
};
export type TBaseSchema = TStepBaseSchema<'name-description', TNameDescriptionApiAlert, TNameDescriptionState>;
export declare const STEP_NAME_DESCRIPTION_SCHEMA: {
    readonly name: "name-description";
    readonly initState: (apiAlert?: Partial<TNameDescriptionApiAlert> | null | undefined) => TNameDescriptionState;
    readonly validate: (state: TNameDescriptionState) => boolean;
    readonly ui: import("../types.js").TStepUI["ui"];
    readonly reduceToApi: (state: TNameDescriptionState) => TNameDescriptionApiAlert;
};
