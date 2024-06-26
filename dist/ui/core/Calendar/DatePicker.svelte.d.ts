import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        date: [Date, Date] | Date;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DatePickerProps = typeof __propDef.props;
export type DatePickerEvents = typeof __propDef.events;
export type DatePickerSlots = typeof __propDef.slots;
export default class DatePicker extends SvelteComponent<DatePickerProps, DatePickerEvents, DatePickerSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        date: Date | [Date, Date];
    }>);
    $$bindings: "date";
}
export {};
