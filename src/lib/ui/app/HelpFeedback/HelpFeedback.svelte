<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements'

  import Button from '$ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'

  type TProps = {
    class?: string
    onclick?: MouseEventHandler<HTMLButtonElement>
  }

  const { class: className = '', onclick }: TProps = $props()
</script>

<Button
  variant="fill"
  class={cn(
    'z-[1] mb-2 h-auto px-1.5 py-3 [writing-mode:vertical-lr] [&>svg]:rotate-90',
    className,
  )}
  icon="chat"
  iconSize={14}
  iconHeight={16}
  {onclick}
>
  Help & Feedback
</Button>
