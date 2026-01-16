export declare const useClockCtx: (() => {
    time: {
        readonly $: string;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        time: {
            readonly $: string;
        };
    };
    set: () => {
        time: {
            readonly $: string;
        };
    };
    __CTX: "utils_useClockCtx";
};
