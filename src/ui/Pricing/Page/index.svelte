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
  import Plans from './Plans.svelte'

  let className = ''
  export { className as class }
  export let billing = Billing.MONTH

  $: subscription = $subscription$
  $: ({ isLoggedIn, isEligibleForTrial, annualDiscount } = $customerData$)

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

  <Plans {plans} {billingPlans} {subscription} {annualDiscount} {isLoggedIn} {isEligibleForTrial} />

  <Comparison class="$style.comparison" plans={billingPlans} {isLoggedIn} {isEligibleForTrial} />

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

  .comparison {
    margin: 0 auto 80px;
    max-width: var(--page-width, 1140px);
  }

  .bottom {
    background: var(--athens);
    padding: 0 24px;
  }
</style>