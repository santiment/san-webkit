export type ScrollContext = {
  scrollInterval: number | undefined
  scrollParent: HTMLElement
}

export function clearAutoScroll(ctx: Pick<ScrollContext, 'scrollInterval'>) {
  window.clearInterval(ctx.scrollInterval)
  ctx.scrollInterval = undefined
}

export function autoScroll(
  ctx: ScrollContext,
  nodeRect,
  scrollRect,
  yDiff: number,
) {
  const { scrollParent } = ctx

  if (yDiff < 0) {
    if (scrollParent.scrollTop && nodeRect.top + yDiff < scrollRect.top) {
      return startAutoScroll(ctx, -6)
    }
  } else {
    if (nodeRect.bottom + yDiff > scrollRect.bottom) {
      return startAutoScroll(ctx, 6)
    }
  }

  clearAutoScroll(ctx)
}

function startAutoScroll(ctx: ScrollContext, delta: number) {
  if (ctx.scrollInterval) return

  const { scrollParent } = ctx
  ctx.scrollInterval = window.setInterval(() => {
    let scrollValue = (scrollParent.scrollTop += delta)
    if (scrollValue !== scrollParent.scrollTop) clearAutoScroll(ctx)
  }, 16)
}

export function getScrollingParent(node: null | HTMLElement) {
  if (!node) return null

  const styles = window.getComputedStyle(node)
  if (styles.overflow === 'auto' || styles.overflow === 'scroll') return node

  return getScrollingParent(node.parentNode as HTMLElement | null)
}
