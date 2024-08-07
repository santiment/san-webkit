<script lang="ts">import { Plans, useSubscriptionPlanButtonCtx } from "../../SubscriptionPlan/index.js";
import { usePaymentFormCtx } from "../state.js";
let { onPlanSelect } = $props();
const { selectSubscriptionPlan } = usePaymentFormCtx.get();
useSubscriptionPlanButtonCtx.set({
  onBillingPeriodChangeClick(plan) {
  },
  onPlanButtonClick(plan) {
    selectSubscriptionPlan(plan);
    onPlanSelect();
  }
});
</script>

<Plans></Plans>
