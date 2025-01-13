export declare const COOKIE_POLICY_ACCEPTED = "COOKIE_POLICY_ACCEPTED";
export declare const Cookies: {
    readonly Basic: "BASIC_COOKIES";
    readonly Functional: "FUNCTIONAL_COOKIES";
    readonly Performance: "PERFORMANCE_COOKIES";
};
export declare const showManageCookiesDialog$: () => (() => Promise<undefined>) & ((props: Omit<TDialogProps & {
    $$events?: {
        [evt: string]: CustomEvent<any>;
    } | undefined;
    $$slots?: {} | undefined;
}, "resolve" | "Controller" | "reject">) => Promise<undefined>);
export declare function applyCookies(isFunctionalAccepted?: boolean, isPerformanceAccepted?: boolean): void;
import { type TDialogProps } from '../../Dialog/index.js';
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
declare const Index: $$__sveltets_2_IsomorphicComponent<TDialogProps, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Index = InstanceType<typeof Index>;
export default Index;
