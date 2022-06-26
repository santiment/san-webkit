<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import FeatureWalkthrough from '@/ui/FeatureWalkthrough/index.svelte'
  import { FeatureWalkthrough$ } from '@/ui/FeatureWalkthrough/context'

  function start() {
    FeatureWalkthrough$.show('test')
  }
</script>

<Meta title="Example/Feature Walkthrough" />

<Story name="Default">
  <main>
    <button class="btn-2" id="test" on:click={start}>Test</button>

    <FeatureWalkthrough />
  </main>
</Story>

<style>
  main {
    padding: 30px;
  }
</style>
