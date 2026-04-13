<script lang="ts">
  import FinalScreen from './screens/FinalScreen.svelte'
  import IntroScreen from './screens/IntroScreen.svelte'
  import QuestionScreen from './screens/QuestionScreen.svelte'
  import { useQuestionaryCtx } from './ctx.svelte.js'

  const { questionary } = useQuestionaryCtx()
</script>

<div class="flex h-full w-full flex-col items-center justify-center p-8">
  {#if questionary.$$.screen === 'intro'}
    <IntroScreen />
  {:else if questionary.$$.screen === 'question'}
    <QuestionScreen />
  {:else}
    <FinalScreen />
  {/if}
</div>
