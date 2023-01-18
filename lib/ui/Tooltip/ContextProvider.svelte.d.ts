import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id: string;
        on: string;
        setTrigger: any;
        startOpenTimer: any;
        destroy: any;
        props: any;
        ref: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ContextProviderProps = typeof __propDef.props;
export type ContextProviderEvents = typeof __propDef.events;
export type ContextProviderSlots = typeof __propDef.slots;
export default class ContextProvider extends SvelteComponentTyped<ContextProviderProps, ContextProviderEvents, ContextProviderSlots> {
}
export {};
