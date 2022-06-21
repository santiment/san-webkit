<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import AccountStatus, { AccountStatusType } from '@/ui/AccountStatus.svelte'

  const threeDaysLater = new Date()
  threeDaysLater.setDate(threeDaysLater.getDate() + 3)
</script>

<Meta title="Example/Profile" component={AccountStatus} />

<Story name="Status">
  <section>
    <div class="h4">Anonymous user</div>
    <div class="row v-center">
      <AccountStatus />
    </div>
  </section>

  <section>
    <div class="h4">Logged in + Free trial available (Variant 1)</div>
    <div class="row v-center">
      <AccountStatus currentUser={{}} customerData={{ isEligibleForTrial: true }} />
    </div>
  </section>

  <section>
    <div class="h4">Logged in + Free trial available (Variant 2)</div>
    <div class="row v-center">
      <AccountStatus
        currentUser={{}}
        customerData={{ isEligibleForTrial: true }}
        variant={AccountStatusType.Second} />
    </div>
  </section>

  <section>
    <div class="h4">Login. User on free trial (Variant 1)</div>
    <div class="row v-center">
      <AccountStatus
        currentUser={{}}
        subscription={{ plan: { name: 'PRO' }, trialEnd: threeDaysLater }}
        customerData={{ annualDiscount: { isEligible: true, discount: { percentOff: 50 } } }} />
    </div>
  </section>

  <section>
    <div class="h4">Login. User on free trial (Variant 2)</div>
    <div class="row v-center">
      <AccountStatus
        currentUser={{}}
        subscription={{ plan: { name: 'PRO' }, trialEnd: threeDaysLater }}
        variant={AccountStatusType.Second}
        customerData={{ annualDiscount: { isEligible: true, discount: { percentOff: 50 } } }} />
    </div>
  </section>

  <section>
    <div class="h4">Login. Pro Plan. First month offer (Variant 1)</div>
    <div class="row v-center">
      <AccountStatus
        currentUser={{}}
        subscription={{ plan: { name: 'PRO' } }}
        customerData={{ annualDiscount: { isEligible: true, discount: { percentOff: 35 } } }} />
    </div>
  </section>

  <section>
    <div class="h4">Login. Pro Plan. First month offer (Variant 2)</div>
    <div class="row v-center">
      <AccountStatus
        currentUser={{}}
        subscription={{ plan: { name: 'PRO' } }}
        variant={AccountStatusType.Second}
        customerData={{ annualDiscount: { isEligible: true, discount: { percentOff: 35 } } }} />
    </div>
  </section>

  <section>
    <div class="h4">Login. Pro Plan</div>
    <div class="row v-center">
      <AccountStatus currentUser={{}} subscription={{ plan: { name: 'PRO' } }} />
    </div>
  </section>

  <section>
    <div class="h4">Login. Free Plan. Trial finished</div>
    <div class="row v-center">
      <AccountStatus currentUser={{}} customerData={{ isEligibleForTrial: false }} />
    </div>
  </section>
</Story>

<style>
  section {
    padding: 10px 25px 20px;
  }

  .h4 {
    margin: 0 0 8px;
  }
</style>
