<script>
  import Svg from '@/ui/Svg/svelte'
  import icons from '../../icons.json'
</script>

<main>
  <div class="row">
    {#each icons as { key, width, height }}
      <div class="column caption hv-center">
        <div class="icon row hv-center">
          <Svg id={key} w={width} h={height} />
        </div>
        {key}
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    padding: 48px;
  }

  .row {
    flex-wrap: wrap;
    gap: 24px;
  }

  .caption {
    text-align: center;
  }

  .icon {
    width: 48px;
    height: 48px;
    padding: 10px;
    background: var(--athens);
    border-radius: 4px;
  }
</style>
