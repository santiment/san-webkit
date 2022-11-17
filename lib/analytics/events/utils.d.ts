import type { LoginType } from './general';
import type { EventData } from '../index';
export declare function TrackCategory(category: string): (event: string, properties?: EventData) => number;
export declare function saveLoginMethod(method: LoginType): {
    method: LoginType;
    timestamp: number;
};
export declare function getSavedLoginMethod(): {
    method: string;
    timestamp: number;
} | undefined;
