<script context="module" lang="ts">
  import { querySanbasePlans, getCachedSanbasePlans } from '@/api/plans'
  import { formatPrice, Plan } from '@/utils/plans'
  import { Preloader } from '@/utils/fn'
  import { stripe } from '@/stores/stripe'
  import { dialogs } from '@/ui/Dialog'
  import PaymentDialog from './index.svelte'

  export const showPaymentDialog = (props?: any) => dialogs.show(PaymentDialog, props)

  const preloadData = () => (querySanbasePlans(), stripe.load())
  export const dataPreloader = Preloader(preloadData)

  export const onlyProLikePlans = ({ name }: SAN.Plan) => name.includes(Plan.PRO)
</script>

<script lang="ts">
  import Dialog from '@/ui/Dialog'
  import { DialogLock } from '@/ui/Dialog/dialogs'
  import { PlanName } from '@/utils/plans'
  import Banner from './Banner.svelte'
  import PayerInfo from './PayerInfo.svelte'
  import Confirmation from './Confirmation.svelte'
  import Footer from './Footer.svelte'
  import { buyPlan, getPaymentFormData, mapPlans } from './utils'

  export let DialogPromise: SAN.DialogController
  let defaultPlan = Plan.PRO
  export { defaultPlan as plan }
  export let interval = 'year' as SAN.Plan['interval']
  export let isSinglePlan = false
  export let plansFilter = onlyProLikePlans
  export let trialDaysLeft = 0
  export let sanBalance = 0
  export let isEligibleForTrial = false
  export let onPaymentSuccess
  export let onPaymentError

  let closeDialog
  let plans = [] as SAN.Plan[]
  let plan = {} as SAN.Plan
  let loading = false
  let StripeCard: stripe.elements.Element

  if (process.browser) getPlans()

  $: name = PlanName[plan.name] || plan.name
  $: price = name ? formatPrice(plan) : ''

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

  function onChange() {
    DialogPromise.locking = DialogLock.WARN
  }

  function onSubmit({ currentTarget }) {
    loading = true
    DialogPromise.locking = DialogLock.LOCKED
    const data = getPaymentFormData(currentTarget)

    buyPlan(plan, $stripe as stripe.Stripe, StripeCard, data)
      .then(onPaymentSuccess)
      .catch(onPaymentError)
      .finally(() => {
        loading = false
        DialogPromise.locking = DialogLock.WARN
      })
  }
</script>

<Dialog {...$$props} title="Payment details" bind:closeDialog>
  <section class="dialog">
    <Banner {plan} {name} {price} {trialDaysLeft} {isEligibleForTrial} />

    <form on:submit|preventDefault={onSubmit} on:change={onChange}>
      <PayerInfo bind:StripeCard />
      <Confirmation
        bind:plan
        {plans}
        {name}
        {price}
        {sanBalance}
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
