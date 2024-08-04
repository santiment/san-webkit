import { BROWSER } from 'esm-env';
import { getContext, setContext } from 'svelte';
export { useObserveFnCall, pipeGroupBy } from './observable.svelte.js';
/**
 * Designed for cases when universal page load function should have a conditional query, which runs only on app boot
 */
export const BootFlag = {
    get() {
        // @ts-expect-error
        return BROWSER && (window.__BOOT_FLAG__ ?? false);
    },
    set() {
        // @ts-expect-error
        if (BROWSER)
            window.__BOOT_FLAG__ = true;
    },
};
export function createCtx(CTX, creator) {
    const ctxCreator = (...args) => {
        const ctx = getContext(CTX);
        if (ctx)
            return ctx;
        return setContext(CTX, creator(...args));
    };
    /**
     * Used in cases where context initialization is not required.
     */
    ctxCreator.get = () => getContext(CTX);
    return ctxCreator;
}
export function Emitter(emit, events) {
    return Object.entries(events).reduce((acc, [key, event]) => Object.assign(acc, {
        [key]: () => emit(event),
    }), {});
}
