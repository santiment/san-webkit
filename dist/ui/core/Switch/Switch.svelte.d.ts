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
declare const Switch: $$__sveltets_2_IsomorphicComponent<Omit<{
    disabled?: boolean | null | undefined;
    required?: boolean;
    name?: string;
    value?: any;
    checked?: boolean;
    onCheckedChange?: import("bits-ui/dist/internal/types.js").OnChangeFn<boolean>;
}, "children" | "child"> & {
    child?: import("svelte").Snippet<[{
        checked: boolean;
    } & {
        props: Record<string, unknown>;
    }]> | undefined;
    children?: import("svelte").Snippet<[{
        checked: boolean;
    }]> | undefined;
    style?: import("bits-ui").StyleProperties | string | null | undefined;
    ref?: HTMLElement | null | undefined;
} & import("bits-ui").Without<import("bits-ui").BitsPrimitiveButtonAttributes, import("bits-ui").SwitchRootPropsWithoutHTML> & {
    class?: string;
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
