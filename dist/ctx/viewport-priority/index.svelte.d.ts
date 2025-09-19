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
    get: (allCtxs?: Map<string, any>) => {
        observer: IntersectionObserver;
        ObservedSettings: Map<Element, {
            settings: {
                priority: number;
            };
            lazyTimer: null | number;
        }>;
    } | undefined;
    set: () => {
        observer: IntersectionObserver;
        ObservedSettings: Map<Element, {
            settings: {
                priority: number;
            };
            lazyTimer: null | number;
        }>;
    } | undefined;
};
export declare function useItemViewportPriorityFlow(): {
    settings: {
        priority: number;
    };
    viewportObserverAction: Action<HTMLElement, {
        top: string;
        bottom: string;
    } | undefined, Record<never, any>>;
    checkIsInViewport$(): boolean;
} | {
    viewportObserverAction: () => void;
};
export declare const useItemViewportPriorityCtx: (() => {
    settings: {
        priority: number;
    };
    viewportObserverAction: Action<HTMLElement, {
        top: string;
        bottom: string;
    } | undefined, Record<never, any>>;
    checkIsInViewport$(): boolean;
} | undefined) & {
    get: (allCtxs?: Map<string, any>) => {
        settings: {
            priority: number;
        };
        viewportObserverAction: Action<HTMLElement, {
            top: string;
            bottom: string;
        } | undefined, Record<never, any>>;
        checkIsInViewport$(): boolean;
    } | undefined;
    set: () => {
        settings: {
            priority: number;
        };
        viewportObserverAction: Action<HTMLElement, {
            top: string;
            bottom: string;
        } | undefined, Record<never, any>>;
        checkIsInViewport$(): boolean;
    } | undefined;
};
