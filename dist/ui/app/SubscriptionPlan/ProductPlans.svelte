<script lang="ts">import {
  getApiBusinessPlans,
  getSanbaseConsumerPlans,
  queryProductsWithPlans
} from "./api.js";
import { tap } from "rxjs";
import { useObserve } from "svelte-runes";
import PlanCard from "./PlanCard.svelte";
import { useStripeCtx } from "../../../ctx/stripe/index.js";
let {
  productsWithPlans = [],
  productFilter = getSanbaseConsumerPlans,
  children
} = $props();
const { stripe } = useStripeCtx();
let plans = $derived(productFilter(productsWithPlans));
useObserve(() => queryProductsWithPlans()().pipe(tap((data) => productsWithPlans = data)));
$effect(() => {
  stripe.load();
});
</script>

<section class="flex min-h-[680px] divide-x rounded-lg border">
  {#if plans}
    {#each plans.billingGroupPlans as billingGroup}
      <PlanCard {billingGroup}></PlanCard>
    {/each}
  {/if}
</section>

{@render children?.(plans)}
