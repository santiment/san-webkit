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
declare const ProfilePicture: $$__sveltets_2_IsomorphicComponent<Partial<Pick<import("svelte/elements").HTMLButtonAttributes & {
    as?: "button" | "label" | "div";
    ref?: import("svelte-runes").SS<undefined | null | HTMLElement>;
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
    target?: import("svelte/elements").HTMLAnchorAttributes["target"];
    action?: import("svelte/action").Action;
    actionArgs?: any;
    children?: import("svelte").Snippet;
}, "class" | "ref" | "as">>, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type ProfilePicture = InstanceType<typeof ProfilePicture>;
export default ProfilePicture;
