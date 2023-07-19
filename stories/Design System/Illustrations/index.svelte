<script>
  import Svg from '@/ui/Svg/svelte'
  import illustrations from '../../illustrations.json'
</script>

<main>
  <div class="row">
    {#each illustrations as { key, width, height }}
      <div class="caption border column v-center">
        <div class="icon">
          <Svg illus id={key} w={width} h={height} />
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
    gap: 16px;
  }

  .caption {
    padding: 10px;
    align-self: flex-end;
  }

  .icon {
    padding: 10px;
    border-radius: 4px;
  }
</style>
