<script lang="ts">
  import type { Asset } from './types'

  import Checkbox from '@/ui/Checkbox.svelte'
  import Item from './Asset.svelte'

  export let isActive = false
  export let item: Asset
</script>

<Item {item} on:click>
  <Checkbox as="span" {isActive} />
</Item>

<style>
  Item {
    padding: 0 0 16px;
    --color-hover: var(--green);
  }
</style>
