<script lang="ts">
  import { cn } from '../../../../utils/index.js'

  import {
    useMetricsAIExplanationCtx,
    type TApiMetricSeries,
  } from '../../ctx/ai-explanation.svelte.js'
  import Chip from './Chip.svelte'

  type TProps = { metric: TApiMetricSeries }
  let { metric }: TProps = $props()

  const { toggleExplanation, checkIsActiveAssetMetric$ } = useMetricsAIExplanationCtx.get()

  let active = $derived(checkIsActiveAssetMetric$(metric))

  function onToggle() {
    toggleExplanation(metric)
  }
</script>

<Chip
  class={cn('cursor-pointer', !active && 'text-mystic')}
  explanation="{active ? 'Hide' : 'Show'} AI Explanation"
  onclick={onToggle}
>
  AI
</Chip>
