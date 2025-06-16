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

<div class="h-screen">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, cum distinctio mollitia
    voluptatem, totam eligendi ex nobis fugiat, fuga beatae quia quidem odio et molestiae modi
    repudiandae reprehenderit excepturi illo.
  </p>
  <p class="mb-12">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, cum distinctio mollitia
    voluptatem, totam eligendi ex nobis fugiat, fuga beatae quia quidem odio et molestiae modi
    repudiandae reprehenderit excepturi illo.
  </p>
</div>
<Chatbot />
