export { useObserveFnCall } from './observable.svelte.js';
/**
 * Designed for cases when universal page load function should have a conditional query, which runs only on app boot
 */
export declare const BootFlag: {
    get(): boolean;
    set(): void;
};
