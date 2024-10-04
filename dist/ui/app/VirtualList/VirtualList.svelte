<!--
@component
    
Wrap list in a parent with a `flex-direction: column` and pass `flex-1` to the VirtuaList for it to
take whole available space.

@example

```svelte
<div class="flex flex-col">
  <VirtualList class="flex-1" >...</VirtualList>
</div>
```

 -->

<script lang="ts">import {} from "svelte";
import { VList } from "virtua/svelte";
let {
  class: className,
  data,
  getKey,
  maxHeight,
  itemHeight = 32,
  children
} = $props();
let style = $derived(
  maxHeight ? `max-height:${maxHeight}px;height:calc(${itemHeight} * ${data.length}px)` : ""
);
</script>

<VList class={className} {data} {getKey} {style} let:item>
  {@render children({ item })}
</VList>
