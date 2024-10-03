export declare const useScreenTransitionCtx: {
    (screens: readonly {
        name: string;
        backLabel?: string;
    }[], defaultValue?: {
        name: string;
        backLabel?: string;
    } | undefined): {
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
    get(): {
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
    set(screens: readonly {
        name: string;
        backLabel?: string;
    }[], defaultValue?: {
        name: string;
        backLabel?: string;
    } | undefined): {
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
};
