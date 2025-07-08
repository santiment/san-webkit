import type { Component } from 'svelte';
import type { TApiAlert } from '../types.js';
export type TStepBaseSchema<GName, GProps extends {
    initState: (apiAlert?: null | TApiAlert) => {
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
export type TStepUI = {
    ui: {
        title: string;
        label: string;
        description: string;
        Form: Component<any>;
        Legend?: Component<any>;
    };
};
export type TStepSchema = TStepBaseSchema<string, {
    initState: (apiAlert?: null | TApiAlert) => any;
}> & TStepUI;
export declare function createStepSchema<GBaseSchema extends TStepBaseSchema<string, any> = any>(base: GBaseSchema & TStepUI): {
    readonly name: GBaseSchema["name"];
    readonly initState: GBaseSchema["initState"];
    readonly validate: GBaseSchema["validate"];
    readonly ui: {
        title: string;
        label: string;
        description: string;
        Form: Component<any>;
        Legend?: Component<any>;
    };
    readonly reduceToApi: GBaseSchema["reduceToApi"];
};
