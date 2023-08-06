<script>
  import Svg from '@/ui/Svg/svelte'
  import icons from '../../icons.json'

  const categories = categorize(icons)

  function categorize(icons) {
    const categories = { _: [] }

    icons.forEach((icon) => {
      if (!icon.meta) {
        return categories._.push(icon)
      }

      const { category } = icon.meta

      if (!categories[category]) {
        categories[category] = []
      }

      categories[category].push(icon)
    })

    return categories
  }
</script>

<main class="column">
  {#each Object.keys(categories) as category}
    <div class="column">
      {#if category !== '_'}
        <h2 class="h4 txt-m mrg-s mrg--b">{category}</h2>
      {/if}

      <div class="row">
        {#each categories[category] as { key, width, height }}
          <div class="column caption hv-center">
            <div class="icon row hv-center">
              <Svg id={key} w={width} h={height} />
            </div>
            {key}
          </div>
        {/each}
      </div>
    </div>
  {/each}
</main>

<style>
  main {
    padding: 48px;
    gap: 48px;
  }

  h2 {
    border-bottom: 1px solid var(--porcelain);
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
