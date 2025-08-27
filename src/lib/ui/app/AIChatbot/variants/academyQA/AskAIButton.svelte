<script lang="ts">
  import Button from '$ui/core/Button/index.js'

  import { useAIChatbotCtx } from '../../ctx.svelte.js'

  const { aiChatbot } = useAIChatbotCtx()
</script>

<Button variant="border" onclick={() => aiChatbot.openWithPrompt()}>Chat with AI</Button>
