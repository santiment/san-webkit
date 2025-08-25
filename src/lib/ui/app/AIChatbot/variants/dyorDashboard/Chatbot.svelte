<script lang="ts">
  import { ss } from 'svelte-runes'
  import { fly, fade } from 'svelte/transition'

  import Input from '$ui/core/Input/Input.svelte'
  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'
  import Textarea from '$ui/core/Input/Textarea.svelte'

  import { useAIChatbotCtx } from '../../ctx.svelte.js'
  import ChatSuggestions from './ChatSuggestions.svelte'
  import ChatScreen from './ChatScreen.svelte'
  import SelectionTooltip from './SelectionTooltip.svelte'
  import { clickOutside } from '../../utils.js'

  const { aiChatbot } = useAIChatbotCtx()

  let focused = $state(false)

  let triggerRef = ss<null | HTMLTextAreaElement>(null)

  function onInputKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault()
      aiChatbot.sendMessage(aiChatbot.$$.message)
    }
  }

  function onTextareaKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      aiChatbot.sendMessage(aiChatbot.$$.message)
    }
  }

  function handleChatOpen() {
    aiChatbot.$$.opened = true

    focusTriggerWithDelay(200)
  }

  function focusTriggerWithDelay(delay: number) {
    setTimeout(() => triggerRef.$?.focus(), delay)
  }
</script>

<!-- Сохраняем -->
<div use:clickOutside={() => (aiChatbot.$$.opened = false)}>
  <!-- Сохраняем, выносим в вариант. В новой версии правда чат больше на попап похож, чем на открытое маленькое окно в углу -->
  <div class="fixed bottom-6 right-6 z-40 flex gap-2 rounded-full bg-green-light-2 px-2 py-1">
    <div class="relative w-full">
      {#if aiChatbot.$$.session}
        <Button
          class="h-10 w-56 rounded-full border border-porcelain bg-white pl-8 text-base hover:border-green-hover"
          title={aiChatbot.$$.session.title}
          onclick={handleChatOpen}
        >
          <span class="block overflow-hidden text-ellipsis whitespace-nowrap">
            {aiChatbot.$$.session.title}
          </span>
        </Button>
      {:else}
        <Input
          placeholder="Ask AI for insights"
          value={aiChatbot.$$.message}
          type="text"
          class="pr-13 h-10 w-56 rounded-full shadow"
          inputClass={cn(
            'text-base placeholder-casper pr-4 transition-all',
            focused ? 'pl-4' : 'pl-8',
          )}
          onfocus={() => (focused = true)}
          onblur={() => (focused = false)}
          oninput={({ currentTarget }) => (aiChatbot.$$.message = currentTarget.value)}
          onkeydown={onInputKeyDown}
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

      {#if !aiChatbot.$$.session}
        <Button
          icon="back-to-top"
          class="absolute right-1.5 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white hover:bg-green hover:fill-white"
          onclick={() => aiChatbot.sendMessage(aiChatbot.$$.message)}
          disabled={aiChatbot.loading$}
        ></Button>
      {/if}
    </div>

    {#if !aiChatbot.$$.session}
      <Button
        icon="social-trend"
        class="h-10 w-10 shrink-0 rounded-full bg-white shadow hover:fill-green"
        onclick={handleChatOpen}
      ></Button>
    {/if}
  </div>

  {#if aiChatbot.$$.opened}
    <div
      class="fixed bottom-6 right-6 z-50 flex h-[600px] w-[600px] flex-col rounded-lg border border-porcelain bg-white px-6 pb-6 pt-[14px] text-base shadow"
      in:fly={{ y: 24, opacity: 0, duration: 220 }}
      out:fade={{ duration: 160 }}
    >
      <div class="flex h-6 items-center justify-end">
        <Button
          icon="close"
          class="size-3 hover:bg-white hover:fill-green-hover"
          iconSize={12}
          onclick={() => (aiChatbot.$$.opened = false)}
        ></Button>
      </div>

      {#if !aiChatbot.$$.session && !aiChatbot.loading$}
        <!-- Welcome screen, логично сделать новый, можно так же передавать как snippet -->
        <ChatSuggestions onSubmit={(suggestion) => aiChatbot.sendMessage(suggestion)} />
      {:else}
        <ChatScreen />
      {/if}

      <div class="relative mt-3 flex items-center">
        <!-- Тут нужен так же tailwind variantions, логика отправки совпадает -->
        <Textarea
          ref={triggerRef}
          class="min-h-16 flex-1 resize-none rounded-lg border border-porcelain bg-transparent px-3 py-2.5 placeholder-casper outline-none"
          placeholder="Ask Santiment AI..."
          rows={2}
          value={aiChatbot.$$.message}
          oninput={(e) => (aiChatbot.$$.message = e.currentTarget.value)}
          onkeydown={onTextareaKeyDown}
        ></Textarea>

        <!-- В новой версии кнопка так же абсолютно спозиционированна, но скрыта если не введен текст-->
        <Button
          icon="back-to-top"
          class="absolute bottom-1.5 right-1.5 h-8 w-8 rounded-full bg-casper fill-white hover:bg-green"
          onclick={() => aiChatbot.sendMessage(aiChatbot.$$.message)}
          disabled={aiChatbot.loading$}
        ></Button>
      </div>
    </div>
  {/if}
</div>

<!-- В вариации для ai academy chatbot должен быть скрыт, можно отправку сообщений вообще инкапсулировать, вынес наружу просто чтоб обращаться к инстансу aiChatbot -->
<SelectionTooltip onTooltipClick={(selectedText) => aiChatbot.sendMessage(selectedText)} />
