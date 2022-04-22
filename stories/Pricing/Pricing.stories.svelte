<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Plan from '@/ui/Pricing/Plan.svelte'
  import Comparison from '@/ui/Pricing/Comparison/index.svelte'
  import Slides from '@/ui/Slides.svelte'
</script>

<Meta title="Example/Plan" component={Plan} />

<Story name="Plan">
  <div class="slides">
    <Slides amount={2}>
      <div class="border">123</div>
      <div class="border">456</div>
    </Slides>
  </div>

  <Comparison />

  <div class="border">
    <Plan />
  </div>
</Story>

<style>
  .border {
    /* padding: 32px 48px; */
    max-width: 406px;
  }

  .slides {
    max-width: 200px;
    height: 100px;
  }
</style>
