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
export declare type ContextProviderProps = typeof __propDef.props;
export declare type ContextProviderEvents = typeof __propDef.events;
export declare type ContextProviderSlots = typeof __propDef.slots;
export default class ContextProvider extends SvelteComponentTyped<ContextProviderProps, ContextProviderEvents, ContextProviderSlots> {
}
export {};
