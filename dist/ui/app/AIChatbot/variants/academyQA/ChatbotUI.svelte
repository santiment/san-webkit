<script lang="ts">
  import type { Action } from 'svelte/action'
  import type { TAiChatbotMessage } from '../../types.js'

  import { onMount, tick } from 'svelte'
  import { fade } from 'svelte/transition'

  import { ss } from '../../../../../utils/index.js'
  import { cn } from '../../../../utils/index.js'
  import Dialog, { type TDialogProps } from '../../../../core/Dialog/index.js'
  import Button from '../../../../core/Button/index.js'
  import { useDeviceCtx } from '../../../../../ctx/device/index.svelte.js'
  import Tooltip from '../../../../core/Tooltip/Tooltip.svelte'

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

  type TTurn = {
    id: string
    userMessage: TAiChatbotMessage
    assistantMessage?: TAiChatbotMessage
  }

  const { aiChatbot } = useAIChatbotCtx()
  const { device } = useDeviceCtx()

  const { class: className = '', Controller }: TProps & TDialogProps = $props()

  const turnRefs = new Map<string, HTMLElement>()

  const chatContainerRef = ss<null | HTMLElement>(null)
  const chatMessagesRef = ss<null | HTMLElement>(null)
  const temporaryMessageRef = ss<null | HTMLElement>(null)

  const bottomSpacerPx = ss(0)
  const wasLoading = ss(false)

  let showScrollToBottom = $state(false)

  const isPhone = $derived(device.$.isPhone)
  const isMobile = $derived(device.$.isMobile)
  const messages = $derived(aiChatbot.$$.session?.chatMessages ?? [])
  const conversationTurns = $derived.by<TTurn[]>(() => {
    const turns: TTurn[] = []

    for (let i = 0; i < messages.length; i++) {
      if (messages[i].role === 'USER') {
        turns.push({
          id: messages[i].id,
          userMessage: messages[i],
          assistantMessage: messages[i + 1]?.role === 'ASSISTANT' ? messages[i + 1] : undefined,
        })
      }
    }

    return turns
  })

  $effect(() => {
    conversationTurns.length
    const nowLoading = aiChatbot.loading$

    recalcBottomSpacer()

    async function handlePostLoadTransition() {
      await tick()
      await waitTempGone()

      recalcBottomSpacer()
      scrollToLastUserTurn('auto')
    }

    if (wasLoading.$ && !nowLoading) {
      handlePostLoadTransition()
    } else {
      scrollToLastUserTurn('smooth')
    }

    wasLoading.$ = nowLoading
  })

  function nextFrame() {
    return new Promise<void>((r) => requestAnimationFrame(() => r()))
  }

  async function waitTempGone(maxFrames = 4) {
    let frames = 0

    while (temporaryMessageRef.$ && frames < maxFrames) {
      await nextFrame()
      frames++
    }
  }

  function scrollToLastUserMessage(behavior: 'smooth' | 'auto') {
    tick().then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!chatMessagesRef.$) return

          chatMessagesRef.$.scroll({
            top: chatMessagesRef.$.scrollHeight,
            behavior,
          })
        })
      })
    })
  }

  function scrollContainerToBottom(behavior: ScrollBehavior = 'auto') {
    const container = chatMessagesRef.$
    if (!container) return

    container.scrollTo({
      top: container.scrollHeight,
      behavior: behavior,
    })
  }

  function handleScrollToBottom() {
    setTimeout(() => scrollContainerToBottom('auto'), 100)
  }

  function getLastUserTurnEl() {
    if (aiChatbot.loading$ && temporaryMessageRef.$) {
      return temporaryMessageRef.$
    }

    const last = conversationTurns.at(-1)
    return last ? turnRefs.get(last.id) : null
  }

  async function scrollToLastUserTurn(behavior: ScrollBehavior = 'auto') {
    await tick()

    requestAnimationFrame(() => {
      const el = getLastUserTurnEl()

      el?.scrollIntoView({ block: 'start', behavior })
    })
  }

  function recalcBottomSpacer() {
    const scrollbox = chatMessagesRef.$

    if (!scrollbox || aiChatbot.loading$) {
      return (bottomSpacerPx.$ = 0)
    }

    const lastEl = getLastUserTurnEl()

    if (!lastEl) {
      return (bottomSpacerPx.$ = 0)
    }

    bottomSpacerPx.$ = Math.max(0, scrollbox.clientHeight - lastEl.offsetHeight)
  }

  const registerTurn: Action<HTMLElement, string> = (node, id) => {
    if (id) turnRefs.set(id, node)

    $effect(() => {
      return () => {
        if (id) turnRefs.delete(id)
      }
    })
  }

  onMount(() => {
    setTimeout(() => scrollToLastUserMessage('auto'), 0)

    requestAnimationFrame(() => recalcBottomSpacer())

    if (isPhone) {
      window.addEventListener('resize', handleScrollToBottom)

      return () => {
        window.removeEventListener('resize', handleScrollToBottom)
      }
    }
  })

  function handleScroll() {
    const container = chatMessagesRef.$
    if (!container) return

    const scrollThreshold = 50

    const isAtBottom =
      container.scrollHeight - container.scrollTop - container.clientHeight < scrollThreshold

    showScrollToBottom = !isAtBottom
  }
