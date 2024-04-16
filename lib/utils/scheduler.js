import { BROWSER } from 'esm-env';
import { readable } from 'svelte/store';
export function Scheduler(limit = 1, debounceTime = 200) {
    const running = new Set();
    const scheduled = new Set();
    const debounced = new Set();
    let disabled = false;
    return {
        run() {
            var _a, _b;
            if (!BROWSER)
                return;
            if (disabled)
                return;
            if (running.size < limit) {
                (_b = (_a = Array.from(scheduled))[0]) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
        },
        delayRun() {
            if (disabled)
                return;
            const id = window.setTimeout(() => {
                debounced.delete(id);
                this.run();
            }, debounceTime);
            debounced.add(id);
        },
        schedule(op) {
            const operation = () => {
                scheduled.delete(operation);
                running.add(operation);
                op().finally(() => {
                    running.delete(operation);
                    this.delayRun();
                });
            };
            scheduled.add(operation);
            this.run();
        },
        cleanup() {
            disabled = true;
            debounced.forEach((id) => window.clearTimeout(id));
        },
    };
}
export function Scheduler$$(limit = 1, debounceTime = 200) {
    const scheduler = Scheduler(limit, debounceTime);
    return readable(scheduler, () => scheduler.cleanup);
}
//# sourceMappingURL=scheduler.js.map