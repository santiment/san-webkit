<script lang="ts">
  import VirtualList from '$ui/app/VirtualList/VirtualList.svelte'
  import { cn } from '$ui/utils/index.js'
  import type { ComponentProps } from 'svelte'

  let { class: className, ...props }: ComponentProps<VirtualList<any>> = $props()
  console.log({ ...props })

  const sizes = [20, 40, 180, 77]

  const data = Array.from({ length: 1000 }).map((_, i) => ({ id: i, size: sizes[i % 4] + 'px' }))
</script>

<div class="flex min-h-[100vh] p-6 column">
  <VirtualList
    class={cn('rounded border border-red', className)}
    {...props}
    {data}
    getKey={(item) => item.id}
  >
    {#snippet children({ item })}
      <div
        style={`
      height: ${item.size};
      border-bottom: solid 1px #ccc;
    `}
      >
        {item.id}
      </div>
    {/snippet}
  </VirtualList>
</div>
