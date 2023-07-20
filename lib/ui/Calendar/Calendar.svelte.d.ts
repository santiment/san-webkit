import { SvelteComponentTyped } from "svelte";
import AirDatepicker from 'air-datepicker/air-datepicker';
import 'air-datepicker/air-datepicker.css';
declare class __sveltets_Render<T extends boolean> {
    props(): {
        [x: string]: any;
        class?: string | undefined;
        range?: T | undefined;
        date?: (T extends true ? Date[] : Date) | undefined;
        label?: any;
        maxDate?: Date | undefined;
        minDate?: Date | undefined;
        onDateSelect: (date: any) => void;
        calendar?: AirDatepicker<any> | null | undefined;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {
            trigger: (node: HTMLElement) => {
                destroy: () => void;
            };
            isOpened: boolean;
            classes: any;
        };
        tooltip: {
            slot: string;
            calendar: AirDatepicker<any> | null;
        };
    };
}
export type CalendarProps<T extends boolean> = ReturnType<__sveltets_Render<T>['props']>;
export type CalendarEvents<T extends boolean> = ReturnType<__sveltets_Render<T>['events']>;
export type CalendarSlots<T extends boolean> = ReturnType<__sveltets_Render<T>['slots']>;
export default class Calendar<T extends boolean> extends SvelteComponentTyped<CalendarProps<T>, CalendarEvents<T>, CalendarSlots<T>> {
}
export {};
