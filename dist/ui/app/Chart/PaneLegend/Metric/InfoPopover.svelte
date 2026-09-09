<script lang="ts">
  import { type Snippet } from 'svelte'

  import Popover from '../../../../core/Popover/Popover.svelte'
  import {
    useMetricsRestrictionsCtx,
    type TMetricRestrictions,
  } from '../../../../../ctx/metrics-registry/index.js'

  import { type TSeries } from '../../ctx/index.js'
  import { useMetricInfoCtx } from './ctx.svelte.js'
  import InfoContent from './InfoContent.svelte'

  type TProps = { children: Snippet }
  let { children }: TProps = $props()

  const { MetricsRestrictions } = useMetricsRestrictionsCtx.get()

  let openedMetric = $state.raw<null | TSeries>(null)
  let openedInfo = $state.raw<null | TMetricRestrictions['docs']>(null)
  let anchorNode = $state.raw<null | HTMLElement>(null)

  useMetricInfoCtx.set(() => openedMetric, onMetricInfoClick)

  function onMetricInfoClick(item: null | TSeries, anchor?: HTMLElement) {
    if (!item || !anchor) {
      openedMetric = openedInfo = null
      return
    }

    if (openedMetric) {
      return
    }

    anchorNode = anchor
    openedMetric = item
    openedInfo =
      ('apiMetricName' in item && MetricsRestrictions.$[item.apiMetricName]?.docs) || null
  }

  function onOpenChange(value: boolean) {
    if (value) return

    setTimeout(() => {
      openedMetric = anchorNode = openedInfo = null
    }, 200)
  }
</script>

{@render children()}

<Popover
  isOpened={!!openedMetric}
  rootProps={{ onOpenChange }}
  contentProps={{
    customAnchor: anchorNode,
    sideOffset: 16,
  }}
  side="right"
  class="w-[360px] px-6 py-5 pt-4 text-rhino column"
>
  {#snippet content()}
    <InfoContent metric={openedMetric} info={openedInfo} />
  {/snippet}
</Popover>
