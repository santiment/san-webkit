<script>import Checkbox from './../../ui/Checkbox.svelte';
import Item from './Asset.svelte';
export let isActive = false;
export let item;
</script>

<Item class="s-juj5jq" {item} on:click>
  <Checkbox as="span" {isActive} />
</Item>

<style>
  :global(.s-juj5jq) {
    padding: 0 0 16px;
    --color-hover: var(--green);
  }
</style>
