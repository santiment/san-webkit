<script>
  import Walkthrough from './Walkthrough.svelte'
  import { FeatureWalkthrough$ } from './context'

  $: features = $FeatureWalkthrough$
  $: console.log(features)
</script>

{#if features.length}
  <Walkthrough {features} />
{/if}
