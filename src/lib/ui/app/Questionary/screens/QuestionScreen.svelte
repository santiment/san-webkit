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
    <h1 class="text-lg-3 font-medium text-rhino">{step.title}</h1>

    {#if step.description}
      <p class="mt-2 text-base text-fiord">{step.description}</p>
    {/if}

    {#if isMulti}
      <ul class="mt-6 flex flex-col gap-3">
        {#each step.options as option (option)}
          <li>
            <Button
              variant="plain"
              class="flex w-full items-center gap-2 text-base text-rhino"
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

      <p class="mt-8 text-sm text-fiord">* Select multiple answers</p>
    {:else}
      <RadioGroup
        value={(questionary.currentAnswer$ as string) ?? ''}
        onValueChange={questionary.selectRadio}
        class="mt-6"
      >
        {#each step.options as option (option)}
          <RadioItem value={option}>{option}</RadioItem>
        {/each}
      </RadioGroup>
    {/if}
  </div>

  <footer class="flex items-center justify-between">
    <div class="flex items-center gap-4 text-sm text-waterloo">
      <span class="text-rhino">
        <span class="font-medium">{questionary.$$.stepIndex + 1}</span>
        /<span class="text-waterloo">{questionary.totalSteps}</span>
      </span>

      <span>•</span>

      <Button variant="link" class="text-rhino" onclick={questionary.cancel}>Cancel survey</Button>
    </div>

    <div class="flex items-center gap-2">
      {#if !questionary.isFirst$}
        <Button
          variant="border"
          iconSize={11}
          icon="right-arrow"
          class="[&>svg]:rotate-180"
          onclick={questionary.goPrev}
        >
          Previous
        </Button>
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
