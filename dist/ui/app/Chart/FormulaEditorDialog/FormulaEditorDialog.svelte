<script lang="ts" module>
  import Dialog from '../../../core/Dialog/Dialog.svelte'
  import { dialogs$, type TDialogProps } from '../../../core/Dialog/dialogs.js'

  import Component from './FormulaEditorDialog.svelte'

  export const showFormulaEditorDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import type { TMetricFormula } from '../../../../ctx/metrics-registry/types/index.js'

  import { tick } from 'svelte'

  import Input from '../../../core/Input/Input.svelte'
  import Button from '../../../core/Button/Button.svelte'
  import {
    createVariableDefinition,
    createChartVariableDocumentation,
    DEFINITIONS,
  } from '../../san-formulas/language/definitions.js'
  import { useAssetsCtx } from '../../../../ctx/assets/index.svelte.js'
  import { uuidv4 } from '../../../../utils/uuid/index.js'

  import TextEditor from './TextEditor.svelte'
  import Validity from './Validity.svelte'
  import Definitions from './Definitions.svelte'
  import Documentation from './Documentation.svelte'
  import { useFormulaEditorCtx } from './ctx.svelte.js'
  import { useMetricSeriesCtx, type TSeries } from '../ctx/series.svelte.js'

  type TResult = { formula: TMetricFormula }

  type TProps = TDialogProps<TResult> & {
    index: number
    formula: null | TMetricFormula
  }

  const { Controller, index, formula }: TProps = $props()

  const defaultValues = formula || { expr: '', name: '' }
  const currentFormula = $state(defaultValues)

  const { metricSeries } = useMetricSeriesCtx.get()
  const { getAssetBySlug } = useAssetsCtx.get()

  const chartVariables = metricSeries.$.map((item, i) => {
    if (i === index) return null

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
      documentation: createChartVariableDocumentation(metric, name, item.formula?.$),
      metric,
    })
  }).filter(Boolean) as ReturnType<typeof createVariableDefinition>[]

  const { hoveredDefinitionIndex } = useFormulaEditorCtx.set({
    index,
    chartVariables: chartVariables.map(({ label }) => label),
    metrics: metricSeries.asScope$,
    onEditorSignatureShown,
  })

  $effect(() => {
    if (currentFormula.expr === defaultValues.expr && currentFormula.name === defaultValues.name) {
      Controller.unlock()
    } else {
      Controller.lockWarn('Do you want to close this dialog? Changes you made may not be saved.')
    }
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

  function onFormSubmit(e: Event) {
    e.preventDefault()

    // TODO: Handle invalid formula inputs with report validity
    if (!currentFormula.name) {
      return
    }

    if (!currentFormula.expr) {
      return
    }
    const { id, name, expr } = { ...currentFormula, id: formula?.id ?? uuidv4() }

    Controller.unlock()
    Controller.resolve({
      formula: { id, name, expr },
    })

    Controller.close()
  }
</script>

<Dialog class="w-[900px] !overflow-visible column">
  <form onsubmit={onFormSubmit} class="h-[750px] min-h-0 column">
    <div class="gap-4 p-4 column">
      <label>
        <div class="mb-1 text-xs font-medium text-waterloo">Name:</div>

        <Input
          required
          defaultValue={currentFormula.name}
          placeholder="Write formula name here..."
          oninput={(e) => (currentFormula.name = e.currentTarget.value.trim())}
        ></Input>
      </label>

      <label>
        <div class="mb-1 text-xs font-medium text-waterloo">Formula:</div>

        <TextEditor bind:value={currentFormula.expr}></TextEditor>
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
          indexOffset={-chartVariables.length}
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
          ? chartVariables[hoveredDefinitionIndex.$ + chartVariables.length]
          : DEFINITIONS[hoveredDefinitionIndex.$]}
      ></Documentation>
    </div>

    <div class="flex justify-start gap-2 p-4">
      <Button variant="fill" type="submit">Save</Button>
      <Button variant="border" onclick={() => Controller.close()}>Cancel</Button>
    </div>
  </form>
</Dialog>
