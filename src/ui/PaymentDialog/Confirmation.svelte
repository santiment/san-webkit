<script lang="ts">
  import Input from './Input.svelte'
  import PlanSelector from './PlanSelector.svelte'
  import Skeleton from '../Skeleton.svelte'
  import Svg from '../Svg/svelte'
  import { PlanName } from '../../utils/plans'

  export let plans
  export let plan
  export let isSinglePlan

  $: selectedNameBilling = `${PlanName[plan.name]} ${plan.interval}ly`
</script>

<div class="confirmation relative">
  <Skeleton isActive={!plans.length}>
    <PlanSelector bind:plan {selectedNameBilling} {plans} {isSinglePlan} />

    <Input title="Discount code" name="discount" placeholder="2H8vZG5P" required={false} />

    <div class="holder row mrg-xl mrg--b">
      <Svg id="info" w="16" class="$style.info mrg-s mrg--r" />
      <div>
        Holding 1000 SAN tokens will result in a 20% discount.
        <a
          href="https://santiment.net/about-santiment/how-to-buy-san/"
          target="_blank"
          rel="noopener noreferrer">Learn how to buy SAN.</a>
      </div>
    </div>

    <div class="c-waterloo">
      <div class="row justify mrg-m mrg--b">
        {selectedNameBilling}
        <div>$540</div>
      </div>
      <div class="row justify">
        Discount code 20%
        <div class="c-accent">- $108</div>
      </div>

      <div class="hr" />

      <div class="total body-2 txt-m row justify v-center c-black">
        Total due
        <span class="h4 txt-b">$49</span>
      </div>
    </div>

    <button type="submit" class="btn-1 btn--l row h-center fluid mrg-l mrg--t">Pay</button>
  </Skeleton>
</div>

<style>
  .confirmation {
    grid-area: confirmation;
    background: var(--athens);
    border-radius: 4px;
    padding: 27px 32px 24px;
  }

  .hr {
    margin: 16px 0;
    border-top: 1px solid var(--porcelain);
  }

  a {
    color: var(--green);
  }
  a:hover {
    color: var(--green-hover);
  }

  .holder {
    padding: 12px;
    background: var(--green-light-1);
    border-radius: 4px;
    fill: var(--waterloo);
    max-width: 355px;
  }
  .info {
    margin-top: 2px;
  }
</style>
