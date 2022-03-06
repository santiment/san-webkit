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

<Dialogs />

<style>
  :root {
    --accent: var(--green);
  }
</style>
