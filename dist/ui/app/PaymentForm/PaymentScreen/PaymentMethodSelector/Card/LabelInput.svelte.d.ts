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
declare const LabelInput: $$__sveltets_2_IsomorphicComponent<import("svelte/elements").HTMLInputAttributes & {
    class?: string;
    type?: "text" | "number";
    placeholder?: string;
    icon?: string;
    iconSize?: number | string;
    inputClass?: string;
    right?: import("svelte").Snippet;
} & {
    $$events?: {
        [evt: string]: CustomEvent<any>;
    } | undefined;
    $$slots?: {} | undefined;
} & {
    label: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type LabelInput = InstanceType<typeof LabelInput>;
export default LabelInput;
