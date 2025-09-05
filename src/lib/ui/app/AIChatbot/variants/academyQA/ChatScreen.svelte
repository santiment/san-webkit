<script lang="ts">
  import { onMount, tick } from 'svelte'

  import { ss } from '$lib/utils/index.js'

  import { useAIChatbotCtx } from '../../ctx.svelte.js'
  import ChatMessage from './ChatMessage.svelte'
  import ChatLoader from './ChatLoader.svelte'
  import ChatFeedback from './ChatFeedback.svelte'
  import ChatSource from './ChatSource.svelte'
  import ChatSuggestions from './ChatSuggestions.svelte'

  const { aiChatbot } = useAIChatbotCtx()

  let chatMessagesRef = ss<null | HTMLElement>(null)

  $effect(() => {
    const shouldScroll = aiChatbot.loading$ || aiChatbot.$$.session?.chatMessages.length

    if (shouldScroll) {
      scrollToBottom('smooth')
    }
  })

  function scrollToBottom(behavior: 'smooth' | 'auto') {
    tick().then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (chatMessagesRef.$ && chatMessagesRef.$.offsetHeight > 0) {
            chatMessagesRef.$.scroll({
              top: chatMessagesRef.$.scrollHeight,
              behavior,
            })
          }
        })
      })
    })
  }

  onMount(() => {
    setTimeout(() => scrollToBottom('auto'), 0)
  })
</script>

<div
  class="flex-1 overflow-y-auto pr-1 [&>div]:my-3 first:[&>div]:mt-0"
  bind:this={chatMessagesRef.$}
>
  {#if aiChatbot.$$.session}
    {#each aiChatbot.$$.session.chatMessages as msg (msg.id)}
      <ChatMessage role={msg.role} content={msg.content} insertedAt={msg.insertedAt}>
        {#snippet sources()}
          {#if msg.sources?.length}
            <div class="mb-4 flex flex-wrap gap-x-3.5 gap-y-4">
              {#each msg.sources as source}
                <ChatSource {...source}></ChatSource>
              {/each}
            </div>
          {/if}
        {/snippet}

        {#snippet feedback()}
          {#if msg.role === 'ASSISTANT'}
            <ChatFeedback
              class="mt-5"
              feedbackType={msg.feedbackType}
              onFeedbackSelect={(type) => aiChatbot.sendFeedback(msg.id, type)}
            ></ChatFeedback>
          {/if}
        {/snippet}

        {#snippet suggestions()}
          {#if msg.suggestions?.length}
            <ChatSuggestions
              suggestions={msg.suggestions}
              onItemClick={(suggestion) => aiChatbot.sendMessage(suggestion)}
            ></ChatSuggestions>
          {/if}
        {/snippet}
      </ChatMessage>
    {/each}
  {/if}

  {#if aiChatbot.loading$}
    <ChatMessage
      role="USER"
      insertedAt={new Date().toISOString()}
      content={aiChatbot.$$.temporaryMessage}
    ></ChatMessage>

    <div class="flex flex-1 items-end justify-center">
      <ChatLoader />
    </div>
  {/if}
</div>
