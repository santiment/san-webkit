<script lang="ts">
  import { onMount, tick } from 'svelte'

  import { ss } from '$lib/utils/index.js'
  import { cn } from '$ui/utils/index.js'
  import Dialog, { type TDialogProps } from '$ui/core/Dialog/index.js'
  import Button from '$ui/core/Button/index.js'
  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'

  import { useAIChatbotCtx } from '../../ctx.svelte.js'
  import WelcomeScreen from './WelcomeScreen.svelte'
  import ChatInput from './ChatInput.svelte'
  import ChatMessage from './ChatMessage.svelte'
  import ChatLoader from './ChatLoader.svelte'
  import ChatFeedback from './ChatFeedback.svelte'
  import ChatSource from './ChatSource.svelte'
  import ChatSuggestions from './ChatSuggestions.svelte'

  type TProps = {
    class?: string
  }

  const { aiChatbot } = useAIChatbotCtx()

  const { class: className = '', Controller }: TProps & TDialogProps = $props()

  const { device } = useDeviceCtx()
  const isPhone = $derived(device.$.isPhone)

  const chatContainerRef = ss<any>(null)
  const temporaryMessageRef = ss<any>(null)
  let lastMessageRef = ss<any>(null)
  let lastUserMessageRef = ss<any>(null)

  const loadingDelta = $derived.by(() => {
    if (chatContainerRef.$ && temporaryMessageRef.$) {
      let extraPadding = aiChatbot?.$$?.session?.chatMessages.length ? 20 : 0
      return `${chatContainerRef.$.offsetHeight - temporaryMessageRef.$.offsetHeight - temporaryMessageRef.$.offsetHeight - 32 + extraPadding}px`
    }

    return undefined
  })

  const lastMessageDelta = $derived.by(() => {
    if (lastMessageRef.$ && lastMessageRef.$.offsetHeight < chatContainerRef.$.offsetHeight) {
      const LAST_MESSAGE_PADDING = 32
      return `${chatContainerRef.$.offsetHeight - (lastUserMessageRef.$.offsetHeight + lastMessageRef.$.offsetHeight) - LAST_MESSAGE_PADDING - lastUserMessageRef.$.offsetHeight - 20}px`
    }

    return undefined
  })

  let chatMessagesRef = ss<null | HTMLElement>(null)

  $effect(() => {
    const shouldScroll = aiChatbot.loading$ || aiChatbot.$$.session?.chatMessages.length

    if (aiChatbot.loading$) {
      lastMessageRef.$ = null
      lastUserMessageRef.$ = null
    }

    if (shouldScroll) {
      scrollToLastUserMessage('smooth')
    }
  })

  function scrollToLastUserMessage(behavior: 'smooth' | 'auto') {
    tick().then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!chatMessagesRef.$) return

          if (aiChatbot.loading$) {
            chatMessagesRef.$.scroll({
              top: chatMessagesRef.$.scrollHeight,
              behavior,
            })
          }

          if (!aiChatbot.$$.session) return

          const messages = aiChatbot.$$.session.chatMessages

          const lastMsg = messages[messages.length - 1]

          if (lastMsg.role === 'ASSISTANT' && lastUserMessageRef.$) {
            lastUserMessageRef.$.scrollIntoView({ behavior, block: 'start' })
          } else if (lastMsg.role === 'USER' && lastMessageRef.$) {
            lastMessageRef.$.scrollIntoView({ behavior, block: 'end' })
          } else if (chatMessagesRef.$) {
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
    setTimeout(() => scrollToLastUserMessage('auto'), 0)
  })
</script>

<Dialog
  class={cn(
    'flex h-full w-full max-w-[1024px]',
    'flex-col rounded-lg border border-porcelain bg-white px-8 pb-4 pt-[14px] text-base shadow',
    'sm:px-5',
    className,
  )}
>
  <header class="mb-3 flex items-center justify-end gap-3">
    {#if aiChatbot.$$.session}
      <Button icon="refresh" onclick={() => aiChatbot.resetSession()}>Reset</Button>
    {/if}

    <Button
      icon="close"
      class="size-8 fill-waterloo"
      iconSize={12}
      onclick={() => Controller.close()}
    ></Button>
  </header>

  <div bind:this={chatContainerRef.$} class="flex h-full flex-col justify-between overflow-hidden">
    <div class="flex h-full flex-1 flex-col overflow-y-auto" bind:this={chatMessagesRef.$}>
      <div>
        {#if !aiChatbot.$$.session && !aiChatbot.loading$}
          <WelcomeScreen />
        {:else}
          <div
            class="flex-1 overflow-y-auto pr-1 [&>div]:my-3 first:[&>div]:mt-0"
            style:margin-bottom={lastMessageDelta}
          >
            {#if aiChatbot.$$.session}
              {#each aiChatbot.$$.session.chatMessages as msg, index (msg.id)}
                <ChatMessage
                  ref={index === aiChatbot.$$.session.chatMessages.length - 2
                    ? lastUserMessageRef
                    : index === aiChatbot.$$.session.chatMessages.length - 1
                      ? lastMessageRef
                      : { $: null }}
                  role={msg.role}
                  content={msg.content}
                  insertedAt={msg.insertedAt}
                >
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
          </div>
        {/if}
      </div>

      {#if aiChatbot.loading$}
        <div class="h-full flex-1">
          <ChatMessage
            ref={temporaryMessageRef}
            role="USER"
            insertedAt={new Date().toISOString()}
            content={aiChatbot.$$.temporaryMessage}
          ></ChatMessage>

          <div class="flex flex-1 items-end justify-center" style:margin-top={loadingDelta}>
            <ChatLoader />
          </div>
        </div>
      {/if}
    </div>

    <ChatInput
      placeholder="Ask me..."
      bind:loading={aiChatbot.loading$}
      onSubmit={(query) => aiChatbot.sendMessage(query)}
    />
  </div>

  <p class="mt-2 text-center text-sm text-casper sm:text-sm">
    {isPhone
      ? 'Check important info for mistakes'
      : 'Turtoshi surfs only through our Academy. Check important info for mistakes.'}
  </p>
</Dialog>
