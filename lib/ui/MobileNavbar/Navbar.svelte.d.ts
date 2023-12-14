import { SvelteComponentTyped } from "svelte";
export declare const MOBILE_NAVBAR_LINKS: {
    title: string;
    icon: string;
    href: string;
    slug?: string | undefined;
    strict?: true | undefined;
}[];
declare const __propDef: {
    props: {
        user: SAN.Author | null | undefined;
        path?: string | undefined;
        isFullLink?: boolean | undefined;
        links?: {
            title: string;
            icon: string;
            href: string;
            slug?: string | undefined;
            strict?: true | undefined;
        }[] | undefined;
        isMenuOpened?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        'menu-bottom': {
            slot: string;
        };
    };
};
export type NavbarProps = typeof __propDef.props;
export type NavbarEvents = typeof __propDef.events;
export type NavbarSlots = typeof __propDef.slots;
export default class Navbar extends SvelteComponentTyped<NavbarProps, NavbarEvents, NavbarSlots> {
}
export {};
