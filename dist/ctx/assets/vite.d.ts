export declare const fetchAllProjects: () => Promise<never[] | import("./api.js").TAsset[]>;
export declare function StaticAssetsListPlugin(): Promise<{
    name: string;
    transform(src: string, id: string, env: {
        ssr: boolean;
    }): Promise<{
        code: string;
        map: null;
    } | undefined>;
}>;
