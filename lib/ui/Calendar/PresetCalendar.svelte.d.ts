import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        date?: Date | Date[] | undefined;
        label?: string | undefined;
        minDate?: Date | undefined;
        maxDate?: Date | undefined;
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
    };
};
export type PresetCalendarProps = typeof __propDef.props;
export type PresetCalendarEvents = typeof __propDef.events;
export type PresetCalendarSlots = typeof __propDef.slots;
export default class PresetCalendar extends SvelteComponentTyped<PresetCalendarProps, PresetCalendarEvents, PresetCalendarSlots> {
}
export {};
