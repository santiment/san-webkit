<script>
  import Toggle from '@/ui/Toggle.svelte'
  import ToggleVisibility from '@/ui/ToggleVisibility.svelte'

  let isActive = false

  function toggle() {
    isActive = !isActive
  }
</script>

<main>
  <div class="row">
    Regular
    <Toggle {isActive} on:click={toggle} />
  </div>

  <div class="row">
    Big
    <Toggle big {isActive} on:click={toggle} />
  </div>

  <div class="row">
    Visibility - Regular
    <ToggleVisibility {isActive} on:click={toggle} />
  </div>

  <div class="row">
    BiVisibility - big
    <ToggleVisibility big {isActive} on:click={toggle} />
  </div>
</main>

<style>
  main {
    padding: 30px;
  }

  .row {
    align-items: center;
    margin: 0 0 16px;
    gap: 8px;
  }
</style>
