/// <reference types="svelte" />
import type { Builder } from 'bits-ui';
import type { ActionReturn } from 'svelte/action';
import { type ClassNameValue } from 'tailwind-merge';
export declare function cn(...classLists: ClassNameValue[]): string;
export declare function applyBuilder(node: HTMLElement, builder: Builder): ActionReturn<undefined, Record<never, any>>;
