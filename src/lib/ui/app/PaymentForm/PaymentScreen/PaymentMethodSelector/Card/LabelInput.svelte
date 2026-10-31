<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import Input from '$ui/core/Input/index.js'

  let {
    label,
    class: className,
    children,
    ...props
  }: ComponentProps<typeof Input> & { label: string } = $props()
</script>

<label class={className}>
  <div class="t-caption-1-medium mb-[3px] text-waterloo">{label}</div>

  {#if children}
    {@render children()}
  {:else}
    <Input inputClass="p-2.5 px-4" {...props}></Input>
  {/if}
</label>
