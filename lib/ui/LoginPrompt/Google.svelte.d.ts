import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        from?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GoogleProps = typeof __propDef.props;
export type GoogleEvents = typeof __propDef.events;
export type GoogleSlots = typeof __propDef.slots;
export default class Google extends SvelteComponentTyped<GoogleProps, GoogleEvents, GoogleSlots> {
}
export {};
