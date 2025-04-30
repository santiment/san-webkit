export declare const useUiCtx: (({ isLiteVersion }?: any) => {
    ui: {
        readonly $$: {
            isNightMode: boolean;
            isLiteVersion: any;
        };
        toggleNightMode(): void;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        ui: {
            readonly $$: {
                isNightMode: boolean;
                isLiteVersion: any;
            };
            toggleNightMode(): void;
        };
    };
    set: ({ isLiteVersion }?: any) => {
        ui: {
            readonly $$: {
                isNightMode: boolean;
                isLiteVersion: any;
            };
            toggleNightMode(): void;
        };
    };
};
