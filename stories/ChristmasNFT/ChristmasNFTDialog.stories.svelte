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

<Story name="Intro - 0">
  <OnMount run={() => showChristmasNFTDialog()} />
</Story>

<Story name="Insights - 1">
  <OnMount run={() => showChristmasNFTDialog({ page: 1 })} />
</Story>

<Story name="Top Ten - 2">
  <OnMount run={() => showChristmasNFTDialog({ page: 2 })} />
</Story>

<Story name="Rewards - 3">
  <OnMount run={() => showChristmasNFTDialog({ page: 3 })} />
</Story>

<Story name="Info - 4">
  <OnMount run={() => showChristmasNFTDialog({ page: 4 })} />
</Story>

<Dialogs />
