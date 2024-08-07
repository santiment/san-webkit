import { Fetcher } from '../../../api/index.js';
import { BUSINESS_PLANS, CONSUMER_PLANS, Product, SubscriptionPlan } from './plans.js';
export const queryProductsWithPlans = Fetcher(() => `{
  productsWithPlans {
    id
    plans {
      id
      name
      interval
      amount
      isDeprecated
    }
  }
}`, (gql) => {
    const products = gql.productsWithPlans;
    products.forEach(({ id, plans }) => plans.forEach((plan) => (plan.product = { id }))); // HACK: remove after backend id:null fix
    return products;
}, { cacheTime: undefined });
export function getProductPlans(productsWithPlans, productId, listOfPlans) {
    const productPlans = productsWithPlans.find((product) => product.id === productId);
    if (!productPlans)
        return null;
    const plans = productPlans.plans
        .filter((plan) => listOfPlans.has(plan.name) && !plan.isDeprecated)
        .sort((a, b) => a.name === SubscriptionPlan.CUSTOM.key
        ? 1
        : b.name === SubscriptionPlan.CUSTOM.key
            ? -1
            : +a.amount - +b.amount);
    const planBillingGroup = plans.reduce((acc, plan) => ({ ...acc, [plan.name]: { ...acc[plan.name], [plan.interval]: plan } }), {});
    return {
        plans,
        planBillingGroup,
        billingGroupPlans: Object.values(planBillingGroup),
    };
}
export const getSanbaseConsumerPlans = (productsWithPlans) => getProductPlans(productsWithPlans, Product.Sanbase.id, CONSUMER_PLANS);
export const getApiBusinessPlans = (productsWithPlans) => getProductPlans(productsWithPlans, Product.SanAPI.id, BUSINESS_PLANS);
