<script>import Checkbox from './../../ui/Checkbox.svelte';
import Item from './Asset.svelte';
export let isActive = false;
export let item;</script>

<Item {item} class="item-1QFb2h" on:click>
  <Checkbox as="span" {isActive} />
</Item>

<style>
  :global(.item-1QFb2h) {
    padding: 0 0 16px;
    --color-hover: var(--green);
  }
</style>
