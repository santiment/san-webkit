<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Dialogs from '@/ui/Dialog/Dialogs.svelte'
  import Plan from '@/ui/Pricing/Plan.svelte'
  import Page from '@/ui/Pricing/Page/index.svelte'
  import SpecialOfferBanner from '@/ui/Pricing/Page/SpecialOfferBanner.svelte'
  import SubscriptionSettings from '@/ui/Pricing/SubscriptionSettings/index.svelte'
  import Notifications from '@/ui/Notifications'
  import { showCancelSubscriptionDialog } from '@/ui/Pricing/CancelSubscriptionDialog'
  import OnMount from '../PaymentDialog/OnMount.svelte'
  import SubscriptionCard from '@/ui/Pricing/SubscriptionSettings/SubscriptionCard/SubscriptionCard.svelte'
  import SubscriptionProPlan from '@/ui/Pricing/SubscriptionSettings/SubscriptionCard/SubscriptionProPlan.svelte'
  import { SubscriptionCardType } from '@/ui/Pricing/SubscriptionSettings/SubscriptionCard/utils'

  const plans = [
    {
      amount: 0,
      id: '11',
      interval: 'month',
      isDeprecated: false,
      name: 'FREE',
    },
    {
      amount: 4900,
      id: '201',
      interval: 'month',
      isDeprecated: false,
      name: 'PRO',
    },
    {
      amount: 24900,
      id: '203',
      interval: 'month',
      isDeprecated: false,
      name: 'PRO_PLUS',
    },

    {
      amount: 52900,
      id: '202',
      interval: 'year',
      isDeprecated: false,
      name: 'PRO',
    },
    {
      amount: 270000,
      id: '204',
      interval: 'year',
      isDeprecated: false,
      name: 'PRO_PLUS',
    },
  ]

  const subscriptions = [
    null,
    {
      __typename: 'SubscriptionPlan',
      cancelAtPeriodEnd: false,
      currentPeriodEnd: '2022-10-20T10:43:03Z',
      id: '1104',
      plan: {
        __typename: 'Plan',
        amount: 4900,
        id: '201',
        interval: 'month',
        name: 'F',
        product: { __typename: 'Product', id: '2' },
      },
      status: 'TRIALING',
      trialEnd: '2022-10-20T10:43:03Z',
    },
    {
      __typename: 'SubscriptionPlan',
      cancelAtPeriodEnd: false,
      currentPeriodEnd: '2022-10-20T10:43:03Z',
      id: '1104',
      plan: {
        __typename: 'Plan',
        amount: 4900,
        id: '201',
        interval: 'month',
        name: 'F',
        product: { __typename: 'Product', id: '2' },
      },
      status: 'ACTIVE',
      trialEnd: null,
    },
  ]

  const annualDiscounts = [
    {
      discount: null,
      isEligible: false,
    },
    {
      discount: { percentOff: 50, expireAt: '2022-10-20T10:43:03Z' },
      isEligible: true,
    },
    {
      discount: { percentOff: 35, expireAt: '2022-10-20T10:43:03Z' },
      isEligible: true,
    },
  ]
</script>

<Meta title="Example/Pricing" />

<Story name="Pricing Page">
  <Page />
</Story>

