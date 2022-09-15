<script>import { onMount, onDestroy } from 'svelte';
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
const transition = {
  duration
};

const setTrigger = value => trigger = value;

let anchor;
let tooltip;
let timer;
let openTimer;

$: if (!passive && trigger) {
  if (isEnabled) trigger.addEventListener(on, startOpenTimer);else {
    trigger.removeEventListener(on, startOpenTimer);
    isOpened = false;
  }
}

$: activeClass && trigger && trigger.classList.toggle(activeClass, isOpened);

$: tooltip && hookTooltip();

$: tooltip && trigger && updateTooltipPosition();

$: if (trigger) {
  if (isEnabled && (isOpened || openTimer)) {
    trigger.addEventListener('mouseleave', closeTooltip);
  } else {
    trigger.removeEventListener('mouseleave', closeTooltip);
  }
}

const stopCloseTimer = () => clearTimeout(timer);

onMount(() => {
  if (!anchor) return;
  trigger = anchor.nextElementSibling;
});
onDestroy(destroy);

function destroy() {
  if (process.browser) {
    window.clearTimeout(openTimer);
    window.clearTimeout(timer);
  }

  openTimer = undefined;
  isOpened = false;
}

function startOpenTimer() {
  if (openDelay) {
    openTimer = window.setTimeout(openTooltip, openDelay);
  } else {
    openTooltip();
  }
}

function startCloseTimer() {
  if (openTimer) {
    window.clearTimeout(openTimer);
    openTimer = undefined;
  } else {
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
  var _a;

  if (!tooltip) return;
  if (passive) (_a = trigger === null || trigger === void 0 ? void 0 : trigger.parentNode) === null || _a === void 0 ? void 0 : _a.append(tooltip);
  if (!isEnabled) return;
  tooltip.onmouseenter = closeTimeout ? openTooltip : null;
  tooltip.onmouseleave = closeTimeout ? closeTooltip : null;
  window.addEventListener('touchend', onTouchEnd);
}

function updateTooltipPosition() {
  if (!tooltip) return;
  const {
    left,
    top
  } = getTooltipStyles(tooltip, trigger, position, align, offsetX, offsetY);
  tooltip.style.left = left + 'px';
  tooltip.style.top = top - ((scrollParent === null || scrollParent === void 0 ? void 0 : scrollParent.scrollTop) || 0) + 'px';
}

function onTouchEnd({
  target
}) {
  if (target === trigger || target.closest('[slot="tooltip"]') || (tooltip === null || tooltip === void 0 ? void 0 : tooltip.contains(target))) {
    return;
  }

  window.removeEventListener('touchend', onTouchEnd);
  close();
}</script>

{#if process.browser && $$slots.trigger && !trigger}
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
