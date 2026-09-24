import type { Tracker } from './track.js';
export type TLoginType = 'email' | 'google' | 'twitter' | 'metamask' | 'wallet';
export declare function saveLoginMethod(method: TLoginType): {
    method: TLoginType;
    timestamp: number;
};
export declare function getSavedLoginMethod(): {
    method: TLoginType;
    timestamp: number;
} | undefined;
export declare function trackAuthStart(method: TLoginType): false | void;
export declare function trackAuthFinish(method: TLoginType, isNewUserSignup: boolean): false | void;
export declare function trackLoginStart(method: TLoginType): false | void;
export declare const trackLoginFinish: (method: TLoginType) => false | void;
export declare function trackSignupStart(method: TLoginType): false | void;
export declare const trackSignupFinish: (method: TLoginType, trackers?: Tracker[]) => false | void;
export declare function trackAuth(method: TLoginType, isSignUp?: boolean): void;
