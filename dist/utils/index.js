import { BROWSER } from 'esm-env';
import { getContext, setContext } from 'svelte';
export { keyify } from './object.js';
export { useObserveFnCall, pipeGroupBy } from './observable.svelte.js';
export { onSupportClick } from './support.js';
export const getRandomKey = () => Math.floor(Math.random() * 0xffffffff).toString();
export { ss } from './state.svelte.js';
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
        if (process.env.IS_LOGGING_ENABLED) {
            console.log(`%c[DEV ONLY] Context created`, 'background:#d13939;color:black;padding:3px;border-radius:4px', CTX);
        }
        return setContext(CTX, creator(...args));
    };
    /**
     * Used in cases where context initialization is not required.
     */
    const get = (allCtxs) => (allCtxs ? allCtxs.get(CTX) : getContext(CTX));
    /**
     * Used in cases where context should be modified.
     */
    const set = ((...args) => {
        if (process.env.IS_LOGGING_ENABLED) {
            console.log(`%c[DEV ONLY] Context created (using .set)`, 'background:#d13939;color:black;padding:3px;border-radius:4px', CTX);
        }
        return setContext(CTX, creator(...args));
    });
    ctxCreator.get = get;
    ctxCreator.set = set;
    return ctxCreator;
}
export function Emitter(emit, events) {
    return Object.entries(events).reduce((acc, [key, event]) => Object.assign(acc, {
        [key]: () => emit(event),
    }), {});
}
export const createValueMap = (inMin, inMax, outMin, outMax) => {
    const factor = (outMax - outMin) / (inMax - inMin);
    return (value) => (value - inMin) * factor + outMin;
};
// NOTE: Promise.withResolvers() has a bug on iOS 17
// const { promise, resolve, reject } = Promise.withResolvers()
export function controlledPromisePolyfill() {
    let resolve = () => { };
    let reject = () => { };
    const promise = new Promise((pResolve, pReject) => {
        resolve = pResolve;
        reject = pReject;
    });
    return { promise, resolve: resolve, reject: reject };
}
export { JobScheduler } from './job-scheduler.js';
