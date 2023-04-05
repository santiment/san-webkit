export type Providers = 'google' | 'twitter';
export declare function getOAuthLink(provider: Providers): string;
export type SearchParams = {
    auth: Providers;
    failed?: boolean;
};
export declare function parseAuthSearchParams(): SearchParams;
