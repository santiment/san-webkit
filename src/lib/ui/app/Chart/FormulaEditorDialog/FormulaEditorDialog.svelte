<script lang="ts" module>
  import Dialog from '$ui/core/Dialog/Dialog.svelte'
  import { dialogs$, type TDialogProps } from '$ui/core/Dialog/dialogs.js'

  import Component from './FormulaEditorDialog.svelte'

  export const showFormulaEditorDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import Input from '$ui/core/Input/Input.svelte'
  import Button from '$ui/core/Button/Button.svelte'
  import { DEFINITIONS } from '$ui/app/san-formulas/language/definitions.js'

  import TextEditor from './TextEditor.svelte'
  import { useMetricSeriesCtx, type TSeries } from '../ctx/series.svelte.js'
  import { useFormulaEditorCtx } from './ctx.svelte.js'
  import Definitions from './Definitions.svelte'
  import Documentation from './Documentation.svelte'

  type TProps = TDialogProps & {
    metric: TSeries
  }

  const { Controller, metric: currentMetric }: TProps = $props()

  const { metricSeries } = useMetricSeriesCtx.get()

  const chartMetrics = metricSeries.$.map((item, i) =>
    item === currentMetric ? null : [`m${i + 1}`, item],
  ).filter(Boolean) as [string, TSeries][]

  const { hoveredDefinitionIndex } = useFormulaEditorCtx.set({
    chartVariables: chartMetrics.map((item) => item[0]),
  })
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
      <div class="max-w-[340px] shrink-0 overflow-auto border-r p-4 column">
        <Definitions title="Chart metrics" indexOffset={-chartMetrics.length} items={chartMetrics}>
          {#snippet children([variable, metric])}
            <span class="-ml-1 rounded bg-green-light-2-day px-1 py-0.5 text-2xs text-mono">
              {variable}
            </span>

            {#if !metric.formula}
              BTC -
            {/if}

            {metric.label}
          {/snippet}
        </Definitions>

        <Definitions title="Functions" items={DEFINITIONS} itemIcon="fx">
          {#snippet children(definition)}
            {definition.label}
          {/snippet}
        </Definitions>
      </div>

      <Documentation
        definition={hoveredDefinitionIndex.$ < 0
          ? chartMetrics[hoveredDefinitionIndex.$ + chartMetrics.length][1]
          : DEFINITIONS[hoveredDefinitionIndex.$]}
      ></Documentation>
    </div>

    <div class="flex justify-end gap-2 p-3">
      <Button variant="border" onclick={() => Controller.close()}>Cancel</Button>
      <Button variant="fill">Save</Button>
    </div>
  </div>
</Dialog>
