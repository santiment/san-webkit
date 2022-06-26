<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import FeatureWalkthrough from '@/ui/FeatureWalkthrough/index.svelte'
</script>

<Meta title="Example/Feature Walkthrough" />

<Story name="Default">
  <main>
    <FeatureWalkthrough />
  </main>
</Story>

<style>
  main {
    padding: 30px;
  }
</style>
