import type { TApiChannel } from './channels.js';
import type { TAPITimeWindow } from './time.js';
export type TGenericSettings = {
    type: string;
    target: unknown;
    operation?: unknown;
    selector?: object;
    time_window?: TAPITimeWindow;
    metric?: string;
};
export type TApiAlert<GSettings extends Partial<TGenericSettings> = any> = {
    id: number;
    title: string;
    description: null | string;
    cooldown: TAPITimeWindow;
    isActive: boolean;
    isFrozen: boolean;
    isPublic: boolean;
    isRepeating: boolean;
    settings: {
        channel: TApiChannel[];
    } & GSettings;
};
