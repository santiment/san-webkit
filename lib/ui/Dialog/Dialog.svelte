<script>import { onDestroy, onMount } from 'svelte';
import { get } from 'svelte/store';
import Svg from './../../ui/Svg/svelte';
import { dialogs, DialogLock } from './dialogs';
let className = '';
export { className as class };
export let titleClassName = '';
export const closeDialog = (skipLockChecks = true) => requestDialogClose(skipLockChecks);
export let i;
export let title = '';
export let DialogPromise;
export let onBeforeDialogClose = () => {};
export let noTitle = false;
export let noBg = false;
export let onEditableEscaped;
export let animated = true;
export let isClickawayDisabled = false;
let isOpening = true;
let clickAwayMouseDown = false;
let openingTimer;

const checkIsEditable = ({
  isContentEditable,
  localName
}) => isContentEditable || localName === 'input' || localName === 'textarea';

function onKeyup({
  code,
  target
}) {
  if (code === 'Escape' && target) {
    if (isOpening) return;
    if (checkIsEditable(target)) onEditableEscaped === null || onEditableEscaped === void 0 ? void 0 : onEditableEscaped(target, requestDialogClose);else requestDialogClose();
  }
}

function onClickaway({
  type,
  target,
  currentTarget
}) {
  if (isClickawayDisabled) return;
  if (isOpening) return;

  if (target === currentTarget) {
    if (type === 'mousedown') {
      clickAwayMouseDown = true;
      return;
    } else if (type === 'mouseup' && clickAwayMouseDown) {
      requestDialogClose();
    }
  }

  clickAwayMouseDown = false;
}

onMount(() => {
  openingTimer = window.setTimeout(() => isOpening = false, 250);
  document.body.style.width = document.body.offsetWidth + 'px';
  document.body.style.overflowY = 'hidden';
  document.body.style.touchAction = 'none';
  window.addEventListener('keyup', onKeyup);
});
onDestroy(() => {
  clearTimeout(openingTimer);
});

function requestDialogClose(skipLockChecks) {
  if (isOpening) return;

  if (skipLockChecks !== true) {
    onBeforeDialogClose();
    if (DialogPromise.locking === DialogLock.LOCKED) return;

    if (DialogPromise.locking === DialogLock.WARN && !confirm('Do you want to close the dialog?')) {
      return;
    }
  }

  if (i === 0) {
    document.body.style.width = '';
    document.body.style.maxWidth = '';
    document.body.style.overflowY = '';
    document.body.style.touchAction = '';
  }

  const {
    length
  } = get(dialogs);

  if (i === length - 1) {
    window.removeEventListener('keyup', onKeyup);
    DialogPromise.reject();
    dialogs.hide(i);
  }
}

let out = false;

function resetAnimation(node) {
  node.style.animation = 'none';
  node.offsetWidth;
}

function transition(node) {
  if (!animated) return;
  resetAnimation(node);
  resetAnimation(node.firstChild);
  out = true;
  return {
    duration: 180
  };
}</script>

<div
  out:transition
  class="bg row v-center h-center"
  class:noBg
  class:out
  class:still={!animated}
  on:mousedown={onClickaway}
  on:mouseup={onClickaway}
>
  <div class="dialog border box column {className}">
    {#if noTitle === false}
      <h2
        class="body-2 row v-center justify single-line {titleClassName}"
        class:empty={!title && !$$slots.title}
      >
        {#if $$slots.title}
          <slot name="title" />
        {:else}
          {title}
        {/if}

        <Svg id="close" class="btn mrg-a mrg--l close-1GoPfI" on:click={requestDialogClose} />
      </h2>
    {/if}

    <slot {closeDialog} />
  </div>
</div>

<style >.bg {
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  width: 100vw;
  animation: fadeIn 0.2s ease-out forwards;
}

.noBg {
  background: transparent;
}

.still {
  animation: none;
}
.still .dialog {
  animation: none !important;
}

.dialog {
  max-width: 96%;
  max-height: 92%;
  position: relative;
}

.body-2 {
  padding: 12px 20px;
  border-bottom: 1px solid var(--porcelain);
}

.empty {
  border: 0;
  position: absolute;
  right: 0;
  padding: 16px;
}

:global(.close-1GoPfI) {
  width: 12px;
  height: 12px;
  --fill: var(--waterloo);
  --fill-hover: var(--green);
}

.out {
  animation: fadeIn 0.17s ease-out reverse forwards !important;
}

:global(.dialog-body) {
  overflow-y: auto;
  overflow-x: hidden;
  padding: 12px 20px 0;
  margin-bottom: 12px;
}

:global(body:not(.desktop)) .bg {
  align-items: flex-end;
}
:global(body:not(.desktop)) .dialog {
  border-radius: 15px 15px 0 0;
  max-width: 100%;
  max-height: 90%;
  width: 100%;
  animation: slideIn 0.2s ease-out forwards;
}
:global(body:not(.desktop)) .out .dialog {
  animation: slideIn 0.15s ease-out reverse forwards !important;
}

:global(body.desktop) .dialog {
  animation: zoomIn 0.2s ease-out forwards;
}
:global(body.desktop) .out .dialog {
  animation: zoomIn 0.17s ease-out reverse forwards !important;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slideIn {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}</style>
