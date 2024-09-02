import { SvelteComponent } from "svelte";
import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
import type { Action } from 'svelte/action';
import type { SS } from 'svelte-runes';
declare const __propDef: {
    props: HTMLButtonAttributes & {
        ref?: SS<undefined | null | HTMLElement>;
        href?: string;
        icon?: string;
        class?: string;
        variant?: "fill" | "border" | "ghost";
        iconSize?: number | string;
        iconHeight?: number | string;
        iconOnRight?: boolean;
        explanation?: string;
        size?: "lg";
        loading?: boolean;
        target?: HTMLAnchorAttributes["target"];
        action?: Action;
        actionArgs?: any;
        children?: Snippet;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponent<ButtonProps, ButtonEvents, ButtonSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<HTMLButtonAttributes & {
        ref?: SS<undefined | null | HTMLElement>;
        href?: string;
        icon?: string;
        class?: string;
        variant?: "fill" | "border" | "ghost";
        iconSize?: number | string;
        iconHeight?: number | string;
        iconOnRight?: boolean;
        explanation?: string;
        size?: "lg";
        loading?: boolean;
        target?: HTMLAnchorAttributes["target"];
        action?: Action;
        actionArgs?: any;
        children?: Snippet;
    }>);
    $$bindings: "";
}
export {};
