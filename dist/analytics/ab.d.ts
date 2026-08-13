declare const useABTestCtx: ((settings: {
    [x: string]: string;
}) => {
    abTests: {
        readonly $: {
            [x: string]: string;
        };
        setCookies(): void;
    };
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: (settings: {
        [x: string]: string;
    }) => {
        abTests: {
            readonly $: {
                [x: string]: string;
            };
            setCookies(): void;
        };
    };
    __CTX: "webkit_useABTestCtx";
};
export { useABTestCtx };
