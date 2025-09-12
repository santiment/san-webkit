<script lang="ts">
  import { useAIChatbotCtx } from '../../ctx.svelte.js'
  import ChatMessage from './ChatMessage.svelte'
  import ChatSuggestions from './ChatSuggestions.svelte'

  const { aiChatbot } = useAIChatbotCtx()

  const suggestionList = [
    'How to get started with Sanbase?',
    'What does MVRV mean?',
    'How to set up an alert?',
  ]

  const welcomeMessage = `
**Hey there, explorer!**
**I’m Turtoshi — your wise crypto companion.**

Ask me anything about **Santiment’s data and metrics** to track the tides of the market.  
Just type your question below — and **let’s dive into the data ocean together! 🌊**
`
</script>

<div class="h-full flex-1">
  <ChatMessage role="ASSISTANT" insertedAt={new Date().toISOString()} content={welcomeMessage}>
    {#snippet suggestions()}
      <ChatSuggestions
        title="Popular searches to start:"
        suggestions={suggestionList}
        onItemClick={(suggestion) => aiChatbot.sendMessage(suggestion)}
      ></ChatSuggestions>
    {/snippet}
  </ChatMessage>
</div>
