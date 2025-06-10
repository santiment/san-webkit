<script>
  import Chatbot from '$ui/app/Chatbot/index.js'
  import { useChatContext } from '$lib/ctx/chat/index.svelte.js'

  useChatContext.set({
    dashboardId: '1099',
    asset: 'ethereum',
    metrics: [
      'price_usd',
      'social_volume_total',
      'social_dominance_total',
      'sentiment_positive_total',
      'sentiment_negative_total',
    ],
  })
</script>

<Chatbot />
