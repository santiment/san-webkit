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
export type WatchlistProps = typeof __propDef.props;
export type WatchlistEvents = typeof __propDef.events;
export type WatchlistSlots = typeof __propDef.slots;
export default class Watchlist extends SvelteComponentTyped<WatchlistProps, WatchlistEvents, WatchlistSlots> {
}
export {};
