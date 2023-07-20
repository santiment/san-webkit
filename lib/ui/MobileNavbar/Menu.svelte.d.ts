import { SvelteComponentTyped } from "svelte";
export declare const MOBILE_MENU_LINKS: {
    title: string;
    link: string;
}[];
declare const __propDef: {
    props: {
        user: any;
        isMenuOpened: any;
        isFullLink: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MenuProps = typeof __propDef.props;
export type MenuEvents = typeof __propDef.events;
export type MenuSlots = typeof __propDef.slots;
export default class Menu extends SvelteComponentTyped<MenuProps, MenuEvents, MenuSlots> {
}
export {};
