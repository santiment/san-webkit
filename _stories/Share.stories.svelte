<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Dialogs from '@/ui/Dialog/Dialogs.svelte'
  import { showShareDialog } from '@/ui/Share/index.svelte'
  import OnMount from './PaymentDialog/OnMount.svelte'
</script>

<Meta title="Example/Share" />

<Story name="Share dialog">
  <OnMount run={() => showShareDialog()} />
</Story>

<Story name="Share dialog with props">
  <OnMount
    run={() =>
      showShareDialog({
        title: 'Test',
        entity: 'Screener',
        isAuthor: true,
      })}
  />
</Story>

<Dialogs />
