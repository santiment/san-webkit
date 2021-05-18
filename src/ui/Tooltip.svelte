<script lang="ts">
  import type { Align, Position } from './Tooltip/utils'
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { getTooltipStyles } from './Tooltip/utils'

  export let isOpened = false
  export let activeClass = ''
  export let position: Position = 'bottom'
  export let align: Align = 'start'
  export let on: 'mouseenter' | 'click' = 'mouseenter'
  export let duration = 150

  const transition = { duration }

  let anchor: HTMLElement | undefined
  let trigger: Element | undefined
  let tooltip: HTMLElement | undefined
  let timer: number

  $: activeClass &&
    trigger &&
    (trigger as Element).classList.toggle(activeClass, isOpened)
  $: if (tooltip) hookTooltip()

  $: if (trigger) {
    if (isOpened) trigger.addEventListener('mouseleave', closeTooltip)
    else trigger.removeEventListener('mouseleave', closeTooltip)
  }

  const close = () => (isOpened = false)
  const startCloseTimer = () => (timer = window.setTimeout(close, 120))
  const stopCloseTimer = () => clearTimeout(timer)

  onMount(() => {
    if (!anchor) return
    trigger = anchor.nextElementSibling as Element
    trigger.addEventListener(on, openTooltip)
  })

  function openTooltip() {
    stopCloseTimer()
    isOpened = true
  }

  function closeTooltip() {
    startCloseTimer()
  }

  function hookTooltip() {
    if (!tooltip) return

    const { left, top } = getTooltipStyles(
      tooltip,
      trigger as HTMLElement,
      position,
      align,
      0,
      10,
    )

    tooltip.style.left = left + 'px'
    tooltip.style.top = top + 'px'

    tooltip.onmouseenter = openTooltip
    tooltip.onmouseleave = closeTooltip
    window.ontouchend = onTouchEnd
  }

  function onTouchEnd({ target }: TouchEvent) {
    if (
      target === trigger ||
      (target as HTMLElement).closest('[slot="tooltip"]')
    )
      return

    window.ontouchend = null
    close()
  }
</script>

<p class="hide" bind:this={anchor} />

<slot name="trigger" />

{#if isOpened}
  <div
    class="tooltip border box"
    bind:this={tooltip}
    transition:fade={transition}>
    <slot name="tooltip" />
  </div>
{/if}

<style>
  .tooltip {
    position: absolute;
    opacity: 1;
    z-index: 10;
    overflow: hidden;
    border-radius: 4px;
  }
</style>
