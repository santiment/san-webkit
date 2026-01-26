<script lang="ts">
  import type { Snippet } from 'svelte'

  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'
  import { cn, flyAndScaleOutTransition } from '$ui/utils/index.js'

  import Content from './Content.svelte'

  type Props = {
    children: Snippet
    explanation: string
    class?: string
    offset?: number
  }

  const { device } = useDeviceCtx()

  let { children, explanation, class: className, offset = 15 }: Props = $props()

  let cursorX = $state(0)
  let cursorY = $state(0)
  let isHovered = $state(false)

  let windowWidth = $state(0)
  let windowHeight = $state(0)

  let tooltipWidth = $state(0)
  let tooltipHeight = $state(0)

  const isDesktop = $derived(device.$.isDesktop)
  const tooltipPosition = $derived.by(() => {
    let targetX = cursorX + offset
    let targetY = cursorY + offset

    const isOverflowingRight = targetX + tooltipWidth > windowWidth
    if (isOverflowingRight) {
      targetX = cursorX - tooltipWidth - offset
    }

    const isOverflowingBottom = targetY + tooltipHeight > windowHeight
    if (isOverflowingBottom) {
      targetY = cursorY - tooltipHeight - offset
    }

    return {
      x: Math.max(0, targetX),
      y: Math.max(0, targetY),
    }
  })

  function handleMouseEnter(e: MouseEvent) {
    isHovered = true
    cursorX = e.clientX
    cursorY = e.clientY
  }

  function handleMouseMove(e: MouseEvent) {
    cursorX = e.clientX
    cursorY = e.clientY
  }
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<div
  role="group"
  class={cn('inline-block cursor-default', className)}
  onmousemove={handleMouseMove}
  onmouseenter={handleMouseEnter}
  onmouseleave={() => (isHovered = false)}
>
  {@render children()}

  <div class="sr-only">{explanation}</div>

  {#if isHovered && isDesktop}
    <div
      bind:clientWidth={tooltipWidth}
      bind:clientHeight={tooltipHeight}
      out:flyAndScaleOutTransition
      data-state="open"
      data-side="bottom"
      class={cn(
        'pointer-events-none fixed z-[9999] will-change-contents',
        'fly-and-scale-animation animated drop-shadow-dropdown',
      )}
      style="top: {tooltipPosition.y}px; left: {tooltipPosition.x}px"
    >
      <Content aria-hidden="true">
        {explanation}
      </Content>
    </div>
  {/if}
</div>
