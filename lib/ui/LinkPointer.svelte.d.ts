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
export type LinkPointerProps = typeof __propDef.props;
export type LinkPointerEvents = typeof __propDef.events;
export type LinkPointerSlots = typeof __propDef.slots;
export default class LinkPointer extends SvelteComponentTyped<LinkPointerProps, LinkPointerEvents, LinkPointerSlots> {
}
export {};
