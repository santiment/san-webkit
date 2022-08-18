<script>import Walkthrough from './Walkthrough.svelte';
import { FeatureWalkthrough$ } from './context';

$: features = $FeatureWalkthrough$;</script>

{#if features.length}
  <div><Walkthrough {features} /></div>
{/if}
