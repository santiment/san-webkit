<script>
  import { onDestroy, onMount } from 'svelte'
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Dialogs from '@/ui/Dialog/Dialogs.svelte'
  import { showPaymentDialog } from '@/ui/PaymentDialog/index.svelte'
  import { dialogs } from '@/ui/Dialog'

  // onMount(() => showPaymentDialog({ isEligibleForTrial: true, trialDaysLeft: 3 }))
  onMount(() => {
    console.log('payment mounted')
  })
  onDestroy(() => dialogs.hide(0))
</script>

<Meta title="Example/PaymentDialog" />

<Template>
  <button on:click={showPaymentDialog}>Show dialog</button>
</Template>

<Story name="PaymentDialog" />

<Dialogs />

<style>
  :root {
    --accent: var(--green);
  }
</style>
