import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        onOldVersionClick: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LiteButtonProps = typeof __propDef.props;
export type LiteButtonEvents = typeof __propDef.events;
export type LiteButtonSlots = typeof __propDef.slots;
export default class LiteButton extends SvelteComponentTyped<LiteButtonProps, LiteButtonEvents, LiteButtonSlots> {
}
export {};
