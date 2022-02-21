<script context="module" lang="ts">
  import PaymentDialog from './index.svelte'
  import { dialogs } from '../Dialog'
  import { querySanbasePlans, getCachedSanbasePlans } from '../../api/plans'
  import { formatPrice, Plan } from '../../utils/plans'
  import { stripe } from '../../stores/stripe'

  export const showPaymentDialog = (props) => dialogs.show(PaymentDialog, props)

  const once = { once: true }
  const preloadData = () => (querySanbasePlans(), stripe.load())
  export function dataPreloader(node: HTMLElement) {
    node.addEventListener('mouseenter', preloadData, once)
    node.addEventListener('touchstart', preloadData, once)
  }

  export const onlyProLikePlans = ({ name }: SAN.Plan) => name.includes(Plan.PRO)
</script>

<script lang="ts">
  import Banner from './Banner.svelte'
  import PayerInfo from './PayerInfo.svelte'
  import Confirmation from './Confirmation.svelte'
  import Footer from './Footer.svelte'
  import { buyPlan, getPaymentFormData, mapPlans } from './utils'
  import Dialog from '../Dialog'
  import { PlanName } from '../../utils/plans'

  export let DialogPromise: SAN.DialogController
  let defaultPlan = Plan.PRO
  export { defaultPlan as plan }
  export let interval = 'year' as SAN.Plan['interval']
  export let isSinglePlan = false
  export let plansFilter = onlyProLikePlans
  export let trialDaysLeft = 0
  export let isEligibleForTrial = false

  let closeDialog
  let plans = [] as SAN.Plan[]
  let plan = {} as SAN.Plan
  let loading = false
  let StripeCard: stripe.elements.Element

  if (process.browser) getPlans()

  $: name = PlanName[plan.name] || plan.name
  $: price = name ? formatPrice(plan) : ''
  $: console.log(plans)
  $: console.log(name)

  function findDefaultPlan({ name, interval: billing }) {
    return defaultPlan === name && interval === billing
  }

  function getPlans() {
    const cached = getCachedSanbasePlans()

    if (cached) setPlans(cached)
    else querySanbasePlans().then(setPlans)
  }

  function setPlans(data: SAN.Plan[]) {
    plans = mapPlans(data, plansFilter)
    plan = plans.find(findDefaultPlan) || plans[0]
  }

  function onSubmit({ currentTarget }) {
    loading = true
    const data = getPaymentFormData(currentTarget)

    buyPlan(plan, $stripe as stripe.Stripe, StripeCard, data)
      .then(console.log)
      .catch(console.log)
      .finally(() => {
        loading = false
      })
  }
</script>

<Dialog {...$$props} title="Payment details" bind:closeDialog>
  <section class="dialog">
    <Banner {plan} {name} {price} {trialDaysLeft} {isEligibleForTrial} />

    <form on:submit|preventDefault={onSubmit}>
      <PayerInfo bind:StripeCard />
      <Confirmation
        bind:plan
        {plans}
        {name}
        {price}
        {isSinglePlan}
        {isEligibleForTrial}
        {loading} />
    </form>
  </section>

  <Footer />
</Dialog>

<style lang="scss">
  .dialog {
    padding: 16px 40px 24px;
    overflow: auto;
  }

  form {
    display: grid;
    grid: 'info confirmation' 1fr / 1fr 1fr;
    gap: 0 32px;
  }

  :global(body:not(.desktop)) {
    .dialog {
      padding: 16px;
    }

    form {
      display: block;
    }
  }

  .dialog :global(a) {
    color: var(--green);
    &:hover {
      color: var(--green-hover);
    }
  }
</style>
