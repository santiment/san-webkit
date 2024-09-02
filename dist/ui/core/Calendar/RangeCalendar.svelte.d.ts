import { SvelteComponent } from "svelte";
import type { DateValue } from '@internationalized/date';
declare const __propDef: {
    props: {
        class?: string;
        date: [Date, Date];
        withPresets?: boolean;
        minValue: DateValue;
        maxValue: DateValue;
        timeZone: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RangeCalendarProps = typeof __propDef.props;
export type RangeCalendarEvents = typeof __propDef.events;
export type RangeCalendarSlots = typeof __propDef.slots;
export default class RangeCalendar extends SvelteComponent<RangeCalendarProps, RangeCalendarEvents, RangeCalendarSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        class?: string;
        date: [Date, Date];
        withPresets?: boolean;
        minValue: DateValue;
        maxValue: DateValue;
        timeZone: string;
    }>);
    $$bindings: "date";
}
export {};
