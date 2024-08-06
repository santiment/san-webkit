import { SvelteComponent } from "svelte";
import type { DateValue } from '@internationalized/date';
declare const __propDef: {
    props: {
        placeholder: DateValue;
        minValue: DateValue;
        maxValue: DateValue;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CalendarHeadingProps = typeof __propDef.props;
export type CalendarHeadingEvents = typeof __propDef.events;
export type CalendarHeadingSlots = typeof __propDef.slots;
export default class CalendarHeading extends SvelteComponent<CalendarHeadingProps, CalendarHeadingEvents, CalendarHeadingSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        placeholder: DateValue;
        minValue: DateValue;
        maxValue: DateValue;
    }>);
    $$bindings: "placeholder";
}
export {};
