export declare const COOKIE_POLICY_ACCEPTED = "COOKIE_POLICY_ACCEPTED";
export declare const Cookies: {
    readonly Basic: "BASIC_COOKIES";
    readonly Functional: "FUNCTIONAL_COOKIES";
    readonly Performance: "PERFORMANCE_COOKIES";
};
export declare const showManageCookiesDialog$: () => (() => Promise<undefined>) & ((props: Omit<TDialogProps, "resolve" | "Controller" | "reject">) => Promise<undefined>);
export declare function applyCookies(isFunctionalAccepted?: boolean, isPerformanceAccepted?: boolean): void;
import { type TDialogProps } from '../../Dialog/index.js';
declare const Index: import("svelte").Component<TDialogProps, {}, "">;
type Index = ReturnType<typeof Index>;
export default Index;
