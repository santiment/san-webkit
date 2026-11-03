<script lang="ts">
  import { ILLUS_CATEGORIES } from './illus.js'
  import Svg from '$ui/core/Svg/index.js'
</script>

<main class="flex flex-col gap-6 p-6">
  {#each Object.keys(ILLUS_CATEGORIES) as category}
    <div class="flex flex-col">
      {#if category !== '_'}
        <h2 class="txt-m mrg-s mrg--b t-h4-medium mb-2 border-b">{category}</h2>
      {/if}

      <div class="flex flex-wrap gap-6">
        {#each ILLUS_CATEGORIES[category] as { key, width, height }}
          <div class="t-caption-1-regular flex flex-col center">
            <div class="flex rounded bg-athens p-2.5 center">
              <Svg illus id={key} w={width} h={height} />
            </div>
            {key}
          </div>
        {/each}
      </div>
    </div>
  {/each}
</main>
