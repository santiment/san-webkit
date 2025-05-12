import type { TApiAlert } from '../types.js';
import type { TStepBaseSchema, TStepSchema, TStepUI } from './types.js';
import type { IfAny } from '../../../../utils/types/index.js';
export declare function createAlertStep<GStepSchema extends TStepSchema>(apiAlert: undefined | null | TApiAlert, schema: GStepSchema): {
    name: string;
    ui: {
        title: string;
        label: string;
        description: string;
        Form: import("svelte").Component<any>;
        Legend?: import("svelte").Component<any>;
    };
    reduceToApi: (apiAlert: {
        settings: object;
    }, state: any) => {
        settings: object;
    };
    state: {
        $$: {
            [key: string]: unknown;
        };
    };
    isValid: {
        readonly $: boolean;
    };
};
export type TAlertStep<GStepSchema extends TStepBaseSchema<string, any>> = {
    name: GStepSchema['name'];
    ui: TStepUI;
    reduceToApi: GStepSchema['reduceToApi'];
    state: {
        get $$(): IfAny<ReturnType<GStepSchema['initState']>, unknown, ReturnType<GStepSchema['initState']>>;
        set $$(value: IfAny<ReturnType<GStepSchema['initState']>, unknown, ReturnType<GStepSchema['initState']>>);
    };
    isValid: {
        get $(): boolean;
    };
};
