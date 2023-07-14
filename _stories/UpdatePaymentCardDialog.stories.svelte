<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Dialogs from '@/ui/Dialog/Dialogs.svelte'
  import OnMount from './PaymentDialog/OnMount.svelte'
  import { showUpdatePaymentCardDialog } from '@/ui/UpdatePaymentCardDialog.svelte'
</script>

<Meta title="Example/UpdatePaymentCardDialog" />

<Template>
  <button on:click={showUpdatePaymentCardDialog}>Show dialog</button>
</Template>

<Story name="UpdatePaymentCardDialog">
  <OnMount run={() => showUpdatePaymentCardDialog()} />
</Story>

<Dialogs />
