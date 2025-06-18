<script lang="ts">
  import { ss } from 'svelte-runes'
  import { onMount } from 'svelte'

  import { cn } from '$ui/utils/index.js'

  import { useChatContext } from './ctx.svelte.js'
  import { formatChatTime } from './utils.js'

  const chat = useChatContext()

  let marked = $state<null | ((s: string) => any)>(null)

  let chatMessagesRef = ss<null | HTMLElement>(null)

  $effect(() => {
    const shouldScroll = chat.loading.$ && chat.session.$?.chatMessages.length
    if (shouldScroll) scrollToBottom()
  })

  function scrollToBottom() {
    if (!chatMessagesRef.$) return
    chatMessagesRef.$.scrollTop = chatMessagesRef.$.scrollHeight
  }

  onMount(async () => {
    const mod = await import('marked')
    marked = (s: string) => mod.marked(s)
  })
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
      {#if msg.role === 'USER'}
        {@render userInput(msg.content)}
      {:else}
        <div
          class={cn(
            'w-fit break-words',
            '[&_ul]:mb-2 [&_ul]:list-disc [&_ul]:pl-6',
            '[&_ol]:mb-2 [&_ol]:list-decimal [&_ol]:pl-6',
            '[&_li]:mb-1',
            '[&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:bg-porcelain [&_pre]:p-3 [&_pre]:text-rhino',
            '[&_code]:whitespace-normal [&_code]:break-words',
            '[&_a]:link-pointer',
          )}
        >
          {#if marked}
            {@html marked(msg.content)}
          {/if}
        </div>
      {/if}
    {/each}
  {/if}

  {#if chat.loading.$}
    {@render userInput(chat.temporaryMessage.$)}

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
