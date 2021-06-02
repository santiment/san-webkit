<script lang="ts">
  import type { Align, Position } from './Tooltip/utils'
  import { onMount, onDestroy } from 'svelte'
  import { fade } from 'svelte/transition'
  import { getTooltipStyles } from './Tooltip/utils'

  let className = ''
  export { className as class }
  export let isEnabled = true
  export let isOpened = false
  export let activeClass = ''
  export let position: Position = 'bottom'
  export let align: Align = 'start'
  export let on: 'mouseenter' | 'click' = 'mouseenter'
  export let duration = 150
  export let openDelay = 0
  export let closeTimeout = 120
  export let dark = false
  export let trigger: Element | undefined = undefined

  const transition = { duration }

  let anchor: HTMLElement | undefined
  let tooltip: HTMLElement | undefined
  let timer: number | undefined
  let openTimer: number | undefined

  $: if (trigger) {
    if (isEnabled) trigger.addEventListener(on, startOpenTimer)
    else trigger.removeEventListener(on, startOpenTimer)
  }

  $: activeClass &&
    trigger &&
    (trigger as Element).classList.toggle(activeClass, isOpened)
  $: if (tooltip) hookTooltip()

  $: if (trigger) {
    if (isOpened || openTimer) {
      trigger.addEventListener('mouseleave', closeTooltip)
    } else {
      trigger.removeEventListener('mouseleave', closeTooltip)
    }
  }

  const stopCloseTimer = () => clearTimeout(timer)

  onMount(() => {
    if (!anchor) return
    trigger = anchor.nextElementSibling as Element
  })
  onDestroy(() => {
    window.clearTimeout(openTimer)
    openTimer = undefined
    isOpened = false
  })

  function startOpenTimer() {
    if (openDelay) {
      openTimer = window.setTimeout(openTooltip, openDelay)
    } else {
      openTooltip()
    }
  }

  function startCloseTimer() {
    if (openTimer) {
      window.clearTimeout(openTimer)
      openTimer = undefined
    } else {
      timer = window.setTimeout(close, closeTimeout)
    }
  }

  function close() {
    isOpened = false
    timer = undefined
  }

  function openTooltip() {
    stopCloseTimer()
    isOpened = true
    openTimer = undefined
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

{#if $$slots.trigger && !trigger}
  <p class="hide" bind:this={anchor} />
{/if}

<slot name="trigger" />

{#if isOpened}
  <div
    class:dark
    class="tooltip border box {className}"
    bind:this={tooltip}
    transition:fade={transition}
  >
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

  .dark {
    background: #505573;
    border-color: #505573;
    color: #fff;
    padding: 5px 12px;
  }
</style>
