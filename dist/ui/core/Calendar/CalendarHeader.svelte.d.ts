import type { DateValue } from '@internationalized/date';
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
declare const CalendarHeader: $$__sveltets_2_IsomorphicComponent<{
    range?: boolean;
    placeholder: DateValue;
    minValue: DateValue;
    maxValue: DateValue;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "placeholder">;
type CalendarHeader = InstanceType<typeof CalendarHeader>;
export default CalendarHeader;
