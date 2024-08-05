<script>/**
 * If scrolling cousing issues, add class="relative" to the trigger's parent
 */
import { BROWSER } from 'esm-env';
import { onMount, onDestroy } from 'svelte';
import { fade } from 'svelte/transition';
import { getTooltipStyles } from './utils';
let className = '';
export { className as class };
export let isEnabled = true;
export let isOpened = false;
export let activeClass = '';
export let position = 'bottom';
export let align = 'start';
export let on = 'mouseenter';
export let duration = 0;
export let openDelay = 0;
export let closeTimeout = 120;
export let dark = false;
export let trigger = undefined;
export let offsetX = 0;
export let offsetY = 8;
export let scrollParent = undefined;
export let passive = false;
let _static = false;
export { _static as static };
const transition = { duration };
const setTrigger = (value) => (trigger = value);
let anchor;
let tooltip;
let timer;
let openTimer;
$: if (!passive && trigger) {
    if (isEnabled)
        trigger.addEventListener(on, startOpenTimer);
    else {
        trigger.removeEventListener(on, startOpenTimer);
        if (!_static)
            isOpened = false;
    }
}
$: activeClass && trigger && trigger.classList.toggle(activeClass, isOpened);
$: tooltip && hookTooltip();
$: tooltip && trigger && updateTooltipPosition();
$: if (trigger) {
    if (isEnabled && (isOpened || openTimer)) {
        trigger.addEventListener('mouseleave', closeTooltip);
    }
    else {
        trigger.removeEventListener('mouseleave', closeTooltip);
    }
}
const stopCloseTimer = () => clearTimeout(timer);
onMount(() => {
    if (!anchor)
        return;
    trigger = anchor.nextElementSibling;
});
onDestroy(destroy);
function destroy() {
    if (BROWSER) {
        window.clearTimeout(openTimer);
        window.clearTimeout(timer);
    }
    openTimer = undefined;
    isOpened = false;
}
function startOpenTimer() {
    if (openDelay) {
        openTimer = window.setTimeout(openTooltip, openDelay);
    }
    else {
        openTooltip();
    }
}
function startCloseTimer() {
    if (openTimer) {
        window.clearTimeout(openTimer);
        openTimer = undefined;
    }
    else {
        timer = window.setTimeout(close, closeTimeout);
    }
}
function close() {
    isOpened = false;
    timer = undefined;
}
function openTooltip() {
    stopCloseTimer();
    isOpened = true;
    openTimer = undefined;
}
function closeTooltip() {
    startCloseTimer();
}
function hookTooltip() {
    if (!tooltip)
        return;
    if (passive)
        trigger?.parentNode?.append(tooltip);
    if (!isEnabled)
        return;
    tooltip.onmouseenter = closeTimeout ? openTooltip : null;
    tooltip.onmouseleave = closeTimeout ? closeTooltip : null;
    window.addEventListener('touchend', onTouchEnd);
}
function updateTooltipPosition() {
    if (!tooltip)
        return;
    const { left, top } = getTooltipStyles(tooltip, trigger, position, align, offsetX, offsetY);
    tooltip.style.left = left + 'px';
    tooltip.style.top = top - (scrollParent?.scrollTop || 0) + 'px';
}
function onTouchEnd({ target }) {
    if (target === trigger ||
        target.closest('[slot="tooltip"]') ||
        tooltip?.contains(target)) {
        return;
    }
    window.removeEventListener('touchend', onTouchEnd);
    close();
}
</script>

{#if BROWSER && $$slots.trigger && !trigger}
  <p class="hide" bind:this={anchor} />
{/if}

<slot name="trigger" />
<slot {on} {setTrigger} {startOpenTimer} {destroy} />

{#if isOpened}
  <div
    bind:this={tooltip}
    class="tooltip border box {className}"
    class:dark
    transition:fade={transition}
  >
    <slot name="tooltip" />
  </div>
{/if}

<style>
  .tooltip {
    position: absolute;
    opacity: 1;
    z-index: var(--tooltip-z-index, 10);
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
