import type { DateValue } from '@internationalized/date';
import { Calendar } from 'bits-ui';
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
declare const Calendar: $$__sveltets_2_IsomorphicComponent<{
    class?: string;
    date: Date;
    timeZone: string;
    minValue?: DateValue;
    maxValue?: DateValue;
    onChange?: (date: Date) => void;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "date">;
type Calendar = InstanceType<typeof Calendar>;
export default Calendar;
