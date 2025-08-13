import type { TApiAlert } from '../../types.js';
import { type TTimeWindow } from '../../time.js';
import { type TChannel } from '../../channels.js';
import { type TStepBaseSchema } from '../types.js';
export type TNotificationsState = {
    channel: TChannel;
    isPublic: boolean;
    isRepeating: boolean;
    cooldown: TTimeWindow;
};
export type TBaseSchema = TStepBaseSchema<'notifications-privacy', TApiAlert, TNotificationsState>;
export declare const STEP_NOTIFICATIONS_PRIVACY_SCHEMA: {
    readonly name: "notifications-privacy";
    readonly initState: (apiAlert?: Partial<TApiAlert> | null | undefined) => TNotificationsState;
    readonly validate: (state: TNotificationsState) => boolean;
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
    readonly reduceToApi: (state: TNotificationsState) => import("../../../../../utils/types/index.js").DeepPartial<TApiAlert>;
};
