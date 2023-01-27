<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Footer from '@/ui/Footer/svelte'
</script>

<Meta title="Example/Footer" component={Footer} />

<Template let:args>
  <Footer {...args} />
</Template>

<Story name="Green accent" />

<Story
  name="Purple accent"
  args={{
    class: '$style.purple',
  }}
/>

<style>
  .purple {
    --accent: var(--purple);
    --accent-hover: var(--purple-hover);
  }
</style>
