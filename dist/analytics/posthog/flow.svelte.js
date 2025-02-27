import { posthog } from 'posthog-js';
import { BROWSER } from 'esm-env';
import { useCustomerCtx } from '../../ctx/customer/index.js';
import { SubscriptionPlan } from '../../ui/app/SubscriptionPlan/plans.js';
import { useDebouncedFn } from '../amplitude/flow.svelte.js';
export function usePosthogFlow() {
    if (!BROWSER)
        return;
    const { customer, currentUser } = useCustomerCtx.get();
    const updateUserData = useDebouncedFn(1000, (userId, name, email) => userId && posthog.identify(userId.toString(), { name, email }));
    const updateUserSanbasePlan = useDebouncedFn(1000, (sanbase_plan) => posthog.capture('$set', {
        $set: {
            sanbase_plan: sanbase_plan || SubscriptionPlan.FREE.key,
        },
    }));
    $effect(() => {
        const userId = currentUser.$$?.id;
        const name = currentUser.$$?.username;
        const email = currentUser.$$?.email;
        if (userId) {
            updateUserData(userId, name, email);
        }
    });
    $effect(() => {
        updateUserSanbasePlan(customer.$.sanbaseSubscription?.plan?.name);
    });
}
