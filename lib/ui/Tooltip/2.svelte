<script>import { fade } from 'svelte/transition';
import { computePosition, offset, flip, shift } from '@floating-ui/dom';
let className = '';
export { className as class };
export let dark = false;
export let isOpened = false;
export let style = '';
export let position = 'top';
export let activeClass = '';
export let on = 'mouseenter';
export let duration = 0;
export let openDelay = 0;
export let closeDelay = 120;
export let margin = 8;
const transition = {
  duration
};
let trigger = null;
let tooltip = null;
let timerOpen = null;
let timerClose = null;

$: if (trigger && tooltip) {
  tooltip.onmouseenter = closeDelay ? open : null;
  tooltip.onmouseleave = closeDelay ? startCloseTimer : null;
  window.addEventListener('touchend', onTouchEnd);
  computePosition(trigger, tooltip, {
    placement: position,
    middleware: [offset(margin), flip(), shift()]
  }).then(({
    x,
    y
  }) => {
    if (!tooltip) return;
    Object.assign(tooltip.style, getStyles(x, y));
  });
}

const getStyles = (x, y) => ({
  left: `${x}px`,
  top: `${y}px`
});

function open() {
  stopCloseTimer();
  isOpened = true;
  timerOpen = null;
  if (activeClass) trigger === null || trigger === void 0 ? void 0 : trigger.classList.add(activeClass);
}

function close() {
  stopOpenTimer();
  stopCloseTimer();
  isOpened = false;
  if (activeClass) trigger === null || trigger === void 0 ? void 0 : trigger.classList.remove(activeClass);
  window.removeEventListener('touchend', onTouchEnd);
  trigger === null || trigger === void 0 ? void 0 : trigger.addEventListener('mouseleave', startCloseTimer);
}

function startOpenTimer() {
  stopCloseTimer();

  if (openDelay) {
    timerOpen = window.setTimeout(open, openDelay);
  } else {
    open();
  }
}

const stopCloseTimer = () => timerClose && window.clearTimeout(timerClose);

function stopOpenTimer() {
  if (timerOpen) window.clearTimeout(timerOpen);
  timerOpen = null;
}

function startCloseTimer() {
  if (timerOpen) {
    stopOpenTimer();
  } else {
    timerClose = window.setTimeout(close, closeDelay);
  }
}

function attach(node) {
  trigger = node;
  trigger.addEventListener(on, startOpenTimer);
  trigger.addEventListener('mouseleave', startCloseTimer);
  return {
    destroy() {
      close();
      stopCloseTimer();
    }

  };
}

function onTouchEnd({
  target
}) {
  if (target === trigger || target.closest('[slot="tooltip"]') || (tooltip === null || tooltip === void 0 ? void 0 : tooltip.contains(target))) {
    return;
  }

  close();
}</script>

<slot trigger={attach} />

{#if process.browser && isOpened}
  <tooltip
    class="column border box txt-left {className}"
    class:dark
    bind:this={tooltip}
    {style}
    transition:fade={transition}
  >
    <slot name="tooltip" />
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
