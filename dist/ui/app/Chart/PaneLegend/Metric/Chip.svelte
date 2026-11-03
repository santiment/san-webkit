<script lang="ts">
  import type { Snippet } from 'svelte'

  import { cn } from '../../../../utils/index.js'

  type TProps = {
    class?: string
    children: Snippet
    explanation: string
    onclick?: (e: MouseEvent & { currentTarget: HTMLElement }) => void
  }
  let { class: className, children, explanation, onclick }: TProps = $props()
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<span
  {onclick}
  aria-label={explanation}
  class={cn(
    'expl-tooltip ml-1 rounded-md bg-athens px-1.5 py-0.5 text-xs text-waterloo',
    className,
  )}
  style="--expl-align-x:-50%"
>
  {@render children()}
</span>
