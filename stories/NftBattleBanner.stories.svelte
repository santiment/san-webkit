<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Banner from '@/ui/ChristmasNFTDialog/Banner.svelte'
  import Dialogs from '@/ui/Dialog/Dialogs.svelte'
</script>

<Meta title="Example/NftBattleBanner" component={Banner} />

<Template let:args>
  <Banner {...args} />
</Template>

<Story name="Banner" />

<Dialogs />
