import { BUSINESS_PLANS, checkIsTrialEligiblePlan, getSubscriptionPlanKey, Product, SubscriptionPlan, SubscriptionPlanDetails, } from './plans.js';
export const checkIsSanbaseProduct = (product) => product.id === Product.Sanbase.id || product.name === Product.Sanbase.productName;
export const checkIsSanApiProduct = (product) => product.id === Product.SanAPI.id || product.name === Product.SanAPI.productName;
export const checkIsBusinessPlan = (planName) => {
    if (!planName)
        return false;
    return BUSINESS_PLANS.has(getSubscriptionPlanKey(planName));
};
export const getPlanName = (planName) => {
    const subs = SubscriptionPlan;
    const plan = getSubscriptionPlanKey(planName);
    return subs[plan]?.name || planName;
};
export function getFormattedBillingPlan(plan) {
    const { name, amount, price } = getFormattedPlan(plan);
    return {
        name,
        billing: plan.interval,
        amount: amount.month,
        price: price.month,
    };
}
export function getFormattedPlan(monthlyPlan, annualPlan) {
    const key = getSubscriptionPlanKey(monthlyPlan.name);
    const name = getPlanName(key);
    const details = SubscriptionPlanDetails[key];
    return {
        isFree: key === SubscriptionPlan.FREE.key,
        isCustom: key === SubscriptionPlan.CUSTOM.key,
        isBusiness: BUSINESS_PLANS.has(key),
        isTrialSupported: checkIsTrialEligiblePlan(key),
        name,
        details,
        amount: {
            month: monthlyPlan.amount,
            year: annualPlan?.amount,
        },
        price: {
            month: Math.ceil(monthlyPlan.amount / 100),
            year: annualPlan ? Math.ceil(annualPlan.amount / 100) : undefined,
            savePercentWithAnnual: annualPlan
                ? Math.round(100 - (100 * annualPlan.amount) / (monthlyPlan.amount * 12))
                : 0,
        },
    };
}
export const checkIsCurrentPlan = (userPlan, targetPlan) => userPlan
    ? userPlan.name === targetPlan?.name &&
        (userPlan.name === SubscriptionPlan.CUSTOM.key || userPlan.interval === targetPlan?.interval)
    : targetPlan?.name === SubscriptionPlan.FREE.key;
export const checkIsAlternativeBillingPlan = (userPlan, targetPlan) => userPlan ? userPlan.name === targetPlan.name && userPlan.interval !== targetPlan.interval : false;
