<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { Action } from 'svelte/action'

  import { fade } from 'svelte/transition'
  import { computePosition, offset as offsetMiddleware, flip, shift } from '@floating-ui/dom'

  import { useDeviceCtx } from '../../../ctx/device/index.svelte.js'
  import { cn } from '../../utils/index.js'

  type Props = {
    children: Snippet<[{ tooltipAction: Action }]>
    explanation: string
    class?: string
    offset?: number
  }

  let { children, explanation, class: className, offset = 15 }: Props = $props()

  const { device } = useDeviceCtx()
  const isDesktop = $derived(device.$.isDesktop)

  let x = $state(0)
  let y = $state(0)
  let isHovered = $state(false)
  let tooltipElement = $state<HTMLElement | null>(null)

  const mouse = { x: 0, y: 0 }

  const virtualElement = {
    getBoundingClientRect: () => ({
      width: 0,
      height: 0,
      x: mouse.x,
      y: mouse.y,
      top: mouse.y,
      left: mouse.x,
      right: mouse.x,
      bottom: mouse.y,
    }),
  }

  async function update() {
    if (!tooltipElement) return

    const position = await computePosition(virtualElement, tooltipElement, {
      placement: 'bottom-start',
      strategy: 'fixed',
      middleware: [
        offsetMiddleware({ mainAxis: offset, crossAxis: offset }),
        flip(),
        shift({ padding: 10 }),
      ],
    })

    if (isHovered) {
      x = position.x
      y = position.y
    }
  }

  const tooltipAction: Action = (node) => {
    $effect(() => {
      node.setAttribute('aria-label', explanation)
    })

    function updateMouse(e: MouseEvent) {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    function onMouseMove(e: MouseEvent) {
      updateMouse(e)
      update()
    }

    function onMouseLeave() {
      isHovered = false
      node.removeEventListener('mousemove', onMouseMove)
    }

    function onMouseEnter(e: MouseEvent) {
      if (!isDesktop) return

      updateMouse(e)

      x = mouse.x + offset
      y = mouse.y + offset

      isHovered = true

      node.addEventListener('mousemove', onMouseMove)
      node.addEventListener('mouseleave', onMouseLeave, { once: true })

      update()
    }

    node.addEventListener('mouseenter', onMouseEnter)

    return {
      destroy() {
        node.removeEventListener('mouseenter', onMouseEnter)
        node.removeEventListener('mousemove', onMouseMove)
        node.removeEventListener('mouseleave', onMouseLeave)
      },
    }
  }
</script>

{@render children({ tooltipAction })}

{#if isHovered && isDesktop}
  <div
    bind:this={tooltipElement}
    transition:fade={{ duration: 200 }}
    aria-hidden="true"
    class={cn('pointer-events-none fixed left-0 top-0 z-10 will-change-transform')}
    style:transform="translate3d({Math.round(x)}px, {Math.round(y)}px, 0)"
  >
    <article class={cn('rounded bg-fiord-day px-3 py-1.5 text-xs text-white-day', className)}>
      {explanation}
    </article>
  </div>
{/if}
