import { onMount } from 'svelte';
import { Subject, Subscription, groupBy, mergeMap, pipe, share, } from 'rxjs';
export function useObserveFnCall(fn) {
    const subject = new Subject();
    let subscriber;
    onMount(() => {
        const subscriber = ensureSubscription();
        return () => {
            subscriber.unsubscribe();
            subject.complete();
        };
    });
    function ensureSubscription() {
        if (subscriber)
            return subscriber;
        return (subscriber = subject.pipe(fn(), share()).subscribe());
    }
    return ((data) => {
        ensureSubscription();
        subject.next(data);
    });
}
export const pipeGroupBy = (groupFn, operator) => pipe(groupBy(groupFn), mergeMap((grouped) => grouped.pipe(operator)));
