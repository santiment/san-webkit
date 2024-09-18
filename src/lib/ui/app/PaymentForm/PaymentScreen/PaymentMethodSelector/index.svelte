<script lang="ts">
  import { useDelayFlow } from '$lib/ctx/stripe/index.js'
  import { trackEvent } from '$lib/analytics/index.js'
  import { CardMethod } from './Card/index.js'
  import { EthStablecoinsMethod } from './EthStablecoins/index.js'
  import { SanTokenBurningMethod } from './SanTokenBurning/index.js'
  import { UniswapLiquidityMethod } from './UniswapLiquidity/index.js'
  import Selector from '../../Selector.svelte'
  import { usePaymentFormCtx } from '../../state.js'

  const { paymentMethod, selectPaymentMethod, subscriptionPlan } = usePaymentFormCtx()

  const delayStripe = useDelayFlow(400)

  let isBusinessPlanSelected = $derived(!!subscriptionPlan.$.formatted?.isBusiness)
  let selectedPaymentMethod = $derived(paymentMethod.$)
  let options = $derived(
    isBusinessPlanSelected
      ? [CardMethod, EthStablecoinsMethod]
      : [CardMethod, EthStablecoinsMethod, SanTokenBurningMethod, UniswapLiquidityMethod],
  ) as (typeof selectedPaymentMethod)[]

  function onSelect(option: typeof selectedPaymentMethod) {
    selectPaymentMethod(option)

    trackEvent('select', {
      value: option.name,
      type: 'payment_method',
      source: 'payment_dialog',
    })
  }
</script>

<Selector
  name="Payment method"
  smallGap
  active={selectedPaymentMethod}
  {options}
  {onSelect}
  class="no-scrollbar xs:-mx-5 xs:flex-nowrap xs:overflow-auto xs:px-5"
>
  {#snippet children(option)}
    <h3 class="flex gap-2 center">
      <img src={option.img} alt="{option.name} image" class="h-6 max-h-6" />
      {option.name}
    </h3>
  {/snippet}
</Selector>

{#if selectedPaymentMethod}
  <selectedPaymentMethod.Component delayStripe={delayStripe.$}></selectedPaymentMethod.Component>
{/if}
