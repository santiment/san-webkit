<script lang="ts">
  import { ICON_CATEGORIES } from './icons'
</script>

<main class="flex flex-col gap-6 p-6">
  {#each Object.keys(ICON_CATEGORIES) as category}
    <div class="flex flex-col">
      {#if category !== '_'}
        <h2 class="txt-m mrg-s mrg--b t-h4-medium mb-2 border-b">{category}</h2>
      {/if}

      <div class="flex flex-wrap gap-6">
        {#each ICON_CATEGORIES[category] as { key, sprite }}
          <div class="t-caption-1-regular flex flex-col center">
            <div class="flex size-12 rounded bg-athens p-2.5 center">
              <!-- <Svg id={key} w={width} h={height} /> -->

              {@html sprite}
            </div>
            {key}
          </div>
        {/each}
      </div>
    </div>
  {/each}
</main>
