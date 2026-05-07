<script lang="ts">
  import type { Snippet } from 'svelte'

  import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'

  import FinalScreen from './screens/FinalScreen.svelte'
  import IntroScreen from './screens/IntroScreen.svelte'
  import QuestionScreen from './screens/QuestionScreen.svelte'
  import { useQuestionaryCtx } from './ctx.svelte.js'

  type TProps = {
    children: Snippet
  }

  const { children }: TProps = $props()

  const { currentUser } = useCustomerCtx()
  const { questionary } = useQuestionaryCtx.get()
</script>

{#if currentUser.$$ && currentUser.$$?.privacyPolicyAccepted && questionary.$$.isVisible}
  <div class="flex flex-1 p-8 center">
    {#key questionary.$$.screen + questionary.$$.stepIndex}
      {#if questionary.$$.screen === 'intro'}
        <IntroScreen />
      {:else if questionary.$$.screen === 'question'}
        <QuestionScreen />
      {:else}
        <FinalScreen />
      {/if}
    {/key}
  </div>
{:else}
  {@render children()}
{/if}
