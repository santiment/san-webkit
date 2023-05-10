import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        date?: Date[] | undefined;
        label?: string | undefined;
        maxDate?: Date | undefined;
        onDateSelect: (date: Date[]) => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            trigger: (node: HTMLElement) => {
                destroy(): void;
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
