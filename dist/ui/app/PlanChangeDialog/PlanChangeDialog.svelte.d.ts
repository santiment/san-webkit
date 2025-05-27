export declare const showPlanChangeDialog$: () => (props: Omit<TDialogProps & {
    newPlan: TSubscriptionPlan;
    onSuccess?: () => void;
}, "resolve" | "Controller" | "reject">) => Promise<undefined>;
import type { TSubscriptionPlan } from '../SubscriptionPlan/types.js';
import { type TDialogProps } from '../../core/Dialog/index.js';
type $$ComponentProps = TDialogProps & {
    newPlan: TSubscriptionPlan;
    onSuccess?: () => void;
};
declare const PlanChangeDialog: import("svelte").Component<$$ComponentProps, {}, "">;
type PlanChangeDialog = ReturnType<typeof PlanChangeDialog>;
export default PlanChangeDialog;
