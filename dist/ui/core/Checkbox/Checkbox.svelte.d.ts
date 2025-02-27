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
declare const Checkbox: $$__sveltets_2_IsomorphicComponent<Omit<{
    disabled?: boolean | null | undefined;
    required?: boolean;
    name?: any;
    value?: string;
    checked?: boolean;
    onCheckedChange?: import("bits-ui/dist/internal/types").OnChangeFn<boolean>;
    indeterminate?: boolean;
    onIndeterminateChange?: import("bits-ui/dist/internal/types").OnChangeFn<boolean>;
}, "children" | "child"> & {
    child?: import("svelte").Snippet<[import("bits-ui").CheckboxRootSnippetProps & {
        props: Record<string, unknown>;
    }]> | undefined;
    children?: import("svelte").Snippet<[import("bits-ui").CheckboxRootSnippetProps]> | undefined;
    style?: import("bits-ui").StyleProperties | string | null | undefined;
    ref?: HTMLElement | null | undefined;
} & import("bits-ui").Without<import("bits-ui").BitsPrimitiveButtonAttributes, import("bits-ui").CheckboxRootPropsWithoutHTML> & {
    isActive?: boolean;
    class?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Checkbox = InstanceType<typeof Checkbox>;
export default Checkbox;
