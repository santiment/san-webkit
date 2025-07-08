export var Product;
(function (Product) {
    Product["SANAPI"] = "SanAPI";
    Product["SANBASE"] = "Sanbase";
})(Product || (Product = {}));
export var ProductId;
(function (ProductId) {
    ProductId[ProductId["SANAPI"] = 1] = "SANAPI";
    ProductId[ProductId["SANBASE"] = 2] = "SANBASE";
})(ProductId || (ProductId = {}));
export const ProductNameById = {
    [ProductId.SANAPI]: Product.SANAPI,
    [ProductId.SANBASE]: Product.SANBASE,
};
export const nonDeprecatedFilter = ({ isDeprecated }) => !isDeprecated;
export const keepNonDeprecatedPlans = (plans) => plans.filter(nonDeprecatedFilter);
export const checkIsSanbaseProduct = (product) => +product.id === ProductId.SANBASE;
export const checkIsSanApiProduct = (product) => +product.id === ProductId.SANAPI;
export var Plan;
(function (Plan) {
    //deprecated
    Plan["PRO_PLUS"] = "PRO_PLUS";
    Plan["FREE"] = "FREE";
    Plan["PRO"] = "PRO";
    Plan["MAX"] = "MAX";
    Plan["BUSINESS_PRO"] = "BUSINESS_PRO";
    Plan["BUSINESS_MAX"] = "BUSINESS_MAX";
    Plan["CUSTOM"] = "CUSTOM";
})(Plan || (Plan = {}));
export function getIsCustomPlan(planName) {
    return planName.startsWith(Plan.CUSTOM);
}
export const INDIVIDUAL_PLANS = new Set([Plan.FREE, Plan.PRO, Plan.MAX]);
export const BUSINESS_PLANS = new Set([Plan.BUSINESS_PRO, Plan.BUSINESS_MAX, Plan.CUSTOM]);
const PlanName = {
    [Plan.PRO_PLUS]: 'Pro+',
    [Plan.FREE]: 'FREE',
    [Plan.PRO]: 'Sanbase Pro',
    [Plan.MAX]: 'Sanbase Max',
    [Plan.BUSINESS_PRO]: 'Business Pro',
    [Plan.BUSINESS_MAX]: 'Business Max',
    [Plan.CUSTOM]: 'Enterprise',
};
export function getPlanName(planName) {
    var _a;
    const adaptedPlanName = getIsCustomPlan(planName) ? Plan.CUSTOM : planName;
    return (_a = PlanName[adaptedPlanName]) !== null && _a !== void 0 ? _a : planName;
}
export var Billing;
(function (Billing) {
    Billing["MONTH"] = "month";
    Billing["YEAR"] = "year";
})(Billing || (Billing = {}));
export var PlanType;
(function (PlanType) {
    PlanType["INDIVIDUAL"] = "individual";
    PlanType["BUSINESS"] = "business";
})(PlanType || (PlanType = {}));
export const checkIsIndividualPlan = ({ name }) => INDIVIDUAL_PLANS.has(name);
export const checkIsBusinessPlan = ({ name }) => {
    const planName = getIsCustomPlan(name) ? Plan.CUSTOM : name;
    return BUSINESS_PLANS.has(planName);
};
export const checkIsPlanWithPrice = ({ amount }) => amount > 0;
export const checkIsYearlyPlan = ({ interval }) => interval === Billing.YEAR;
export const calcDiscount = (percentOff) => (100 - (percentOff || 0)) / 100;
export function calculateYearDiscount(monthPlan, yearPlan) {
    const { amount: monthAmount } = monthPlan;
    const { amount: yearAmount } = yearPlan;
    const discount = yearAmount / (monthAmount * 12);
    return Math.round(100 - discount * 100);
}
export const getPrice = (amount, percentOff = 0) => (amount / 100) * calcDiscount(percentOff);
export function getPlanMonthPrice({ amount, interval }, percentOff = 0) {
    const price = getPrice(amount, percentOff);
    return interval === Billing.MONTH ? price : price / 12;
}
export const priceFormatter = (price) => '$' + Math.round(price);
export const formatPrice = (plan) => priceFormatter(getPrice(plan.amount));
export const formatMonthlyPrice = (plan, percentOff = 0) => priceFormatter(getPlanMonthPrice(plan, percentOff));
export const onlyProLikePlans = ({ name }) => name.includes(Plan.PRO);
export const onlyProAndFreeLikePlans = ({ name }) => name.includes(Plan.PRO) || name.includes(Plan.FREE);
export function getAlternativePlan(plan, plans) {
    return plans.find(({ name, interval }) => name === plan.name && interval !== plan.interval);
}
export function getSavedAmount(plan, altPlan, percentOff) {
    const price = plan.amount * calcDiscount(percentOff);
    return priceFormatter(getPrice(altPlan.amount * 12 - price));
}
//# sourceMappingURL=plans.js.map