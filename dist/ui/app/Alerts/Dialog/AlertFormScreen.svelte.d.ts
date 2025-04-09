import type { TAlertSchemaUnion } from '../categories/index.js';
import type { TApiAlert } from '../types.js';
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
declare const AlertFormScreen: $$__sveltets_2_IsomorphicComponent<{
    schema: TAlertSchemaUnion;
    apiAlert?: null | TApiAlert;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type AlertFormScreen = InstanceType<typeof AlertFormScreen>;
export default AlertFormScreen;
