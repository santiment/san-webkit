import { SvelteComponentTyped } from "svelte";
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
declare const __propDef: {
    props: {
        date: Date | Date[];
        minDate: Date;
        maxDate: Date;
        range?: boolean | undefined;
        onDateSelect: (date: Date | Date[]) => void;
        showPresets: boolean;
        calendarNode: AirDatepicker<HTMLInputElement>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
