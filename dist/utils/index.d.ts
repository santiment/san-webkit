export type { TNominal } from './types/index.js';
export { keyify, exactObjectKeys } from './object.js';
export { useObserveFnCall, pipeGroupBy } from './observable.svelte.js';
export { onSupportClick } from './support.js';
export declare const getRandomKey: () => string;
export { ss, type SS } from './state.svelte.js';
export { getCookie, setCookie, deleteCookie } from './cookies.js';
export { copy } from './clipboard.js';
export { assertNever } from './assert.js';
/**
 * Designed for cases when universal page load function should have a conditional query, which runs only on app boot
 */
export declare const BootFlag: {
    get(): boolean;
    set(): void;
};
export type MaybeCtx<GCtx> = GCtx extends {
    get: () => infer T;
} ? undefined | T : never;
export declare function createCtx<CtxName extends string, CtxCreator extends (...args: any[]) => any>(CTX: CtxName, creator: CtxCreator): CtxCreator & {
    get: (allCtxs?: Map<string, any>) => ReturnType<CtxCreator>;
    set: CtxCreator;
    __CTX: typeof CTX;
};
export declare function Emitter<T extends Record<string, number | string>>(emit: any, events: T): { [K in keyof T]: () => void; };
export declare const createValueMap: (inMin: number, inMax: number, outMin: number, outMax: number) => (value: number) => number;
export { controlledPromisePolyfill } from './promise.js';
export { JobScheduler, type TJobScheduler, type TJob } from './job-scheduler.js';
