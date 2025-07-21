<script lang="ts" module>
  import Dialog from '$ui/core/Dialog/Dialog.svelte'
  import { dialogs$, type TDialogProps } from '$ui/core/Dialog/dialogs.js'

  import Component from './FormulaEditorDialog.svelte'

  export const showFormulaEditorDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import { tick } from 'svelte'

  import Input from '$ui/core/Input/Input.svelte'
  import Button from '$ui/core/Button/Button.svelte'
  import {
    createVariableDefinition,
    createChartVariableDocumentation,
    DEFINITIONS,
  } from '$ui/app/san-formulas/language/definitions.js'
  import { useAssetsCtx } from '$lib/ctx/assets/index.svelte.js'

  import TextEditor from './TextEditor.svelte'
  import Validity from './Validity.svelte'
  import Definitions from './Definitions.svelte'
  import Documentation from './Documentation.svelte'
  import { useFormulaEditorCtx } from './ctx.svelte.js'
  import { useMetricSeriesCtx, type TSeries } from '../ctx/series.svelte.js'

  type TProps = TDialogProps & {
    index: number
    metric: TSeries
  }

  const { Controller, index, metric: currentMetric }: TProps = $props()

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
    index,
    chartVariables: chartMetrics.map((item) => item[0]),
    metrics: metricSeries.asScope$,
    onEditorSignatureShown,
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

  let definitionsElement: HTMLElement
  function onEditorSignatureShown() {
    tick().then(() => {
      definitionsElement
        .querySelector('.active-definition')
        ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    })
  }
</script>

<Dialog class="w-[900px] !overflow-visible column">
  <div class="gap-4 p-4 column">
    <label>
      <div class="mb-1 text-xs font-medium text-waterloo">Name:</div>

      <Input defaultValue={currentMetric.label} placeholder="Write formula name here..."></Input>
    </label>

    <label>
      <div class="mb-1 text-xs font-medium text-waterloo">Formula:</div>

      <TextEditor></TextEditor>
    </label>

    <Validity></Validity>
  </div>

  <div class="flex flex-1 overflow-hidden border-y">
    <div
      bind:this={definitionsElement}
      class="min-w-[272px] max-w-[340px] shrink-0 divide-y overflow-auto border-r column"
    >
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

  <div class="flex justify-start gap-2 p-4">
    <Button variant="fill">Save</Button>
    <Button variant="border" onclick={() => Controller.close()}>Cancel</Button>
  </div>
</Dialog>
