import { SvelteComponentTyped } from "svelte";
export declare const MOBILE_NAVBAR_LINKS: ({
    title: string;
    icon: string;
    href: string;
    slug?: undefined;
} | {
    title: string;
    icon: string;
    href: string;
    slug: string;
})[];
declare const __propDef: {
    props: {
        user: SAN.Author | undefined;
        path?: string | undefined;
        isFullLink?: boolean | undefined;
        links?: ({
            title: string;
            icon: string;
            href: string;
            slug?: undefined;
        } | {
            title: string;
            icon: string;
            href: string;
            slug: string;
        })[] | undefined;
        isMenuOpened?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type NavbarProps = typeof __propDef.props;
export declare type NavbarEvents = typeof __propDef.events;
export declare type NavbarSlots = typeof __propDef.slots;
export default class Navbar extends SvelteComponentTyped<NavbarProps, NavbarEvents, NavbarSlots> {
}
export {};
