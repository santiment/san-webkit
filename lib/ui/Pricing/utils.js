import { notifications$ } from './../../ui/Notifications';
import { Billing } from './../../utils/plans';
export const PLAN_BUTTON_CLICKED = 'PLAN_BUTTON_CLICKED';
export function onPlanChangeSuccess(customer$, planName) {
    customer$.refetch();
    notifications$.show({
        type: 'success',
        title: `You have successfully changed your plan to the "${planName}"!`,
    });
}
export function onPlanChangeError(error) {
    notifications$.show({ type: 'error', title: `Error during plan change` });
    return Promise.reject(error);
}
export function checkIsUpgrade(plan, subscription) {
    if (!subscription)
        return undefined;
    const subscribed = subscription.plan;
    const isPlanCheaper = subscribed.amount > plan.amount;
    if (subscribed.interval === plan.interval) {
        return !isPlanCheaper;
    }
    return subscribed.interval === Billing.MONTH;
}
//# sourceMappingURL=utils.js.map