import type { Tracker } from '../index';
import type { LoginType } from './general';
export declare function trackSignupStart(method: LoginType): number;
export declare const trackSignupFinish: (method: LoginType, trackers?: Tracker[]) => number;
export declare const trackGdprAccept: (accepted: boolean) => number;
