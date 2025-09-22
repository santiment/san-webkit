export declare const useMiniChartTooltipCtx: (() => {
    tooltip: {
        readonly $: {
            offset: number;
            syncKey: string;
        };
        updateOffset(value: number, key?: string): void;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        tooltip: {
            readonly $: {
                offset: number;
                syncKey: string;
            };
            updateOffset(value: number, key?: string): void;
        };
    };
    set: () => {
        tooltip: {
            readonly $: {
                offset: number;
                syncKey: string;
            };
            updateOffset(value: number, key?: string): void;
        };
    };
};
