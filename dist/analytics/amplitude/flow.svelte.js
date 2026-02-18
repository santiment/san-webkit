import { BROWSER } from 'esm-env';
import * as amplitude from '@amplitude/analytics-browser';
import { useCustomerCtx } from '../../ctx/customer/index.svelte.js';
import { useUiCtx } from '../../ctx/ui/index.svelte.js';
import { SubscriptionPlan } from '../../ui/app/SubscriptionPlan/plans.js';
import { useABTestCtx } from '../ab.js';
export function useDebouncedFn(time, fn) {
    let timer;
    const clear = () => clearTimeout(timer);
    $effect(() => clear);
    return ((...args) => {
        clear();
        timer = setTimeout(() => fn(...args), time);
    });
}
export function useAmplitudeFlow() {
    if (!BROWSER)
        return;
    const { customer, currentUser } = useCustomerCtx.get();
    const { ui } = useUiCtx.get();
    const { abTests } = useABTestCtx.get();
    const updateUserData = useDebouncedFn(1000, ({ id: userId, name, email, featureAccessLevel }, abTests) => setAmplitudeUserProperties({
        user_id: userId,
        userId,
        name,
        email,
        feature_access_level: featureAccessLevel,
        abTests,
    }));
    const updateUserSanbaseVersion = useDebouncedFn(1000, (isLiteVersion) => setAmplitudeUserProperties({ sanbase_version: isLiteVersion ? 'LITE' : 'CLASSIC' }));
    const updateUserSanbasePlan = useDebouncedFn(1000, (sanbase_plan) => setAmplitudeUserProperties({ sanbase_plan: sanbase_plan || SubscriptionPlan.FREE.key }));
    $effect(() => {
        const { id, email, name, featureAccessLevel } = currentUser.$$ ?? {};
        updateUserData({ id, email, name, featureAccessLevel }, abTests.$);
    });
    $effect(() => {
        updateUserSanbaseVersion(ui.$$.isLiteVersion);
    });
    $effect(() => {
        updateUserSanbasePlan(customer.$.plan?.name);
    });
}
export function setAmplitudeUserProperties(props) {
    if (process.env.IS_LOGGING_ENABLED)
        return;
    const identity = new amplitude.Identify();
    Object.keys(props).forEach((key) => {
        identity.set(key, props[key]);
    });
    amplitude.identify(identity);
    return identity;
}
