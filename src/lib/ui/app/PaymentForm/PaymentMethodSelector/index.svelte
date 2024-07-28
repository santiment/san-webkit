<script lang="ts">
  import Selector from '../Selector.svelte'
  import { usePaymentFormCtx } from '../state.js'
  import { CardMethod } from './Card/index.js'
  import { EthStablecoinsMethod } from './EthStablecoins/index.js'
  import { SanTokenBurningMethod } from './SanTokenBurning/index.js'
  import { UniswapLiquidityMethod } from './UniswapLiquidity/index.js'

  let { isBusinessPlanSelected = false } = $props()

  const { paymentForm } = usePaymentFormCtx()

  let selectedPaymentMethod = $derived(paymentForm.$.paymentMethod)
  let options = isBusinessPlanSelected
    ? [CardMethod, EthStablecoinsMethod]
    : [CardMethod, EthStablecoinsMethod, SanTokenBurningMethod, UniswapLiquidityMethod]

  function onSelect(option: typeof selectedPaymentMethod) {
    paymentForm.$.paymentMethod = option
    paymentForm.$ = paymentForm.$
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
