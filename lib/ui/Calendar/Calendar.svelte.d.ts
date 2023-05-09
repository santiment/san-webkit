import { SvelteComponentTyped } from "svelte";
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
declare const __propDef: {
    props: {
        date?: Date | Date[] | undefined;
        label?: string | undefined;
        maxDate?: Date | undefined;
        minDate?: Date | undefined;
        range?: boolean | undefined;
        onDateSelect: (date: Date | Date[]) => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            trigger: (node: HTMLElement) => {
                destroy(): void;
            };
        };
        tooltip: {
            slot: string;
            calendar: AirDatepicker<any> | null;
        };
    };
};
export type CalendarProps = typeof __propDef.props;
export type CalendarEvents = typeof __propDef.events;
export type CalendarSlots = typeof __propDef.slots;
export default class Calendar extends SvelteComponentTyped<CalendarProps, CalendarEvents, CalendarSlots> {
}
export {};
