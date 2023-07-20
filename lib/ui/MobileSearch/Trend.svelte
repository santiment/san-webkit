<script lang="ts">
  import Svg from '@/ui/Svg/svelte'

  export let item
</script>

<div class="wrapper row hv-center">
  <Svg id="fire-filled" w="11" h="14" class="$style.icon" />
</div>
<span class="name single-line">{item}</span>

<style>
  .name {
    display: block;
  }

  .wrapper {
    min-width: 24px;
    height: 24px;
    background: var(--blue-light-1);
    border-radius: 24px;
    margin-right: 10px;
  }

  .icon {
    fill: var(--blue);
  }
</style>