<Story name="Plan card">
  Trial eligible | Non-trial eligible
  <div class="row">
    <div class="card border"><Plan plan={plans[2]} {plans} isEligibleForTrial={true} /></div>

    <div class="card border"><Plan plan={plans[2]} {plans} isEligibleForTrial={false} /></div>
  </div>

  annualDiscount 35% year | 50% year plans
  <div class="row">
    <div class="card border">
      <Plan
        plan={plans[1]}
        {plans}
        isEligibleForTrial={false}
        annualDiscount={{
          isEligible: true,
          discount: { percentOff: 35 },
        }}
        subscription={{
          status: 'TRIALING',
          plan: plans[1],
        }}
      />
    </div>

    <div class="card border">
      <Plan
        plan={plans[2]}
        {plans}
        isEligibleForTrial={false}
        annualDiscount={{
          isEligible: true,
          discount: { percentOff: 35 },
        }}
      />
    </div>

    <div class="card border">
      <Plan
        plan={plans[1]}
        {plans}
        isEligibleForTrial={false}
        annualDiscount={{
          isEligible: true,
          discount: { percentOff: 50 },
        }}
      />
    </div>

    <div class="card border">
      <Plan
        plan={plans[2]}
        {plans}
        isEligibleForTrial={false}
        annualDiscount={{
          isEligible: true,
          discount: { percentOff: 50 },
        }}
      />
    </div>
  </div>

  <div class="row">
    {#each plans as plan}
      <div class="card border">
        <Plan {plan} {plans} subscription={{ plan: plans[1] }} isEligibleForTrial={false} />
      </div>
    {/each}
  </div>

  <div class="row">
    {#each plans as plan}
      <div class="card border">
        <Plan {plan} {plans} subscription={{ plan: plans[1] }} isEligibleForTrial={false} />
      </div>
    {/each}
  </div>

  <div class="row">
    {#each plans as plan}
      <div class="card border">
        <Plan {plan} {plans} subscription={{ plan: plans[2] }} isEligibleForTrial={false} />
      </div>
    {/each}
  </div>

  <div class="row">
    {#each plans as plan}
      <div class="card border">
        <Plan {plan} {plans} subscription={{ plan: plans[3] }} isEligibleForTrial={false} />
      </div>
    {/each}
  </div>
</Story>

<Story name="Special Offer Banner">
  <SpecialOfferBanner percentOff={35} expireAt={'2022-05-08T06:04:12.552Z'} />
  <SpecialOfferBanner percentOff={50} expireAt={'2022-05-08T06:04:12.552Z'} />
</Story>

<Story name="Subscription account settings">
  <div class="padding">
    <h2 class="h4 mrg-l mrg--b">Free, no card</h2>
    <SubscriptionSettings subscription={subscriptions[0]} />
  </div>

  <div class="padding mrg-xl mrg--t">
    <h2 class="h4 mrg-l mrg--b">Free, with card</h2>
    <SubscriptionSettings
      subscription={subscriptions[0]}
      paymentCard={{
        brand: 'MasterCard',
        last4: '0000',
      }}
    />
  </div>
</Story>

<Story name="Subscription cards">
  <div class="padding">
    <h2 class="h4 mrg-l mrg--b">Free plan</h2>
    <div class="row justify">
      <SubscriptionCard
        type={SubscriptionCardType.Current}
        plan={plans[0]}
        subscription={subscriptions[0]}
        isEligibleForTrial={true}
        annualDiscount={annualDiscounts[0]}
        {plans}
      />
      <SubscriptionCard
        type={SubscriptionCardType.Suggested}
        plan={plans[0]}
        subscription={subscriptions[0]}
        isEligibleForTrial={true}
        annualDiscount={annualDiscounts[0]}
        {plans}
      />
      <SubscriptionCard
        type={SubscriptionCardType.Next}
        plan={plans[0]}
        subscription={subscriptions[0]}
        isEligibleForTrial={true}
        annualDiscount={annualDiscounts[0]}
        {plans}
      />
    </div>
  </div>

  <div class="padding mrg-xl mrg--t">
    <h2 class="h4 mrg-l mrg--b">Free on trial</h2>
    <div class="row justify">
      <SubscriptionCard
        type={SubscriptionCardType.Current}
        plan={plans[1]}
        subscription={subscriptions[1]}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[1]}
        {plans}
      />
      <SubscriptionCard
        type={SubscriptionCardType.Suggested}
        plan={plans[1]}
        subscription={subscriptions[1]}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[1]}
        {plans}
      />
      <SubscriptionCard
        type={SubscriptionCardType.Next}
        plan={plans[1]}
        subscription={subscriptions[1]}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[1]}
        {plans}
      />
    </div>
  </div>

  <div class="padding mrg-xl mrg--t">
    <h2 class="h4 mrg-l mrg--b">Free trial has finished</h2>
    <div class="row justify">
      <SubscriptionCard
        type={SubscriptionCardType.Current}
        plan={plans[0]}
        subscription={subscriptions[2]}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[0]}
        {plans}
      />
      <SubscriptionCard
        type={SubscriptionCardType.Suggested}
        plan={plans[0]}
        subscription={subscriptions[2]}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[0]}
        {plans}
      />
      <SubscriptionCard
        type={SubscriptionCardType.Next}
        plan={plans[0]}
        subscription={subscriptions[2]}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[0]}
        {plans}
      />
    </div>
  </div>

  <div class="padding mrg-xl mrg--t">
    <h2 class="h4 mrg-l mrg--b">Pro plan, monthly - 1st month</h2>
    <div class="row justify">
      <SubscriptionCard
        type={SubscriptionCardType.Current}
        plan={plans[1]}
        subscription={subscriptions[2]}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[2]}
        {plans}
      />
      <SubscriptionCard
        type={SubscriptionCardType.Suggested}
        plan={plans[1]}
        subscription={subscriptions[2]}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[2]}
        {plans}
      />
      <SubscriptionCard
        type={SubscriptionCardType.Next}
        plan={plans[1]}
        subscription={subscriptions[2]}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[2]}
        {plans}
      />
    </div>
  </div>

  <div class="padding mrg-xl mrg--t">
    <h2 class="h4 mrg-l mrg--b">Pro plan</h2>
    <div class="row justify">
      <SubscriptionCard
        type={SubscriptionCardType.Current}
        plan={plans[1]}
        subscription={subscriptions[2]}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[0]}
        {plans}
      />
      <SubscriptionCard
        type={SubscriptionCardType.Next}
        plan={plans[1]}
        subscription={subscriptions[2]}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[0]}
        {plans}
      />
    </div>
  </div>

  <div class="padding mrg-xl mrg--t">
    <h2 class="h4 mrg-l mrg--b">Pro+ plan</h2>
    <div class="row justify">
      <SubscriptionCard
        type={SubscriptionCardType.Current}
        plan={plans[2]}
        subscription={subscriptions[2]}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[0]}
        {plans}
      />
      <SubscriptionProPlan />
    </div>
  </div>
</Story>

<Story name="Subscription cancel dialog">
  <OnMount run={() => showCancelSubscriptionDialog()} />
</Story>

<Dialogs />

<Notifications />

<style>
  .card {
    margin: 30px 15px;
    width: 300px;
  }

  .padding {
    margin: 16px;
  }
</style>
