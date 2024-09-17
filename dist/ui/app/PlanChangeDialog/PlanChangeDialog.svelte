<script module lang="ts">import Component from "./PlanChangeDialog.svelte";
export const showPlanChangeDialog$ = () => dialogs$.new(Component);
</script>

<script lang="ts">import Dialog, { dialogs$ } from "../../core/Dialog/index.js";
import Button from "../../core/Button/index.js";
import { useCustomerCtx } from "../../../ctx/customer/index.svelte.js";
import { Query } from "../../../api/executor.js";
import { getFormattedMonthDayYear } from "../../../utils/dates.js";
import { mutateUpdateSubscription } from "./api.js";
import { getFormattedBillingPlan } from "../SubscriptionPlan/utils.js";
let {
  newPlan,
  onSuccess,
  Controller
} = $props();
const { customer } = useCustomerCtx();
const formatDate = (date = Date.now()) => getFormattedMonthDayYear(new Date(date));
function onChangeClick() {
  const { primarySubscription } = customer.$;
  if (!primarySubscription) return;
  mutateUpdateSubscription(Query)(primarySubscription.id, newPlan.id).then(() => {
    customer.reload();
    onSuccess?.();
  });
}
</script>

{#if customer.$.plan}
  {@const formattedPlan = getFormattedBillingPlan(customer.$.plan)}
  {@const newFormattedPlan = getFormattedBillingPlan(newPlan)}
  {@const activeUntilData = customer.$.primarySubscription?.currentPeriodEnd}
  <Dialog class="px-8 py-6">
    <header class="mb-4 text-xl">
      Changing plan to {newFormattedPlan.name} (${newFormattedPlan.price} / {newFormattedPlan.billing})
    </header>

    <p>
      Your current plan ({customer.$.planName}
      ${formattedPlan.price} / {formattedPlan.billing}) is active until {formatDate(
        activeUntilData,
      )}.
      <br />
      Starting from this date your card will be charged ${newFormattedPlan.price} per
      {newPlan.interval}.

      <Button href="/account" class="mt-4 text-green">Update your billing information here.</Button>
    </p>

    <section class="mt-6 flex gap-2">
      <Button href="/account" variant="fill" onclick={onChangeClick}>Change plan</Button>
      <Button href="/account" variant="border" onclick={Controller.close}>Cancel</Button>
    </section>
  </Dialog>
{/if}
