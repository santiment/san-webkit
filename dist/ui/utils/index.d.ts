import type { Builder } from 'bits-ui';
import type { ActionReturn } from 'svelte/action';
import { type ClassNameValue } from 'tailwind-merge';
export { applyStyles, preserveStyles, type TStyles } from 'drawer-svelte';
export declare function cn(...classLists: ClassNameValue[]): string;
export declare const getBrowserCssVariable: (color: string) => string;
export declare function applyBuilder(node: HTMLElement, builder: Builder): ActionReturn<undefined, Record<never, any>>;
export { styleToString, flyAndScale } from './transitions.js';
