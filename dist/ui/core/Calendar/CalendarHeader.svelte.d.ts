import { SvelteComponent } from "svelte";
import type { DateValue } from '@internationalized/date';
declare const __propDef: {
    props: {
        range?: boolean;
        placeholder: DateValue;
        minValue: DateValue;
        maxValue: DateValue;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CalendarHeaderProps = typeof __propDef.props;
export type CalendarHeaderEvents = typeof __propDef.events;
export type CalendarHeaderSlots = typeof __propDef.slots;
export default class CalendarHeader extends SvelteComponent<CalendarHeaderProps, CalendarHeaderEvents, CalendarHeaderSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        range?: boolean;
        placeholder: DateValue;
        minValue: DateValue;
        maxValue: DateValue;
    }>);
    $$bindings: "placeholder";
}
export {};
