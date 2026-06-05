<script lang="ts">
  import type { Snippet } from 'svelte'

  import Button from '$ui/core/Button/Button.svelte'
  import Checkbox from '$ui/core/Checkbox/index.js'
  import { cn } from '$ui/utils/index.js'

  type TProps = {
    class?: string
    isActive: boolean | undefined
    label: string
    disabled?: boolean
    onCheckedChange: (value: boolean) => void
    right: Snippet
    bottom?: Snippet
  }

  const {
    class: className,
    label,
    isActive = false,
    disabled = false,
    onCheckedChange,
    right,
    bottom,
  }: TProps = $props()
</script>

<div class={cn('flex flex-col', className)}>
  <div class="flex items-center">
    <label class="flex items-center">
      <Checkbox class="mr-2" {isActive} {disabled} {onCheckedChange} />
      {label}
    </label>

    {#if disabled}
      <Button variant="link" href="/account#notifications" class="ml-2">
        Enable notifications
      </Button>
    {/if}

    <div class="ml-auto max-w-[215px] text-right">
      {@render right()}
    </div>
  </div>

  {#if bottom && isActive}
    <div class="ml-[27px] mr-4 mt-[14px]">
      {@render bottom()}
    </div>
  {/if}
</div>
