<script lang="ts">
  import { noop } from '@/utils'
  import Toggle from './Toggle.svelte'

  export let handleClick = noop
</script>

<Toggle class="$style.toggle" on:click={handleClick} icon="toggle-visibility" {...$$restProps} />

<style lang="scss">
  .toggle {
    --toggle-width: 48px;
    --toggle-height: 24px;
    --toggle-radius: 20px;

    --toggle-icon-margin: 5.5px 0 0 6px;

    --toggle-before-width: 18px;
    --toggle-before-height: 18px;
    --toggle-before-icon-top: 3px;
    --toggle-before-icon-left: 3px;

    --toggle-before-active: translateX(calc(100% + 6px));
  }
</style>
