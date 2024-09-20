import { Switch } from 'bits-ui';
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
declare const Switch: $$__sveltets_2_IsomorphicComponent<{
    name?: string | undefined;
    value?: string | undefined;
    disabled?: boolean | undefined;
    required?: boolean | undefined;
    checked?: boolean | undefined;
    onCheckedChange?: import("bits-ui/dist/internal/types.js").OnChangeFn<boolean> | undefined;
    includeInput?: boolean | undefined;
    inputAttrs?: Partial<Omit<import("svelte/elements.js").HTMLInputAttributes, "value" | "name" | "type" | "checked">> | undefined;
    asChild?: boolean | undefined;
    el?: HTMLButtonElement | undefined;
} & import("svelte/elements.js").HTMLButtonAttributes & {
    icon?: {
        active: {
            id: string;
            w: number;
            h?: number;
        };
        inactive: {
            id: string;
            w: number;
            h?: number;
        };
    };
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Switch = InstanceType<typeof Switch>;
export default Switch;
