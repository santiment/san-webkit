<script>
  import { useAIChatbotCtx } from '$ui/app/AIChatbot/index.js'
  import ChatTrigger from '$ui/app/AIChatbot/variants/dyorDashboard/ChatTrigger.svelte'
  import Chart from '../Chart/index.svelte'

  useAIChatbotCtx.set({
    type: 'DYOR_DASHBOARD',
    context: {
      dashboardId: '1099',
      asset: 'ethereum',
      metrics: [
        'price_usd',
        'social_volume_total',
        'social_dominance_total',
        'sentiment_positive_total',
        'sentiment_negative_total',
      ],
    },
  })
</script>

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
<Chart />
<ChatTrigger />
