<script lang="ts" generics="T">
  import { type ComponentProps, type Snippet } from 'svelte'

  import { VList } from 'virtua/svelte'

  let {
    class: className,
    data,
    getKey,
    children,
  }: {
    class?: string
    data: T[]
    getKey: ComponentProps<VList<T>>['getKey']
    children: Snippet<[{ item: T }]>
  } = $props()
</script>

<VList class={className} {data} {getKey} let:item>
  {@render children({ item })}
</VList>
