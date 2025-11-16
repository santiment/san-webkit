<script lang="ts">
  import Dropdown from '$ui/core/Dropdown/index.js'
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

    <Dropdown
      items={['item 1', 'item 2', 'item 3']}
      onSelect={(item) => console.log(`${item} selected`)}
    />
  </div>

  <div>
    <h2>With Icons</h2>

    <Dropdown
      {items}
      selected={selected1}
      onSelect={(item) => (selected1 = item)}
      closeDelay={1000}
    />
  </div>

  <div>
    <h2>Custom Trigger Icons</h2>

    <Dropdown
      {items}
      selected={selected2}
      onSelect={(item) => (selected2 = item)}
      closeDelay={1000}
    >
      {#snippet trigger()}
        <Svg id="cog" />
        Settings
      {/snippet}
    </Dropdown>
  </div>
</main>
