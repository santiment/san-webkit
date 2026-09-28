import type { Action } from 'svelte/action';
export declare const VIEWPORT_PRIORITY: {
    readonly VISIBLE: 0;
    readonly HALF_VISIBLE: 10;
    readonly NOT_VISIBLE: 100;
};
export declare const useViewportPriorityCtx: (() => {
    observer: IntersectionObserver;
    ObservedSettings: Map<Element, {
        settings: {
            priority: number;
        };
        lazyTimer: null | number;
    }>;
} | undefined) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: () => {
        observer: IntersectionObserver;
        ObservedSettings: Map<Element, {
            settings: {
                priority: number;
            };
            lazyTimer: null | number;
        }>;
    } | undefined;
    __CTX: "webkit_useIntersectionObserverCtx";
};
export declare function useItemViewportPriorityFlow(): {
    settings: {
        priority: number;
    };
    viewportObserverAction: Action<HTMLElement, TViewportMargins | undefined, Record<never, any>>;
    checkIsInViewport$(): boolean;
} | {
    viewportObserverAction: () => void;
};
type TViewportMargins = {
    top: string;
    bottom: string;
} | {
    left: string;
    right: string;
};
export declare const useItemViewportPriorityCtx: (() => {
    settings: {
        priority: number;
    };
    viewportObserverAction: Action<HTMLElement, TViewportMargins | undefined, Record<never, any>>;
    checkIsInViewport$(): boolean;
} | undefined) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: () => {
        settings: {
            priority: number;
        };
        viewportObserverAction: Action<HTMLElement, TViewportMargins | undefined, Record<never, any>>;
        checkIsInViewport$(): boolean;
    } | undefined;
    __CTX: "webkit_useItemViewportPriorityCtx";
};
export {};
