<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Dialogs from '@/ui/Dialog/Dialogs.svelte'
  import Plan from '@/ui/Pricing/Plan.svelte'
  import Page from '@/ui/Pricing/Page/index.svelte'
  import SpecialOfferBanner from '@/ui/Pricing/Page/SpecialOfferBanner.svelte'

  const plans = [
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
</script>

<Meta title="Example/Pricing" />

<Story name="Pricing Page">
  <Page />
</Story>

<Story name="Plan card">
  Trial eligible | Non-trial eligible
  <div class="row">
    <div class="card border"><Plan plan={plans[0]} {plans} /></div>

    <div class="card border"><Plan plan={plans[0]} {plans} isEligibleForTrial={false} /></div>
  </div>

  annualDiscount 35% year | 50% year plans
  <div class="row">
    <div class="card border">
      <Plan
        plan={plans[0]}
        {plans}
        isEligibleForTrial={false}
        annualDiscount={{
          isEligible: true,
          discount: { percentOff: 35 },
        }}
        subscription={{
          status: 'TRIALING',
          plan: plans[0],
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
        plan={plans[0]}
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
        <Plan {plan} {plans} subscription={{ plan: plans[0] }} isEligibleForTrial={false} />
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

<Dialogs />

<style>
  .card {
    margin: 30px 15px;
    width: 300px;
  }
</style>
