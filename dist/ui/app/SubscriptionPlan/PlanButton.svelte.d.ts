import type { TSubscriptionPlan } from './types.js';
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
declare const PlanButton: $$__sveltets_2_IsomorphicComponent<{
    plan: Exclude<TSubscriptionPlan, "isDeprecated">;
    class?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type PlanButton = InstanceType<typeof PlanButton>;
export default PlanButton;
