import { type Snippet } from 'svelte';
type Props = {
    icon: 'info' | 'checkmark-circle' | 'warning' | 'error';
    message: string;
    content?: string | Snippet<[{
        close: () => void;
    }]>;
    action?: {
        label: string;
        onClick?: (close: () => void) => void;
        href?: string;
    };
    class?: string;
};
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
declare const Notification: $$__sveltets_2_IsomorphicComponent<Props, {
    closeToast: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Notification = InstanceType<typeof Notification>;
export default Notification;
