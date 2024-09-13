<script lang="ts">import { useDeviceCtx } from "../../../../ctx/device/index.svelte.js";
import { PricingSection, useSubscriptionPlanButtonCtx } from "../../SubscriptionPlan/index.js";
import { usePaymentFormCtx } from "../state.js";
let { onPlanSelect } = $props();
const { selectSubscriptionPlan } = usePaymentFormCtx.get();
const { device } = useDeviceCtx();
useSubscriptionPlanButtonCtx.set({
  onBillingPeriodChangeClick(_plan) {
  },
  onPlanButtonClick(plan) {
    selectSubscriptionPlan(plan);
    onPlanSelect();
  }
});
</script>

<div
  class="gap-[120px] column sm:-mx-5 sm:gap-[104px]"
  style="--plans-sticky-top: -{device.$.isMobile ? 40 : 65}px"
>
  <PricingSection></PricingSection>
</div>
