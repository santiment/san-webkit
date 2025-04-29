import { BROWSER } from 'esm-env';
const CONCURRENT_LIMIT = 7;
export function JobScheduler() {
    let queue = [];
    let activeJobs = 0;
    let isSchedulerActive = false;
    let startTimer;
    const scheduler = {
        runNext() {
            const job = queue.shift();
            if (job)
                this.run(job, false);
        },
        run(job, isForced = false) {
            if (!job.scheduled)
                return;
            job.scheduled = false;
            clearTimeout(job.forceTimer);
            this.execute(job.fn);
            if (isForced)
                queue = queue.filter((item) => item !== job);
        },
        execute(fn) {
            activeJobs++;
            fn().finally(() => {
                if (activeJobs > 0)
                    activeJobs--;
                queueMicrotask(() => scheduler.runNext());
            });
        },
    };
    if (BROWSER) {
        startTimer = setTimeout(() => {
            isSchedulerActive = true;
            for (let i = 0; i < CONCURRENT_LIMIT; i++) {
                scheduler.runNext();
            }
            queue.forEach((job, index) => {
                job.forceTimer = createForceTimer(job, index);
            });
        }, 50);
    }
    function createForceTimer(job, index) {
        const forceTimeout = (index + 1) * 400;
        return setTimeout(() => scheduler.run(job, true), forceTimeout);
    }
    return {
        schedule(fn, id, priority) {
            if (isSchedulerActive && activeJobs < CONCURRENT_LIMIT) {
                scheduler.execute(fn);
                return;
            }
            const job = { fn, id, priority, scheduled: true, forceTimer: null };
            let index;
            // Finding the job index based on the given priority.
            if (Number.isFinite(priority)) {
                const priorityIndex = queue.findIndex((item) => priority < (item.priority ?? Infinity));
                // If the next available priority index was found, setting the job index and adding the element to the queue
                if (priorityIndex >= 0) {
                    queue.splice((index = priorityIndex), 0, job);
                }
            }
            // index was not set in case priority is missing. Adding job to the end and assigning the index
            index = index ?? queue.push(job);
            if (isSchedulerActive) {
                job.forceTimer = createForceTimer(job, index);
            }
            return job;
        },
        cancelJob(job) {
            if (job.scheduled) {
                clearTimeout(job.forceTimer);
                queue = queue.filter((item) => item !== job);
            }
        },
        destroy() {
            clearTimeout(startTimer);
            queue.forEach((job) => clearTimeout(job.forceTimer));
            queue.length = 0;
        },
    };
}
