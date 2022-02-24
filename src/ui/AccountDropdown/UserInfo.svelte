<script>
  import Svg from '@/ui/Svg/svelte'
  import { ProductNameById, PlanName } from '@/utils/plans'
  import { checkIsActiveSubscription, getTrialDaysLeft } from '@/utils/subscription'

  export let user

  const { id, username, email } = user
  const subscriptions = user.subscriptions.filter(checkIsActiveSubscription).map((subscription) => {
    const { plan } = subscription
    const product = ProductNameById[plan.product.id]
    const name = PlanName[plan.name]
    return `${product}: ${name} plan` + getTrialInfo(subscription)
  })

  function getTrialInfo(subscription) {
    const daysLeft = getTrialDaysLeft(subscription)
    return daysLeft ? ` (trial - ${daysLeft})` : ''
  }
</script>

<section>
  <a class="row" href="https://app.santiment.net/profile/{id}">
    <span>{username || email}</span>
  </a>

  <div class="caption c-waterloo">
    {#each subscriptions as subscription}
      <div class="mrg-xs mrg--t">{subscription}</div>
    {:else}
      <div class="mrg-xs mrg--t">Sanbase: Free plan</div>
      <a
        class="upgrade btn-2 btn-1 btn--orange btn--s mrg-s mrg--t v-center body-3"
        href="https://app.santiment.net/pricing">
        <Svg id="crown" w="13" h="10" class="mrg-s mrg--r" />
        Upgrade
      </a>
    {/each}
  </div>
</section>

<style>
  section {
    padding: 13px 20px 16px 16px;
  }

  a {
    white-space: nowrap;
  }

  span {
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .upgrade {
    display: inline-flex;
  }
</style>
