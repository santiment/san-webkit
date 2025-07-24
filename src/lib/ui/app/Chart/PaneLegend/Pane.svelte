<script lang="ts">
  import type { Action } from 'svelte/action'

  import { type Snippet } from 'svelte'

  import { applyStyles, cn } from '$ui/utils/index.js'

  type TProps = {
    class?: string
    children: Snippet
    element: HTMLElement
  }
  let { class: className, children, element }: TProps = $props()

  let mounted = $state(false)

  const mountToPane: Action = (node: HTMLElement) => {
    element.appendChild(node)
    applyStyles(node.previousElementSibling as HTMLElement, { zIndex: '0' })

    node.classList.remove('hidden')
    mounted = true
  }
</script>

<section
  class={cn('absolute left-1 top-1 z-[3] hidden items-start gap-0.5 column', className)}
  use:mountToPane
>
  {#if mounted}
    {@render children()}
  {/if}
</section>
