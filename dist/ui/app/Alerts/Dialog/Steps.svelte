<script lang="ts">
  import type { TAlertStep } from '../form-steps/index.svelte.js'

  import Svg from '../../../core/Svg/Svg.svelte'
  import { cn } from '../../../utils/index.js'

  type TProps = {
    steps: readonly TAlertStep[]
    selectedIndex: number
    onStepSelect: (index: number) => void
  }

  const { steps, selectedIndex, onStepSelect }: TProps = $props()
</script>

<nav class="w-full">
  {#each steps as step, i}
    {@const {
      state,
      isValid,
      ui: { title, description, Legend },
    } = step}
    {@const active = selectedIndex === i}
    {@const valid = isValid.$}
    {@const next = !valid && (steps[i - 1] ? steps[i - 1].isValid.$ : true)}

    <button
      class={cn(
        'pointer-events-none relative flex max-w-full pb-5 text-casper',
        'before:absolute before:bottom-0 before:left-3 before:top-0 before:-z-10 before:block before:w-px before:bg-porcelain',
        'last:before:hidden',
        (next || valid) && 'pointer-events-auto text-fiord hover:text-green',
        active && 'text-green',
      )}
      onclick={() => onStepSelect(i)}
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
        {#if valid && Legend}
          <div class="mt-2 flex text-fiord">
            <Legend {state} />
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
