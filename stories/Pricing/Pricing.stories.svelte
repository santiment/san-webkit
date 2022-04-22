<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Plan from '@/ui/Pricing/Plan.svelte'
</script>

<Meta title="Example/Plan" component={Plan} />

<Story name="Plan">
  <div class="border">
    <Plan />
  </div>
</Story>

<style>
  .border {
    padding: 32px 48px;
    max-width: 406px;
  }
</style>
