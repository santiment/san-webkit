<script lang="ts">
  import type { IPaneApi, Time } from '@santiment-network/chart-next'

  import { onMount, type Snippet } from 'svelte'

  import { applyStyles, cn } from '../../../utils/index.js'

  type TProps = {
    class?: string
    children: Snippet
    chartPane: IPaneApi<Time>
  }
  let { class: className, children, chartPane }: TProps = $props()

  let timer: NodeJS.Timeout
  let mounted = $state(false)

  function mountToPane(node: HTMLElement, ctx: { chartPane: any }) {
    tryAppendPaneLegend(node, ctx)

    return {
      destroy() {
        node?.remove()
        ctx.chartPane = null
      },
    }
  }

  // TODO: Add pane subscribe/getter to san-charts [@vanguard, 06.05]
  function tryAppendPaneLegend(
    node: HTMLElement,
    ctx: { chartPane: typeof chartPane },
    attempt = 0,
  ) {
    if (attempt > 3) return

    timer = setTimeout(() => {
      if (!ctx.chartPane) return

      let el: HTMLElement

      try {
        el = ctx.chartPane.getHTMLElement()
      } catch (e) {
        console.error(e)
        return tryAppendPaneLegend(node, ctx, attempt + 1)
      }

      el.children[1].appendChild(node)
      applyStyles(node.previousElementSibling as HTMLElement, { zIndex: '0' })

      node.classList.remove('hidden')
      mounted = true
    }, 100)
  }

  onMount(() => () => window.clearTimeout(timer))
</script>

<section
  class={cn('absolute left-1 top-1 z-[3] hidden items-start gap-0.5 column', className)}
  use:mountToPane={{ chartPane }}
>
  {#if mounted}
    {@render children()}
  {/if}
</section>
