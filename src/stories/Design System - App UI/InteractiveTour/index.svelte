<script lang="ts">
  import Button from '$ui/core/Button/Button.svelte'
  import { driver } from 'driver.js'
  import 'driver.js/dist/driver.css'

  const ids = {
    start: 'test-start',
    feature1: 'test-feature1',
    feature2: 'test-feature2',
    feature3: 'test-feature3',
  } as const

  const driverObj = driver({
    steps: [
      {
        element: ids.start,
        popover: {
          title: 'New master select',
          description: `<p class="mrg-l mrg--b">Paste the concrete smart contract address for fetching relevant metrics for it</p>`,
        },
      },
      {
        element: ids.feature1,
        popover: {
          title: 'First Feature',
          description: `<p class="mrg-l mrg--b">Paste the concrete smart contract address for fetching relevant metrics for it</p>`,
        },
      },
      {
        element: ids.feature2,
        popover: {
          title: 'Second Feature',
          description: `<p class="mrg-l mrg--b">Paste the concrete smart contract address for fetching relevant metrics for it</p>`,
        },
      },
      {
        element: ids.feature3,
        popover: {
          title: 'Third Feature',
          description: `<p class="mrg-l mrg--b">Paste the concrete smart contract address for fetching relevant metrics for it</p>`,
        },
      },
    ].map(({ element, ...rest }) => ({ element: '#' + element, ...rest })),
  })

  function start() {
    driverObj.drive()
  }
</script>

<main class="p-8">
  <Button id={ids.start} class="px-6" variant="border" onclick={start}>Test</Button>

  <row class="mt-10 flex gap-10 [&>div]:rounded [&>div]:p-3 [&>div]:text-white">
    <div class="bg-green" id={ids.feature1}>Feature 1</div>
    <div class="bg-blue" id={ids.feature2}>Feature 2</div>
    <div class="bg-purple" id={ids.feature3}>Feature 3</div>
  </row>
</main>
