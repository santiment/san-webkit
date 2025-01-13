import { type TDialogProps } from './dialogs.js';
export declare const showDialog$: () => (props: Omit<{
    class?: string;
    forceMobileLandscape?: boolean;
    children: import("svelte").Snippet<[{
        close: () => void;
    }]>;
} & {
    $$events?: {
        [evt: string]: CustomEvent<any>;
    } | undefined;
    $$slots?: {} | undefined;
} & TDialogProps & {
    $$events?: {
        [evt: string]: CustomEvent<any>;
    } | undefined;
    $$slots?: {} | undefined;
}, "resolve" | "Controller" | "reject">) => Promise<undefined>;
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
declare const SimpleDialog: $$__sveltets_2_IsomorphicComponent<{
    class?: string;
    forceMobileLandscape?: boolean;
    children: import("svelte").Snippet<[{
        close: () => void;
    }]>;
} & {
    $$events?: {
        [evt: string]: CustomEvent<any>;
    } | undefined;
    $$slots?: {} | undefined;
} & TDialogProps, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type SimpleDialog = InstanceType<typeof SimpleDialog>;
export default SimpleDialog;
