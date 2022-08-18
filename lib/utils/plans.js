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
const nonDeprecatedFilter = ({ isDeprecated }) => !isDeprecated;
export const keepNonDeprecatedPlans = (plans) => plans.filter(nonDeprecatedFilter);
export const checkIsSanbaseProduct = (product) => +product.id === ProductId.SANBASE;
export var Plan;
(function (Plan) {
    Plan["FREE"] = "FREE";
    Plan["PRO"] = "PRO";
    Plan["PRO_PLUS"] = "PRO_PLUS";
})(Plan || (Plan = {}));
export const PlanName = {
    [Plan.FREE]: 'Free',
    [Plan.PRO]: 'Pro',
    [Plan.PRO_PLUS]: 'Pro+',
};
export var Billing;
(function (Billing) {
    Billing["MONTH"] = "month";
    Billing["YEAR"] = "year";
})(Billing || (Billing = {}));
export const checkIsYearlyPlan = ({ interval }) => interval === Billing.YEAR;
export const calcDiscount = (percentOff) => (100 - (percentOff || 0)) / 100;
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