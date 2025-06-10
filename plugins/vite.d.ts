export declare function WebkitSvg(): {
    name: string;
    buildStart(): void;
    handleHotUpdate({ file, server }: {
        file: any;
        server: any;
    }): Promise<void>;
};
export declare function StaticAssetLogos(): Promise<{
    name: string;
    transform(src: string, id: string): {
        code: string;
        map: any;
    };
}>;
export declare function StaticMetricsRestrictions(): Promise<{
    name: string;
    transform(src: string, id: string): {
        code: string;
        map: any;
    };
}>;
export declare function ReportMissingPreloadScriptsPlugin(): {
    name: string;
    transform(src: string, id: string): {
        code: string;
        map: any;
    };
};
export declare function StaticAssetsList(): Promise<{
    name: string;
    transform(src: string, id: string, env: {
        ssr: boolean;
    }): Promise<{
        code: string;
        map: any;
    }>;
}>;
