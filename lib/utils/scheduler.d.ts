export declare function Scheduler(limit?: number, debounceTime?: number): {
    run(): void;
    delayRun(): void;
    schedule(op: () => Promise<any>): void;
    cleanup(): void;
};
export declare function Scheduler$$(limit?: number, debounceTime?: number): import("svelte/store").Readable<{
    run(): void;
    delayRun(): void;
    schedule(op: () => Promise<any>): void;
    cleanup(): void;
}>;
export type SchedulerType = ReturnType<typeof Scheduler>;
