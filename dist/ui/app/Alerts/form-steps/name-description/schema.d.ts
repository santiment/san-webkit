import type { TApiAlert } from '../../types.js';
import { type TStepBaseSchema } from '../types.js';
export type TNameDescriptionState = {
    title: string;
    description: string;
};
export type TBaseSchema = TStepBaseSchema<'name-description', {
    initState: (apiAlert?: null | Partial<TApiAlert>) => TNameDescriptionState;
}>;
export declare const STEP_NAME_DESCRIPTION_SCHEMA: {
    readonly name: "name-description";
    readonly initState: (apiAlert?: null | Partial<TApiAlert>) => TNameDescriptionState;
    readonly validate: (state: TNameDescriptionState) => boolean;
    readonly ui: {
        title: string;
        label: string;
        description: string;
        Form: import("svelte").Component<{
            state: import("../index.svelte.js").TBaseState<TBaseSchema>;
        }, {}, string>;
        Legend?: import("svelte").Component<{
            state: import("../index.svelte.js").TBaseState<TBaseSchema>;
        }, {}, string> | undefined;
    };
    readonly reduceToApi: (apiAlert: {
        settings: object;
    }, state: TNameDescriptionState) => {
        settings: object;
    };
};
