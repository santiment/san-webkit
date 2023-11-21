<script>let className = 'mrg-s mrg--b';
export { className as class };
export let title;
export let name = '';
export let placeholder = '';
export let required = true;
export let value = '';
</script>

<label class="column {className}">
  <div class="caption txt-m c-waterloo">{title}</div>
  <slot name="input">
    <input
      {name}
      {value}
      {placeholder}
      {required}
      type="text"
      class="input"
      on:input
      on:focus
      on:blur
    />
  </slot>
  <slot />
</label>

<style>
  div {
    margin: 0 0 3px;
  }

  input {
    padding: 9px 15px;
  }
</style>
