export declare const useMiniChartTooltipCtx: (() => {
    tooltip: {
        readonly $: {
            offset: number;
            syncKey: string;
        };
        updateOffset(value: number, key?: string): void;
    };
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: () => {
        tooltip: {
            readonly $: {
                offset: number;
                syncKey: string;
            };
            updateOffset(value: number, key?: string): void;
        };
    };
    __CTX: "webkit_useMiniChartTooltipCtx";
};
