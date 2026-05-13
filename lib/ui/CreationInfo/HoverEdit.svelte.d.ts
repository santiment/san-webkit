import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        isLoggedIn: boolean;
        editLabel?: string | undefined;
        titleHoverTooltipClass?: string | undefined;
        onEditClick: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type HoverEditProps = typeof __propDef.props;
export type HoverEditEvents = typeof __propDef.events;
export type HoverEditSlots = typeof __propDef.slots;
export default class HoverEdit extends SvelteComponentTyped<HoverEditProps, HoverEditEvents, HoverEditSlots> {
}
export {};
