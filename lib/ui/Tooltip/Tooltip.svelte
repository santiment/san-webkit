<script>import { BROWSER } from 'esm-env';
import { onMount } from 'svelte';
import { fade } from 'svelte/transition';
import { computePosition, offset, flip, shift } from '@floating-ui/dom';
let className = '';
export { className as class };
export let dark = false;
export let isOpened = false;
export let style = '';
export let position = 'top';
export let activeClass = '';
export let overflowFlip = true;
export let on = 'mouseenter';
export let duration = 0;
export let clickaway = false;
export let openDelay = 0;
export let closeDelay = clickaway ? 99999 : 120;
export let margin = 8;
export let onTriggerClick = null;
const transition = { duration };
let trigger = null;
export let tooltip = null;
let timerOpen = null;
let timerClose = null;
$: if (trigger && tooltip) {
    tooltip.onmouseenter = closeDelay ? open : null;
    tooltip.onmouseleave = closeDelay ? startCloseTimer : null;
    window.addEventListener('touchend', onTouchEnd);
    if (clickaway)
        window.addEventListener('click', onTouchEnd, { capture: true });
    computePosition(trigger, tooltip, {
        placement: position,
        middleware: [offset(margin), flip({ mainAxis: overflowFlip }), shift()],
    }).then(({ x, y }) => {
        if (!tooltip)
            return;
        Object.assign(tooltip.style, getStyles(x, y));
    });
}
const getStyles = (x, y) => ({ left: `${x}px`, top: `${y}px` });
export function open() {
    stopOpenTimer();
    stopCloseTimer();
    isOpened = true;
    timerOpen = null;
    if (activeClass)
        trigger?.classList.add(activeClass);
}
export function close() {
    stopOpenTimer();
    stopCloseTimer();
    isOpened = false;
    tooltip = null;
    if (activeClass)
        trigger?.classList.remove(activeClass);
    window.removeEventListener('touchend', onTouchEnd);
    window.removeEventListener('click', onTouchEnd, { capture: true });
    // trigger?.removeEventListener('mouseleave', startCloseTimer)
}
function startOpenTimer() {
    stopCloseTimer();
    if (openDelay) {
        timerOpen = window.setTimeout(open, openDelay);
    }
    else {
        open();
    }
}
const stopCloseTimer = () => timerClose && window.clearTimeout(timerClose);
function stopOpenTimer() {
    if (timerOpen)
        window.clearTimeout(timerOpen);
    timerOpen = null;
}
function startCloseTimer() {
    stopCloseTimer();
    if (timerOpen) {
        stopOpenTimer();
    }
    else {
        timerClose = window.setTimeout(close, closeDelay);
    }
}
function attach(node) {
    trigger = node;
    if (onTriggerClick)
        trigger.addEventListener('click', onTriggerClick, { capture: true });
    trigger.addEventListener(on, startOpenTimer);
    trigger.addEventListener('mouseleave', startCloseTimer);
    return {
        destroy: close,
    };
}
function onTouchEnd({ target }) {
    if (target === trigger ||
        trigger?.contains(target) ||
        target.closest('[slot="tooltip"]') ||
        tooltip?.contains(target)) {
        return;
    }
    close();
}
function onClose() {
    return {
        destroy: close,
    };
}
onMount(() => {
    if (isOpened)
        open();
});
</script>

<slot trigger={attach} {close} />

{#if BROWSER && isOpened}
  <tooltip
    class="column border box txt-left {className}"
    class:dark
    bind:this={tooltip}
    {style}
    use:onClose
    transition:fade={transition}
  >
    <slot name="tooltip" {close} />
  </tooltip>
{/if}

<style>
  tooltip {
    position: absolute;
    opacity: 1;
    z-index: var(--tooltip-z-index, 10);
    overflow: hidden;
    border-radius: 4px;
    width: var(--tooltip-width, max-content);
    max-width: calc(100vw - 32px);
    left: -99999px;
    top: -99999px;
    white-space: normal;
  }

  .dark {
    background: #505573;
    border-color: #505573;
    color: #fff;
    padding: 5px 12px;
  }
</style>
