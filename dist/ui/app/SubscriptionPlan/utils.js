import { BUSINESS_PLANS, Product, SubscriptionPlan, SubscriptionPlanDetails } from './plans.js';
export const checkIsCustomPlan = (planName) => planName.startsWith(SubscriptionPlan.CUSTOM.key);
export const checkIsSanbaseProduct = (product) => product.id === Product.Sanbase.id;
export const checkIsSanApiProduct = (product) => product.id === Product.SanAPI.id;
export const checkIsBusinessPlan = (planName) => {
    if (!planName)
        return false;
    const plan = checkIsCustomPlan(planName) ? SubscriptionPlan.CUSTOM.key : planName;
    return BUSINESS_PLANS.has(plan);
};
export const getPlanName = (planName) => {
    const subs = SubscriptionPlan;
    const plan = checkIsCustomPlan(planName) ? SubscriptionPlan.CUSTOM.key : planName;
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
    const name = getPlanName(monthlyPlan.name);
    const details = SubscriptionPlanDetails[monthlyPlan.name];
    return {
        isFree: monthlyPlan.name === SubscriptionPlan.FREE.key,
        isCustom: monthlyPlan.name === SubscriptionPlan.CUSTOM.key,
        isBusiness: BUSINESS_PLANS.has(monthlyPlan.name),
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
