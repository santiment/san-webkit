<script context="module" lang="ts">
  import PaymentDialog from './index.svelte'
  import { dialogs } from '../Dialog'
  import { querySanbasePlans, getCachedSanbasePlans } from '../../api/plans'
  import { Plan } from '../../utils/plans'
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
  import PayerInfo from './PayerInfo.svelte'
  import Confirmation from './Confirmation.svelte'
  import Dialog from '../Dialog'

  export let DialogPromise: SAN.DialogController
  let defaultPlan = Plan.PRO
  export { defaultPlan as plan }
  export let interval = 'year' as SAN.Plan['interval']
  export let isSinglePlan = false
  export let plansFilter = onlyProLikePlans

  let closeDialog
  let plans = [] as SAN.Plan[]
  let plan = {} as SAN.Plan
  let loading = false

  if (process.browser) getPlans()

  $: console.log(plans)
  $: console.log(plan)

  function findDefaultPlan({ name, interval: billing }) {
    return defaultPlan === name && interval === billing
  }

  function getPlans() {
    const cached = getCachedSanbasePlans()

    if (cached) setPlans(cached)
    else querySanbasePlans().then(setPlans)
  }

  function setPlans(data: SAN.Plan[]) {
    const PlanBillings = {} as { [key: string]: SAN.Plan[] }

    data.forEach((plan) => {
      if (!plansFilter(plan)) return

      const planBillings = PlanBillings[plan.name]
      if (planBillings) planBillings.push(plan)
      else PlanBillings[plan.name] = [plan]
    })

    plans = Object.values(PlanBillings).flat()
    plan = plans.find(findDefaultPlan) || plans[0]
  }

  function onSubmit({ currentTarget }) {}
</script>

<Dialog {...$$props} title="Payment details" bind:closeDialog>
  <section class="dialog">
    <div class="banner mrg-l mrg--b">
      <div class="txt-m mrg-xs mrg--b">Enjoy your 14-day free trial of Sanbase Pro!</div>
      <div>
        Your card will be charged <span class="txt-b">$49</span> after the trial period ends. You
        won't be charged if you cancel anytime before <span class="txt-b">03/03/22</span>
      </div>
    </div>

    <form action="">
      <PayerInfo />
      <Confirmation bind:plan {plans} {isSinglePlan} />
    </form>
  </section>
  <section class="footer row hv-center caption txt-m c-waterloo">
    Fully secured checkout
    <div class="break" />
    30 day money back guarantee
  </section>
</Dialog>

<style>
  .dialog {
    padding: 16px 40px 24px;
    overflow: auto;
  }

  .banner {
    background: var(--green-light-1);
    padding: 16px 24px;
  }

  form {
    display: grid;
    grid: 'info confirmation' 1fr / 1fr 1fr;
    gap: 0 32px;
  }

  .footer {
    fill: var(--casper);
    background: var(--athens);
    padding: 15px 24px;
  }

  .break {
    margin: 0 23px;
  }
</style>
