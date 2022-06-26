<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import FeatureWalkthrough from '@/ui/FeatureWalkthrough/index.svelte'
  import { FeatureWalkthrough$ } from '@/ui/FeatureWalkthrough/context'
  import selectorSrc from './selector.jpg'

  function start() {
    FeatureWalkthrough$.show({
      id: 'wk-test',
      title: 'New master select',
      description: `<p class="mrg-l mrg--b">Paste the concrete smart contract address for fetching relevant metrics for it</p>
      <img src="${selectorSrc}" alt="Example" />`,
    })
  }
</script>

<Meta title="Example/Feature Walkthrough" />

<Story name="Default">
  <main>
    <button class="btn-2" id="wk-test" on:click={start}>Test</button>

    <FeatureWalkthrough />
  </main>
</Story>

<style>
  main {
    padding: 30px;
  }
</style>
