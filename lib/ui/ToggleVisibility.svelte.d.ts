import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ToggleVisibilityProps = typeof __propDef.props;
export type ToggleVisibilityEvents = typeof __propDef.events;
export type ToggleVisibilitySlots = typeof __propDef.slots;
export default class ToggleVisibility extends SvelteComponentTyped<ToggleVisibilityProps, ToggleVisibilityEvents, ToggleVisibilitySlots> {
}
export {};
