import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        date: [Date, Date];
        class?: string | undefined;
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
        date: [Date, Date];
        class?: string | undefined;
    }>);
    $$bindings: "date";
}
export {};
