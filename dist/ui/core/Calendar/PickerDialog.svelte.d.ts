export declare const showPickerDialog$: () => (props: Omit<TDialogProps & {
    class?: string;
    date: Date;
    timeZone: string;
    minValue?: import("@internationalized/date").DateValue;
    maxValue?: import("@internationalized/date").DateValue;
    onChange?: (date: Date) => void;
} & {
    $$events?: {
        [evt: string]: CustomEvent<any>;
    } | undefined;
    $$slots?: {} | undefined;
} & {
    $$events?: {
        [evt: string]: CustomEvent<any>;
    } | undefined;
    $$slots?: {} | undefined;
}, "resolve" | "Controller" | "reject">) => Promise<undefined>;
import { type TDialogProps } from '../Dialog/dialogs.js';
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
declare const PickerDialog: $$__sveltets_2_IsomorphicComponent<TDialogProps & {
    class?: string;
    date: Date;
    timeZone: string;
    minValue?: import("@internationalized/date").DateValue;
    maxValue?: import("@internationalized/date").DateValue;
    onChange?: (date: Date) => void;
} & {
    $$events?: {
        [evt: string]: CustomEvent<any>;
    } | undefined;
    $$slots?: {} | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type PickerDialog = InstanceType<typeof PickerDialog>;
export default PickerDialog;
