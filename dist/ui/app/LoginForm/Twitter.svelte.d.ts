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
declare const Twitter: $$__sveltets_2_IsomorphicComponent<{
    from?: string;
} & Omit<{
    class?: string;
    title: string;
    icon: string;
    href?: string;
    loading?: boolean;
    isSignUp?: boolean;
    onclick: import("svelte/elements").MouseEventHandler<HTMLButtonElement>;
} & {
    $$events?: {
        [evt: string]: CustomEvent<any>;
    } | undefined;
    $$slots?: {} | undefined;
}, "title" | "href" | "icon" | "onclick">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Twitter = InstanceType<typeof Twitter>;
export default Twitter;
