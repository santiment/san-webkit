<script>
  const ColorVars = {
    Greyscale: [
      'white',
      'whale',
      'athens',
      'porcelain',
      'mystic',
      'casper',
      'waterloo',
      'fiord',
      'black',
    ],
    Green: ['green', 'green-hover', 'green-light-1', 'green-light-2', 'green-light-3'],
    Red: ['red', 'red-hover', 'red-light-1', 'red-light-2'],
    Yellow: ['yellow', 'yellow-hover'],
    Orange: [
      'orange',
      'orange-hover',
      'orange-light-1',
      'orange-light-2',
      'orange-light-3',
      'orange-pale',
    ],
    Blue: ['blue', 'blue-hover', 'blue-light-1', 'blue-light-2'],
    Purple: [
      'purple',
      'purple-hover',
      'purple-light-1',
      'purple-light-2',
      'purple-light-3',
      'purple-light-4',
    ],
  }
</script>

<main class="p-10 px-40">
  {#each Object.entries(ColorVars) as [group, colors]}
    <h2 class="mb-2 text-3xl">{group}</h2>

    <div class="mb-10 flex flex-wrap gap-4 text-xs">
      {#each colors as color}
        <div class="color gap-1 column text-mono">
          <div class="h-[100px] w-[160px] rounded border" style="background:var(--{color})"></div>
          <div>
            var(--{color})
          </div>
          <div class="monospace text-waterloo-day">
            {getComputedStyle(document.documentElement)
              .getPropertyValue(`--${color}`)
              .toUpperCase()}
          </div>
        </div>
      {/each}
    </div>
  {/each}
</main>
