export declare const useUiCtx: (({ isLiteVersion }?: any) => {
    ui: {
        readonly $$: {
            isNightMode: boolean;
            isLiteVersion: any;
            timeZone: string;
        };
        toggleNightMode(): void;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        ui: {
            readonly $$: {
                isNightMode: boolean;
                isLiteVersion: any;
                timeZone: string;
            };
            toggleNightMode(): void;
        };
    };
    set: ({ isLiteVersion }?: any) => {
        ui: {
            readonly $$: {
                isNightMode: boolean;
                isLiteVersion: any;
                timeZone: string;
            };
            toggleNightMode(): void;
        };
    };
};
