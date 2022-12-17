import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type FooterProps = typeof __propDef.props;
export declare type FooterEvents = typeof __propDef.events;
export declare type FooterSlots = typeof __propDef.slots;
export default class Footer extends SvelteComponentTyped<FooterProps, FooterEvents, FooterSlots> {
}
export {};
