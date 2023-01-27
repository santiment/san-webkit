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
export declare type GdprProps = typeof __propDef.props;
export declare type GdprEvents = typeof __propDef.events;
export declare type GdprSlots = typeof __propDef.slots;
export default class Gdpr extends SvelteComponentTyped<GdprProps, GdprEvents, GdprSlots> {
}
export {};
