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
