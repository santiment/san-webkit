<script lang="ts">
  import Input from '$ui/core/Input/Input.svelte'
  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'

  import { useAIChatbotCtx } from '../../ctx.svelte.js'
  import SelectionTooltip from './SelectionTooltip.svelte'

  const { aiChatbot } = useAIChatbotCtx()

  let focused = $state(false)

  function onInputKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault()

      aiChatbot.openWithPrompt(aiChatbot.$$.message)
    }
  }
</script>

<div class="fixed bottom-6 right-6 z-40 flex gap-2 rounded-full bg-green-light-2 px-2 py-1">
  <div class="relative w-full">
    {#if aiChatbot.$$.session}
      <Button
        class="h-10 w-56 rounded-full border border-porcelain bg-white pl-8 text-base hover:border-green-hover"
        title={aiChatbot.$$.session.title}
        onclick={() => aiChatbot.openWithPrompt()}
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
        onclick={() => aiChatbot.openWithPrompt(aiChatbot.$$.message)}
        disabled={aiChatbot.loading$}
      ></Button>
    {/if}
  </div>

  {#if !aiChatbot.$$.session}
    <Button
      icon="social-trend"
      class="h-10 w-10 shrink-0 rounded-full bg-white shadow hover:fill-green"
      onclick={() => aiChatbot.openWithPrompt()}
    ></Button>
  {/if}
</div>

<SelectionTooltip onTooltipClick={(selectedText) => aiChatbot.openWithPrompt(selectedText)} />
