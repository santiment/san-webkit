export { useObserveFnCall, pipeGroupBy } from './observable.svelte.js';
/**
 * Designed for cases when universal page load function should have a conditional query, which runs only on app boot
 */
export declare const BootFlag: {
    get(): boolean;
    set(): void;
};
export declare function createCtx<CtxName extends string, CtxCreator extends (...args: any[]) => any>(CTX: CtxName, creator: CtxCreator): (...args: Parameters<CtxCreator>) => ReturnType<CtxCreator>;
export declare function Emitter<T extends Record<string, number | string>>(emit: any, events: T): { [K in keyof T]: () => void; };
