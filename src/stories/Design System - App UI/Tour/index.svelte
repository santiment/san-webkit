<script lang="ts">
  import Button from '$ui/core/Button/Button.svelte'
  import { Tour } from '$ui/app/Tour/index.js'

  const ids = {
    start: 'test-start',
    feature1: 'test-feature1',
    feature2: 'test-feature2',
    feature3: 'test-feature3',
  } as const

  function start() {
    Tour.start('storybook_tour', [
      {
        element: `#${ids.start}`,
        id: 'new_master_select',
        title: 'New master select',
        side: 'bottom',
        description: `<p class="mrg-l mrg--b">Paste the concrete smart contract address for fetching relevant metrics for it</p>`,
      },
      {
        element: `#${ids.feature1}`,
        id: 'first_feature',
        title: 'First Feature',
        side: 'bottom',
        description: `<p class="mrg-l mrg--b">2) Paste the concrete smart contract address for fetching relevant metrics for it</p>`,
      },
      {
        element: `#${ids.feature2}`,
        id: 'second_feature',
        title: 'Second Feature',
        side: 'bottom',
        description: `<p class="mrg-l mrg--b">3) Paste the concrete smart contract address for fetching relevant metrics for it</p>`,
      },
      {
        element: `#${ids.feature3}`,
        id: 'third_feature',
        title: 'Third Feature',
        side: 'bottom',
        description: `<p class="mrg-l mrg--b">4) Paste the concrete smart contract address for fetching relevant metrics for it</p>`,
      },
    ])
  }
</script>

<main class="p-8">
  <Button id={ids.start} class="px-6" variant="border" onclick={start}>Test</Button>

  <div class="mt-10 flex gap-10 [&>div]:rounded [&>div]:p-3 [&>div]:text-white">
    <div class="bg-green" id={ids.feature1}>Feature 1</div>
    <div class="bg-blue" id={ids.feature2}>Feature 2</div>
    <div class="bg-purple" id={ids.feature3}>Feature 3</div>
  </div>
</main>