</script>

<Dialog
  class={cn(
    'flex h-full w-full max-w-[1024px]',
    'flex-col rounded-lg border border-porcelain bg-white px-8 pb-4 pt-[14px] text-base shadow',
    'sm:!px-5',
    className,
  )}
>
  <header class="mb-3 flex items-center justify-end gap-3">
    {#if aiChatbot.$$.session}
      <Button
        icon="reset"
        iconSize={isPhone ? 16 : 12}
        class="hover:fill-rhino"
        disabled={aiChatbot.loading$}
        onclick={() => aiChatbot.resetSession()}>Reset</Button
      >
    {/if}

    <Button
      icon="close"
      class="size-8 fill-waterloo hover:fill-rhino"
      iconSize={isPhone ? 16 : 12}
      onclick={() => Controller.close()}
    ></Button>
  </header>

  <div bind:this={chatContainerRef.$} class="flex h-full flex-col justify-between overflow-hidden">
    <div class="relative flex h-full flex-1 flex-col overflow-y-auto">
      {#if !aiChatbot.$$.session && !aiChatbot.loading$}
        <WelcomeScreen />
      {:else}
        <div
          class="relative flex-1 overflow-y-auto"
          bind:this={chatMessagesRef.$}
          onscroll={handleScroll}
        >
          {#each conversationTurns as turn (turn.id)}
            {@const assistant = turn.assistantMessage}
            {@const user = turn.userMessage}

            <div class="mb-6 flex flex-col gap-y-6" use:registerTurn={turn.id}>
              <ChatMessage role="USER" content={user.content} insertedAt={user.insertedAt} />

              {#if assistant}
                <ChatMessage
                  role="ASSISTANT"
                  content={assistant.content}
                  insertedAt={assistant.insertedAt}
                >
                  {#snippet sources()}
                    {#if assistant?.sources?.length}
                      <div class="flex flex-wrap gap-x-3.5 gap-y-4">
                        {#each assistant.sources as source}
                          <ChatSource {...source}></ChatSource>
                        {/each}
                      </div>
                    {/if}
                  {/snippet}

                  {#snippet feedback()}
                    <ChatFeedback
                      class="mt-5"
                      feedbackType={assistant.feedbackType}
                      onFeedbackSelect={(type) => aiChatbot.sendFeedback(assistant.id, type)}
                    ></ChatFeedback>
                  {/snippet}

                  {#snippet suggestions()}
                    {#if assistant.suggestions?.length}
                      <ChatSuggestions
                        suggestions={assistant.suggestions}
                        onItemClick={(suggestion) => aiChatbot.sendMessage(suggestion)}
                      ></ChatSuggestions>
                    {/if}
                  {/snippet}
                </ChatMessage>
              {/if}
            </div>
          {/each}

          {#if !aiChatbot.loading$}
            <div style:height={`${bottomSpacerPx.$}px`} aria-hidden="true"></div>
          {/if}

          {#if aiChatbot.loading$}
            <div class="flex min-h-full flex-col gap-y-6" bind:this={temporaryMessageRef.$}>
              <ChatMessage
                role="USER"
                insertedAt={new Date().toISOString()}
                content={aiChatbot.$$.temporaryMessage}
              />

              <div class="flex-1" aria-hidden="true"></div>

              <div class="sticky bottom-0 z-10 bg-gradient-to-t from-white/95 to-transparent pt-3">
                <div class="flex items-end justify-center transition-opacity duration-75">
                  <ChatLoader />
                </div>
              </div>
            </div>
          {/if}
        </div>
      {/if}

      {#if showScrollToBottom && !isMobile && !aiChatbot.loading$}
        <div
          class="absolute bottom-[10px] left-1/2 -translate-x-1/2"
          transition:fade={{ duration: 300 }}
        >
          <Tooltip position="top" class="z-[99999] rounded" noStyles>
            {#snippet children({ ref })}
              <Button
                {ref}
                icon="back-to-top"
                class="rotate-180 rounded-full border border-porcelain bg-white"
                onclick={() => scrollContainerToBottom('smooth')}
              ></Button>
            {/snippet}

            {#snippet content()}
              <p class="rounded bg-fiord px-3 py-[5px] text-xs text-white">Bad answer</p>
            {/snippet}
          </Tooltip>
        </div>
      {/if}
    </div>

    <ChatInput
      placeholder={aiChatbot.loading$ ? 'The wisdom is coming… patience is powerful' : 'Ask me...'}
      bind:loading={aiChatbot.loading$}
      onSubmit={(query) => aiChatbot.sendMessage(query)}
    />
  </div>

  <p class="mt-2 text-center text-sm text-casper sm:!text-sm">
    {isPhone
      ? 'Check important info for mistakes'
      : 'Turtoshi surfs only through our Academy. Check important info for mistakes.'}
  </p>
</Dialog>
