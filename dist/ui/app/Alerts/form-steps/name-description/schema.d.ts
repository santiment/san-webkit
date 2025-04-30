import type { TApiAlert } from '../../types.js';
import { type TStepBaseSchema } from '../types.js';
export type TBaseSchema = TStepBaseSchema<'name-description', {
    initState: (apiAlert?: null | TApiAlert) => {
        title: string;
        description: string;
    };
}>;
export declare const STEP_NAME_DESCRIPTION_SCHEMA: {
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
};
