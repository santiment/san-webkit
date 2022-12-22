import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        small?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type LiProps = typeof __propDef.props;
export declare type LiEvents = typeof __propDef.events;
export declare type LiSlots = typeof __propDef.slots;
export default class Li extends SvelteComponentTyped<LiProps, LiEvents, LiSlots> {
}
export {};
