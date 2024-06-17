import { SvelteComponent } from "svelte";
import type { HTMLButtonAttributes } from 'svelte/elements';
import type { Action } from 'svelte/action';
import type { SS } from 'svelte-runes';
declare const __propDef: {
    props: HTMLButtonAttributes & {
        ref?: SS<HTMLElement | null | undefined> | undefined;
        href?: string | undefined;
        icon?: string | undefined;
        class?: string | undefined;
        variant?: "fill" | "border" | "ghost" | undefined;
        iconSize?: string | number | undefined;
        iconHeight?: string | number | undefined;
        iconOnRight?: boolean | undefined;
        explanation?: string | undefined;
        action?: Action<HTMLElement, undefined, Record<never, any>> | undefined;
        actionArgs?: any;
        children?: ((this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
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
        ref?: SS<HTMLElement | null | undefined> | undefined;
        href?: string | undefined;
        icon?: string | undefined;
        class?: string | undefined;
        variant?: "fill" | "border" | "ghost" | undefined;
        iconSize?: string | number | undefined;
        iconHeight?: string | number | undefined;
        iconOnRight?: boolean | undefined;
        explanation?: string | undefined;
        action?: Action<HTMLElement, undefined, Record<never, any>> | undefined;
        actionArgs?: any;
        children?: ((this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
    }>);
    $$bindings: "";
}
export {};
