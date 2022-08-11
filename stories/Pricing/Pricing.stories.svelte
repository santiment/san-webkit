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
  import UserPlanCard from '@/ui/Pricing/SubscriptionSettings/SubscriptionCard/UserPlanCard.svelte'
  import SuggestedPlanCard from '@/ui/Pricing/SubscriptionSettings/SubscriptionCard/PlanCard.svelte'
  import {
    PRO_PLUS_SUGGESTION,
    PRO_SUGGESTION,
  } from '@/ui/Pricing/SubscriptionSettings/SubscriptionCard/suggestions'
  import FullAccessCard from '@/ui/Pricing/SubscriptionSettings/SubscriptionCard/FullAccessCard.svelte'

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

  const noSubscription = null

  const freeSubscription = {
    cancelAtPeriodEnd: false,
    currentPeriodEnd: null,
    id: '1104',
    plan: {
      amount: 0,
      id: '11',
      interval: 'month',
      isDeprecated: false,
      name: 'FREE',
    },
    status: 'Active',
    trialEnd: null,
  }

  const trialSubscription = {
    cancelAtPeriodEnd: false,
    currentPeriodEnd: '2022-10-20T10:43:03Z',
    id: '1104',
    plan: {
      amount: 4900,
      id: '201',
      interval: 'month',
      isDeprecated: false,
      name: 'PRO',
    },
    status: 'TRIALING',
    trialEnd: '2022-10-20T10:43:03Z',
  }

  const activeSubscription = {
    cancelAtPeriodEnd: false,
    currentPeriodEnd: '2022-10-20T10:43:03Z',
    id: '1104',
    plan: {
      amount: 4900,
      id: '201',
      interval: 'month',
      isDeprecated: false,
      name: 'PRO',
    },
    status: 'ACTIVE',
    trialEnd: null,
  }

  const proPlusSubscription = {
    cancelAtPeriodEnd: false,
    currentPeriodEnd: '2022-10-20T10:43:03Z',
    id: '1104',
    plan: {
      amount: 270000,
      id: '204',
      interval: 'year',
      isDeprecated: false,
      name: 'PRO_PLUS',
    },
    status: 'ACTIVE',
    trialEnd: null,
  }

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
    <SubscriptionSettings subscription={freeSubscription} />
  </div>

  <div class="padding">
    <h2 class="h4 mrg-l mrg--b">Pro, no card</h2>
    <SubscriptionSettings subscription={activeSubscription} />
  </div>

  <div class="padding">
    <h2 class="h4 mrg-l mrg--b">Pro+, no card</h2>
    <SubscriptionSettings subscription={proPlusSubscription} />
  </div>

  <div class="padding mrg-xl mrg--t">
    <h2 class="h4 mrg-l mrg--b">Free, with card</h2>
    <SubscriptionSettings
      subscription={freeSubscription}
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
      <UserPlanCard plan={plans[0]} />
      <SuggestedPlanCard plan={plans[1]} {...PRO_SUGGESTION} />
      <SuggestedPlanCard plan={plans[2]} {...PRO_PLUS_SUGGESTION} />
    </div>

    <div class="row justify">
      <SubscriptionCard
        type={SubscriptionCardType.Current}
        plan={plans[0]}
        subscription={noSubscription}
        isEligibleForTrial
        annualDiscount={annualDiscounts[0]}
        {plans}
      />
      <SubscriptionCard
        type={SubscriptionCardType.Suggested}
        plan={plans[0]}
        subscription={noSubscription}
        isEligibleForTrial
        annualDiscount={annualDiscounts[0]}
        {plans}
      />
      <SubscriptionCard
        type={SubscriptionCardType.Next}
        plan={plans[0]}
        subscription={noSubscription}
        isEligibleForTrial
        annualDiscount={annualDiscounts[0]}
        {plans}
      />
    </div>
  </div>

  <div class="padding mrg-xl mrg--t">
    <h2 class="h4 mrg-l mrg--b">Free on trial</h2>

    <div class="row justify">
      <UserPlanCard plan={trialSubscription.plan} subscription={trialSubscription} />
      <SuggestedPlanCard plan={plans[3]} altPlan={plans[1]} {...PRO_SUGGESTION} discount={50} />
      <SuggestedPlanCard
        plan={plans[4]}
        altPlan={plans[2]}
        {...PRO_PLUS_SUGGESTION}
        discount={50}
      />
    </div>
    <div class="row justify">
      <SubscriptionCard
        type={SubscriptionCardType.Current}
        plan={plans[1]}
        subscription={trialSubscription}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[1]}
        {plans}
      />
      <SubscriptionCard
        type={SubscriptionCardType.Suggested}
        plan={plans[1]}
        subscription={trialSubscription}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[1]}
        {plans}
      />
      <SubscriptionCard
        type={SubscriptionCardType.Next}
        plan={plans[1]}
        subscription={trialSubscription}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[1]}
        {plans}
      />
    </div>
  </div>

  <div class="padding mrg-xl mrg--t">
    <h2 class="h4 mrg-l mrg--b">Free trial has finished</h2>
    <div class="row justify">
      <UserPlanCard plan={plans[0]} subscription={activeSubscription} />
      <SuggestedPlanCard plan={plans[1]} {...PRO_SUGGESTION} />
      <SuggestedPlanCard plan={plans[2]} {...PRO_PLUS_SUGGESTION} />
    </div>

    <div class="row justify">
      <SubscriptionCard
        type={SubscriptionCardType.Current}
        plan={plans[0]}
        subscription={activeSubscription}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[0]}
        {plans}
      />
      <SubscriptionCard
        type={SubscriptionCardType.Suggested}
        plan={plans[0]}
        subscription={activeSubscription}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[0]}
        {plans}
      />
      <SubscriptionCard
        type={SubscriptionCardType.Next}
        plan={plans[0]}
        subscription={activeSubscription}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[0]}
        {plans}
      />
    </div>
  </div>

  <div class="padding mrg-xl mrg--t">
    <h2 class="h4 mrg-l mrg--b">Pro plan, monthly - 1st month</h2>
    <div class="row justify">
      <UserPlanCard plan={trialSubscription.plan} subscription={activeSubscription} />
      <SuggestedPlanCard plan={plans[3]} altPlan={plans[1]} {...PRO_SUGGESTION} discount={35} />
      <SuggestedPlanCard
        plan={plans[4]}
        altPlan={plans[2]}
        {...PRO_PLUS_SUGGESTION}
        discount={35}
      />
    </div>

    <div class="row justify">
      <SubscriptionCard
        type={SubscriptionCardType.Current}
        plan={plans[1]}
        subscription={activeSubscription}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[2]}
        {plans}
      />
      <SubscriptionCard
        type={SubscriptionCardType.Suggested}
        plan={plans[1]}
        subscription={activeSubscription}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[2]}
        {plans}
      />
      <SubscriptionCard
        type={SubscriptionCardType.Next}
        plan={plans[1]}
        subscription={activeSubscription}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[2]}
        {plans}
      />
    </div>
  </div>

  <div class="padding mrg-xl mrg--t">
    <h2 class="h4 mrg-l mrg--b">Pro plan</h2>
    <div class="row justify">
      <UserPlanCard plan={trialSubscription.plan} subscription={activeSubscription} />
      <SuggestedPlanCard plan={plans[2]} {...PRO_PLUS_SUGGESTION} />
    </div>

    <div class="row justify">
      <SubscriptionCard
        type={SubscriptionCardType.Current}
        plan={plans[1]}
        subscription={activeSubscription}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[0]}
        {plans}
      />
      <SubscriptionCard
        type={SubscriptionCardType.Next}
        plan={plans[1]}
        subscription={activeSubscription}
        isEligibleForTrial={false}
        annualDiscount={annualDiscounts[0]}
        {plans}
      />
    </div>
  </div>

  <div class="padding mrg-xl mrg--t">
    <h2 class="h4 mrg-l mrg--b">Pro+ plan</h2>
    <div class="row justify">
      <UserPlanCard plan={plans[2]} subscription={activeSubscription} />
      <FullAccessCard />
    </div>

    <div class="row justify">
      <SubscriptionCard
        type={SubscriptionCardType.Current}
        plan={plans[2]}
        subscription={activeSubscription}
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
