import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title?: string | undefined;
        onSearchClick?: ((_: any) => any) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        left: {};
        right: {};
        share: {};
    };
};
export type HeaderProps = typeof __propDef.props;
export type HeaderEvents = typeof __propDef.events;
export type HeaderSlots = typeof __propDef.slots;
export default class Header extends SvelteComponentTyped<HeaderProps, HeaderEvents, HeaderSlots> {
}
export {};
