<script>
  import { onMount, onDestroy } from 'svelte'
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Products from '@/ui/Products/index.svelte'

  let isOpened

  let timer
  onMount(() => {
    timer = setTimeout(() => (isOpened = true), 200)
  })
  onDestroy(() => {
    clearTimeout(timer)
  })
</script>

<Meta title="Example/Products" component={Products} />

<Template let:args>
  <Products {isOpened} />
</Template>

<Story name="Opened by default. No selected product" />
