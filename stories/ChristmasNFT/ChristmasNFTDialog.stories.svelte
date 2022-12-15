<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Dialogs from '@/ui/Dialog/Dialogs.svelte'
  import OnMount from '../PaymentDialog/OnMount.svelte'
  import { showChristmasNFTDialog } from '@/ui/ChristmasNFTDialog/Dialog.svelte'
</script>

<Meta title="Example/ChristmasNFTDialog" />

<Template>
  <button on:click={showChristmasNFTDialog}>Show dialog</button>
</Template>

<Story name="Welcome dialog">
  <OnMount run={() => showChristmasNFTDialog()} />
</Story>

<Dialogs />
