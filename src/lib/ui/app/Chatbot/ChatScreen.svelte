<script lang="ts">
  import { marked } from 'marked'
  import { ss } from 'svelte-runes'

  import { cn } from '$ui/utils/index.js'
  import { useChatContext } from '$lib/ctx/chat/index.svelte.js'

  import { formatChatTime } from './utils.js'

  type TProps = {
    temporaryPrompt: string
  }

  const chat = useChatContext()

  const { temporaryPrompt }: TProps = $props()

  let chatMessagesRef = ss<null | HTMLElement>(null)

  $effect(() => {
    const shouldScroll = chat.loading.$ && chat.session.$?.chatMessages.length
    if (shouldScroll) scrollToBottom()
  })

  function scrollToBottom() {
    if (!chatMessagesRef.$) return
    chatMessagesRef.$.scrollTop = chatMessagesRef.$.scrollHeight
  }
</script>

<div class="mb-4 text-center text-xs text-waterloo">
  Today {formatChatTime(chat.session.$?.insertedAt || new Date().toISOString())}
</div>

<div
  class="flex-1 overflow-y-auto pr-1 [&>div]:my-8 first:[&>div]:mt-0"
  bind:this={chatMessagesRef.$}
>
  {#if chat.session.$}
    {#each chat.session.$.chatMessages as msg}
      <div
        class={cn(
          msg.role === 'USER'
            ? 'ml-auto w-fit self-end rounded-lg bg-porcelain px-2.5 py-2'
            : '[&_a]:link-pointer',
        )}
      >
        {@html marked(msg.content)}
      </div>
    {/each}
  {/if}

  {#if chat.loading.$}
    <div class="ml-auto w-fit self-end rounded-lg bg-porcelain px-2.5 py-2">
      {temporaryPrompt}
    </div>

    <div class="ml-5">
      {@render snipper()}
    </div>
  {/if}
</div>

{#snippet snipper()}
  <div
    class={cn(
      'h-[2.4px] w-[2.4px] rounded-full',
      'shadow-[9.6px_0_0_2.4px_#14c393,_-9.6px_0_0_2.4px_#14c393]',
      'animate-[spin_1.2s_linear_infinite]',
    )}
  ></div>
{/snippet}
