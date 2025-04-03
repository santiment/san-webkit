import type { TApiAlert } from '../../types.js';
import { type TStepBaseSchema } from '../types.js';
export type TBaseSchema = TStepBaseSchema<'notifications-privacy', {
    initState: (apiAlert?: null | TApiAlert) => {
        channel: string[];
        isPublic: boolean;
    };
}>;
export declare const STEP_NOTIFICATIONS_PRIVACY_SCHEMA: {
    readonly name: "notifications-privacy";
    readonly initState: (apiAlert?: null | TApiAlert) => {
        channel: string[];
        isPublic: boolean;
    };
    readonly validate: (state: {
        channel: string[];
        isPublic: boolean;
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
        channel: string[];
        isPublic: boolean;
    }) => {
        settings: object;
    };
};
