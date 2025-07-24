import type { TApiChannel } from './channels.js';
import type { TAPITimeWindow } from './time.js';
export type TApiAlert<GSettings = any> = {
    id: number;
    type: string;
    description: null | string;
    title: string;
    cooldown: TAPITimeWindow;
    isActive: boolean;
    isFrozen: boolean;
    isPublic: boolean;
    isRepeating: boolean;
    settings: null | ({
        channel: TApiChannel | TApiChannel[];
    } & GSettings);
};
