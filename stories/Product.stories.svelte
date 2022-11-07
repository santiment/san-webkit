<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Product from '@/ui/Product.svelte'
</script>

<Meta title="Example/Product" component={Product} />

<Template let:args>
  <Product {...args} />
</Template>

<Story
  name="Sanbase"
  args={{
    title: 'Sanbase',
  }}
/>
