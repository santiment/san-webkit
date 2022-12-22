<script>import Check from './Check.svelte';
export let small = false;</script>

<li class="row">
  <Check {small} />
  <slot />
</li>
