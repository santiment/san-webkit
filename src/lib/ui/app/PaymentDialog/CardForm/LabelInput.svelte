<script lang="ts">
  import Input from '$ui/core/Input/index.js'
  import type { ComponentProps } from 'svelte'

  let {
    label,
    children,
    class: className,
    ...props
  }: ComponentProps<Input> & { label: string } = $props()
</script>

<label class={className}>
  <div class="mb-[3px] text-xs font-semibold text-waterloo">{label}</div>

  {#if children}
    {@render children()}
  {:else}
    <Input inputClass="p-2.5 px-4" {...props}></Input>
  {/if}
</label>
