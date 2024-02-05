export type Providers = 'google' | 'twitter';
export declare function getOAuthLink(provider: Providers, redirectPath?: string): string;
export type SearchParams = {
    auth: Providers;
    failed?: boolean;
};
export declare function parseAuthSearchParams(): SearchParams;
