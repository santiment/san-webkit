import { type TApiTimeWindow, type TTimeWindow } from '../../time.js';
import { type TApiChannel, type TChannel } from '../../channels.js';
import { type TStepBaseSchema } from '../types.js';
export type TNotificationsState = {
    channel: TChannel;
    isPublic: boolean;
    isRepeating: boolean;
    cooldown: TTimeWindow;
};
export type TNotificationsApiAlert = {
    cooldown: TApiTimeWindow;
    isPublic: boolean;
    isRepeating: boolean;
    settings: {
        channel: TApiChannel[];
    };
};
export type TBaseSchema = TStepBaseSchema<'notifications-privacy', TNotificationsApiAlert, TNotificationsState>;
export declare const STEP_NOTIFICATIONS_PRIVACY_SCHEMA: {
    readonly name: "notifications-privacy";
    readonly initState: (apiAlert?: Partial<TNotificationsApiAlert> | null | undefined) => TNotificationsState;
    readonly validate: (state: TNotificationsState) => boolean;
    readonly ui: import("../types.js").TStepUI["ui"];
    readonly reduceToApi: (state: TNotificationsState) => TNotificationsApiAlert;
};
