<script lang="ts">
  import type { TSeries } from '../../ctx/series.svelte.js'

  import { useAssetsCtx } from '../../../../../ctx/assets/index.svelte.js'
  import Button from '../../../../core/Button/Button.svelte'

  import { useChartGlobalParametersCtx } from '../../ctx/global-parameters.svelte.js'

  type TProps = {
    info: {
      description?: string
      academyLinks: string[]
    } | null
    metric: TSeries | null
  }

  const { info, metric }: TProps = $props()

  const { globalParameters } = useChartGlobalParametersCtx.get()
  const { getAssetBySlug } = useAssetsCtx.get()

  const metricSlug = $derived(metric && 'selector' in metric ? metric.selector.$?.slug : undefined)

  const TICKER_REGEX = /\[Project Ticker\]/g
  export function replaceDescriptionMeta(description: string, ticker: string): string {
    return description.replace(TICKER_REGEX, ticker)
  }
</script>

{#if info && metric}
  <h3 class="mb-2.5 font-medium text-rhino">
    {metric?.label}
  </h3>

  <p>
    {#if info.description}
      {@const slug = metricSlug ?? globalParameters.$$.selector.slug}
      {@const ticker = (slug && getAssetBySlug(slug)?.ticker) ?? 'BTC'}

      {@html replaceDescriptionMeta(info.description, ticker)}
    {/if}

    {#if info.academyLinks.length}
      {#if info.description}
        <br />
      {/if}

      Academy
      <Button
        variant="link"
        target="_blank"
        href="https://academy.santiment.net{info.academyLinks[0]}"
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
