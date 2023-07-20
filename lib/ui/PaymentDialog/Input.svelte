<script lang="ts">
  let className = 'mrg-s mrg--b'
  export { className as class }
  export let title: string
  export let name = ''
  export let placeholder = ''
  export let required = true
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="column {className}">
  <div class="caption txt-m c-waterloo">{title}</div>
  <slot name="input">
    <input {name} {placeholder} {required} type="text" class="input" on:input />
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
