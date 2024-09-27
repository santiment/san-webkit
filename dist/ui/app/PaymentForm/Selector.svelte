<script lang="ts">import { cn } from "../../utils/index.js";
let {
  name,
  smallGap = false,
  options,
  active,
  onSelect,
  children,
  class: className
} = $props();
</script>

<div>
  <h2 class="mb-4 text-lg font-medium text-fiord">{name}</h2>

  <div class={cn('flex flex-wrap text-base font-medium', smallGap ? 'gap-3' : 'gap-4', className)}>
    {#each options as option (option.name)}
      {@const isActive = option === active}
      <button
        class={cn(
          'min-w-max gap-3 whitespace-nowrap rounded-lg border border-athens bg-athens px-4 py-[7px] column  md:py-3',
          !smallGap && 'flex-1',
          isActive && 'border-green bg-green-light-1',
        )}
        onclick={() => onSelect(option)}
      >
        {@render children(option)}
      </button>
    {/each}
  </div>
</div>
