import { SvelteComponentTyped } from "svelte";
export declare const CookiesStyle: {
    API: string;
    SHEETS: string;
};
declare const __propDef: {
    props: {
        class?: string | undefined;
        style?: "" | "API" | "SHEETS" | undefined;
        isVisible?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CookiesPopupProps = typeof __propDef.props;
export type CookiesPopupEvents = typeof __propDef.events;
export type CookiesPopupSlots = typeof __propDef.slots;
export default class CookiesPopup extends SvelteComponentTyped<CookiesPopupProps, CookiesPopupEvents, CookiesPopupSlots> {
}
export {};
