import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        creation: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AddressWatchlistProps = typeof __propDef.props;
export type AddressWatchlistEvents = typeof __propDef.events;
export type AddressWatchlistSlots = typeof __propDef.slots;
export default class AddressWatchlist extends SvelteComponentTyped<AddressWatchlistProps, AddressWatchlistEvents, AddressWatchlistSlots> {
}
export {};
