import type { Action } from 'svelte/action';
export declare const VIEWPORT_PRIORITY: {
    VISIBLE: number;
    HALF_VISIBLE: number;
    NOT_VISIBLE: number;
};
export declare const useViewportPriorityCtx: (() => {
    observer: IntersectionObserver;
    ObservedSettings: Map<Element, {
        priority: number;
    }>;
} | undefined) & {
    get: (allCtxs?: Map<string, any>) => {
        observer: IntersectionObserver;
        ObservedSettings: Map<Element, {
            priority: number;
        }>;
    } | undefined;
    set: () => {
        observer: IntersectionObserver;
        ObservedSettings: Map<Element, {
            priority: number;
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
