<script lang="ts">
  import type { TAlertSchemaUnion } from '../categories/index.js'
  import type { TApiAlert } from '../types.js'

  import Button from '$ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'
  import Svg from '$ui/core/Svg/Svg.svelte'

  import { useAlertFormCtx } from '../ctx/index.svelte.js'

  type TProps = {
    schema: TAlertSchemaUnion
    apiAlert?: null | TApiAlert
    resetCategory: () => void
  }
  let { schema, apiAlert, resetCategory }: TProps = $props()

  const { steps, selectedStep, isAlertValid } = useAlertFormCtx({ schema, apiAlert })

  // Reduce steps state.$$ to accumulated object
  function onAlertCreate() {
    const reducedAlert = createApiAlert()
    console.log({ reducedAlert, isAlertValid })
  }

  function createApiAlert() {
    return steps.reduce((acc, step) => step.reduceToApi(acc, $state.snapshot(step.state.$$)), {
      settings: {},
    })
  }
</script>

<section class="flex min-h-0 flex-1">
  <aside class="relative h-full w-[374px] overflow-auto border-r pb-[100px] pl-12 pr-10 pt-8">
    <div class="mb-6 flex items-center justify-between border-b pb-4">
      <h2 class="text-xl">{schema.ui.label}</h2>

      {#if !apiAlert}
        <Button
          variant="plain"
          icon="arrow"
          iconSize="8"
          class="back fill-waterloo text-waterloo hover:fill-green hover:text-green [&>svg]:-rotate-90"
          onclick={resetCategory}
        >
          Categories
        </Button>
      {/if}
    </div>

    <nav>
      {#each steps as step, i}
        {@const { title, description } = step.ui}
        {@const active = selectedStep.index$ === i}
        {@const valid = step.isValid.$}
        {@const next = !valid && (steps[i - 1] ? steps[i - 1].isValid.$ : true)}

        <button
          class={cn(
            'pointer-events-none relative flex max-w-full pb-5 text-casper',
            'before:absolute before:bottom-0 before:left-3 before:top-0 before:-z-10 before:block before:w-px before:bg-porcelain',
            'last:before:hidden',
            (next || valid) && 'pointer-events-auto text-fiord hover:text-green',
            active && 'text-green',
          )}
          onclick={() => (selectedStep.index$ = i)}
        >
          <span
            class={cn(
              'mr-3 flex size-6 min-w-6 items-center justify-center rounded-full bg-mystic fill-white text-white',
              next && 'bg-waterloo',
              (active || valid) && 'bg-green',
            )}
          >
            {#if valid}
              <Svg id="checkmark" w="8" />
            {:else}
              {i + 1}
            {/if}
          </span>

          <div class="min-w-0 text-start">
            <h3 class="text-base">{title}</h3>
            {#if valid && step.ui.Legend}
              <div class="mt-2 flex text-fiord">
                <step.ui.Legend {step} />
              </div>
            {:else if active}
              <p class="text-fiord">
                {description}
              </p>
            {/if}
          </div>
        </button>
      {/each}
    </nav>

    <Button variant="fill" onclick={() => onAlertCreate()}>Submit</Button>
  </aside>

  <main class="flex flex-1 flex-col overflow-auto pb-8 pl-10 pr-12 pt-9">
    <div class="mb-4 flex justify-between">
      <h3 class="text-lg font-medium">{selectedStep.$.ui.label}</h3>
    </div>

    <selectedStep.$.ui.Form step={selectedStep.$}></selectedStep.$.ui.Form>
  </main>
</section>
