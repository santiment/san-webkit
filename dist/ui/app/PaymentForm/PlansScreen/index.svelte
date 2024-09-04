<script lang="ts">import { PricingSection, useSubscriptionPlanButtonCtx } from "../../SubscriptionPlan/index.js";
import { usePaymentFormCtx } from "../state.js";
let { onPlanSelect } = $props();
const { selectSubscriptionPlan } = usePaymentFormCtx.get();
useSubscriptionPlanButtonCtx.set({
  onBillingPeriodChangeClick(_plan) {
  },
  onPlanButtonClick(plan) {
    selectSubscriptionPlan(plan);
    onPlanSelect();
  }
});
</script>

<PricingSection></PricingSection>
