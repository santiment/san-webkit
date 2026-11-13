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
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
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
