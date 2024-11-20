import type { ComponentProps, Snippet } from 'svelte';
import Button from '../Button/index.js';
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
declare const DatePicker: $$__sveltets_2_IsomorphicComponent<{
    as?: ComponentProps<typeof Button>["as"];
    class?: string;
    date: [Date, Date] | Date;
    withPresets?: boolean;
    minDate?: Date;
    maxDate?: Date;
    onChange?: (date: Date) => void;
    timeZone?: string;
    children?: Snippet;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "date">;
type DatePicker = InstanceType<typeof DatePicker>;
export default DatePicker;
