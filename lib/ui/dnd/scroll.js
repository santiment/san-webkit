export function clearAutoScroll(ctx) {
    window.clearInterval(ctx.scrollInterval);
    ctx.scrollInterval = undefined;
}
export function autoScroll(ctx, nodeRect, scrollRect, yDiff) {
    const { scrollParent } = ctx;
    if (yDiff < 0) {
        if (scrollParent.scrollTop && nodeRect.top + yDiff < scrollRect.top) {
            return startAutoScroll(ctx, -7);
        }
    }
    else {
        if (nodeRect.bottom + yDiff > scrollRect.bottom) {
            return startAutoScroll(ctx, 7);
        }
    }
    clearAutoScroll(ctx);
}
function startAutoScroll(ctx, delta) {
    if (ctx.scrollInterval)
        return;
    const { scrollParent } = ctx;
    ctx.scrollInterval = window.setInterval(() => {
        let scrollValue = (scrollParent.scrollTop += delta);
        if (scrollValue !== scrollParent.scrollTop)
            clearAutoScroll(ctx);
    }, 16);
}
export function getScrollingParent(node) {
    if (!node)
        return null;
    if (node === document.body)
        return document.scrollingElement;
    const styles = window.getComputedStyle(node);
    if (styles.overflow === 'auto' || styles.overflow === 'scroll')
        return node;
    return getScrollingParent(node.parentNode);
}
//# sourceMappingURL=scroll.js.map