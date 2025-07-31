import type { Component } from 'svelte';
import type { TApiAlert } from '../types.js';
import type { TBaseState } from './index.svelte.js';
import type { DeepPartial } from '../../../../utils/types/index.js';
export type TStepBaseSchema<GName, GAlert extends TApiAlert, GState extends {
    [key: string]: unknown;
}> = {
    name: GName;
    initState: (apiAlert?: null | Partial<GAlert>) => GState;
    validate: (state: GState) => boolean;
    reduceToApi: (state: GState) => DeepPartial<GAlert>;
};
export type TStepUI<GState extends Record<string, any>> = {
    ui: {
        title: string;
        label: string;
        description: string;
        Form: Component<GState>;
        Legend?: Component<GState>;
    };
};
export type TStepSchema = TStepBaseSchema<string, TApiAlert, any> & TStepUI<any>;
export declare function createStepSchema<GBaseSchema extends TStepBaseSchema<string, any, any> = any>(base: GBaseSchema & TStepUI<{
    state: TBaseState<GBaseSchema>;
}>): {
    readonly name: GBaseSchema["name"];
    readonly initState: GBaseSchema["initState"];
    readonly validate: GBaseSchema["validate"];
    readonly ui: {
        title: string;
        label: string;
        description: string;
        Form: Component<{
            state: TBaseState<GBaseSchema>;
        }, {}, string>;
        Legend?: Component<{
            state: TBaseState<GBaseSchema>;
        }, {}, string> | undefined;
    };
    readonly reduceToApi: GBaseSchema["reduceToApi"];
};
