import { SvelteComponentTyped } from "svelte";
export declare const COOKIE_POLICY_ACCEPTED = "COOKIE_POLICY_ACCEPTED";
export declare const Cookies: {
    readonly Basic: "BASIC_COOKIES";
    readonly Functional: "FUNCTIONAL_COOKIES";
    readonly Performance: "PERFORMANCE_COOKIES";
};
export declare const showManageCookiesDialog: (props: any) => Promise<unknown>;
export declare function applyCookies(isFunctionalAccepted?: boolean, isPerformanceAccepted?: boolean): void;
declare const __propDef: {
    props: {
        [x: string]: any;
        DialogPromise: SAN.DialogController;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type IndexProps = typeof __propDef.props;
export declare type IndexEvents = typeof __propDef.events;
export declare type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
