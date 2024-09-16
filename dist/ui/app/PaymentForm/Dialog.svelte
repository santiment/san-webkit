<script module lang="ts">import Component from "./Dialog.svelte";
export const showPaymentDialog$ = () => dialogs$.new(Component);
</script>

<script lang="ts">import Dialog, { dialogs$ } from "../../core/Dialog/index.js";
import { useStripeCtx } from "../../../ctx/stripe/index.js";
import { useCustomerCtx } from "../../../ctx/customer/index.js";
import { SCREENS, usePaymentFormCtx } from "./state.js";
import DialogHeader from "./DialogHeader.svelte";
import PlansScreen from "./PlansScreen/index.svelte";
import BillingPeriodSelector from "./PaymentScreen/BillingPeriodSelector/index.svelte";
import PaymentMethodSelector from "./PaymentScreen/PaymentMethodSelector/index.svelte";
import OrderSummary from "./PaymentScreen/OrderSummary/index.svelte";
import ScreenTransition, { useScreenTransitionCtx } from "../ScreenTransition/index.js";
let { defaultPlan = null } = $props();
const { subscriptionPlan, productsWithPlans } = usePaymentFormCtx({ defaultPlan });
useStripeCtx();
useCustomerCtx();
const { screen } = useScreenTransitionCtx(SCREENS, SCREENS[defaultPlan ? 1 : 0]);
</script>

<Dialog class="h-full w-full column">
  <DialogHeader disabled={subscriptionPlan.$.selected ? undefined : SCREENS[1]}></DialogHeader>
  {#if productsWithPlans.$.length === 0}
    <div class="skeleton absolute bottom-0 left-0 right-0 top-0 z-50"></div>
  {/if}

  <ScreenTransition
    class="gap-10 overflow-y-scroll bg-white px-36 pb-20 pt-16 column lg:p-10 md:px-5"
  >
    {#if screen.$ === SCREENS[0]}
      <PlansScreen onPlanSelect={() => (screen.$ = SCREENS[1])}></PlansScreen>
    {:else}
      <div class="flex gap-10 md:flex-wrap">
        <div class="w-full min-w-[400px] gap-10 self-start column md:min-w-0 md:gap-12">
          <h1 class="color-rhino text-2xl font-medium md:text-3xl">
            {#if subscriptionPlan.$.formatted}
              {subscriptionPlan.$.formatted.name} plan
            {:else}
              Unknown plan
            {/if}
          </h1>

          <BillingPeriodSelector></BillingPeriodSelector>

          <PaymentMethodSelector></PaymentMethodSelector>
        </div>

        <OrderSummary></OrderSummary>
      </div>
    {/if}
  </ScreenTransition>
</Dialog>
