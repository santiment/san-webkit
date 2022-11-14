import type { LoginType } from './general';
export declare const trackSignupStart: (type: LoginType) => number;
export declare const trackSignupFinish: () => number;
export declare const trackGdprAccept: (accepted: boolean) => number;
