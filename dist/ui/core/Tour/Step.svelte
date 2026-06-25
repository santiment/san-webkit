<script lang="ts">
  import type { Driver } from 'driver.js'

  import { cn } from '../../utils/index.js'
  import { trackEvent } from '../../../analytics/index.js'

  import Button from '../Button/Button.svelte'

  const { driver }: { driver: Driver } = $props()

  const steps = driver.getConfig().steps || []
  const state = driver.getState()
  const popover = state.activeStep?.popover || {}

  type TTourAction = 'start' | 'next_step' | 'prev_step' | 'set_step' | 'close'

  function trackTour(action: TTourAction) {
    const step = steps[state.activeIndex]

    trackEvent('walkthrough', {
      action,
      type: 'tour',
      current_step: state.activeIndex + 1,
      total_steps: steps.length,
      source_url: window.location.href,
      step_id: typeof step?.element === 'string' ? step.element : undefined,
    })
  }

  function handleMoveTo(index: number) {
    driver.moveTo(index)
    trackTour('set_step')
  }

  function handleClose() {
    driver.destroy()
    trackTour('close')
  }

  function handleMovePrev() {
    driver.movePrevious()
    trackTour('prev_step')
  }

  function handleMoveNext() {
    driver.moveNext()
    trackTour('next_step')
  }

  if (!state.previousStep) trackTour('start')
</script>

<header class="flex">
  {#if popover.title}
    <h3 class="mb-3 text-lg font-medium">{@html popover.title}</h3>
  {/if}

  <Button iconSize="12" size="sm" icon="close" class="ml-auto" onclick={handleClose}></Button>
</header>

{#if popover.description}
  <div class="mb-6">{@html popover.description}</div>
{/if}

<footer class="flex items-center justify-between">
  <div class="flex gap-2">
    {#if steps.length > 1}
      {#each steps as _, i}
        <Button
          aria-label="Go to step {i + 1}"
          variant="plain"
          onclick={() => handleMoveTo(i)}
          class={cn(
            'h-1.5 w-1.5 rounded-full bg-green-light-3 p-0',
            state.activeIndex === i && 'bg-green',
          )}
        ></Button>
      {/each}
    {/if}
  </div>

  <div class="flex gap-2">
    {#if !driver.isFirstStep()}
      <Button variant="border" class="px-4" onclick={handleMovePrev}>Previous</Button>
    {/if}

    {#if driver.isLastStep()}
      <Button variant="fill" onclick={handleClose}>Close</Button>
    {:else}
      <Button variant="fill" onclick={handleMoveNext}>Next</Button>
    {/if}
  </div>
</footer>

<style>
  :global(.driver-popover) {
    max-width: 400px !important;
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
    padding-bottom: 2rem !important;
    padding-top: 1.25rem !important
}
</style>
