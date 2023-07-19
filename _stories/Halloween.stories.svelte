<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import HalloweenBtn from '@/ui/Halloween/Button.svelte'
  import Pumpkin from '@/ui/Halloween/Pumpkin.svelte'
  import HalloweenBanner from '@/ui/Halloween/Banner.svelte'
  import HalloweenAcademy from '@/ui/Halloween/Academy.svelte'
  import Dialogs from '@/ui/Dialog/Dialogs.svelte'
  import { showHalloweenPopup } from '@/ui/Halloween/Dialog.svelte'
  import OnMount from './PaymentDialog/OnMount.svelte'
</script>

<Meta title="Example/Halloween" component={HalloweenBtn} />

<Template let:args>
  <HalloweenBtn {...args} />
</Template>

<Story name="Halloween Button" />

<Story name="Halloween Popup">
  <OnMount run={showHalloweenPopup} />
</Story>

<Story name="Halloween Pumpkins">
  <Pumpkin showOn="insights" />
  <Pumpkin showOn="explorer" />
  <Pumpkin showOn="charts" />
</Story>

<Story name="Halloween Banners">
  <HalloweenBanner />
  <HalloweenAcademy />
</Story>

<Dialogs />
