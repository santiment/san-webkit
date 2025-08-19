export type TProviders = 'google' | 'twitter';
export declare function getOAuthLink(provider: TProviders, origin: string, redirectPath?: string): string;
