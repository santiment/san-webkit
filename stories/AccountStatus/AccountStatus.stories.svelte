<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import AccountStatus from '@/ui/AccountStatus.svelte'
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
    <div class="h4">Logged in + Upgrade</div>
    <div class="row v-center">
      <AccountStatus currentUser={{}} />
    </div>
  </section>

  <section>
    <div class="h4">Logged in + Trial</div>
    <div class="row v-center">
      <AccountStatus currentUser={{}} customerData={{ isEligibleForTrial: true }} />
    </div>
  </section>

  <section>
    <div class="h4">Logged in + Plan</div>
    <div class="row v-center">
      <AccountStatus currentUser={{}} subscription={{ plan: { name: 'PRO' } }} />
    </div>
  </section>

  <section>
    <div class="h4">Logged in + Plan + Annual Discount</div>
    <div class="row v-center">
      <AccountStatus
        currentUser={{}}
        subscription={{ plan: { name: 'PRO' } }}
        customerData={{ annualDiscount: { isEligible: true, discount: { percentOff: 50 } } }}
      />
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
