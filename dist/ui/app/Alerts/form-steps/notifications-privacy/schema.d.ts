import type { TTimeWindow } from '../../time.js';
import type { TApiAlert } from '../../types.js';
import { type TChannel } from '../../channels.js';
import { type TStepBaseSchema } from '../types.js';
export type TBaseSchema = TStepBaseSchema<'notifications-privacy', {
    initState: (apiAlert?: null | TApiAlert<unknown>) => {
        channel: TChannel;
        isPublic: boolean;
        isRepeating: boolean;
        cooldown: TTimeWindow;
    };
}>;
export declare const STEP_NOTIFICATIONS_PRIVACY_SCHEMA: {
    readonly name: "notifications-privacy";
    readonly initState: (apiAlert?: null | TApiAlert<unknown>) => {
        channel: TChannel;
        isPublic: boolean;
        isRepeating: boolean;
        cooldown: TTimeWindow;
    };
    readonly validate: (state: {
        channel: TChannel;
        isPublic: boolean;
        isRepeating: boolean;
        cooldown: TTimeWindow;
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
        channel: TChannel;
        isPublic: boolean;
        isRepeating: boolean;
        cooldown: TTimeWindow;
    }) => {
        settings: object;
    };
};
