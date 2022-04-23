<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Page from '@/ui/Pricing/Page.svelte'
</script>

<Meta title="Example/Plan" component={Page} />

<Story name="Plan">
  <Page />
</Story>

<style>
  .border {
    /* padding: 32px 48px; */
    max-width: 406px;
  }

  .slides {
    max-width: 300px;
    /* height: 100px; */
  }
</style>
