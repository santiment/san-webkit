<script>import InputWithIcon from './../ui/InputWithIcon.svelte';
let className = 'mrg-m mrg--b';
export { className as class };
export let autofocus = true;
export let placeholder;
export let value = undefined;</script>

<InputWithIcon
  class={className}
  {value}
  {placeholder}
  {autofocus}
  icon="search"
  w="12"
  on:input
  on:keyup
/>
