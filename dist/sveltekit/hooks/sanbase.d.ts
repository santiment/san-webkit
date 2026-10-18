import { type Handle } from '@sveltejs/kit';
export declare const APP_VERSION_COOKIE = "_SB_AV";
export declare enum AppVersion {
    LITE = "LITE",
    CLASSIC = "CLASSIC"
}
export declare const sanbaseVersionHandle: Handle;
