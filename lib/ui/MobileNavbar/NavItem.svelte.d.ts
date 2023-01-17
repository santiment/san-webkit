import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        title: any;
        icon: any;
        active?: boolean | undefined;
        tag?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type NavItemProps = typeof __propDef.props;
export declare type NavItemEvents = typeof __propDef.events;
export declare type NavItemSlots = typeof __propDef.slots;
export default class NavItem extends SvelteComponentTyped<NavItemProps, NavItemEvents, NavItemSlots> {
}
export {};
