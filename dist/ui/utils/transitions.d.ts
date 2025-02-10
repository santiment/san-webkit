import type { TransitionConfig } from 'svelte/transition';
type FlyAndScaleParams = {
    y?: number;
    x?: number;
    start?: number;
    duration?: number;
};
export declare function styleToString(style: Record<string, number | string | undefined>): string;
export declare function flyAndScale(node: Element, params?: FlyAndScaleParams): TransitionConfig;
export {};
