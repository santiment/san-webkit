<script>import Svg from './../../ui/Svg/svelte';
export let title;
export let icon;
export let active = false;
export let tag = 'a';</script>

<svelte:element
  this={tag}
  class="btn column hv-center txt-m"
  {...$$restProps}
  on:click
  class:active
>
  <Svg id={icon} w="20" class="icon" />
  {title}
</svelte:element>

<style >.btn {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  gap: 10px;
  --fill: var(--fiord);
  --color: var(--waterloo);
}
.btn:focus, .btn:visited, .btn:active {
  outline: none;
}

.active {
  --fill: var(--green);
  --color: var(--green);
}</style>
