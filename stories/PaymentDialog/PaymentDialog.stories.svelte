<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Dialogs from '@/ui/Dialog/Dialogs.svelte'
  import { showPaymentDialog } from '@/ui/PaymentDialog/index.svelte'
  import OnMount from './OnMount.svelte'
</script>

<Meta title="Example/PaymentDialog" />

<Template>
  <button on:click={showPaymentDialog}>Show dialog</button>
</Template>

<Story name="Eligible for trial">
  <OnMount run={() => showPaymentDialog({ isEligibleForTrial: true })} />
</Story>

<Story name="Active trial">
  <OnMount run={() => showPaymentDialog({ isEligibleForTrial: false, trialDaysLeft: 3 })} />
</Story>

<Story name="Expired trial">
  <OnMount run={() => showPaymentDialog({ isEligibleForTrial: false, trialDaysLeft: 0 })} />
</Story>

<Story name="Trial - Annual discount">
  <OnMount
    run={() =>
      showPaymentDialog({
        isEligibleForTrial: false,
        trialDaysLeft: 1,
        annualDiscount: {
          isEligible: true,
          discount: {
            percentOff: 35,
          },
        },
      })}
  />
</Story>

<Story name="Expired trial - Annual discount">
  <OnMount
    run={() =>
      showPaymentDialog({
        isEligibleForTrial: false,
        trialDaysLeft: 0,
        annualDiscount: {
          isEligible: true,
          discount: {
            percentOff: 50,
          },
        },
      })}
  />
</Story>

<Story name="Saved card">
  <OnMount
    run={() =>
      showPaymentDialog({
        isEligibleForTrial: false,
        trialDaysLeft: 0,
        savedCard: { last4: '5467', expMonth: 11, expYear: 25, brand: 'Visa' },
      })}
  />
</Story>

<Dialogs />

<style>
  :root {
    --accent: var(--green);
  }
</style>
