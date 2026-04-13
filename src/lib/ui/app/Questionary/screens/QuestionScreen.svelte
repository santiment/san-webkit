<script lang="ts">
  import Button from '$ui/core/Button/Button.svelte'
  import Checkbox from '$ui/core/Checkbox/index.js'
  import { RadioGroup, RadioItem } from '$ui/core/Radio/index.js'

  import { useQuestionaryCtx } from '../ctx.svelte.js'

  const { questionary } = useQuestionaryCtx.get()

  const step = $derived(questionary.currentStep$)
  const isMulti = $derived(step.type === 'multi')

  const multiAnswer = $derived(questionary.currentAnswer$ as string[] | null)
</script>

<div class="w-full max-w-[480px]">
  <div class="mb-4 rounded-xl bg-athens px-16 py-12">
    <h1 class="mb-8 text-xl font-semibold text-rhino">{step.title}</h1>

    {#if step.description}
      <p class="mb-6 text-sm text-waterloo">{step.description}</p>
    {/if}

    {#if isMulti}
      <ul class="flex flex-col gap-5">
        {#each step.options as option (option)}
          <li>
            <Button
              variant="plain"
              class="flex w-full items-center gap-4 text-lg text-rhino"
              onclick={() => questionary.toggleMulti(option)}
            >
              <Checkbox
                isActive={multiAnswer?.includes(option) ?? false}
                class="pointer-events-none"
              />
              {option}
            </Button>
          </li>
        {/each}
      </ul>
      <p class="mt-6 text-sm text-waterloo">* Select multiple answers</p>
    {:else}
      <RadioGroup
        value={(questionary.currentAnswer$ as string) ?? ''}
        onValueChange={questionary.selectRadio}
      >
        {#each step.options as option (option)}
          <RadioItem value={option}>{option}</RadioItem>
        {/each}
      </RadioGroup>
    {/if}
  </div>

  <footer class="flex items-center justify-between">
    <div class="flex items-center gap-3 text-sm text-waterloo">
      <span>
        <span class="font-medium text-rhino">{questionary.$$.stepIndex + 1}</span>
        /{questionary.totalSteps}
      </span>

      <span>•</span>

      <Button variant="ghost" onclick={questionary.cancel}>Cancel survey</Button>
    </div>

    <div class="flex items-center gap-2">
      {#if !questionary.isFirst$}
        <Button
          variant="border"
          iconSize={11}
          icon="right-arrow"
          class="[&>svg]:rotate-180"
          onclick={questionary.goPrev}>Previous</Button
        >
      {/if}

      <Button
        variant="border"
        icon="right-arrow"
        iconSize={11}
        iconOnRight
        disabled={!questionary.isAnswered$}
        onclick={questionary.goNext}
      >
        Next
      </Button>
    </div>
  </footer>
</div>
