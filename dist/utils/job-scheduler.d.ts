export type TJob = {
    scheduled: boolean;
    fn: () => Promise<any>;
    priority?: number;
    id?: number | string;
    forceTimer?: null | ReturnType<typeof setTimeout>;
};
export type TJobScheduler = ReturnType<typeof JobScheduler>;
export declare function JobScheduler({ concurrentLimit }?: {
    concurrentLimit?: number | undefined;
}): {
    schedule(fn: TJob["fn"], id?: number | string, { priority, minimalDelay }?: {
        priority?: number;
        minimalDelay?: number;
    }): TJob | undefined;
    cancelJob(job: TJob): void;
    destroy(): void;
};
