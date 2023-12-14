import { SvelteComponentTyped } from "svelte";
export type DateRange = [Date, Date];
import type { default as AirDatepicker } from 'air-datepicker/air-datepicker';
declare const __propDef: {
    props: {
        [x: string]: any;
        date?: DateRange | undefined;
        label?: string | undefined;
        maxDate?: Date | undefined;
        onDateSelect: (date: Date[]) => void;
        calendar?: AirDatepicker<any> | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            trigger: (node: HTMLElement) => {
                destroy: () => void;
            };
            isOpened: boolean;
            classes: any;
        };
    };
};
export type PresetCalendarProps = typeof __propDef.props;
export type PresetCalendarEvents = typeof __propDef.events;
export type PresetCalendarSlots = typeof __propDef.slots;
export default class PresetCalendar extends SvelteComponentTyped<PresetCalendarProps, PresetCalendarEvents, PresetCalendarSlots> {
}
export {};
