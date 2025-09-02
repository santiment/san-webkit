<script lang="ts">
  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'
  import Button from '$ui/core/Button/index.js'

  import { useAIChatbotCtx } from '../../ctx.svelte.js'

  const { device } = useDeviceCtx()
  const { aiChatbot } = useAIChatbotCtx()

  const isPhone = $derived(device.$.isPhone)
</script>

<Button
  variant="border"
  class="ask-ai-button rounded-md px-6 transition-colors"
  onclick={() => aiChatbot.openWithPrompt()}
>
  {isPhone ? 'AI Chat' : 'Chat with AI'}
</Button>

<style lang="postcss">
  :global(.ask-ai-button) {
    background:
      linear-gradient(#fff, #fff) padding-box,
      linear-gradient(90deg, #b0ebdb, #ffe7ca) border-box;
    border: 2px solid transparent;
    display: inline-block;

    &:hover {
      background:
        linear-gradient(#f3f4fa, #f3f4fa) padding-box,
        linear-gradient(90deg, #b0ebdb, #ffe7ca) border-box;
    }
  }
</style>
