<script lang="ts">
  import { useDeviceCtx } from '../../../../../ctx/device/index.svelte.js'
  import Button from '../../../../core/Button/index.js'

  import { useAIChatbotCtx } from '../../ctx.svelte.js'

  const { aiChatbot } = useAIChatbotCtx()
  const { device } = useDeviceCtx()

  const isPhone = $derived(device.$.isPhone)
</script>

<Button
  variant="border"
  class="ask-ai-academy-button rounded-md border-2 border-transparent px-6 transition-colors md:px-4 sm:px-6"
  onclick={() => aiChatbot.openWithPrompt()}
>
  {isPhone ? 'AI Chat' : 'Chat with AI'}
</Button>

<style>
  :global(.ask-ai-academy-button) {
    background:
      linear-gradient(#fff, #fff) padding-box,
      linear-gradient(90deg, #b0ebdb, #ffe7ca) border-box;

    &:hover {
      background:
        linear-gradient(#f3f4fa, #f3f4fa) padding-box,
        linear-gradient(90deg, #b0ebdb, #ffe7ca) border-box;
    }
  }
</style>
