export type { TNominal } from './types/index.js';
export { keyify } from './object.js';
export { useObserveFnCall, pipeGroupBy } from './observable.svelte.js';
export { onSupportClick } from './support.js';
export declare const getRandomKey: () => string;
/**
 * Designed for cases when universal page load function should have a conditional query, which runs only on app boot
 */
export declare const BootFlag: {
    get(): boolean;
    set(): void;
};
export declare function createCtx<CtxName extends string, CtxCreator extends (...args: any[]) => any>(CTX: CtxName, creator: CtxCreator): {
    (...args: Parameters<CtxCreator>): ReturnType<CtxCreator>;
    /**
     * Used in cases where context initialization is not required.
     */
    get(allCtxs?: Map<string, any>): ReturnType<CtxCreator>;
    /**
     * Used in cases where context should be modified.
     */
    set(...args: Parameters<CtxCreator>): ReturnType<CtxCreator>;
};
export declare function Emitter<T extends Record<string, number | string>>(emit: any, events: T): { [K in keyof T]: () => void; };
export declare const createValueMap: (inMin: number, inMax: number, outMin: number, outMax: number) => (value: number) => number;
