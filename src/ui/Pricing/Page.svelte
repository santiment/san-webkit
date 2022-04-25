<script>
  import Footer from '@/ui/Footer/svelte'
  import { Billing, onlyProLikePlans } from '@/utils/plans'
  import BillingToggle from './BillingToggle.svelte'
  import Comparison from './Comparison/index.svelte'
  import Plan from './Plan.svelte'
  import FAQ from './FAQ.svelte'
  import { querySanbasePlans } from '@/api/plans'

  export let billing = Billing.MONTH

  let plans = []
  $: billingPlans = (billing, plans.filter(billingFilter))

  querySanbasePlans().then((data) => {
    plans = data.filter(onlyProLikePlans)
  })

  $: console.log(billingPlans)

  function billingFilter({ interval }) {
    return interval === billing
  }
</script>

<div class="txt-center">
  <h2 class="h3 txt-m mrg-m mrg--b">Be ahead of the game in crypto</h2>

  <h3 class="body-1 c-waterloo">
    Choose the plan which fits your needs and enjoy our premium metrics
  </h3>

  <BillingToggle bind:billing />
</div>

<div class="plans row no-scrollbar">
  <div class="scroll row border">
    {#each billingPlans as plan (plan.id)}
      <Plan {plan} class="$style.plan" />
    {/each}
  </div>
</div>

<Comparison plans={billingPlans} class="$style.comparison" />

<FAQ />

<div class="bottom">
  <Footer class="$style.footer" />
</div>

<style lang="scss">
  .plans {
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
    max-width: 1152px;
  }

  .bottom {
    background: var(--athens);
    padding: 0 24px;
  }

  .footer {
    max-width: 1152px;
    margin: 0 auto;
  }
</style>
