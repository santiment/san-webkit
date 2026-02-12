<script lang="ts">
  import { type Snippet } from 'svelte'

  import Popover from '../../../../core/Popover/Popover.svelte'
  import {
    useMetricsRestrictionsCtx,
    type TMetricRestrictions,
  } from '../../../../../ctx/metrics-registry/index.js'
  import Button from '../../../../core/Button/index.js'
  import { useAssetsCtx } from '../../../../../ctx/assets/index.svelte.js'

  import { useChartGlobalParametersCtx, type TSeries } from '../../ctx/index.js'
  import { useMetricInfoCtx } from './ctx.svelte.js'

  type TProps = { children: Snippet }
  let { children }: TProps = $props()

  const { MetricsRestrictions } = useMetricsRestrictionsCtx.get()
  const { globalParameters } = useChartGlobalParametersCtx.get()
  const { getAssetBySlug } = useAssetsCtx.get()

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
    openedInfo = MetricsRestrictions.$[item.apiMetricName]?.docs || null
  }

  function onOpenChange(value: boolean) {
    if (value) return

    setTimeout(() => {
      openedMetric = anchorNode = openedInfo = null
    }, 200)
  }

  const TICKER_REGEX = /\[Project Ticker\]/g
  export function replaceDescriptionMeta(description: string, ticker: string): string {
    return description.replace(TICKER_REGEX, ticker)
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
    {#if openedInfo && openedMetric}
      <h3 class="mb-2.5 font-medium text-rhino">
        {openedMetric?.label}
      </h3>

      <p>
        {#if openedInfo.description}
          {@const slug = globalParameters.$$.selector.slug!}
          {@const ticker = getAssetBySlug(slug)?.ticker || 'BTC'}

          {@html replaceDescriptionMeta(openedInfo.description, ticker)}
        {/if}

        {#if openedInfo.academyLinks.length}
          {#if openedInfo.description}
            <br />
          {/if}

          Academy
          <Button
            variant="link"
            size="auto"
            target="_blank"
            class="inline-flex"
            href="https://academy.santiment.net{openedInfo.academyLinks[0]}"
            data-source="chart_pane_legend_metric_info"
            data-type="metric_academy_article"
          >
            article
          </Button>.
        {/if}
      </p>
    {:else}
      No information available
    {/if}
  {/snippet}
</Popover>
