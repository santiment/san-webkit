export declare type Providers = 'google' | 'twitter';
export declare function getOAuthLink(provider: Providers): string;
export declare type SearchParams = {
    auth: Providers;
    failed?: boolean;
};
export declare function parseAuthSearchParams(): SearchParams;
