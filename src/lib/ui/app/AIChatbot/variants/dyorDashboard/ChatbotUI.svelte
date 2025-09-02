<script lang="ts">
  import { ss } from 'svelte-runes'
  import { onMount } from 'svelte'

  import Button from '$ui/core/Button/Button.svelte'
  import Textarea from '$ui/core/Input/Textarea.svelte'
  import Dialog, { type TDialogProps } from '$ui/core/Dialog/index.js'
  import { cn } from '$ui/utils/index.js'

  import { useAIChatbotCtx } from '../../ctx.svelte.js'
  import ChatScreen from './ChatScreen.svelte'
  import WelcomeScreen from './WelcomeScreen.svelte'

  let { Controller }: TDialogProps = $props()

  const { aiChatbot } = useAIChatbotCtx()

  let triggerRef = ss<null | HTMLTextAreaElement>(null)

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      aiChatbot.sendMessage(aiChatbot.$$.message)
    }
  }

  onMount(() => {
    if (triggerRef.$) {
      triggerRef.$.focus()
    }
  })
</script>

<Dialog
  class={cn(
    'bottom-6 left-auto right-6 top-auto flex h-[600px] w-[600px]',
    'transform-none flex-col rounded-lg border border-porcelain bg-white px-6 pb-6 pt-[14px] text-base shadow',
  )}
>
  <div class="flex h-6 items-center justify-end">
    <Button
      icon="close"
      class="size-3 hover:bg-white hover:fill-green-hover"
      iconSize={12}
      onclick={() => Controller.close()}
    ></Button>
  </div>

  {#if !aiChatbot.$$.session && !aiChatbot.loading$}
    <WelcomeScreen onSubmit={(suggestion) => aiChatbot.sendMessage(suggestion)} />
  {:else}
    <ChatScreen />
  {/if}

  <div class="relative mt-3 flex items-center">
    <Textarea
      ref={triggerRef}
      class="min-h-16 flex-1 resize-none rounded-lg border border-porcelain bg-transparent px-3 py-2.5 placeholder-casper outline-none"
      placeholder="Ask Santiment AI..."
      rows={2}
      value={aiChatbot.$$.message}
      oninput={(e) => (aiChatbot.$$.message = e.currentTarget.value)}
      onkeydown={onKeydown}
    ></Textarea>

    <Button
      icon="back-to-top"
      class="absolute bottom-1.5 right-1.5 h-8 w-8 rounded-full bg-casper fill-white hover:bg-green"
      onclick={() => aiChatbot.sendMessage(aiChatbot.$$.message)}
      disabled={aiChatbot.loading$}
    ></Button>
  </div>
</Dialog>
