export declare const CookiesStyle: {
    readonly API: "--fill: #dae0fd; --shadow: #5275ff;";
    readonly SHEETS: "--fill: #b0ebdb; --shadow: #21b074;";
};
type TCookiesStyle = typeof CookiesStyle;
type TCookiesStyles = TCookiesStyle[keyof TCookiesStyle];
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
declare const CookiesPopup: $$__sveltets_2_IsomorphicComponent<{
    class?: string;
    style?: string | TCookiesStyles;
    isVisible?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type CookiesPopup = InstanceType<typeof CookiesPopup>;
export default CookiesPopup;
