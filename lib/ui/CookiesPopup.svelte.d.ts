import { SvelteComponentTyped } from "svelte";
export declare const CookiesStyle: {
    API: string;
    SHEETS: string;
};
declare const __propDef: {
    props: {
        class?: string | undefined;
        style?: "" | "API" | "SHEETS" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type CookiesPopupProps = typeof __propDef.props;
export declare type CookiesPopupEvents = typeof __propDef.events;
export declare type CookiesPopupSlots = typeof __propDef.slots;
export default class CookiesPopup extends SvelteComponentTyped<CookiesPopupProps, CookiesPopupEvents, CookiesPopupSlots> {
}
export {};
