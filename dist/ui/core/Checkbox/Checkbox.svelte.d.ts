import { Checkbox } from 'bits-ui';
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
declare const Checkbox: $$__sveltets_2_IsomorphicComponent<{
    name?: string | undefined;
    disabled?: boolean | undefined;
    value?: string | undefined;
    required?: boolean | undefined;
    checked?: boolean | "indeterminate" | undefined;
    onCheckedChange?: import("bits-ui/dist/internal").OnChangeFn<boolean | "indeterminate"> | undefined;
    asChild?: boolean | undefined;
    el?: HTMLButtonElement | undefined;
} & import("svelte/elements").HTMLButtonAttributes & {
    isActive?: boolean;
    class?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Checkbox = InstanceType<typeof Checkbox>;
export default Checkbox;
