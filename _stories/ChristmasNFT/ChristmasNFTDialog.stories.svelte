<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Dialogs from '@/ui/Dialog/Dialogs.svelte'
  import Notifications from '@/ui/Notifications'
  import OnMount from '../PaymentDialog/OnMount.svelte'
  import { showChristmasNFTDialog } from '@/ui/ChristmasNFTDialog/Dialog.svelte'
  import Button from '@/ui/ChristmasNFTDialog/Button.svelte'
</script>

<Meta title="Example/ChristmasNFTDialog" />

<Template>
  <button on:click={showChristmasNFTDialog}>Show dialog</button>
</Template>

<Story name="NFT Button">
  <Button />
</Story>

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
  <OnMount run={() => showChristmasNFTDialog({ page: 4, currentUser: { ethAccounts: [] } })} />
</Story>

<Story name="Info - 4 - Winner - Metamask not connected">
  <OnMount
    run={() =>
      showChristmasNFTDialog({ page: 4, isNftWinner: true, currentUser: { ethAccounts: [] } })}
  />
</Story>

<Story name="Info - 4 - Winner - With metamask connected">
  <OnMount
    run={() =>
      showChristmasNFTDialog({
        page: 4,
        isNftWinner: true,
        currentUser: { ethAccounts: ['0xf17d119effa0dcbe24d3fa346860be851150358f'] },
      })}
  />
</Story>

<Story name="Info - 4 - Discount code - Fetching insights">
  <OnMount
    run={() =>
      showChristmasNFTDialog({
        page: 4,
        discountCode: 'NFTBATTLE22',
        currentUser: {},
      })}
  />
</Story>

<Dialogs />

<Notifications />
