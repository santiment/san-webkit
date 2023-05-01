<script>import InputWithIcon from './../ui/InputWithIcon.svelte';
let className = 'mrg-m mrg--b';
export { className as class };
export let autofocus = null;
export let placeholder;
export let value = undefined;
export let big = false;</script>

<InputWithIcon
  class={className}
  {big}
  {value}
  {placeholder}
  {autofocus}
  icon="search"
  w="12"
  on:input
  on:keydown
  on:keyup
  on:focus
  on:blur
>
  <slot />
</InputWithIcon>
