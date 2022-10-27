export declare const PUMPKINS_COUNT_QUERY = "{\n  getPumpkins\n}";
export declare const queryPumpkinsCount: () => Promise<Set<string>>;
export declare type HalloweenData = Set<string>;
export declare const DEFAULT: Set<never>;
export declare const halloweenData$: {
    DEFAULT: HalloweenData;
    fetched: boolean;
    set: (value: HalloweenData) => HalloweenData;
    subscribe(run: import("svelte/store").Subscriber<HalloweenData>, invalidate: any): import("svelte/store").Unsubscriber;
    clear(): void;
    query(): Promise<HalloweenData>;
    refetch(): Promise<HalloweenData> | undefined;
    resetToDefault(): void;
};
