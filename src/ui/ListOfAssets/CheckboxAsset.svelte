<script lang="ts">
  import type { Asset } from './api'

  import Checkbox from '@/ui/Checkbox.svelte'
  import Item from './Asset.svelte'

  export let item: Asset
</script>

<Item {item} class="$style.item" on:click>
  <Checkbox as="span" />
</Item>

<style>
  .item {
    padding: 0 0 16px;
    --color-hover: var(--green);
  }
</style>
