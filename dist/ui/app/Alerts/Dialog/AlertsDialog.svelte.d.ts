export declare const showAlertsDialog$: () => (() => Promise<undefined>) & ((props: Omit<TDialogProps & {
    source?: string;
    apiAlert?: null | TApiAlert;
} & {
    $$events?: {
        [evt: string]: CustomEvent<any>;
    } | undefined;
    $$slots?: {} | undefined;
}, "resolve" | "Controller" | "reject">) => Promise<undefined>);
import { type TDialogProps } from '../../../core/Dialog/index.js';
import { type TApiAlert } from '../types.js';
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
declare const AlertsDialog: $$__sveltets_2_IsomorphicComponent<TDialogProps & {
    source?: string;
    apiAlert?: null | TApiAlert;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type AlertsDialog = InstanceType<typeof AlertsDialog>;
export default AlertsDialog;
