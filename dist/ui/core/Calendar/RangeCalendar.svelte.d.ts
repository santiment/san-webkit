import type { DateValue } from '@internationalized/date';
import { RangeCalendar } from 'bits-ui';
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
declare const RangeCalendar: $$__sveltets_2_IsomorphicComponent<{
    class?: string;
    date: [Date, Date];
    withPresets?: boolean;
    minValue?: DateValue;
    maxValue?: DateValue;
    timeZone: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "date">;
type RangeCalendar = InstanceType<typeof RangeCalendar>;
export default RangeCalendar;
