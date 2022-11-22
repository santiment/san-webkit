<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Dialogs from '@/ui/Dialog/Dialogs.svelte'
  import { showShareDialog, SHARE_TYPE } from '@/ui/Share/Dialog.svelte'
  import OnMount from './PaymentDialog/OnMount.svelte'
</script>

<Meta title="Example/Share" />

<Story name="Share dialog">
  <OnMount
    run={() =>
      showShareDialog({
        shareLink: 'google.com',
        shareText: 'test',
      })}
  />
</Story>

<Story name="Share dialog with props">
  <OnMount
    run={() =>
      showShareDialog({
        shareLink: 'google.com',
        shareText: 'test',
        shareType: SHARE_TYPE.Alert,
      })}
  />
</Story>

<Dialogs />
