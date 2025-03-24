import type { Snippet } from 'svelte';
import type { CreateDialogProps } from '@melt-ui/svelte';
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
declare const DesktopDialog: $$__sveltets_2_IsomorphicComponent<{
    class?: string;
    children: Snippet<[{
        close: (isForced?: boolean) => false | undefined;
    }]>;
    onOpenChange: CreateDialogProps["onOpenChange"];
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type DesktopDialog = InstanceType<typeof DesktopDialog>;
export default DesktopDialog;
