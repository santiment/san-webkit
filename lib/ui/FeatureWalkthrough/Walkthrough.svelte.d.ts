import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        features: SAN.Walkthrough[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type WalkthroughProps = typeof __propDef.props;
export declare type WalkthroughEvents = typeof __propDef.events;
export declare type WalkthroughSlots = typeof __propDef.slots;
export default class Walkthrough extends SvelteComponentTyped<WalkthroughProps, WalkthroughEvents, WalkthroughSlots> {
}
export {};
