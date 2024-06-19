import { Subject, share } from 'rxjs';
import { untrack } from 'svelte';
export function useObserveFnCall(fn) {
    const subject = new Subject();
    $effect(() => untrack(() => {
        const subscriber = subject.pipe(fn(), share()).subscribe();
        return () => {
            subscriber.unsubscribe();
            subject.complete();
        };
    }));
    return ((data) => subject.next(data));
}
