export declare const useScreenTransitionCtx: (<T extends {
    name: string;
    backLabel?: string;
}>(screens: readonly T[], defaultValue?: T) => {
    screens: readonly T[];
    screen: {
        $: T;
        readonly index$: number;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        screens: readonly {
            name: string;
            backLabel?: string;
        }[];
        screen: {
            $: {
                name: string;
                backLabel?: string;
            };
            readonly index$: number;
        };
    };
    set: <T extends {
        name: string;
        backLabel?: string;
    }>(screens: readonly T[], defaultValue?: T) => {
        screens: readonly T[];
        screen: {
            $: T;
            readonly index$: number;
        };
    };
    __CTX: "useScreenTransitionCtx";
};
