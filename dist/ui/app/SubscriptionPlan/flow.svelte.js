import { onMount } from 'svelte';
import {} from 'svelte-runes';
import { useStripeCtx } from '../../../ctx/stripe/index.js';
import { Query } from '../../../api/executor.js';
import { getApiBusinessPlans, getSanbaseConsumerPlans, queryProductsWithPlans, } from './api.js';
export function useProductPlansFlow(defaultProductsWithPlans = [], productFilter) {
    const { stripe } = useStripeCtx();
    let productsWithPlans = $state.raw(defaultProductsWithPlans);
    const productPlans = $derived(productFilter.$(productsWithPlans));
    onMount(() => stripe.load());
    onMount(() => queryProductsWithPlans(Query)().then((data) => (productsWithPlans = data)));
    return {
        productPlans: {
            get $() {
                return productPlans;
            },
        },
    };
}
