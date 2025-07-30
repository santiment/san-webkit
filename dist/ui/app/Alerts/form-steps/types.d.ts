import type { Component } from 'svelte';
import type { TApiAlert } from '../types.js';
import type { TBaseState } from './index.svelte.js';
export type TStepBaseSchema<GName, GProps extends {
    initState: (apiAlert?: null | Partial<TApiAlert>) => {
        [key: string]: unknown;
    };
}> = {
    name: GName;
    initState: GProps['initState'];
    validate: (state: ReturnType<GProps['initState']>) => boolean;
    reduceToApi: (apiAlert: {
        settings: object;
    }, state: ReturnType<GProps['initState']>) => {
        settings: object;
    };
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
export type TStepSchema = TStepBaseSchema<string, {
    initState: (apiAlert?: null | Partial<TApiAlert>) => any;
}> & TStepUI<any>;
export declare function createStepSchema<GBaseSchema extends TStepBaseSchema<string, any> = any>(base: GBaseSchema & TStepUI<{
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
