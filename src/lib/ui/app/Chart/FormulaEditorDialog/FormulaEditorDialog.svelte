<script lang="ts" module>
  import Dialog from '$ui/core/Dialog/Dialog.svelte'
  import { dialogs$, type TDialogProps } from '$ui/core/Dialog/dialogs.js'

  import Component from './FormulaEditorDialog.svelte'

  export const showFormulaEditorDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import Input from '$ui/core/Input/Input.svelte'
  import Button from '$ui/core/Button/Button.svelte'
  import {
    createVariableDefinition,
    createChartVariableDocumentation,
    DEFINITIONS,
  } from '$ui/app/san-formulas/language/definitions.js'

  import TextEditor from './TextEditor.svelte'
  import { useMetricSeriesCtx, type TSeries } from '../ctx/series.svelte.js'
  import { useFormulaEditorCtx } from './ctx.svelte.js'
  import Definitions from './Definitions.svelte'
  import Documentation from './Documentation.svelte'
  import { useAssetsCtx } from '$lib/ctx/assets/index.svelte.js'

  type TProps = TDialogProps & {
    metric: TSeries
  }

  const { Controller, metric: currentMetric }: TProps = $props()

  const { metricSeries } = useMetricSeriesCtx.get()
  const { getAssetBySlug } = useAssetsCtx.get()

  const chartMetrics = metricSeries.$.map((item, i) =>
    item === currentMetric ? null : [`m${i + 1}`, item],
  ).filter(Boolean) as [string, TSeries][]

  const chartVariables = metricSeries.$.map((item, i) => {
    if (item === currentMetric) return null

    const name = `m${i + 1}`

    const [selector, fullSelector, shortSelector] = formatMetricSelector(item)
    const metric = {
      apiMetricName: item.apiMetricName,
      label: item.label,
      fullLabel: item.formula ? item.label : `${shortSelector} - ${item.label}`,
      selector,
      fullSelector,
    }

    return createVariableDefinition(name, {
      detail: 'Chart metric',
      documentation: createChartVariableDocumentation(metric, name, item.formula),
      metric,
    })
  }).filter(Boolean) as ReturnType<typeof createVariableDefinition>[]

  const { hoveredDefinitionIndex } = useFormulaEditorCtx.set({
    chartVariables: chartMetrics.map((item) => item[0]),
  })

  function formatMetricSelector(metric: TSeries): [string, string, string] {
    const selector = metric.selector.$

    let result = ['bitcoin', 'Bitcoin (BTC)', 'BTC'] as [string, string, string]

    if (!selector) {
      return result
    }

    if (selector.slug) {
      const asset = getAssetBySlug(selector.slug)
      if (asset) {
        result = [selector.slug, `${asset.name} (${asset.ticker})`, asset.ticker]
      }
    }

    return result
  }
</script>

<Dialog class="h-[600px] w-[900px] !overflow-visible">
  <div class="h-full max-h-full column">
    <div class="p-4">
      Name:
      <Input defaultValue={currentMetric.label}></Input>

      <br />

      Formula:
      <TextEditor></TextEditor>
    </div>

    <div class="flex flex-1 overflow-hidden border-y">
      <div class="min-w-[272px] max-w-[340px] shrink-0 divide-y overflow-auto border-r column">
        <Definitions
          icon="chart"
          title="Chart metrics"
          indexOffset={-chartMetrics.length}
          items={chartVariables}
        >
          {#snippet children(item)}
            <span
              class="rounded-md bg-athens px-1 text-xs font-medium text-fiord [.active-definition>&]:bg-mystic"
            >
              {item.label}
            </span>

            <span class="single-line">
              {item.metric!.fullLabel}
            </span>
          {/snippet}
        </Definitions>

        <Definitions icon="fx" title="Functions" items={DEFINITIONS}>
          {#snippet children(definition)}
            {definition.label}
          {/snippet}
        </Definitions>
      </div>

      <Documentation
        definition={hoveredDefinitionIndex.$ < 0
          ? chartVariables[hoveredDefinitionIndex.$ + chartMetrics.length]
          : DEFINITIONS[hoveredDefinitionIndex.$]}
      ></Documentation>
    </div>

    <div class="flex justify-end gap-2 p-3">
      <Button variant="border" onclick={() => Controller.close()}>Cancel</Button>
      <Button variant="fill">Save</Button>
    </div>
  </div>
</Dialog>
