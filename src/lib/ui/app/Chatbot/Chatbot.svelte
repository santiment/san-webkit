<script lang="ts">
  import { marked } from 'marked'

  import Input from '$ui/core/Input/Input.svelte'
  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'
  import { useChatContext } from '$lib/ctx/chat/index.svelte.js'
  import Textarea from '$ui/core/Input/Textarea.svelte'

  import { clickOutside } from './utils.js'
  import ChatbotSpinner from './ChatbotSpinner.svelte'

  const chat = useChatContext()

  let focused = $state(false)
  let chatOpened = $state(false)
  let inputValue = $state('')
  let tempValueStore = $state('')

  async function submit() {
    const text = inputValue.trim()

    if (!text) return

    chatOpened = true
    tempValueStore = inputValue
    inputValue = ''

    await chat.sendMessage(text)
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      submit()
    }
  }
</script>

<div use:clickOutside={() => (chatOpened = false)}>
  <div class="fixed bottom-6 right-6 flex gap-2 rounded-full bg-green-light-2 px-2 py-1">
    <div class="relative w-full">
      <Input
        placeholder="Ask AI for insights"
        value={inputValue}
        type="text"
        class="pr-13 h-10 w-56 rounded-full shadow"
        inputClass={cn(
          'text-base placeholder-casper pr-4 transition-all',
          focused ? 'pl-4' : 'pl-8',
        )}
        onfocus={() => (focused = true)}
        onblur={() => (focused = false)}
        oninput={(e) => (inputValue = e.currentTarget.value)}
        onkeydown={onKeyDown}
      ></Input>

      <div
        class={cn(
          'pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transition-all',
          focused ? 'opacity-0' : 'opacity-100',
        )}
      >
        🤖
      </div>

      <Button
        icon="back-to-top"
        class="absolute right-1.5 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white hover:bg-green hover:fill-white"
        onclick={submit}
        disabled={chat.loading.$}
      ></Button>
    </div>

    <Button
      icon="social-trend"
      class="h-10 w-10 shrink-0 rounded-full bg-white shadow hover:fill-green"
      onclick={() => (chatOpened = true)}
    ></Button>
  </div>

  {#if chatOpened}
    <div
      class="fixed bottom-6 right-6 flex h-[600px] w-[600px] flex-col rounded-lg border border-porcelain bg-white px-6 pb-6 pt-[14px] text-base shadow"
    >
      <div class="flex justify-end">
        <Button icon="close" iconSize={12} onclick={() => (chatOpened = false)}></Button>
      </div>

      <div class="flex-1 space-y-3 overflow-y-auto pr-1">
        {#if chat.session.$}
          {#each chat.session.$.chatMessages as msg}
            <div
              class={cn(
                msg.role === 'USER'
                  ? '!mb-8 ml-auto w-fit self-end rounded-lg bg-porcelain px-2.5 py-2'
                  : 'space-y-3 [&_a]:link-pointer',
              )}
            >
              {@html marked(msg.content)}
            </div>
          {/each}
        {/if}
        {#if chat.loading.$}
          <div class="mb-8 ml-auto w-fit self-end rounded-lg bg-porcelain px-2.5 py-2">
            {tempValueStore}
          </div>
          <div class="ml-5 space-y-3">
            <ChatbotSpinner />
          </div>
        {/if}
      </div>

      <div class="relative mt-3 flex items-center">
        <Textarea
          class="min-h-16 flex-1 resize-none rounded-lg border border-porcelain bg-transparent px-3 py-2.5 placeholder-casper outline-none"
          placeholder={`Ask Santiment AI...\nspace for 2 lines for text`}
          rows={2}
          value={inputValue}
          oninput={(e) => (inputValue = e.currentTarget.value)}
          onkeydown={onKeyDown}
        ></Textarea>
        <Button
          icon="back-to-top"
          class="absolute bottom-1.5 right-1.5 h-8 w-8 rounded-full bg-casper fill-white hover:bg-green"
          onclick={submit}
          onkeydown={onKeyDown}
          disabled={chat.loading.$}
        ></Button>
      </div>
    </div>
  {/if}
</div>
