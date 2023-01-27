<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Products from '@/ui/Products/svelte'
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
  name="Compact"
  args={{
    isOpened: true,
    closeTimeout: 9999999,
    isCompact: true,
  }}
/>

<Story
  name="Compact - column"
  args={{
    isOpened: true,
    closeTimeout: 9999999,
    isCompact: true,
    isColumn: true,
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
  name="SanX"
  args={{
    active: 'sanx',
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

<!-- <Story
  name="Sanhunters"
  args={{
    active: 'sanhunters',
    isOpened: true,
    closeTimeout: 9999999,
  }}
/> -->

<Story
  name="Insights"
  args={{
    active: 'insights',
    isOpened: true,
    closeTimeout: 9999999,
  }}
/>

<Story
  name="Custom active colors"
  args={{
    active: 'sanbase',
    isOpened: true,
    closeTimeout: 9999999,
    dropdownClassName: '$style.purple',
  }}
/>

<style>
  .purple {
    --product-active-bg: var(--purple-light-1);
    --product-active-1: var(--purple);
    --product-active-2: var(--purple-light-3);
  }
</style>
