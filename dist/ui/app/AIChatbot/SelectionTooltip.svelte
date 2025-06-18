<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import { fade } from 'svelte/transition'

  import Button from '../../core/Button/Button.svelte'
  import { useDeviceCtx } from '../../../ctx/device/index.svelte.js'
  import { cn } from '../../utils/index.js'

  type TProps = {
    onTooltipClick: (text: string) => void
  }

  const WIDTH = 78
  const HEIGHT = 34
  const MARGIN = 8
  const MIN_LEN = 3
  const MAX_LEN = 300
  const MAX_HEIGHT = 200
  const SHOW_DELAY = 350

  const { onTooltipClick }: TProps = $props()

  const { device } = useDeviceCtx()

  let tooltipVisible = $state(false)
  let tooltipX = $state(0)
  let tooltipY = $state(0)
  let selectedText = $state('')
  let tooltipEl: HTMLDivElement | null = $state(null)
  let showTimeout: ReturnType<typeof setTimeout> | null = $state(null)

  const isMobile = $derived(device.$.isPhone)

  function shouldIgnore(sel: Selection) {
    if (sel.isCollapsed) return true

    const text = sel.toString().trim()

    if (text.length < MIN_LEN || text.length > MAX_LEN) return true

    const rect = sel.getRangeAt(0).getBoundingClientRect()

    if (rect.height > MAX_HEIGHT) return true

    const anchorEl = sel.anchorNode?.parentElement as HTMLElement | null
    const interactiveParent = anchorEl?.closest(
      'input, textarea, button, select, a, [contenteditable]',
    )
    if (interactiveParent) return true

    if (isMobile) return true

    return false
  }

  function positionTooltip(rect: DOMRect) {
    const vw = window.innerWidth
    const vh = window.innerHeight

    let x = rect.left + rect.width / 2 - WIDTH / 2
    let y = rect.top - HEIGHT - MARGIN

    if (y < MARGIN) y = rect.bottom + MARGIN

    x = Math.max(MARGIN, Math.min(x, vw - WIDTH - MARGIN))
    y = Math.max(MARGIN, Math.min(y, vh - HEIGHT - MARGIN))

    tooltipX = x + window.scrollX
    tooltipY = y + window.scrollY
  }

  function handleSelection() {
    if (showTimeout) clearTimeout(showTimeout)

    const sel = window.getSelection()

    if (!sel || shouldIgnore(sel)) {
      tooltipVisible = false
      return
    }

    const rect = sel.getRangeAt(0).getBoundingClientRect()
    const text = sel.toString().trim()

    showTimeout = setTimeout(() => {
      selectedText = text
      positionTooltip(rect)
      tooltipVisible = true
    }, SHOW_DELAY)
  }

  function clickTooltip(event: MouseEvent) {
    event.stopPropagation()

    onTooltipClick(selectedText)
    window.getSelection()?.removeAllRanges()
    tooltipVisible = false
  }

  function hideOnOutsideClick(e: MouseEvent) {
    if (!tooltipEl || !e.target) return
    if (!tooltipEl.contains(e.target as Node)) tooltipVisible = false
  }

  function hideOnScrollOrResize() {
    tooltipVisible = false
  }

  onMount(() => {
    document.addEventListener('selectionchange', handleSelection)
    document.addEventListener('mousedown', hideOnOutsideClick)

    window.addEventListener('scroll', hideOnScrollOrResize, true)
    window.addEventListener('resize', hideOnScrollOrResize)
  })

  onDestroy(() => {
    document.removeEventListener('selectionchange', handleSelection)
    document.removeEventListener('mousedown', hideOnOutsideClick)

    window.removeEventListener('scroll', hideOnScrollOrResize, true)
    window.removeEventListener('resize', hideOnScrollOrResize)

    if (showTimeout) clearTimeout(showTimeout)
  })
</script>

{#if tooltipVisible}
  <div
    bind:this={tooltipEl}
    class={cn('fixed z-50 select-none', `w-[${WIDTH}px]`)}
    style="left:{tooltipX}px; top:{tooltipY}px;"
    in:fade={{ duration: 150 }}
    out:fade={{ duration: 100 }}
  >
    <Button
      class="w-full rounded-full border border-porcelain bg-white px-2.5 py-1.5 text-sm shadow transition-opacity hover:border-green-hover"
      onclick={clickTooltip}
    >
      🤖 Ask&nbsp;AI
    </Button>
  </div>
{/if}
