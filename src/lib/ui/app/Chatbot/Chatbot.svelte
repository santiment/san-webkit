<script lang="ts">
  import { ss } from 'svelte-runes'
  import { fly, fade } from 'svelte/transition'

  import Input from '$ui/core/Input/Input.svelte'
  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'
  import { useChatContext } from '$lib/ctx/chat/index.svelte.js'
  import Textarea from '$ui/core/Input/Textarea.svelte'

  import { clickOutside } from './utils.js'
  import ChatSuggestions from './ChatSuggestions.svelte'
  import ChatScreen from './ChatScreen.svelte'

  const chat = useChatContext()

  let focused = $state(false)
  let chatOpened = $state(false)
  let prompt = $state('')
  let temporaryPrompt = $state('')

  let triggerRef = ss<null | HTMLElement>(null)

  async function submit(value: string) {
    if (!canSubmit(value)) return

    handleChatOpen()
    temporaryPrompt = value
    prompt = ''

    await chat.sendMessage(value)

    temporaryPrompt = ''
  }

  function canSubmit(text: string) {
    return text.trim() && !chat.loading.$
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault()
      submit(prompt)
    }
  }

  function handleChatOpen() {
    chatOpened = true

    focusTriggerWithDelay(200)
  }

  function focusTriggerWithDelay(delay: number) {
    setTimeout(() => triggerRef.$?.focus(), delay)
  }
</script>

<div use:clickOutside={() => (chatOpened = false)}>
  <div class="fixed bottom-6 right-6 flex gap-2 rounded-full bg-green-light-2 px-2 py-1">
    <div class="relative w-full">
      {#if chat.session.$}
        <Button
          class="h-10 w-56 rounded-full border border-porcelain bg-white pl-8 text-base hover:border-green-hover"
          title={chat.session.$.title}
          onclick={handleChatOpen}
        >
          <span class="block overflow-hidden text-ellipsis whitespace-nowrap">
            {chat.session.$.title}
          </span>
        </Button>
      {:else}
        <Input
          placeholder="Ask AI for insights"
          value={prompt}
          type="text"
          class="pr-13 h-10 w-56 rounded-full shadow"
          inputClass={cn(
            'text-base placeholder-casper pr-4 transition-all',
            focused ? 'pl-4' : 'pl-8',
          )}
          onfocus={() => (focused = true)}
          onblur={() => (focused = false)}
          oninput={({ currentTarget }) => (prompt = currentTarget.value)}
          onkeydown={onKeyDown}
        ></Input>
      {/if}

      <div
        class={cn(
          'pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transition-all',
          focused ? 'opacity-0' : 'opacity-100',
        )}
      >
        🤖
      </div>

      {#if !chat.session.$}
        <Button
          icon="back-to-top"
          class="absolute right-1.5 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white hover:bg-green hover:fill-white"
          onclick={() => submit(prompt)}
          disabled={chat.loading.$}
        ></Button>
      {/if}
    </div>

    {#if !chat.session.$}
      <Button
        icon="social-trend"
        class="h-10 w-10 shrink-0 rounded-full bg-white shadow hover:fill-green"
        onclick={handleChatOpen}
      ></Button>
    {/if}
  </div>

  {#if chatOpened}
    <div
      class="fixed bottom-6 right-6 flex h-[600px] w-[600px] flex-col rounded-lg border border-porcelain bg-white px-6 pb-6 pt-[14px] text-base shadow"
      in:fly={{ y: 24, opacity: 0, duration: 220 }}
      out:fade={{ duration: 160 }}
    >
      <div class="flex h-6 items-center justify-end">
        <Button
          icon="close"
          class="size-3 hover:bg-white hover:fill-green-hover"
          iconSize={12}
          onclick={() => (chatOpened = false)}
        ></Button>
      </div>

      {#if !chat.session.$ && !chat.loading.$}
        <ChatSuggestions onSubmit={(suggestion) => submit(suggestion)} />
      {:else}
        <ChatScreen {temporaryPrompt} />
      {/if}

      <div class="relative mt-3 flex items-center">
        <Textarea
          ref={triggerRef}
          class="min-h-16 flex-1 resize-none rounded-lg border border-porcelain bg-transparent px-3 py-2.5 placeholder-casper outline-none"
          placeholder={`Ask Santiment AI...\nspace for 2 lines for text`}
          rows={2}
          value={prompt}
          oninput={(e) => (prompt = e.currentTarget.value)}
          onkeydown={onKeyDown}
        ></Textarea>

        <Button
          icon="back-to-top"
          class="absolute bottom-1.5 right-1.5 h-8 w-8 rounded-full bg-casper fill-white hover:bg-green"
          onclick={() => submit(prompt)}
          onkeydown={onKeyDown}
          disabled={chat.loading.$}
        ></Button>
      </div>
    </div>
  {/if}
</div>
