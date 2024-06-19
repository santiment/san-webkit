<script lang="ts">import { ss } from "svelte-runes";
import { applyBuilder } from "$ui/utils/index.js";
let { builder, children } = $props();
let ref = ss(null);
$effect(() => {
  if (!ref.$) return;
  return applyBuilder(ref.$, builder).destroy;
});
</script>

{@render children({ ref })}
