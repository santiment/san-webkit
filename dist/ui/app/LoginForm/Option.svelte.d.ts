import type { MouseEventHandler } from 'svelte/elements';
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
declare const Option: $$__sveltets_2_IsomorphicComponent<{
    class?: string;
    title: string;
    icon: string;
    href?: string;
    loading?: boolean;
    isSignUp?: boolean;
    onclick: MouseEventHandler<HTMLButtonElement>;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Option = InstanceType<typeof Option>;
export default Option;
