<script lang="ts">import { CardMethod } from "./Card/index.js";
import { EthStablecoinsMethod } from "./EthStablecoins/index.js";
import { SanTokenBurningMethod } from "./SanTokenBurning/index.js";
import { UniswapLiquidityMethod } from "./UniswapLiquidity/index.js";
import Selector from "../../Selector.svelte";
import { usePaymentFormCtx } from "../../state.js";
const { paymentMethod, selectPaymentMethod, subscriptionPlan } = usePaymentFormCtx();
let isBusinessPlanSelected = $derived(!!subscriptionPlan.$.formatted?.isBusiness);
let selectedPaymentMethod = $derived(paymentMethod.$);
let options = $derived(
  isBusinessPlanSelected ? [CardMethod, EthStablecoinsMethod] : [CardMethod, EthStablecoinsMethod, SanTokenBurningMethod, UniswapLiquidityMethod]
);
function onSelect(option) {
  selectPaymentMethod(option);
}
</script>

<Selector name="Payment method" smallGap active={selectedPaymentMethod} {options} {onSelect}>
  {#snippet children(option)}
    <h3 class="flex gap-2 center">
      <img src={option.img} alt="{option.name} image" class="h-6 max-h-6" />
      {option.name}
    </h3>
  {/snippet}
</Selector>

{#if selectedPaymentMethod}
  <svelte:component this={selectedPaymentMethod.Component}></svelte:component>
{/if}
