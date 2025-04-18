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
declare const Gdpr: $$__sveltets_2_IsomorphicComponent<{
    onAccept: (username: string) => void;
    title?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Gdpr = InstanceType<typeof Gdpr>;
export default Gdpr;
