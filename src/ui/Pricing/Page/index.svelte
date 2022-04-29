<script lang="ts">
  import Footer from '@/ui/Footer/svelte'
  import { querySanbasePlans } from '@/api/plans'
  import { Billing, onlyProLikePlans } from '@/utils/plans'
  import { subscription$ } from '@/stores/subscription'
  import { customerData$ } from '@/stores/user'
  import BillingToggle from './BillingToggle.svelte'
  import FAQ from './FAQ.svelte'
  import Suggestions from './Suggestions.svelte'
  import SpecialOfferBanner from './SpecialOfferBanner.svelte'
  import Plan from '../Plan.svelte'
  import Comparison from '../Comparison/index.svelte'

  let className = ''
  export { className as class }
  export let billing = Billing.MONTH

  $: subscription = $subscription$
  $: ({ isEligibleForTrial, annualDiscount } = $customerData$)

  let plans = []
  $: billingPlans = (billing, plans.filter(billingFilter))

  querySanbasePlans().then((data) => {
    plans = data.filter(onlyProLikePlans)
  })

  function billingFilter({ interval }) {
    return interval === billing
  }
</script>

<main class={className}>
  <div class="txt-center">
    <h2 class="h3 txt-m mrg-m mrg--b">Be ahead of the game in crypto</h2>

    <h3 class="body-1 c-waterloo">
      Choose the plan which fits your needs and enjoy our premium metrics
    </h3>

    {#if annualDiscount.isEligible}
      <SpecialOfferBanner {...annualDiscount.discount} />
    {/if}

    <BillingToggle bind:billing />
  </div>

  <section id="plans" class="row no-scrollbar">
    <div class="scroll row border">
      {#each billingPlans as plan (plan.id)}
        <Plan
          {plan}
          {plans}
          {subscription}
          {annualDiscount}
          {isEligibleForTrial}
          class="$style.plan"
        />
      {/each}
    </div>
  </section>

  <Comparison plans={billingPlans} class="$style.comparison" />

  <section id="referenced-by">
    <h2>You are in good company</h2>
    <div />
  </section>

  <section id="twitter" />

  <FAQ />

  <Suggestions />
</main>

<Footer class="$style.footer" />

<style lang="scss">
  main {
    :global(section h2) {
      font-size: 32px;
      line-height: 40px;
      font-weight: 500;
      text-align: center;
      margin: 0 auto 32px;

      :global(.desktop) & {
        margin-bottom: 60px;
      }
    }
  }

  #plans {
    padding: 0 16px;
    margin: 0 0 80px;
    overflow: auto;
  }

  .scroll {
    margin: 0 auto;
  }

  .plan {
    flex: 1;
    min-width: 256px;
    max-width: 400px;
    border-right: 1px solid var(--porcelain);

    &:last-child {
      border: 0;
    }
  }

  .comparison {
    margin: 0 auto 80px;
    max-width: var(--page-width, 1140px);
  }

  .bottom {
    background: var(--athens);
    padding: 0 24px;
  }
</style>
