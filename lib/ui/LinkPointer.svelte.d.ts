import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        href: string;
        label: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type LinkPointerProps = typeof __propDef.props;
export declare type LinkPointerEvents = typeof __propDef.events;
export declare type LinkPointerSlots = typeof __propDef.slots;
export default class LinkPointer extends SvelteComponentTyped<LinkPointerProps, LinkPointerEvents, LinkPointerSlots> {
}
export {};
