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

  import Editor from './Editor/index.js'
  import { useMetricSeriesCtx, type TSeries } from '../ctx/series.svelte.js'
  import { cn } from '$ui/utils/index.js'

  type TProps = TDialogProps & {
    metric: TSeries
  }

  const { Controller, metric: currentMetric }: TProps = $props()

  const { metricSeries } = useMetricSeriesCtx.get()

  const chartMetrics = metricSeries.$.map((item, i) =>
    item === currentMetric ? null : [`m${i + 1}`, item],
  ).filter(Boolean) as [string, TSeries][]

  let hoveredIndex = $state(0)
  function onSignatureHelp(value: number) {
    hoveredIndex = value
  }
</script>

<Dialog class="h-[600px] w-[900px] !overflow-visible">
  <div class="h-full max-h-full column">
    <div class="p-4">
      Name:
      <Input defaultValue={currentMetric.label}></Input>

      <br />
      Formula:
      <Editor chartVariables={chartMetrics.map((item) => item[0])} {onSignatureHelp}></Editor>
    </div>

    <div class="flex flex-1 overflow-hidden border-y">
      <div class="max-w-[340px] overflow-auto border-r p-4 column">
        <h3 class="font-medium">Chart metrics</h3>
        {#each chartMetrics as [variable, metric]}
          <Button>
            <span class="-ml-1 rounded bg-green-light-2-day px-1 py-0.5 text-2xs text-mono">
              {variable}
            </span>

            {#if !metric.formula}
              BTC -
            {/if}

            {metric.label}
          </Button>
        {/each}

        <h3 class="mt-2 font-medium">Functions</h3>
        {#each DEFINITIONS as definition, i}
          <Button
            icon="fx"
            class={cn('hover:bg-white', hoveredIndex === i && '!bg-athens')}
            onmouseenter={() => (hoveredIndex = i)}
          >
            {definition.label}
          </Button>
        {/each}
      </div>

      <div class="overflow-auto p-4 column">
        Documentation for {DEFINITIONS[hoveredIndex]?.label}
      </div>
    </div>

    <div class="flex justify-end gap-2 p-3">
      <Button variant="border" onclick={() => Controller.close()}>Cancel</Button>
      <Button variant="fill">Save</Button>
    </div>
  </div>
</Dialog>
