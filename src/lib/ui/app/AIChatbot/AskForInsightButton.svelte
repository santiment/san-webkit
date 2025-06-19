<script lang="ts">
  import Button from '$ui/core/Button/Button.svelte'

  import { useAIChatbotCtx } from './ctx.svelte.js'

  type TProps = {
    slug: string
    explanation: string
  }

  const aiChatbot = useAIChatbotCtx.get()

  const { slug, explanation }: TProps = $props()

  const prompt = $derived(`
Given the following information:
— Trending word: [${slug}]
— Description for the user: [${explanation}]

Please:
1. Analyze why this event is important for the crypto market.
2. Describe short-term and long-term consequences for the market as a whole and for investors, specifically.
3. Highlight possible positive and negative scenarios.
4. Suggest how Sanbase users can apply these insights in their decision-making.
  `)
</script>

<Button
  class="mt-2.5 rounded-full bg-white px-2.5 py-1.5 text-sm hover:border-green-hover"
  variant="border"
  onclick={() => aiChatbot.sendMessage(prompt)}
>
  🤖 Ask AI for more insights
</Button>
