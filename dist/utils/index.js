import { BROWSER } from 'esm-env';
export { useObserveFnCall } from './observable.svelte.js';
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
