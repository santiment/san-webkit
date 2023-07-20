<script lang="ts">
  import Toggle from './Toggle.svelte'

  let className = ''
  export { className as class }
</script>

<Toggle class="$style.toggle {className}" icon="toggle-visibility" {...$$restProps} on:click />

<style lang="scss">
  .toggle {
    --toggle-img-width: 28px;
    --toggle-big-img-width: 38px;
  }
</style>
