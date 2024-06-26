/// <reference types="svelte" />
import type { Builder } from 'bits-ui';
import type { ActionReturn } from 'svelte/action';
import type { TransitionConfig } from 'svelte/transition';
import { type ClassNameValue } from 'tailwind-merge';
export declare function cn(...classLists: ClassNameValue[]): string;
export declare function applyBuilder(node: HTMLElement, builder: Builder): ActionReturn<undefined, Record<never, any>>;
type FlyAndScaleParams = {
    y?: number;
    x?: number;
    start?: number;
    duration?: number;
};
export declare function styleToString(style: Record<string, number | string | undefined>): string;
export declare function flyAndScale(node: Element, params?: FlyAndScaleParams): TransitionConfig;
export {};
