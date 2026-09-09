export declare const useClockCtx: (() => {
    time: {
        readonly $: string;
    };
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: () => {
        time: {
            readonly $: string;
        };
    };
    __CTX: "utils_useClockCtx";
};
