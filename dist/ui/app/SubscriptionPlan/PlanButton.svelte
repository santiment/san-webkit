<script lang="ts">import { useCustomerCtx } from "../../../ctx/customer/index.js";
import {
  BUSINESS_PLANS,
  CONSUMER_PLANS,
  SubscriptionPlan
} from "./plans.js";
import {
  checkIsAlternativeBillingPlan,
  checkIsCurrentPlan,
  getPlanName
} from "./utils.js";
import Button from "../../core/Button/index.js";
import { cn } from "../../utils/index.js";
import { useSubscriptionPlanButtonCtx } from "./ctx.js";
let { plan } = $props();
const { onPlanButtonClick, onBillingPeriodChangeClick } = useSubscriptionPlanButtonCtx.get();
const { customer } = useCustomerCtx();
let isBusinessPlan = $derived(BUSINESS_PLANS.has(plan.name));
let isConsumerPlan = $derived(CONSUMER_PLANS.has(plan.name));
let isCurrentPlan = $derived(checkIsCurrentPlan(customer.$.plan, plan));
let isBillingChangeAvailable = $derived(checkIsAlternativeBillingPlan(customer.$.plan, plan));
let classes = $derived({
  class: cn(
    "center",
    isBusinessPlan && "bg-blue hover:bg-blue-hover",
    isConsumerPlan && "bg-orange hover:bg-orange-hover"
  )
});
</script>

{#if isCurrentPlan}
  <Button variant="fill" size="lg" disabled class="!text-fiord center">Your current plan</Button>
{:else if plan.name === SubscriptionPlan.FREE.key}
  <Button variant="border" size="lg" class="center">Default plan</Button>
{:else if plan.name === SubscriptionPlan.CUSTOM.key}
  <Button variant="fill" size="lg" {...classes}>Let's talk!</Button>
{:else if isBillingChangeAvailable}
  <Button variant="fill" size="lg" {...classes} onclick={() => onBillingPeriodChangeClick?.(plan)}
    >Change billing period</Button
  >
{:else if isBusinessPlan}
  <Button variant="fill" size="lg" {...classes} onclick={() => onPlanButtonClick?.(plan)}
    >Get {getPlanName(plan)}</Button
  >
{:else if isConsumerPlan && customer.$.isEligibleForSanbaseTrial}
  <Button variant="fill" size="lg" {...classes} onclick={() => onPlanButtonClick?.(plan)}
    >Start Free Trial</Button
  >
{:else}
  <Button variant="fill" size="lg" {...classes} onclick={() => onPlanButtonClick?.(plan)}
    >Upgrade</Button
  >
{/if}
