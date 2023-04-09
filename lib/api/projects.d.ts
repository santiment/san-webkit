type Project = {
    slug: string;
    name: string;
    ticker: string;
    logoUrl?: string;
};
export declare const queryProjects: () => Promise<Project[]>;
export declare const queryErc20Projects: () => Promise<Project[]>;
export declare const queryWatchlistProjects: (slug: string) => Promise<Project[]>;
export declare const queryStablecoinProjects: () => Promise<Project[]>;
export declare const queryDeFiProjects: () => Promise<Project[]>;
export declare const FIAT_MARKET_ASSETS: {
    slug: string;
    name: string;
    ticker: string;
}[];
export declare const queryFiatAssets: () => Promise<{
    slug: string;
    name: string;
    ticker: string;
}[]>;
export {};
