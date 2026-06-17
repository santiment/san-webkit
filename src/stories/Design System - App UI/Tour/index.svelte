<script lang="ts">
  import Button from '$ui/core/Button/Button.svelte'
  import { createTour } from '$ui/core/Tour/index.js'

  const ids = {
    start: 'test-start',
    feature1: 'test-feature1',
    feature2: 'test-feature2',
    feature3: 'test-feature3',
  } as const

  async function start() {
    const selector = (id: string) => `#${id}`

    const tour = await createTour({
      steps: [
        {
          element: selector(ids.start),
          popover: {
            title: 'New master select',
            side: 'bottom',
            description: `<p class="mrg-l mrg--b">Paste the concrete smart contract address for fetching relevant metrics for it</p>`,
          },
        },
        {
          element: selector(ids.feature1),
          popover: {
            title: 'First Feature',
            side: 'bottom',
            description: `<p class="mrg-l mrg--b">2) Paste the concrete smart contract address for fetching relevant metrics for it</p>`,
          },
        },
        {
          element: selector(ids.feature2),
          popover: {
            title: 'Second Feature',
            side: 'bottom',
            description: `<p class="mrg-l mrg--b">3) Paste the concrete smart contract address for fetching relevant metrics for it</p>`,
          },
        },
        {
          element: selector(ids.feature3),
          popover: {
            title: 'Third Feature',
            side: 'bottom',
            description: `<p class="mrg-l mrg--b">4) Paste the concrete smart contract address for fetching relevant metrics for it</p>`,
          },
        },
      ],
    })

    tour.drive()
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
