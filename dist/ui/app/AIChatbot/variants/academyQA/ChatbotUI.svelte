<script lang="ts">
  import { cn } from '../../../../utils/index.js'
  import Dialog, { type TDialogProps } from '../../../../core/Dialog/index.js'
  import Button from '../../../../core/Button/index.js'
  import { useDeviceCtx } from '../../../../../ctx/device/index.svelte.js'

  import ChatScreen from './ChatScreen.svelte'
  import { useAIChatbotCtx } from '../../ctx.svelte.js'
  import WelcomeScreen from './WelcomeScreen.svelte'
  import ChatInput from './ChatInput.svelte'

  type TProps = {
    class?: string
  }

  const { aiChatbot } = useAIChatbotCtx()

  const { class: className = '', Controller }: TProps & TDialogProps = $props()

  const { device } = useDeviceCtx()
  const isPhone = $derived(device.$.isPhone)
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

  {#if !aiChatbot.$$.session && !aiChatbot.loading$}
    <WelcomeScreen />
  {:else}
    <ChatScreen />
  {/if}

  <ChatInput
    placeholder="Ask me..."
    bind:value={aiChatbot.$$.message}
    onSubmit={() => aiChatbot.sendMessage(aiChatbot.$$.message)}
  />

  <p class="mt-2 text-center text-sm text-casper sm:text-sm">
    {isPhone
      ? 'Check important info for mistakes'
      : 'Turtoshi surfs only through our Academy. Check important info for mistakes.'}
  </p>
</Dialog>
