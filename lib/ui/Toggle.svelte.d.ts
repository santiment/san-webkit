import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        isActive?: boolean | undefined;
        disabled?: boolean | undefined;
        big?: boolean | undefined;
        icon?: string | undefined;
        as?: "button" | "span" | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ToggleProps = typeof __propDef.props;
export type ToggleEvents = typeof __propDef.events;
export type ToggleSlots = typeof __propDef.slots;
export default class Toggle extends SvelteComponentTyped<ToggleProps, ToggleEvents, ToggleSlots> {
}
export {};
