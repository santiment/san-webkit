<script lang="ts">
  import type { Snippet } from 'svelte'

  import { useCustomerCtx } from '../../../ctx/customer/index.svelte.js'

  import FinalScreen from './screens/FinalScreen.svelte'
  import IntroScreen from './screens/IntroScreen.svelte'
  import QuestionScreen from './screens/QuestionScreen.svelte'
  import { useQuestionnaireCtx } from './ctx.svelte.js'

  type TProps = {
    children: Snippet
  }

  const { children }: TProps = $props()

  const { currentUser } = useCustomerCtx()
  const { questionnaire } = useQuestionnaireCtx.get()
</script>

{#if currentUser.$$ && currentUser.$$?.privacyPolicyAccepted && questionnaire.$$.isVisible}
  <div class="flex flex-1 p-8 center">
    {#key questionnaire.$$.screen + questionnaire.$$.stepIndex}
      {#if questionnaire.$$.screen === 'intro'}
        <IntroScreen />
      {:else if questionnaire.$$.screen === 'question'}
        <QuestionScreen />
      {:else}
        <FinalScreen />
      {/if}
    {/key}
  </div>
{:else}
  {@render children()}
{/if}
