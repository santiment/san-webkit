<script>
  import { AskAIButton, ChatInput, useAIChatbotCtx } from '$ui/app/AIChatbot/index.js'
  import Button from '$ui/core/Button/Button.svelte'

  useAIChatbotCtx.set({
    type: 'ACADEMY_QA',
  })

  const { aiChatbot } = useAIChatbotCtx()

  const queries = [
    'Which are the metrics Santiment is known for?',
    'How can I change my subscription?',
    'Where can I find the TVL metric?',
    'How can I use MVRV to identify tops and bottoms? ',
  ]
</script>

<nav class="flex h-16 items-center justify-end px-4">
  <AskAIButton />
</nav>

<h1 class="mb-8 mt-11 text-center text-3xl text-rhino">
  Hi, I’m Turtoshi — your AI guide to Academy
</h1>

<div class="mx-auto max-w-[600px] items-center">
  <ChatInput
    class="mb-3"
    placeholder="Ask AI..."
    icon={null}
    bind:value={aiChatbot.$$.message}
    onSubmit={() => aiChatbot.openWithPrompt(aiChatbot.$$.message)}
  />

  <div class="flex flex-wrap items-center justify-center gap-3">
    {#each queries as query}
      <Button
        variant="border"
        class="border-porcelain text-xs"
        onclick={() => aiChatbot.openWithPrompt(query)}
      >
        {query}
      </Button>
    {/each}
  </div>
</div>
