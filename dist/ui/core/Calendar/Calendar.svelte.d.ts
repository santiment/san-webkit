import { SvelteComponent } from "svelte";
import type { DateValue } from '@internationalized/date';
declare const __propDef: {
    props: {
        date: Date;
        class?: string;
        minValue: DateValue;
        maxValue: DateValue;
        timeZone: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CalendarProps = typeof __propDef.props;
export type CalendarEvents = typeof __propDef.events;
export type CalendarSlots = typeof __propDef.slots;
export default class Calendar extends SvelteComponent<CalendarProps, CalendarEvents, CalendarSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        date: Date;
        class?: string;
        minValue: DateValue;
        maxValue: DateValue;
        timeZone: string;
    }>);
    $$bindings: "date";
}
export {};
