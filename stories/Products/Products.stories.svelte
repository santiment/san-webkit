<script>
  import { onMount, onDestroy } from 'svelte'
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Products from '@/ui/Products/index.svelte'

  let isOpened = true
</script>

<Meta title="Example/Products" component={Products} />

<Template let:args>
  <Products {...args} />
</Template>

<Story name="No selected product" />

<Story
  name="Opened by default. No selected product"
  args={{
    isOpened: true,
    closeTimeout: 9999999,
  }}
/>

<Story
  name="Sanbase"
  args={{
    active: 'sanbase',
    isOpened: true,
    closeTimeout: 9999999,
  }}
/>

<Story
  name="Sansheets"
  args={{
    active: 'sansheets',
    isOpened: true,
    closeTimeout: 9999999,
  }}
/>

<Story
  name="SanAPI"
  args={{
    active: 'sanapi',
    isOpened: true,
    closeTimeout: 9999999,
  }}
/>

<Story
  name="SanR"
  args={{
    active: 'sanr',
    isOpened: true,
    closeTimeout: 9999999,
  }}
/>

<Story
  name="Sanhunters"
  args={{
    active: 'sanhunters',
    isOpened: true,
    closeTimeout: 9999999,
  }}
/>

<Story
  name="Insights"
  args={{
    active: 'insights',
    isOpened: true,
    closeTimeout: 9999999,
  }}
/>
