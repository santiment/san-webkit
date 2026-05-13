<script lang="ts">
  import { fade } from 'svelte/transition'

  import Button from '$ui/core/Button/Button.svelte'
  import Checkbox from '$ui/core/Checkbox/index.js'
  import { RadioGroup, RadioItem } from '$ui/core/Radio/index.js'

  import { useQuestionnaireCtx } from '../ctx.svelte.js'

  const { questionnaire } = useQuestionnaireCtx.get()

  const step = $derived(questionnaire.currentStep$)
  const answer = $derived(questionnaire.currentAnswer$)
  const radioAnswer = $derived((answer as string | undefined) ?? '')
  const multiAnswer = $derived((answer as string[] | undefined) ?? [])
</script>

<div in:fade={{ duration: 200 }} class="w-full max-w-[480px]">
  <div class="mb-4 rounded-xl bg-athens px-16 py-12 md:px-8">
    <h1 class="text-lg-3 font-medium text-rhino">{step.title}</h1>

    {#if step.description}
      <p class="mt-2 text-base text-fiord">{step.description}</p>
    {/if}

    {#if step.type === 'multi'}
      {@render multiChoice()}
    {:else}
      {@render singleChoice()}
    {/if}
  </div>

  <footer class="flex items-center justify-between gap-y-5 xs:flex-col-reverse">
    <div class="flex items-center gap-4 text-sm text-waterloo">
      <span class="text-rhino">
        <span class="font-medium">{questionnaire.$$.stepIndex + 1}</span>
        /<span class="text-waterloo">{questionnaire.totalSteps}</span>
      </span>

      <span aria-hidden="true">&bull;</span>

      <Button variant="link" class="text-rhino" onclick={questionnaire.cancel}>Cancel survey</Button
      >
    </div>

    <div class="flex items-center gap-2">
      {#if questionnaire.$$.stepIndex !== 0}
        <Button
          variant="border"
          iconSize={11}
          icon="right-arrow"
          class="[&>svg]:rotate-180"
          onclick={() => (questionnaire.$$.stepIndex -= 1)}
        >
          Previous
        </Button>
      {/if}

      <Button
        variant="border"
        icon="right-arrow"
        iconSize={11}
        iconOnRight
        disabled={!questionnaire.isAnswered$ || questionnaire.$$.isSubmitting}
        onclick={questionnaire.goNext}
      >
        Next
      </Button>
    </div>
  </footer>
</div>

{#snippet singleChoice()}
  <RadioGroup value={radioAnswer} onValueChange={questionnaire.setRadioAnswer} class="mt-6">
    {#each step.options as option (option.value)}
      <RadioItem class="text-left" value={option.value}>{option.label}</RadioItem>
    {/each}
  </RadioGroup>
{/snippet}

{#snippet multiChoice()}
  <ul class="mt-6 flex flex-col gap-3">
    {#each step.options as option (option.value)}
      <li>
        <label class="group/label flex cursor-pointer items-center gap-2">
          <Checkbox
            isActive={multiAnswer.includes(option.value)}
            onCheckedChange={() => questionnaire.toggleMultiOption(option.value)}
          />
          <span class="text-base text-rhino">{option.label}</span>
        </label>
      </li>
    {/each}
  </ul>

  <p class="mt-8 text-sm text-fiord">* Select multiple answers</p>
{/snippet}
