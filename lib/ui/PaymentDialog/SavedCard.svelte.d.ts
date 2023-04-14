import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        savedCard: SAN.PaymentCard | null;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SavedCardProps = typeof __propDef.props;
export type SavedCardEvents = typeof __propDef.events;
export type SavedCardSlots = typeof __propDef.slots;
export default class SavedCard extends SvelteComponentTyped<SavedCardProps, SavedCardEvents, SavedCardSlots> {
}
export {};