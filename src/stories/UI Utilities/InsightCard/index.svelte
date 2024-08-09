<script>
  import InsightCard from '$ui/app/InsightCard/InsightCard.svelte'

  const insight = {
    commentsCount: 12,
    id: 16507,
    isPro: false,
    isPulse: true,
    publishedAt: '2024-05-07T10:00:20Z',
    pulseText:
      '<p class="md-block-unstyled"><br /></p><p class="md-block-unstyled"><br /></p><p class="md-block-unstyled">Assets: <a class="md-inline-link" href="http://?emsg=1&amp;slug=bitcoin&amp;ticker=BTC" target="_blank">$BTC</a>, <a class="md-inline-link" href="http://?emsg=1&amp;slug=ethereum&amp;ticker=ETH" target="_blank">$ETH</a></p><p class="md-block-unstyled"><br /></p><figure class="md-block-iframe"><iframe src="https://embed.santiment.net/chart?ps=bitcoin&amp;pt=BTC&amp;df=2023-11-07T22%3A59%3A59.097Z&amp;dt=2024-05-07T21%3A59%3A59.097Z&amp;emcg=1&amp;wm=price_usd&amp;wax=0&amp;wc=%2326C953"></iframe><figcaption class="md-block-image-caption"></figcaption></figure>',
    tags: [{ name: 'text example' }, { name: 'btc' }, { name: 'eth' }],
    title: 'Dynamic embed test',
    user: {
      avatarUrl: null,
      id: '113',
      username: 'test2',
    },
    votedAt: null,
    votes: {
      currentUserVotes: 52,
      totalVotes: 0,
      userVotes: 0,
    },
  }
</script>

<div class="max-w-3xl p-6">
  <InsightCard {insight} />
</div>
