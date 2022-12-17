import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id: string;
        settings: any;
        ref?: {} | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        tooltip: {
            slot: string;
            props: any;
        };
    };
};
export declare type ContextProps = typeof __propDef.props;
export declare type ContextEvents = typeof __propDef.events;
export declare type ContextSlots = typeof __propDef.slots;
export default class Context extends SvelteComponentTyped<ContextProps, ContextEvents, ContextSlots> {
}
export {};
