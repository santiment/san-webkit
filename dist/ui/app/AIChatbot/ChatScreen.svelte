<script lang="ts">
  import { ss } from 'svelte-runes'
  import { onMount, tick } from 'svelte'

  import { cn } from '../../utils/index.js'

  import { useAIChatbotCtx } from './ctx.svelte.js'
  import { formatChatTime } from './utils.js'

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
        <div class="content w-fit break-words">
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

<style>
  :global(.content) {
    & ul {
        margin-bottom: 0.5rem;
    }
    & ul {
        list-style-type: disc;
    }
    & ul {
        padding-left: 1.5rem;
    }

    & ol {
        margin-bottom: 0.5rem;
    }

    & ol {
        list-style-type: decimal;
    }

    & ol {
        padding-left: 1.5rem;
    }

    & li {
        margin-bottom: 0.25rem;
    }

    & pre {
        overflow-x: auto;
    }

    & pre {
        border-radius: 0.375rem;
    }

    & pre {
        --tw-bg-opacity: 1;
        background-color: rgb(var(--c-porcelain) / var(--tw-bg-opacity));
    }

    & pre {
        padding: 0.75rem;
    }

    & pre {
        --tw-text-opacity: 1;
        color: rgb(var(--c-rhino) / var(--tw-text-opacity));
    }

    & code {
        white-space: normal;
    }

    & code {
        overflow-wrap: break-word;
    }

    & a {
        position: relative;
        display: inline-flex;
        color: var(--accent, var(--green));
        fill: var(--accent, var(--green));
    }

    & a::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 2px;
        left: 0;
        background: var(--accent, var(--green));
        transform: scaleX(0);
        transition: transform 0.3s;
        transform-origin: bottom left;
    }

    & a:hover::after {
        transform: scaleX(1);
    }
  }
</style>
