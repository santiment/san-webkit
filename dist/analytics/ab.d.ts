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
    get: (allCtxs?: Map<string, any>) => {
        abTests: {
            readonly $: { [K_1 in T_1 as K_1["key"]]: K_1["variants"][number]; } extends infer T ? { [K in keyof T]: { [K_1 in T_1 as K_1["key"]]: K_1["variants"][number]; }[K]; } : never;
            setCookies(): void;
        };
    };
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
};
export { useABTestCtx };
