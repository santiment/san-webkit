import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        date: Date | Date[];
        minDate: Date;
        maxDate: Date;
        onDateSelect: (date: Date | Date[]) => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CalendarWithPresetsProps = typeof __propDef.props;
export type CalendarWithPresetsEvents = typeof __propDef.events;
export type CalendarWithPresetsSlots = typeof __propDef.slots;
export default class CalendarWithPresets extends SvelteComponentTyped<CalendarWithPresetsProps, CalendarWithPresetsEvents, CalendarWithPresetsSlots> {
}
export {};
