<script>import Svg from './../ui/Svg/svelte';
let className = '';
export { className as class };
export let icon, w, h;
export let type = 'text';
export let placeholder;
export let name;
export let big = false;
export let constraints;
export let value = '';
export let autofocus;</script>

<!-- svelte-ignore a11y-autofocus -->
<div class="border row v-center {className}" class:big>
  {#if $$slots.left}
    <slot name="left" />
  {:else if icon}
    <Svg id={icon} {w} {h} class="icon-3WGouS" />
  {/if}
  <input
    {...constraints}
    {value}
    {type}
    {placeholder}
    {name}
    {autofocus}
    on:input
    on:focus
    on:blur
    on:keydown />
  <slot />
</div>

<style>
  div {
    position: relative;
    fill: var(--casper);
    height: 32px;
  }
  div:hover,
  div:focus-within {
    border-color: var(--green);
    fill: var(--green);
  }

  input {
    height: 100%;
    flex: 1;
    padding: 6px 6px 6px var(--left, 36px);
    border-radius: 4px;
    color: var(--black);
  }

  :global(.icon-3WGouS) {
    position: absolute;
    left: 14px;
  }

  .big {
    height: 40px;
    --left: 40px;
  }
</style>
