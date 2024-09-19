import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
import type { Action } from 'svelte/action';
import type { SS } from 'svelte-runes';
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
declare const Button: $$__sveltets_2_IsomorphicComponent<HTMLButtonAttributes & {
    as?: "button" | "label";
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
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Button = InstanceType<typeof Button>;
export default Button;
