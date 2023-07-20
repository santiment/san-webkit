import type { LoginType } from './general';
import type { EventData, Tracker } from '../index';
export declare function TrackCategory(category: string): (event: string, properties?: EventData, trackers?: Tracker[]) => number;
export declare function saveLoginMethod(method: LoginType): {
    method: LoginType;
    timestamp: number;
};
export declare function getSavedLoginMethod(): {
    method: string;
    timestamp: number;
} | undefined;
