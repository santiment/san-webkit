import type { Action } from 'svelte/action'

import { onMount } from 'svelte'
import { BROWSER } from 'esm-env'

import { createCtx } from '$lib/utils/index.js'
import { applyStyles } from '$lib/ui/utils/index.js'

export const VIEWPORT_PRIORITY = {
  VISIBLE: 0,
  HALF_VISIBLE: 10,
  NOT_VISIBLE: 100,
}

export const useViewportPriorityCtx = createCtx('webkit_useIntersectionObserverCtx', () => {
  if (!BROWSER) {
    return
  }

  const ObservedSettings = new Map<Element, { priority: number }>()
  const observer = new IntersectionObserver((entries) => entries.forEach(entryObserver), {
    threshold: [0, 0.5],
  })

  onMount(() => () => observer.disconnect())

  function entryObserver(entry: IntersectionObserverEntry) {
    const settings = ObservedSettings.get(entry.target)
    if (!settings) return

    if (!entry.isIntersecting) {
      return (settings.priority = VIEWPORT_PRIORITY.NOT_VISIBLE)
    }

    if (entry.intersectionRatio < 0.5) {
      return (settings.priority = VIEWPORT_PRIORITY.HALF_VISIBLE)
    }

    settings.priority = VIEWPORT_PRIORITY.VISIBLE
  }

  return { observer, ObservedSettings }
})

export function useItemViewportPriorityFlow() {
  return (
    (useViewportPriorityCtx.get() && useItemViewportPriorityCtx.set()) ||
    ({} as { viewportObserverAction: () => void })
  )
}

export const useItemViewportPriorityCtx = createCtx('webkit_useItemViewportPriorityCtx', () => {
  const rootCtx = useViewportPriorityCtx.get()

  if (!rootCtx || !BROWSER) return

  const { observer, ObservedSettings } = rootCtx
  const settings = $state({
    priority: VIEWPORT_PRIORITY.NOT_VISIBLE,
  })

  const action: Action<HTMLElement, { top: string; bottom: string } | undefined> = (
    node,
    margins = { top: '0px', bottom: '0px' },
  ) => {
    const viewportAnchor = createViewportAnchor(node, margins)

    ObservedSettings.set(viewportAnchor, settings)
    observer.observe(viewportAnchor)

    settings.priority = getNodeClientRectViewportPriority(viewportAnchor)

    return {
      destroy() {
        observer.unobserve(viewportAnchor)
        ObservedSettings.delete(viewportAnchor)
      },
    }
  }

  return {
    settings,
    viewportObserverAction: action,
    checkIsInViewport$() {
      return settings.priority < VIEWPORT_PRIORITY.NOT_VISIBLE
    },
  }
})

/**
 * Viewport anchor allows to have rootMargins without providing custom `root` scroll element
 */
function createViewportAnchor(node: HTMLElement, margins: { top: string; bottom: string }) {
  const div = document.createElement('div')
  applyStyles(div, {
    position: 'absolute',
    left: '0',
    right: '0',
    zIndex: '-1',
    top: margins.top,
    bottom: margins.bottom,
  })
  node.appendChild(div)
  return div
}

function getNodeClientRectViewportPriority(node: Element) {
  const viewportHeight = window.innerHeight

  const { top, bottom } = node.getBoundingClientRect()

  if (viewportHeight < top) {
    return VIEWPORT_PRIORITY.NOT_VISIBLE
  }

  if (bottom < 0) {
    return VIEWPORT_PRIORITY.NOT_VISIBLE
  }

  if (top <= 0 && bottom >= viewportHeight) {
    return VIEWPORT_PRIORITY.VISIBLE
  }

  if (top + 200 > 0 && bottom - 200 < viewportHeight) {
    return VIEWPORT_PRIORITY.VISIBLE
  }

  return VIEWPORT_PRIORITY.HALF_VISIBLE
}
