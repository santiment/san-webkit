<script>import { onMount, onDestroy } from 'svelte';
import { cubicOut } from 'svelte/easing';
import Svg from './../../ui/Svg/svelte';
import { notifications$ } from './notifications';
const TypeIcon = {
  success: 'checkmark-circle'
};
export let notification, i;
export let parentNode;
export let notifications;
export let offset = 0;
const MARGIN = 10;
let timer;
let height;
let {
  title,
  type = 'info',
  dismissAfter = 5000,
  description
} = notification;
calculateInitialOffset();

const getOffsetSign = () => process.browser && document.body.clientWidth > 450 ? 1 : -1;

$: yOffset = offset * getOffsetSign() + 'px';

$: if (process.env.IS_STAGE) {
  console.log(yOffset, getOffsetSign());
}

function calculateInitialOffset() {
  const prevChild = parentNode.children[i - 1];
  offset = prevChild ? notifications[i - 1].offset - prevChild.clientHeight - MARGIN : 0;
  notification.offset = offset;
}

function destroy() {
  clearTimeout(timer);
  const diff = height + MARGIN;

  for (let j = i + 1; j < notifications.length; j++) {
    notifications[j].offset += diff;
  }

  notifications$.hide(notification);
}

function notify() {
  return {
    duration: 300,
    css: t => `transform: translate3d(${-130 + cubicOut(t) * 130}%, ${yOffset}, 0);`
  };
}

onMount(() => {
  timer = setTimeout(destroy, dismissAfter);
});
onDestroy(() => {
  clearTimeout(timer);
});</script>

<div
  class="panel box not"
  style="--y-offset: {yOffset}"
  bind:clientHeight={height}
  transition:notify
>
  <div class="row v-center">
    <Svg id={TypeIcon[type] || type} class="icon-3ZA1rt {type}" />
    <div class="title txt-m">{title}</div>
    <Svg id="close" class="btn close-1SzUWM" on:click={destroy} />
  </div>
  {#if description}
    <p>{@html description}</p>
  {/if}
</div>

<style >.not {
  padding: 16px;
  position: absolute;
  transform: translateY(var(--y-offset));
  transition: transform 350ms;
  transition-delay: 200ms;
  max-width: 70vw;
  white-space: nowrap;
  left: 0;
  user-select: none;
  background: var(--white);
}

:global(.tablet) .not,
:global(.phone) .not {
  white-space: normal;
  max-width: 100%;
  width: 100%;
}

:global(.icon-3ZA1rt) {
  width: 16px;
  height: 16px;
  fill: var(--waterloo);
}

:global(.icon-3ZA1rt.success) {
  fill: var(--green);
}
:global(.icon-3ZA1rt.error) {
  fill: var(--red);
}
:global(.icon-3ZA1rt.warning) {
  fill: var(--orange);
}
:global(.icon-3ZA1rt.info) {
  fill: var(--blue);
}

.title {
  margin: 0 24px 0 16px;
}

:global(.close-1SzUWM) {
  width: 12px;
  height: 12px;
  cursor: pointer;
  margin-left: auto;
  --fill: var(--casper);
  --fill-hover: var(--black);
}

p {
  padding: 10px 25px 0 31px;
  max-width: 100%;
  white-space: pre;
  overflow-x: auto;
  color: var(--waterloo);
}
p :global(a) {
  color: var(--green);
}
p :global(a:hover) {
  color: var(--green-hover);
}</style>
