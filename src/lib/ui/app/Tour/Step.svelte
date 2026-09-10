<script lang="ts">
  import type { Driver } from 'driver.js'
  import type { TTourState } from './storage.js'
  import type { Snippet } from 'svelte'
  import type { TTourConfig } from './index.js'

  import { cn } from '$ui/utils/index.js'
  import { trackEvent } from '$lib/analytics/index.js'
  import Button from '$ui/core/Button/Button.svelte'

  type TProps = { driver: Driver; type: string; tourState: TTourState; config: TTourConfig }
  const { driver, type, tourState, config }: TProps = $props()

  const steps = driver.getConfig().steps || []
  const state = driver.getState()
  const popover = state.activeStep?.popover || {}
  const { id, content }: { id?: string; content?: Snippet } = state.activeStep?.data || {}

  function handleMoveTo(index: number) {
    driver.moveTo(index)
    trackTour('set_step')
  }

  function handleClose(isTourDone = false) {
    saveCurrentStep()
    driver.destroy()
    trackTour('close')

    if (isTourDone) {
      config?.onCompleted?.(type)
    }
  }

  const handleConfigCallback = (dir: -1 | 1) =>
    (dir === -1 ? config?.onPrevStep : config?.onNextStep)?.(
      // @ts-expect-error
      steps[state.activeIndex + dir]?.data?.id,
      { id: id!, element: state.activeElement },
      config.ctx,
    )

  async function handleMovePrev() {
    await handleConfigCallback(-1)
    saveCurrentStep()
    driver.movePrevious()
    trackTour('prev_step')
  }

  async function handleMoveNext() {
    await handleConfigCallback(+1)
    saveCurrentStep()
    driver.moveNext()
    trackTour('next_step')
  }

  function saveCurrentStep() {
    if (!id) return

    tourState.recent = id
    tourState.completed.add(id)
  }

  if (!state.previousStep) trackTour('start')

  type TTourAction = 'start' | 'next_step' | 'prev_step' | 'set_step' | 'close'
  function trackTour(action: TTourAction) {
    trackEvent('interactive_tour', {
      action,
      type,
      current_step_id: id,
      current_step: state.activeIndex + 1,
      total_steps: steps.length,
    })
  }
</script>

<header class="flex justify-between gap-8">
  {#if popover.title}
    <h3 class="mb-3 text-lg font-medium">{popover.title}</h3>
  {/if}

  <Button iconSize="12" size="sm" icon="close" onclick={handleClose.bind(null, false)}></Button>
</header>

{#if content || popover.description}
  <div class="mb-6">
    {#if content}
      {@render content()}
    {:else}
      {@html popover.description}
    {/if}
  </div>
{/if}

<footer class="flex items-center justify-between">
  {#if steps.length > 1}
    <div class="flex gap-2">
      {#each steps as _, i}
        <Button
          aria-label="Go to step {i + 1}"
          variant="plain"
          onclick={handleMoveTo.bind(null, i)}
          class={cn(
            'h-1.5 w-1.5 rounded-full bg-green-light-3 p-0',
            state.activeIndex === i && 'bg-green',
          )}
        ></Button>
      {/each}
    </div>
  {/if}

  <div class="flex gap-2">
    {#if !driver.isFirstStep()}
      <Button variant="border" class="px-4" onclick={handleMovePrev}>Previous</Button>
    {/if}

    {#if driver.isLastStep()}
      <Button variant="fill" onclick={handleClose.bind(null, true)}>
        {config.completeLabel || 'Done'}
      </Button>
    {:else}
      <Button variant="fill" onclick={handleMoveNext}>Next</Button>
    {/if}
  </div>
</footer>
