<script lang="ts">
  import { ICON_CATEGORIES } from './icons'
</script>

<main class="flex flex-col gap-6 p-6">
  {#each Object.keys(ICON_CATEGORIES) as category}
    <div class="flex flex-col">
      {#if category !== '_'}
        <h2 class=" txt-m mrg-s mrg--b mb-2 border-b text-2xl font-bold">{category}</h2>
      {/if}

      <div class="flex flex-wrap gap-6">
        {#each ICON_CATEGORIES[category] as { key, sprite }}
          <div class="center flex flex-col text-xs">
            <div class="center flex size-12 rounded bg-athens p-2.5">
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
