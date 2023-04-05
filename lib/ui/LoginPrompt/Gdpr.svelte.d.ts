import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        onAccept: any;
        currentUser: {
            username: null | string;
        } | null;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GdprProps = typeof __propDef.props;
export type GdprEvents = typeof __propDef.events;
export type GdprSlots = typeof __propDef.slots;
export default class Gdpr extends SvelteComponentTyped<GdprProps, GdprEvents, GdprSlots> {
}
export {};
