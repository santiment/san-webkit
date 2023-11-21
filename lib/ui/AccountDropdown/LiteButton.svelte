<script>import Svg from './../../ui/Svg/svelte';
export let onOldVersionClick;
</script>

<section>
  <button class="btn-ghost btn--s fluid row v-center justify nowrap" on:click={onOldVersionClick}>
    Back to classic version

    <Svg id="right-arrow" w="10" h="5" />
  </button>
</section>

<style>
  section {
    padding: 4px 8px;
  }

  button {
    fill: var(--waterloo);
  }
</style>
