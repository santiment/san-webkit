export type TJob = {
    scheduled: boolean;
    fn: () => Promise<any>;
    priority?: number;
    id?: number | string;
    forceTimer?: null | ReturnType<typeof setTimeout>;
};
export type TJobScheduler = ReturnType<typeof JobScheduler>;
export declare function JobScheduler(): {
    schedule(fn: TJob["fn"], id?: number | string, priority?: number): TJob | undefined;
    cancelJob(job: TJob): void;
    destroy(): void;
};
