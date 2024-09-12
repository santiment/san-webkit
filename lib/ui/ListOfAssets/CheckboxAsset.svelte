<script>import Checkbox from './../../ui/Checkbox.svelte';
import Item from './Asset.svelte';
export let isActive = false;
export let item;
</script>

<Item class="s-7vyvrw" {item} on:click>
  <Checkbox as="span" {isActive} />
</Item>

<style>
  :global(.s-7vyvrw) {
    padding: 0 0 16px;
    --color-hover: var(--green);
  }
</style>
