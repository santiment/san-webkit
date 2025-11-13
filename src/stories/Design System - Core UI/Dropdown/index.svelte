<script lang="ts">
  import Dropdown, { DropdownItem } from '$ui/core/Dropdown/index.js'
  import Svg from '$ui/core/Svg/Svg.svelte'

  const items: Item[] = [
    { icon: 'fire', title: 'Label 1' },
    { icon: 'rocket', title: 'Label 2' },
    { icon: 'confetti', title: 'Label 3' },
    { icon: 'santiment', title: 'Label 4' },
  ]
  type Item = { icon: string; title: string }

  let selected1 = $state<Item>()
  let selected2 = $state<Item>()
</script>

<main class="flex flex-wrap justify-center gap-10 p-10">
  <div>
    <h2>Simple</h2>

    <Dropdown>
      {#each ['item 1', 'item 2', 'item 3'] as item}
        <DropdownItem {item} onclick={() => console.log(`${item} selected`)} />
      {/each}
    </Dropdown>
  </div>

  <div>
    <h2>With Icons</h2>

    <Dropdown selected={selected1} closeDelay={1000}>
      {#each items as item}
        <DropdownItem {item} onclick={() => (selected1 = item)} />
      {/each}
    </Dropdown>
  </div>

  <div>
    <h2>Custom Trigger Icons</h2>

    <Dropdown selected={selected2} closeDelay={1000}>
      {#each items as item}
        <DropdownItem {item} onclick={() => (selected2 = item)} />
      {/each}

      {#snippet trigger()}
        <Svg id="cog" />
        Settings
      {/snippet}
    </Dropdown>
  </div>

  <div>
    <h2>Custom Content</h2>

    <Dropdown selected={selected2} closeDelay={1000}>
      {#each items as item}
        <DropdownItem {item} onclick={() => (selected2 = item)} />
      {/each}

      {#if selected2}
        <div class="h-px w-full bg-porcelain"></div>

        <DropdownItem
          item={{ title: 'Reset', icon: 'cross' }}
          onclick={() => {
            selected2 = undefined
          }}
        />
      {/if}

      {#snippet trigger()}
        <Svg id="cog" />
        Settings
      {/snippet}
    </Dropdown>
  </div>
</main>
