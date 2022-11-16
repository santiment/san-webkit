import type { LoginType } from './general';
export declare function trackSignupStart(method: LoginType): number;
export declare const trackSignupFinish: (method: LoginType) => number;
export declare const trackGdprAccept: (accepted: boolean) => number;
