<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import AccountDropdown from '@/ui/AccountDropdown/index.svelte'
  import { AccountStatusType } from '@/ui/AccountStatus.svelte'
  import { UI$$ } from '@/stores/ui'
  import { Customer$$ } from '@/stores/customer'

  UI$$()
  Customer$$()

  const fiveDaysLater = new Date()
  fiveDaysLater.setDate(fiveDaysLater.getDate() + 5)

  const currentUser = {
    id: 1,
    username: 'test',
    email: 'test@local.dev',
  }
</script>

<Meta title="Example/Profile" component={AccountDropdown} />

<Story name="Account">
  <div class="column mrg-xl mrg--t">
    <section>
      <div class="h4">Anonymous</div>
      <div class="row">
        <AccountDropdown />
      </div>
    </section>
    <section>
      <div class="h4">Logged in + New user. Free trial available</div>
      <div class="row">
        <AccountDropdown {currentUser} customerData={{ isEligibleForTrial: true }} />
      </div>
    </section>
    <section>
      <div class="h4">Logged in + User on free trial (Variant 1)</div>
      <div class="row">
        <AccountDropdown
          {currentUser}
          subscription={{ plan: { name: 'PRO' }, trialEnd: fiveDaysLater }}
          customerData={{ annualDiscount: { isEligible: true, discount: { percentOff: 50 } } }}
        />
      </div>
    </section>
    <section>
      <div class="h4">Logged in + User on free trial (Variant 2)</div>
      <div class="row">
        <AccountDropdown
          {currentUser}
          variant={AccountStatusType.Second}
          subscription={{ plan: { name: 'PRO' }, trialEnd: fiveDaysLater }}
          customerData={{ annualDiscount: { isEligible: true, discount: { percentOff: 50 } } }}
        />
      </div>
    </section>
    <section>
      <div class="h4">Logged in + Pro Plan. First month offer (Variant 1)</div>
      <div class="row">
        <AccountDropdown
          {currentUser}
          subscription={{ plan: { name: 'PRO' } }}
          customerData={{
            annualDiscount: {
              isEligible: true,
              discount: { percentOff: 35, expireAt: fiveDaysLater },
            },
          }}
        />
      </div>
    </section>
    <section>
      <div class="h4">Logged in + Pro Plan. First month offer (Variant 2)</div>
      <div class="row">
        <AccountDropdown
          {currentUser}
          subscription={{ plan: { name: 'PRO' } }}
          variant={AccountStatusType.Second}
          customerData={{
            annualDiscount: {
              isEligible: true,
              discount: { percentOff: 35, expireAt: fiveDaysLater },
            },
          }}
        />
      </div>
    </section>
    <section>
      <div class="h4">Logged in + Pro Plan</div>
      <div class="row">
        <AccountDropdown {currentUser} subscription={{ plan: { name: 'PRO' } }} />
      </div>
    </section>
    <section>
      <div class="h4">Logged in + Free Plan. Trial finished</div>
      <div class="row">
        <AccountDropdown {currentUser} customerData={{ isEligibleForTrial: false }} />
      </div>
    </section>
  </div>
</Story>

<style>
  .h4 {
    margin: 0 0 8px;
  }
</style>
