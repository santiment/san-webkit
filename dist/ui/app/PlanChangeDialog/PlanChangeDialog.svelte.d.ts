export declare const showPlanChangeDialog$: () => (props: Omit<TDialogProps & {
    newPlan: TSubscriptionPlan;
    onSuccess?: () => void;
} & {
    $$events?: {
        [evt: string]: CustomEvent<any>;
    } | undefined;
    $$slots?: {} | undefined;
}, "resolve" | "Controller" | "reject">) => Promise<undefined>;
import type { TSubscriptionPlan } from '../SubscriptionPlan/types.js';
import { type TDialogProps } from '../../core/Dialog/index.js';
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
declare const PlanChangeDialog: $$__sveltets_2_IsomorphicComponent<TDialogProps & {
    newPlan: TSubscriptionPlan;
    onSuccess?: () => void;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type PlanChangeDialog = InstanceType<typeof PlanChangeDialog>;
export default PlanChangeDialog;
