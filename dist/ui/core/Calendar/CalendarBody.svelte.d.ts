import { SvelteComponent } from "svelte";
import type { DateValue } from '@internationalized/date';
import type { Month } from 'bits-ui';
declare const __propDef: {
    props: {
        range?: boolean;
        months: Month<DateValue>[];
        weekdays: string[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CalendarBodyProps = typeof __propDef.props;
export type CalendarBodyEvents = typeof __propDef.events;
export type CalendarBodySlots = typeof __propDef.slots;
export default class CalendarBody extends SvelteComponent<CalendarBodyProps, CalendarBodyEvents, CalendarBodySlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        range?: boolean;
        months: Month<DateValue>[];
        weekdays: string[];
    }>);
    $$bindings: "";
}
export {};
