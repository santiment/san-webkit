import { type Handle, type RequestHandler } from '@sveltejs/kit';
export declare const AFFILIATLY_COOKIE_NAME = "affiliatly_v3";
export declare const AFFILIATLY_PROGRAM_ID = "AF-1074422";
export declare function callAffiliatly(payload: URLSearchParams): Promise<void | Response>;
export declare function parseAffiliateCookie(cookieValue: string): {
    idToken: string;
    userId: string;
    affiliateUserId: string;
} | null;
export declare const affiliatlyTrackHandle: Handle;
export declare function createAffiliatlyConversionHandler(): RequestHandler;
