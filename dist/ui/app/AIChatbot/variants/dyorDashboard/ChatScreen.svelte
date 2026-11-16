<script lang="ts">
  import { onMount, tick } from 'svelte'

  import { ss } from '../../../../../utils/index.js'
  import { cn } from '../../../../utils/index.js'

  import { useAIChatbotCtx } from '../../ctx.svelte.js'
  import { formatChatTime } from '../../utils.js'

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

<div class="mb-4 text-center text-xs text-waterloo">
  Today {formatChatTime(aiChatbot.$$.session?.insertedAt || new Date().toISOString())}
</div>

<div
  class="flex-1 overflow-y-auto pr-1 [&>div]:my-8 first:[&>div]:mt-0"
  bind:this={chatMessagesRef.$}
>
  {#if aiChatbot.$$.session}
    {#each aiChatbot.$$.session.chatMessages as msg}
      {#if msg.role === 'USER'}
        {@render userInput(msg.content)}
      {:else}
        <div class="ai-chatbot-content w-fit break-words">
          {#await import('marked') then { marked }}
            {@html marked(msg.content)}
          {/await}
        </div>
      {/if}
    {/each}
  {/if}

  {#if aiChatbot.loading$}
    {@render userInput(aiChatbot.$$.temporaryMessage)}

    <div class="ml-5">
      {@render spinner()}
    </div>
  {/if}
</div>

{#snippet userInput(message: string)}
  <div
    class="m-0 ml-auto w-fit self-end whitespace-pre-wrap break-words rounded-lg bg-porcelain px-2.5 py-2"
  >
    {message}
  </div>
{/snippet}

{#snippet spinner()}
  <div
    class={cn(
      'h-[2.4px] w-[2.4px] rounded-full',
      'shadow-[9.6px_0_0_2.4px_#14c393,_-9.6px_0_0_2.4px_#14c393]',
      'animate-[spin_1.2s_linear_infinite]',
    )}
  ></div>
{/snippet}
