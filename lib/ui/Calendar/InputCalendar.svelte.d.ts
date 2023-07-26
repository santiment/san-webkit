import { SvelteComponentTyped } from "svelte";
import type { DateRange } from './PresetCalendar.svelte';
declare const __propDef: {
    props: {
        [x: string]: any;
        date?: DateRange | undefined;
        onDateSelect: (date: Date[]) => void;
        selectNextGroup?: ((node: HTMLInputElement, isRightDir?: boolean, caret?: number | null) => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type InputCalendarProps = typeof __propDef.props;
export type InputCalendarEvents = typeof __propDef.events;
export type InputCalendarSlots = typeof __propDef.slots;
export default class InputCalendar extends SvelteComponentTyped<InputCalendarProps, InputCalendarEvents, InputCalendarSlots> {
    get selectNextGroup(): (node: HTMLInputElement, isRightDir?: boolean, caret?: number | null) => void;
}
export {};
