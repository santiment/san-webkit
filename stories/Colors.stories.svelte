<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  // import COLORS from '@/styles/colors.css'

  const Colors = {
    Base: [
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
    Orange: ['orange', 'orange-hover', 'orange-light-1', 'orange-light-2'],
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

<Meta title="Example/Colors" />

<Template let:args>
  {#each Object.entries(Colors) as [group, colors]}
    <div class="column mrg-xl mrg--b">
      <div class="h3 mrg-s mrg--b">{group}</div>
      <div class="row">
        {#each colors as color}
          <div class="color">
            <div class="border" style="background:var(--{color})" />
            var(--{color})
          </div>
        {/each}
      </div>
    </div>
  {/each}
</Template>

<Story name="Colors" />

<style>
  .row {
    gap: 16px;
    flex-wrap: wrap;
  }

  .border {
    width: 100px;
    height: 100px;
  }
</style>
