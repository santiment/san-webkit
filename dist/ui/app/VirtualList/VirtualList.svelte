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

<script lang="ts">
  import { type ComponentProps, type Snippet } from 'svelte'
  import { VList, type VListHandle } from 'virtua/svelte'

  type T = $$Generic

  let {
    handle = $bindable(),
    class: className,
    data,
    getKey,

    maxHeight,
    itemHeight = 32,

    children,
  }: {
    handle?: VListHandle
    class?: string
    data: T[]

    /**
     * `maxHeight` allows to have a list with a dynamic height.
     *
     * The list will not exceed `maxHeight`, but might be smaller than it.
     *
     * Depends on `itemHeight` to calculate current list's height.
     */
    maxHeight?: number

    /**
     * Approximate height of the item.
     *
     * Used in pair with `maxHeight` and only to calculate dynamic max-height of the list.
     */
    itemHeight?: number

    getKey: ComponentProps<VList<T>>['getKey']
    children: Snippet<[T, number]>
  } = $props()

  let style = $derived(
    maxHeight ? `max-height:${maxHeight}px;height:calc(${itemHeight} * ${data.length}px)` : '',
  )
</script>

<VList bind:this={handle} class={className} {data} {getKey} {style} {children}></VList>
