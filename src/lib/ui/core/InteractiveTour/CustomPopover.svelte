<script lang="ts">
  import type { Driver } from 'driver.js'

  import { onMount } from 'svelte'

  import { cn } from '$ui/utils/index.js'
  import { trackEvent } from '$lib/analytics/index.js'

  import Button from '../Button/Button.svelte'

  type TProps = {
    driver: Driver
  }

  const { driver }: TProps = $props()

  const steps = driver.getConfig().steps || []
  const state = driver.getState()
  const popover = state.activeStep?.popover || {}

  function trackWalkthrough(event: string, idx?: number) {
    const index = idx ?? state.activeIndex
    const step = steps[index]

    const stepId =
      typeof step?.element === 'string'
        ? step.element
        : step?.element instanceof Element
          ? step.element.id || undefined
          : undefined

    trackEvent(`walkthrough_${event}`, {
      category: 'Walkthrough',
      current_step: index + 1,
      total_steps: steps.length,
      source_url: window.location.href,
      step_id: stepId,
    })
  }

  function handleMoveTo(index: number) {
    driver.moveTo(index)

    trackWalkthrough('set_step')
  }

  function handleClose() {
    driver.destroy()

    trackWalkthrough('close')
  }

  function handleMovePrev() {
    driver.movePrevious()

    trackWalkthrough('prev_step')
  }

  function handleMoveNext() {
    driver.moveNext()

    trackWalkthrough('next_step')
  }

  onMount(() => {
    if (!state.previousStep) {
      trackWalkthrough('start')
    }
  })
</script>

<div>
  <header class="flex max-w-[400px] justify-between">
    <h3 class="mb-3 text-lg font-medium">{@html popover.title}</h3>
    <Button iconSize="12" size="sm" icon="close" onclick={handleClose}></Button>
  </header>

  <div class="mb-6">{@html popover.description}</div>

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
</div>

<style lang="postcss">
  :global(.driver-popover) {
    @apply !max-w-[400px] !px-6 !pb-8 !pt-5;
  }
</style>
