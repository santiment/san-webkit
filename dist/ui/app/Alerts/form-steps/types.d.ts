import type { Component } from 'svelte';
import type { TApiAlert } from '../types.js';
import type { TBaseState } from './index.svelte.js';
export type TStepBaseSchema<GName, GAlert extends Partial<TApiAlert>, GState extends {
    [key: string]: unknown;
}> = {
    name: GName;
    initState: (apiAlert?: null | Partial<GAlert>) => GState;
    validate: (state: GState) => boolean;
    reduceToApi: (state: GState) => GAlert;
};
export type TStepUI = {
    ui: {
        title: string;
        label: string;
        description: string;
        Form: Component<{
            state: TBaseState<any>;
        }>;
        Legend?: Component<{
            state: TBaseState<any>;
        }>;
    };
};
export type TStepSchema = TStepBaseSchema<string, Partial<TApiAlert>, any> & TStepUI;
export declare function createStepSchema<GBaseSchema extends TStepBaseSchema<string, any, any> = any>(base: GBaseSchema & TStepUI): {
    readonly name: GBaseSchema["name"];
    readonly initState: GBaseSchema["initState"];
    readonly validate: GBaseSchema["validate"];
    readonly ui: TStepUI["ui"];
    readonly reduceToApi: GBaseSchema["reduceToApi"];
};
