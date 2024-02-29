<script lang="ts">
  import { saveBoolean } from '@/utils/localStorage'
  import FeatureWalkthrough from '@/ui/FeatureWalkthrough/index.svelte'
  import { FeatureWalkthrough$ } from '@/ui/FeatureWalkthrough/context'

  const ids = {
    start: 'test-start',
    feature1: 'test-feature1',
    feature2: 'test-feature2',
    feature3: 'test-feature3',
  } as const

  function start() {
    Object.values(ids).forEach((id) => {
      saveBoolean(id, false)
    })

    FeatureWalkthrough$.show({
      id: ids.start,
      title: 'New master select',
      description: `<p class="mrg-l mrg--b">Paste the concrete smart contract address for fetching relevant metrics for it</p>`,
    })

    FeatureWalkthrough$.show({
      id: ids.feature1,
      title: 'First Feature',
      description: `<p class="mrg-l mrg--b">Paste the concrete smart contract address for fetching relevant metrics for it</p>`,
    })

    FeatureWalkthrough$.show({
      id: ids.feature2,
      title: 'Second Feature',
      description: `<p class="mrg-l mrg--b">Paste the concrete smart contract address for fetching relevant metrics for it</p>`,
    })

    FeatureWalkthrough$.show({
      id: ids.feature3,
      title: 'Third Feature',
      description: `<p class="mrg-l mrg--b">Paste the concrete smart contract address for fetching relevant metrics for it</p>`,
    })
  }
</script>

<main>
  <button class="btn-2" id={ids.start} on:click={start}>Test</button>

  <row class="row gap-xxxl mrg-xxxl mrg--t">
    <div id={ids.feature1}>Feature 1</div>
    <div id={ids.feature2}>Feature 2</div>
    <div id={ids.feature3}>Feature 3</div>
  </row>

  <FeatureWalkthrough />
</main>

<style>
  main {
    padding: 30px;
  }

  div {
    padding: 12px;
    color: white;
  }

  #test-feature1 {
    background: green;
  }

  #test-feature2 {
    background: blue;
  }

  #test-feature3 {
    background: purple;
  }
</style>
